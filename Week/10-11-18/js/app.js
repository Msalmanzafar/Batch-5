

let api ="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2fea6986d2c14521ae1c56e32077b122"
let div = document.getElementById("news")
fetch(api)
    .then((success)=>{
        //checking data is available or not
        // data is locked in json term
        // return data after opening Json

        return success.json()
    })
    .then((data)=>{
        // data is loading here
        console.log(data)
        let articles = data.articles
        for(var key in articles){
            div.innerHTML +=
                "<h2>"+articles[key].title+"</h2>"
                +"<img width='450' src="+articles[key].urlToImage+"/>"
                +"<p>"+articles[key].description+"</p>"
        }
    })
    .catch((error)=>{
        // if data is not available or restriction error may be internet
        console.log(error)
    })