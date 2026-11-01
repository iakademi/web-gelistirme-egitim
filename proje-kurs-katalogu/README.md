# Proje: Kurs Kataloğu

Önceki bölümlerde öğrenilenleri birleştiren küçük bir statik site. `courses.json` dosyasındaki **örnek** kurs verilerini `fetch` ile okur; arama, kategori filtresi ve sıralama sunar.

> Dosyadaki kurs adları, süreler ve açıklamalar yalnızca gösterim amaçlı örnek verilerdir; gerçek bir eğitim programını yansıtmaz.

## Dosyalar

| Dosya | Açıklama |
| --- | --- |
| `index.html` | Sayfa iskeleti, arama kutusu, filtre ve sıralama alanları |
| `style.css` | CSS Grid ile duyarlı kart tasarımı, açık/koyu renk desteği |
| `app.js` | Veriyi çekme, filtreleme, sıralama ve kartları çizme |
| `courses.json` | Örnek kurs verisi |

## Çalıştırma

`fetch` yerel dosya (`file://`) üzerinden çalışmadığı için küçük bir sunucu başlatın:

```bash
cd proje-kurs-katalogu
python -m http.server 8000
```

Tarayıcıda `http://localhost:8000` adresini açın.

## Geliştirme Fikirleri

- Kartlara "favorilere ekle" düğmesi koymak ve `localStorage`'da saklamak
- Seviye filtresi eklemek
- Kurs detayı için bir modal pencere oluşturmak
