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
