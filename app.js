let url = "https://api.nomics.com/v1/"
let apiKey = "4df0c65c7bca02ee8ff0c34d949bc60920484f38"
let CMCKey = "6940a510-937f-4e18-b673-960d12cc14c7"
let CMCURL ="https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest"

//"https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=6940a510-937f-4e18-b673-960d12cc14c7"

//("https://api.nomics.com/v1/currencies/ticker?key=4df0c65c7bca02ee8ff0c34d949bc60920484f38&ids=XRP")

const start = function(cryptoName){

    let apiLink = `${url}currencies/ticker?key=${apiKey}&ids=${cryptoName}&interval=1d,30d&convert=EUR&per-page=100&page=1`

    fetch(apiLink)
    .then(function(response){
        return response.json()
    })
    .then(resultinDisplay)

}

function CMC(){

    let CMCKurl = `${CMCURL}?CMC_PRO_API_KEY=${CMCKey}`

    fetch(CMCKurl)
    .then(function(responsetwo){
        return responsetwo.json()
    })
    .then(resultinDisplay2)

}


const resultinDisplay2 = window.addEventListener("load",function(result2){
    
    //$(".test").html(result2.data.name) 
    console.log(result2[0].data.name)

})



const resultinDisplay = function(result){

    $(".name").html(`${result[0].name}`) 
    $(".rank").html(`${result[0].rank}`)
    $(".maxsupply").html(`$${(result[0].max_supply)}`)
    //$(".Volume").html(`${result[0].volume}`) 
    $(".marketCapDominance").html(`${result[0].market_cap_dominance}`) 
    $(".price").html(`$${(result[0].price)}`)
    $(".marketCap").html(`$${Math.round(result[0].market_cap)}`)
    $(".supply").html(`$${(result[0].circulating_supply)}`)
}


$("#searchInput").keypress(function(e){
    if(e.keyCode == "13"){
        start($("#searchInput").val())
    }
})


$("#clickButtonBTC").click(function(){
    start("BTC")
})

$("#clickButtonETH").click(function(){
    start("ETH")
})

$("#clickButtonXLM").click(function(){
    start("XLM")
})

$("#clickButtonBNB").click(function(){
    start("BNB")
})

$("#clickButtonXRP").click(function(){
    start("XRP")
})

$("#clickButtonADA").click(function(){
    start("ADA")
})

$("#clickButtonSOL").click(function(){
    start("SOL")
})

$("#clickButtonDOGE").click(function(){
    start("DOGE")
})

$("#clickButtonDOT").click(function(){
    start("DOT")
})

$("#clickButtonAVAX").click(function(){
    start("AVAX")
})

$("#clickButtonLTC").click(function(){
    start("LTC")
})
