# Web Geliştirme Eğitimi

![Lisans: MIT](https://img.shields.io/badge/Lisans-MIT-green)
![HTML5](https://img.shields.io/badge/HTML-5-E34F26)
![CSS3](https://img.shields.io/badge/CSS-3-1572B6)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E)
![Dil](https://img.shields.io/badge/Dil-T%C3%BCrk%C3%A7e-blue)

HTML, CSS ve JavaScript öğrenmek isteyenler için Türkçe açıklamalı, çalıştırılabilir örnek kodlar ve küçük bir bitirme projesi.

## Hakkında

Bu depo, web geliştirmenin temel üç teknolojisini adım adım ilerleyen bölümlerle sunar. Her klasör bir konuyu işler; kodlar tarayıcıda doğrudan açılabilir ve Türkçe yorum satırlarıyla açıklanmıştır. Son bölümde öğrendiklerinizi birleştiren, `courses.json` dosyasından örnek kurs listesi gösteren küçük bir statik site bulunur.

## İçindekiler

| Klasör | Konu |
| --- | --- |
| [01-html-temelleri](01-html-temelleri/) | Anlamsal etiketler, liste, tablo, form |
| [02-css-ve-flexbox-grid](02-css-ve-flexbox-grid/) | Seçiciler, kutu modeli, Flexbox ve CSS Grid |
| [03-javascript-temelleri](03-javascript-temelleri/) | Değişkenler, fonksiyonlar, diziler, nesneler |
| [04-dom-ve-olaylar](04-dom-ve-olaylar/) | DOM seçimi, olay dinleme, dinamik içerik |
| [05-fetch-api](05-fetch-api/) | `fetch`, `async/await`, hata yönetimi |
| [proje-kurs-katalogu](proje-kurs-katalogu/) | Arama ve filtreleme yapan örnek kurs kataloğu |

## Başlarken

1. Depoyu klonlayın:
   ```bash
   git clone https://github.com/iakademi/web-gelistirme-egitim.git
   cd web-gelistirme-egitim
   ```
2. Bir kod düzenleyici açın (örneğin Visual Studio Code).
3. HTML dosyalarını çift tıklayarak tarayıcıda açabilirsiniz.
4. `fetch` kullanan bölümler (`05-fetch-api` ve `proje-kurs-katalogu`) için yerel bir web sunucusu gerekir:
   ```bash
   python -m http.server 8000
   ```
   Ardından tarayıcıda `http://localhost:8000` adresine gidin.

## Klasör Yapısı

```text
web-gelistirme-egitim/
├── 01-html-temelleri/
│   ├── README.md
│   └── index.html
├── 02-css-ve-flexbox-grid/
│   ├── README.md
│   ├── stil.css
│   ├── flexbox.html
│   └── grid.html
├── 03-javascript-temelleri/
│   ├── README.md
│   ├── temeller.js
│   └── diziler-ve-nesneler.js
├── 04-dom-ve-olaylar/
│   ├── README.md
│   ├── index.html
│   └── app.js
├── 05-fetch-api/
│   ├── README.md
│   ├── index.html
│   └── fetch-ornek.js
├── proje-kurs-katalogu/
│   ├── README.md
│   ├── index.html
│   ├── style.css
│   ├── app.js
│   └── courses.json
├── LICENSE
└── README.md
```

## Katkıda Bulunma

Hata bildirimi ve iyileştirme önerileri için Issue açabilir, değişiklik önermek için şu adımları izleyebilirsiniz:

1. Depoyu fork edin.
2. Yeni bir dal oluşturun: `git checkout -b ozellik/aciklayici-ad`
3. Değişikliklerinizi commit edin ve dalınızı gönderin.
4. Bir Pull Request açın.

Kod yorumlarını Türkçe, dosya adlarını ASCII karakterlerle yazmaya özen gösterin.

## Lisans

Bu proje [MIT Lisansı](LICENSE) ile sunulmaktadır.

## İ-Akademi Hakkında

İ-Akademi, İstanbul merkezli bir bilgi teknolojileri eğitim merkezidir; Microsoft/Office/Power Platform, Cisco, siber güvenlik, yazılım, PMP/Scrum eğitimleri sunar ve Pearson VUE ile Kryterion sınav merkezi olarak hizmet verir. Daha fazla bilgi için: [https://iakademi.com](https://iakademi.com)
