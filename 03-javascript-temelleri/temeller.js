// ==========================================================
// JavaScript Temelleri
// Çalıştırmak için: node temeller.js
// ==========================================================

// ---------- Değişkenler ----------
const okulAdi = "İ-Akademi Örnek";   // const: yeniden atanamaz
let ogrenciSayisi = 12;              // let: yeniden atanabilir
ogrenciSayisi += 3;
console.log(`${okulAdi} - Katılımcı sayısı: ${ogrenciSayisi}`);

// ---------- Veri türleri ----------
console.log(typeof "metin");     // string
console.log(typeof 42);          // number
console.log(typeof true);        // boolean
console.log(typeof undefined);   // undefined
console.log(typeof null);        // object (dilin bilinen tuhaflığı)
console.log(typeof {});          // object

// Eşitlik: === tür kontrolü de yapar, her zaman tercih edin
console.log(5 == "5");   // true
console.log(5 === "5");  // false

// ---------- Koşullar ----------
function notDegerlendir(not) {
  if (not >= 90) return "Pekiyi";
  else if (not >= 70) return "İyi";
  else if (not >= 50) return "Orta";
  return "Yetersiz";
}
console.log(notDegerlendir(85)); // İyi

// Üçlü operatör ve ?? (null birleştirme) operatörü
const yas = 20;
console.log(yas >= 18 ? "Yetişkin" : "Reşit değil");
const kullaniciAdi = null;
console.log(kullaniciAdi ?? "Misafir"); // Misafir

// ---------- Döngüler ----------
for (let i = 1; i <= 3; i++) {
  console.log(`for döngüsü: ${i}`);
}

let sayac = 3;
while (sayac > 0) {
  console.log(`geri sayım: ${sayac}`);
  sayac--;
}

// ---------- Fonksiyonlar ----------
// Klasik tanım
function topla(a, b) {
  return a + b;
}

// Ok fonksiyonu ve varsayılan parametre
const selamla = (ad = "Misafir") => `Merhaba, ${ad}!`;

// Rest parametresi: istenen sayıda argüman
const ortalama = (...sayilar) =>
  sayilar.length === 0 ? 0 : sayilar.reduce((t, s) => t + s, 0) / sayilar.length;

console.log(topla(2, 3));          // 5
console.log(selamla());            // Merhaba, Misafir!
console.log(selamla("Ayşe"));      // Merhaba, Ayşe!
console.log(ortalama(70, 80, 90)); // 80

// ---------- Kapsam ve closure ----------
function sayacOlustur() {
  let deger = 0; // dışarıdan erişilemez, yalnızca döndürülen fonksiyon görür
  return () => ++deger;
}
const artir = sayacOlustur();
artir();
console.log(artir()); // 2

// ---------- Hata yakalama ----------
function bol(a, b) {
  if (b === 0) throw new Error("Sıfıra bölme yapılamaz");
  return a / b;
}
try {
  console.log(bol(10, 2)); // 5
  console.log(bol(1, 0));
} catch (hata) {
  console.error("Hata yakalandı:", hata.message);
} finally {
  console.log("İşlem tamamlandı");
}
