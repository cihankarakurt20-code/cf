# CF — Kişisel Gelir & Gider

Telefonda uygulama gibi çalışan, GitHub Pages üzerinden yayınlanan kişisel bütçe uygulaması.

## Özellikler
- **Ana Sayfa:** Aylık net bakiye, gelir/gider halkası, "Bu ayın hareketleri" kutusu (dokununca tüm kayıtlar)
- **Gelir kategorileri:** Maaş, Telif, Diğer · **Gider kategorileri:** Kira, KK, Finansman, Borç
- **Düzenli gelir & giderler:** Gelir veya gider eklerken "Her ay" seç. Süresiz, belirli bir aya kadar ya da taksit sayısı kadar sürebilir. Her ay kendiliğinden ilgili aya eklenir.
  - Bir aydaki kayda dokunup **Sadece o ay** tutarını değiştirebilir veya o ayı atlayabilirsin (ör. ikramiye, ödenmeyen ay)
  - **Bu aydan itibaren** ile zam/indirim yapabilir ya da kaydı sonlandırabilirsin; geçmiş aylar değişmez
  - Ana sayfadaki "Düzenli gelir & giderler" kartından hepsini görebilirsin
- **Borçlar / Alacaklar:** Kime/kimden, son ödeme / alacak tarihi, kalan gün, toplamlar
- **Abonelikler:** Aylık ve yıllık toplam
- **Kartlar:** Aylık ekstreler ve toplamı
- Çevrimdışı çalışır, veriler telefonda saklanır, yedek indirme/yükleme vardır (sol üstteki ⠿ menüsü)

## GitHub Pages'te yayınlama
1. github.com'da yeni bir repo aç (ör. `cf`). Ücretsiz hesapta Pages için repo **Public** olmalı. Verilerin repoda değil telefonunda durur, yani public repo verilerini göstermez.
2. **Add file → Upload files** ile bu klasördeki her şeyi (`index.html`, `manifest.webmanifest`, `sw.js`, `icons/`, `fonts/`) yükle → **Commit changes**.
3. **Settings → Pages → Build and deployment → Source: Deploy from a branch**, Branch: `main`, klasör: `/ (root)` → **Save**.
4. 1–2 dakika sonra adres hazır olur: `https://KULLANICI-ADIN.github.io/cf/`

## Telefona kurma
- **iPhone:** Adresi Safari'de aç → Paylaş → **Ana Ekrana Ekle**
- **Android:** Chrome'da aç → ⋮ → **Uygulamayı yükle** / **Ana ekrana ekle**

## Güncelleme
Dosyaları değiştirip yeniden yüklediğinde `sw.js` içindeki `VERSION` değerini artır (ör. `cf-v3`), böylece telefon yeni sürümü alır.
