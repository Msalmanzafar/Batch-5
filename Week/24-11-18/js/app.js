
window.addEventListener('load', async()=>{
    await authCheck()
})

async function authCheck(){
    let data = await localStorage.getItem("userAuth")
    let auths = JSON.parse(data)

    // console.log(auths)
    if(auths.user !== "null"){
        document.getElementById("wel").innerHTML = "<span> Welcome "+auths.user.email+"</span>"
    }else{
        document.getElementById("wel").innerHTML = "<span>"+"Please Login First"+"</span>"
    }
}