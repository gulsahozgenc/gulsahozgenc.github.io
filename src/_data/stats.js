// Ana sayfadaki üç istatistik, cv.json'dan hesaplanır. home.json'daki "value" doluysa o kullanılır.
const cv = require("./cv.json");

const MONTHS = { ocak: 1, şubat: 2, mart: 3, nisan: 4, mayıs: 5, haziran: 6, temmuz: 7, ağustos: 8, eylül: 9, ekim: 10, kasım: 11, aralık: 12 };

function items(keyword) {
  const s = cv.sections.find(sec => sec.title.toLocaleLowerCase("tr").includes(keyword));
  return s ? s.items : [];
}

function startDate(year) {
  const m = String(year).toLocaleLowerCase("tr").match(/(ocak|şubat|mart|nisan|mayıs|haziran|temmuz|ağustos|eylül|ekim|kasım|aralık)?\s*(\d{4})/);
  if (!m) return null;
  return new Date(Number(m[2]), m[1] ? MONTHS[m[1]] - 1 : 0, 1);
}

const clinical = items("klinik deneyim");
const trainings = items("sertifika");

const starts = clinical
  .filter(i => !/stajyer/i.test(i.title))
  .map(i => startDate(i.year))
  .filter(Boolean);
const first = starts.length ? new Date(Math.min(...starts)) : null;
const years = first ? Math.floor((Date.now() - first) / (365.25 * 24 * 3600 * 1000)) : 0;

module.exports = {
  years: years ? years + "+" : "",
  trainings: trainings.length ? String(trainings.length) : "",
  institutions: String(new Set(clinical.map(i => i.institution)).size)
};
