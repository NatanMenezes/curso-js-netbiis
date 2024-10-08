const timeout = setTimeout(() => {
    console.log('Executando setTimeout')
}, 2000)

const interval = setInterval(() => {
    console.log('Executando setInterval')
}, 1000)

setTimeout(() => {
    clearInterval(interval)
}, 5000)


// Limpar o timeout e o interval
// clearTimeout(timeout)
// clearInterval(interval)