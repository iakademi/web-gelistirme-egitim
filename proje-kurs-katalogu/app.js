// ==========================================================
// Kurs Kataloğu - uygulama mantığı
// ==========================================================

const aramaKutusu = document.querySelector("#arama");
const kategoriSecimi = document.querySelector("#kategori");
const siralamaSecimi = document.querySelector("#siralama");
const listeAlani = document.querySelector("#kurs-listesi");
const bilgiAlani = document.querySelector("#sonuc-bilgisi");

let tumKurslar = []; // JSON'dan gelen tüm kayıtlar

// Türkçe karakterleri de hesaba katan küçük harfe çevirme (İ/ı sorunu için)
const kucult = (metin) => metin.toLocaleLowerCase("tr");

// 1) Veriyi çek
async function kurslariYukle() {
  try {
    const yanit = await fetch("courses.json");
    if (!yanit.ok) throw new Error(`HTTP ${yanit.status}`);
    tumKurslar = await yanit.json();

    kategorileriDoldur();
    goster();
  } catch (hata) {
    bilgiAlani.textContent =
      "Kurs verisi yüklenemedi. Sayfayı bir yerel sunucu üzerinden açtığınızdan emin olun.";
    console.error("Yükleme hatası:", hata);
  }
}

// 2) Kategori açılır listesini veriden üret
function kategorileriDoldur() {
  const kategoriler = [...new Set(tumKurslar.map((k) => k.kategori))]
    .sort((a, b) => a.localeCompare(b, "tr"));

  kategoriler.forEach((kategori) => {
    const secenek = document.createElement("option");
    secenek.value = kategori;
    secenek.textContent = kategori;
    kategoriSecimi.appendChild(secenek);
  });
}

// 3) Filtre ve sıralamayı uygula
function filtrele() {
  const aranan = kucult(aramaKutusu.value.trim());
  const kategori = kategoriSecimi.value;

  let sonuc = tumKurslar.filter((kurs) => {
    const metinUyar =
      aranan === "" ||
      kucult(kurs.ad).includes(aranan) ||
      kucult(kurs.aciklama).includes(aranan);
    const kategoriUyar = kategori === "" || kurs.kategori === kategori;
    return metinUyar && kategoriUyar;
  });

  switch (siralamaSecimi.value) {
    case "sure-artan":
      sonuc.sort((a, b) => a.sureSaat - b.sureSaat);
      break;
    case "sure-azalan":
      sonuc.sort((a, b) => b.sureSaat - a.sureSaat);
      break;
    default:
      sonuc.sort((a, b) => a.ad.localeCompare(b.ad, "tr"));
  }
  return sonuc;
}

// 4) Bir kurs için kart elemanı oluştur
function kartOlustur(kurs) {
  const kart = document.createElement("article");
  kart.className = "kart";

  const baslik = document.createElement("h2");
  baslik.textContent = kurs.ad;

  const aciklama = document.createElement("p");
  aciklama.textContent = kurs.aciklama;

  const etiketler = document.createElement("div");
  etiketler.className = "etiketler";
  [kurs.kategori, kurs.seviye, `${kurs.sureSaat} saat`].forEach((metin) => {
    const e = document.createElement("span");
    e.className = "etiket";
    e.textContent = metin;
    etiketler.appendChild(e);
  });

  kart.append(baslik, aciklama, etiketler);
  return kart;
}

// 5) Ekrana çiz
function goster() {
  const sonuc = filtrele();
  listeAlani.replaceChildren(); // eski kartları temizle

  if (sonuc.length === 0) {
    const bos = document.createElement("p");
    bos.className = "bos";
    bos.textContent = "Aramanıza uygun kurs bulunamadı.";
    listeAlani.appendChild(bos);
  } else {
    sonuc.forEach((kurs) => listeAlani.appendChild(kartOlustur(kurs)));
  }
  bilgiAlani.textContent = `${sonuc.length} / ${tumKurslar.length} kurs gösteriliyor`;
}

// 6) Olayları bağla
aramaKutusu.addEventListener("input", goster);
kategoriSecimi.addEventListener("change", goster);
siralamaSecimi.addEventListener("change", goster);

kurslariYukle();
