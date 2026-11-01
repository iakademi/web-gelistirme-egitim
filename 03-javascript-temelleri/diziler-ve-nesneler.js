// ==========================================================
// Diziler ve Nesneler
// Çalıştırmak için: node diziler-ve-nesneler.js
// ==========================================================

// Örnek veri: kurs nesnelerinden oluşan dizi
const kurslar = [
  { ad: "Excel Temel", kategori: "Office", saat: 16, aktif: true },
  { ad: "Power BI", kategori: "Veri", saat: 24, aktif: true },
  { ad: "Python Giriş", kategori: "Yazılım", saat: 32, aktif: false },
  { ad: "Power Automate", kategori: "Power Platform", saat: 16, aktif: true }
];

// ---------- map: her elemanı dönüştür ----------
const adlar = kurslar.map((k) => k.ad);
console.log(adlar); // ["Excel Temel", "Power BI", ...]

// ---------- filter: koşula uyanları seç ----------
const aktifKurslar = kurslar.filter((k) => k.aktif);
console.log(aktifKurslar.length); // 3

// ---------- reduce: tek bir değere indirge ----------
const toplamSaat = kurslar.reduce((toplam, k) => toplam + k.saat, 0);
console.log(`Toplam süre: ${toplamSaat} saat`);

// ---------- find / some / every ----------
console.log(kurslar.find((k) => k.ad === "Power BI")); // ilk eşleşen nesne
console.log(kurslar.some((k) => !k.aktif));            // true
console.log(kurslar.every((k) => k.saat >= 16));       // true

// ---------- sort: orijinal diziyi bozmamak için kopya al ----------
const saateGore = [...kurslar].sort((a, b) => a.saat - b.saat);
console.log(saateGore.map((k) => `${k.ad} (${k.saat})`));

// Türkçe karakterlere duyarlı alfabetik sıralama
const alfabetik = [...kurslar].sort((a, b) => a.ad.localeCompare(b.ad, "tr"));
console.log(alfabetik.map((k) => k.ad));

// ---------- Gruplama (reduce ile) ----------
const kategoriyeGore = kurslar.reduce((grup, k) => {
  (grup[k.kategori] ??= []).push(k.ad);
  return grup;
}, {});
console.log(kategoriyeGore);

// ---------- Nesne işlemleri ----------
const ogrenci = { ad: "Mehmet", yas: 28, sehir: "İstanbul" };

// Destructuring: değerleri değişkenlere ayır
const { ad, sehir } = ogrenci;
console.log(`${ad} - ${sehir}`);

// Spread: nesneyi kopyala ve alan ekle/güncelle
const guncel = { ...ogrenci, yas: 29, bolum: "Veri" };
console.log(guncel);

// Nesne anahtarları ve değerleri
console.log(Object.keys(ogrenci));    // ["ad", "yas", "sehir"]
console.log(Object.entries(ogrenci)); // [["ad","Mehmet"], ...]

// Opsiyonel zincirleme: olmayan alana güvenle eriş
console.log(ogrenci.adres?.sokak ?? "Adres bilgisi yok");

// ---------- JSON dönüşümleri ----------
const metin = JSON.stringify(kurslar[0]);
console.log(metin);               // {"ad":"Excel Temel",...}
console.log(JSON.parse(metin).ad); // Excel Temel
