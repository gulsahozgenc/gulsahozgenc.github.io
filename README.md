# gulsahozgenc.com

Klinik Nöropsikolog **Gülşah Özgenç** kişisel portfolyo sitesi.

## Stack

- [Eleventy (11ty)](https://www.11ty.dev/) - statik site jeneratörü
- [Tailwind CSS](https://tailwindcss.com/) (PostCSS)
- Nunjucks templating
- GitHub Pages (özel domain: `gulsahozgenc.com`)

## Geliştirme

```bash
npm install
npm run dev
```

`http://localhost:8080` adresinde açılır. CSS ve 11ty paralel olarak izlenir.

## Production build

```bash
npm run build
```

Çıktı `_site/` dizinine yazılır. GitHub Actions bu dizini Pages'a yükler.

## Klasör

```
src/
  _data/         site, nav, papers
  _includes/     layouts ve partials
  assets/        css, img
  index.njk      ana sayfa
  404.njk        hata sayfası
.eleventy.js     11ty config
tailwind.config  renk paleti & tipografi
```

## İçerik düzenleme

- **Site bilgisi**: `src/_data/site.json`
- **Navigasyon**: `src/_data/nav.json`
- **Akademik yayınlar**: `src/_data/papers.json`
- **Portre**: `src/assets/img/portrait.jpg`

## Form

`src/_data/site.json` içinde `form.formspreeId` alanına Formspree form id'si yazılır. Alternatif olarak `form.typeformId` doldurulduğunda iletişim bölümü Typeform embed olarak render edilir.

## Deploy

`main` branch'a push edildiğinde GitHub Actions otomatik build ve deploy yapar. Pages ayarlarında `Source: GitHub Actions` seçili olmalıdır.

---

## Kod yazmadan içerik düzenleme (Editör Rehberi)

Site içeriği `Pages CMS` üzerinden tarayıcıdan düzenlenir. Hiçbir kod, terminal veya git bilgisi gerekmez.

### İlk kurulum (bir kerelik, repo sahibi yapar)

1. https://app.pagescms.org adresine git, **Sign in with GitHub** ile giriş yap.
2. Pages CMS'e bu repoya erişim izni ver:
   - **Configure GitHub App** → sadece `gulsahozgenc.github.io` reposunu seç → **Save**.
3. Pages CMS panelinde repo otomatik listelenir, üzerine tıkla.

### Günlük kullanım

1. https://app.pagescms.org adresine gir, GitHub ile login ol.
2. `gulsahozgenc.github.io` reposunu seç.
3. Sol menüde üç bölüm görünür:

   | Bölüm | Ne için |
   |---|---|
   | **Site Ayarları** | Site adı, slogan, e-posta, sosyal linkler, Formspree id, bülten metni |
   | **Akademik Yayınlar** | Makale, konferans, kitap bölümü kartları (sürükle-bırak sıralama, ekleme/silme/düzenleme) |
   | **Üst Menü** | Navigasyon menüsündeki başlıklar |
   | **Görseller** (Media) | Portre ve diğer görseller (sürükle-bırak yükleme) |

4. Form alanlarını doldur, **Save** bas.
5. Pages CMS otomatik commit atar, GitHub Actions build başlar, **2-3 dakika içinde** site güncellenir (`gulsahozgenc.com`).

### Yeni yayın eklemek

1. Sol menü → **Akademik Yayınlar** → **Add entry**
2. Başlık, tür, yıl, özet, link doldur. İkon seç.
3. **Save**.

### Portre fotoğrafını değiştirmek

1. Sol menü → **Görseller**.
2. Eski `portrait.jpg`'yi sil (varsa).
3. Yeni fotoğrafı `portrait.jpg` adıyla yükle (4:5 oranı önerilir).
4. **Save**.

### Notlar

- Tüm değişiklikler git geçmişine işlenir; yanlış değişiklik geri alınabilir.
- Aynı anda iki kişi düzenlerse Pages CMS otomatik merge dener; çakışma olursa son düzenleyenin uyarı alır.
- E-posta veya Formspree id değiştirilince site otomatik yeniden build olur.
