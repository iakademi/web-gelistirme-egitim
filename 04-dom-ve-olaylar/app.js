// ==========================================================
// Görev listesi uygulaması - DOM ve olay yönetimi
// ==========================================================

// 1) Elemanları seç
const form = document.querySelector("#gorev-formu");
const girdi = document.querySelector("#gorev-girdisi");
const liste = document.querySelector("#gorev-listesi");
const sayac = document.querySelector("#sayac");

const DEPO_ANAHTARI = "gorevler";

// 2) Durum (state): görevleri bir dizide tutuyoruz
let gorevler = depodanOku();

// localStorage'dan görevleri oku; hata olursa boş liste döndür
function depodanOku() {
  try {
    return JSON.parse(localStorage.getItem(DEPO_ANAHTARI)) ?? [];
  } catch {
    return [];
  }
}

function depoyaYaz() {
  localStorage.setItem(DEPO_ANAHTARI, JSON.stringify(gorevler));
}

// 3) Listeyi ekrana çiz
function ciz() {
  liste.innerHTML = ""; // önce temizle

  gorevler.forEach((gorev) => {
    const li = document.createElement("li");
    li.dataset.id = gorev.id; // data-id özniteliği
    li.classList.toggle("tamamlandi", gorev.tamam);

    const metin = document.createElement("span");
    // textContent kullanmak, kullanıcı girdisinden kaynaklı HTML enjeksiyonunu önler
    metin.textContent = gorev.metin;

    const silDugmesi = document.createElement("button");
    silDugmesi.textContent = "Sil";
    silDugmesi.dataset.islem = "sil";

    li.append(metin, silDugmesi);
    liste.appendChild(li);
  });

  const kalan = gorevler.filter((g) => !g.tamam).length;
  sayac.textContent = `${gorevler.length} görev, ${kalan} tanesi bekliyor`;
}

// 4) Form gönderildiğinde yeni görev ekle
form.addEventListener("submit", (olay) => {
  olay.preventDefault(); // sayfanın yeniden yüklenmesini engelle

  const metin = girdi.value.trim();
  if (metin === "") return;

  gorevler.push({ id: Date.now(), metin, tamam: false });
  depoyaYaz();
  ciz();

  form.reset();
  girdi.focus();
});

// 5) Olay delegasyonu: tek dinleyici ile tüm liste elemanlarını yönet
liste.addEventListener("click", (olay) => {
  const li = olay.target.closest("li");
  if (!li) return;
  const id = Number(li.dataset.id);

  if (olay.target.dataset.islem === "sil") {
    gorevler = gorevler.filter((g) => g.id !== id);
  } else {
    // Metne tıklanınca tamamlandı durumunu değiştir
    const gorev = gorevler.find((g) => g.id === id);
    if (gorev) gorev.tamam = !gorev.tamam;
  }

  depoyaYaz();
  ciz();
});

// 6) İlk çizim
ciz();
