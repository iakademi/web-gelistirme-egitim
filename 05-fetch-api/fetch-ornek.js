// ==========================================================
// Fetch API örnekleri
// ==========================================================

const API = "https://jsonplaceholder.typicode.com";

const durum = document.querySelector("#durum");
const listeAlani = document.querySelector("#sonuc-listesi");
const jsonAlani = document.querySelector("#sonuc-json");

function durumYaz(mesaj, hata = false) {
  durum.textContent = mesaj;
  durum.classList.toggle("hata", hata);
}

// Ortak yardımcı: zaman aşımı + HTTP hata kontrolü + JSON ayrıştırma
async function jsonGetir(url, secenekler = {}, zamanAsimiMs = 8000) {
  const kontrolcu = new AbortController();
  const zamanlayici = setTimeout(() => kontrolcu.abort(), zamanAsimiMs);

  try {
    const yanit = await fetch(url, { ...secenekler, signal: kontrolcu.signal });

    // fetch, 404/500 gibi durumlarda hata FIRLATMAZ; yanit.ok kontrolü gerekir
    if (!yanit.ok) {
      throw new Error(`Sunucu hatası: ${yanit.status} ${yanit.statusText}`);
    }
    return await yanit.json();
  } catch (hata) {
    if (hata.name === "AbortError") {
      throw new Error("İstek zaman aşımına uğradı");
    }
    throw hata;
  } finally {
    clearTimeout(zamanlayici);
  }
}

// 1) GET: gönderi listesini çek ve ekrana yaz
async function gonderileriListele() {
  durumYaz("Yükleniyor...");
  listeAlani.innerHTML = "";
  jsonAlani.hidden = true;

  try {
    const gonderiler = await jsonGetir(`${API}/posts?_limit=5`);

    gonderiler.forEach((g) => {
      const li = document.createElement("li");
      li.textContent = `#${g.id} - ${g.title}`;
      listeAlani.appendChild(li);
    });
    durumYaz(`${gonderiler.length} gönderi yüklendi`);
  } catch (hata) {
    durumYaz(`Hata: ${hata.message}`, true);
  }
}

// 2) POST: JSON gövdeli yeni kayıt gönder
async function gonderiYolla() {
  durumYaz("Gönderiliyor...");
  listeAlani.innerHTML = "";

  try {
    const yeni = await jsonGetir(`${API}/posts`, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify({
        title: "Örnek başlık",
        body: "Fetch ile gönderilen örnek içerik",
        userId: 1
      })
    });

    jsonAlani.textContent = JSON.stringify(yeni, null, 2);
    jsonAlani.hidden = false;
    durumYaz("Kayıt başarıyla oluşturuldu (deneme servisi, kalıcı değildir)");
  } catch (hata) {
    durumYaz(`Hata: ${hata.message}`, true);
  }
}

// 3) Paralel istekler: birden fazla kaynağı aynı anda çek
async function paralelOrnek() {
  const [kullanici, gonderi] = await Promise.all([
    jsonGetir(`${API}/users/1`),
    jsonGetir(`${API}/posts/1`)
  ]);
  console.log(kullanici.name, "-", gonderi.title);
}

document.querySelector("#btn-liste").addEventListener("click", gonderileriListele);
document.querySelector("#btn-gonder").addEventListener("click", gonderiYolla);

// Konsoldan deneyebilmek için: paralelOrnek();
window.paralelOrnek = paralelOrnek;
