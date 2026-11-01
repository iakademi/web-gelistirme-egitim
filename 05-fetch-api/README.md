# 05 - Fetch API

`fetch`, tarayıcıdan HTTP istekleri göndermenin modern yoludur. Bu bölümde GET ve POST istekleri, `async/await` ve hata yönetimi uygulanır.

## Dosyalar

| Dosya | Açıklama |
| --- | --- |
| `index.html` | Sonuçların gösterildiği basit arayüz |
| `fetch-ornek.js` | Liste çekme, tek kayıt çekme, POST ile kayıt gönderme, zaman aşımı ve hata yönetimi |

## Not

Örnekler, herkese açık deneme servisi olan `jsonplaceholder.typicode.com` adresini kullanır; bu servis gerçek veri kaydetmez. İnternet bağlantısı gerekir.

Dosyayı doğrudan açabilir veya yerel sunucu ile çalıştırabilirsiniz:

```bash
python -m http.server 8000
```
