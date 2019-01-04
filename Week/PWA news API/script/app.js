// var api = "https://newsapi.org/v1/articles?source=techcrunch&apikey=6f4fa5447bb24a2687edecc4c1df43b4"
var apikey = '29f9b09e7a874d5783fd74c87291d22d';
const main = document.querySelector("#div");
const selector = document.querySelector('#selector')
const defineDefualt = "the-washington-post"

window.addEventListener('load', async e => {
    updatedNews()
    await upadteSources()
    selector.value = defineDefualt;

    selector.addEventListener('change', e => {
        updatedNews(e.target.value)
    })

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('../sw.js')
            .then(() => {
                console.log('service worker')
            })
    }
})

async function upadteSources() {
    const res = await fetch(`https://newsapi.org/v1/sources`);
    const json = await res.json()
    console.log(json)

    selector.innerHTML = json.sources
        .map(src => `<option value="${src.id}">${src.name}</option>`).join('\n')
}

async function updatedNews(source = defineDefualt) {
    const res = await fetch(`https://newsapi.org/v1/articles?source=${source}&apikey=${apikey}`);
    const json = await res.json();
    console.log(json)
    main.innerHTML = json.articles.map(createArticles).join('\n')
}

function createArticles(article) {
    return `
        <div class="col-md-8 col-md-offset-2">
            <h2 class='h2'>${article.title}</h2>
            <img class="img-rounded" width='100%' src="${article.urlToImage}"/>
            <p class='h4'>${article.description}</p>
        </div>
    `
}