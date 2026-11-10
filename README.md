# CF — Kişisel Gelir & Gider · Kasa

Telefonda uygulama gibi çalışan, GitHub Pages üzerinden yayınlanan kişisel bütçe uygulaması.

## Kasa nasıl çalışır?
- **Kasa** = başlangıçta girdiğin gerçek tutar + "Aldım" dediğin gelirler − "Ödedim" dediğin ödemeler.
- Planlanan gelirler "Bekleyen gelirler"de durur; kasaya **sen "Aldım" deyince** girer.
- Tüm ödemeler (düzenli giderler, tek seferlik giderler, borç ödemeleri, kart ekstreleri) **"Ödedim" deyince** kasadan düşer. Alacak tahsil edilince kasaya girer.
- **Abonelikler kasayı etkilemez**; kart ekstresinin içinde ödendikleri için ayrıca sayılmazlar.
- Borçlarda ve kart ekstrelerinde kısmi ödeme yapılabilir; kalan tutar takip edilir.
- Yanlışlıkla işaretlediğin bir şeyi yuvarlağa tekrar dokunarak ya da bildirimdeki "Geri al" ile geri alabilirsin.
- Menüdeki **Kasayı düzelt** ile kasayı her zaman gerçek tutara eşitleyebilirsin.

## Diğer özellikler
- Gelir kategorileri: Maaş, Telif, Diğer · Gider kategorileri: Kira, KK, Finansman, Borç, KMH
- Düzenli (her ay) kayıtlar: süresiz, bitiş ayına kadar veya taksitli; tek ay ya da "bu aydan itibaren" düzenleme
- Borçlar / Alacaklar, Abonelikler (aylık-yıllık toplam), Kartlar (aylık ekstreler)
- Sağ alttaki **+** bulunduğun sekmeye göre kayıt ekler
- Çevrimdışı çalışır; veriler telefonda saklanır; yedek indirme/yükleme (menü)

## Başlangıç verileri
`veriler.js` dosyası ekran görüntülerinden ve Sincap Ekim/Kasım 2026 raporlarından aktarılan abonelik, borç ve gelir/gider kayıtlarını içerir. Uygulama ilk açılışta bunları **bir kez** ekler; aynı kayıt zaten varsa atlar, sonradan sildiğin kayıtları geri getirmez.
⚠️ Repo herkese açıksa bu dosyadaki bilgiler (kişi adları, tutarlar) de herkese açık olur. Verileri telefonuna aldıktan sonra `veriler.js` dosyasını repodan silebilirsin; uygulama çalışmaya devam eder.

## GitHub Pages'te yayınlama
1. github.com'da bir repo aç (ör. `cf`). Ücretsiz hesapta Pages için repo **Public** olmalı. Verilerin repoda değil telefonunda durur.
2. **Add file → Upload files** ile bu klasördeki her şeyi (`index.html`, `manifest.webmanifest`, `sw.js`, `icons/`, `fonts/`) yükle → **Commit changes**. Eski `fonts/outfit-…` dosyaları repoda kalsa da sorun olmaz, istersen silebilirsin.
3. **Settings → Pages → Source: Deploy from a branch**, Branch: `main`, klasör: `/ (root)` → **Save**.
4. Adres: `https://KULLANICI-ADIN.github.io/cf/`

## Telefona kurma
- **iPhone:** Safari → Paylaş → **Ana Ekrana Ekle**
- **Android:** Chrome → ⋮ → **Uygulamayı yükle**

## Güncelleme
Dosyaları değiştirip yeniden yüklediğinde `sw.js` içindeki `VERSION` değerini artır (ör. `cf-v6`).
