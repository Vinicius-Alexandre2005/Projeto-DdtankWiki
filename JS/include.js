async function includePartials() {
  const nodes = document.querySelectorAll('[data-include]')

  for (const el of nodes) {
    const url = el.getAttribute('data-include')

    try {
      const res = await fetch(url, { cache: 'no-cache' })
      if (!res.ok) throw new Error(`HTTP ${res.status} ao buscar ${url}`)
      el.outerHTML = await res.text()
    } catch (err) {
      console.error(err)
      el.outerHTML = `<div style="padding:12px">Erro ao carregar ${url}</div>`
    }
  }
}

includePartials()
