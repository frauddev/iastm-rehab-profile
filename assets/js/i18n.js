let currentLang = "en"

async function loadLanguage(lang) {
  const res = await fetch(`locales/${lang}.json`)
  const data = await res.json()

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n")
    el.textContent = data[key]
  })

  currentLang = lang
}

document.querySelectorAll("[data-lang]").forEach(btn => {
  btn.addEventListener("click", () => {
    loadLanguage(btn.dataset.lang)
  })
})

// Auto load English
loadLanguage("en")