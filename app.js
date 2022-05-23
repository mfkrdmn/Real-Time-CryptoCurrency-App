let url = "https://api.nomics.com/v1/"
let apiKey = "4df0c65c7bca02ee8ff0c34d949bc60920484f38"

//("https://api.nomics.com/v1/currencies/ticker?key=4df0c65c7bca02ee8ff0c34d949bc60920484f38&ids=XRP")

const start = function(cryptoName){

    let apiLink = `${url}currencies/ticker?key=${apiKey}&ids=${cryptoName}&interval=1d,30d&convert=EUR&per-page=100&page=1`

    fetch(apiLink)
    .then(function(response){
        return response.json()
    })
    .then(resultinDisplay)

}

const resultinDisplay = function(result){

    $(".name").html(`${result[0].name}`) 
    $(".price").html(`${Math.round(result[0].price)}$`)
    $(".marketCap").html(`${Math.round(result[0].market_cap)}$`)
    
}


$("#searchInput").keypress(function(e){
    if(e.keyCode == "13"){
        start($("#searchInput").val())
    }
})


