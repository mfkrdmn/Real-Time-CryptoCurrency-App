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


//`${CMCURL}?CMC_PRO_API_KEY=${CMCKey}`

//"https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=6940a510-937f-4e18-b673-960d12cc14c7"

function CMC(){

    let CMCKurl = "https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest?CMC_PRO_API_KEY=6940a510-937f-4e18-b673-960d12cc14c7"

    fetch(CMCKurl)
    .then(function(responsetwo){
        return responsetwo.json()
    })
    .then(resultinDisplay2)

}


const resultinDisplay2 = window.addEventListener("load",function(result2){
    
    //$(".test").html(result2.data.name) 
    //console.log(`${result2.data.btc_dominance}`) 

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

//CHART

var chart = LightweightCharts.createChart(document.getElementById("chart"), {
	width: 600,
  height: 300,
	layout: {
		backgroundColor: '#000000',
		textColor: 'rgba(255, 255, 255, 0.9)',
	},
	grid: {
		vertLines: {
			color: 'rgba(197, 203, 206, 0.5)',
		},
		horzLines: {
			color: 'rgba(197, 203, 206, 0.5)',
		},
	},
	crosshair: {
		mode: LightweightCharts.CrosshairMode.Normal,
	},
	rightPriceScale: {
		borderColor: 'rgba(197, 203, 206, 0.8)',
	},
	timeScale: {
		borderColor: 'rgba(197, 203, 206, 0.8)',
	},
});

var candleSeries = chart.addCandlestickSeries({
  upColor: 'rgba(255, 144, 0, 1)',
  downColor: '#000',
  borderDownColor: 'rgba(255, 144, 0, 1)',
  borderUpColor: 'rgba(255, 144, 0, 1)',
  wickDownColor: 'rgba(255, 144, 0, 1)',
  wickUpColor: 'rgba(255, 144, 0, 1)',
});

candleSeries.setData([
	{ time: '2018-10-19', open: 180.34, high: 180.99, low: 178.57, close: 179.85 },
	{ time: '2018-10-22', open: 180.82, high: 181.40, low: 177.56, close: 178.75 },
	{ time: '2018-10-23', open: 175.77, high: 179.49, low: 175.44, close: 178.53 },
	{ time: '2018-10-24', open: 178.58, high: 182.37, low: 176.31, close: 176.97 },
	{ time: '2018-10-25', open: 177.52, high: 180.50, low: 176.83, close: 179.07 },
	{ time: '2018-10-26', open: 176.88, high: 177.34, low: 170.91, close: 172.23 },
	{ time: '2018-10-29', open: 173.74, high: 175.99, low: 170.95, close: 173.20 },
	{ time: '2018-10-30', open: 173.16, high: 176.43, low: 172.64, close: 176.24 },
	{ time: '2018-10-31', open: 177.98, high: 178.85, low: 175.59, close: 175.88 },
	{ time: '2018-11-01', open: 176.84, high: 180.86, low: 175.90, close: 180.46 },
	{ time: '2018-11-02', open: 182.47, high: 183.01, low: 177.39, close: 179.93 },
	{ time: '2018-11-05', open: 181.02, high: 182.41, low: 179.30, close: 182.19 },
	{ time: '2018-11-06', open: 181.93, high: 182.65, low: 180.05, close: 182.01 },
	{ time: '2018-11-07', open: 183.79, high: 187.68, low: 182.06, close: 187.23 },
	{ time: '2018-11-08', open: 187.13, high: 188.69, low: 185.72, close: 188.00 },
	{ time: '2018-11-09', open: 188.32, high: 188.48, low: 184.96, close: 185.99 },
	{ time: '2018-11-12', open: 185.23, high: 186.95, low: 179.02, close: 179.43 },
	{ time: '2018-11-13', open: 177.30, high: 181.62, low: 172.85, close: 179.00 },
	{ time: '2018-11-14', open: 182.61, high: 182.90, low: 179.15, close: 179.90 },
	{ time: '2018-11-15', open: 179.01, high: 179.67, low: 173.61, close: 177.36 },
	{ time: '2018-11-16', open: 173.99, high: 177.60, low: 173.51, close: 177.02 },
	{ time: '2018-11-19', open: 176.71, high: 178.88, low: 172.30, close: 173.59 },
	{ time: '2018-11-20', open: 169.25, high: 172.00, low: 167.00, close: 169.05 },
	{ time: '2018-11-21', open: 170.00, high: 170.93, low: 169.15, close: 169.30 },
	{ time: '2018-11-23', open: 169.39, high: 170.33, low: 168.47, close: 168.85 },
	{ time: '2018-11-26', open: 170.20, high: 172.39, low: 168.87, close: 169.82 },
	{ time: '2018-11-27', open: 169.11, high: 173.38, low: 168.82, close: 173.22 },
	{ time: '2018-11-28', open: 172.91, high: 177.65, low: 170.62, close: 177.43 },
	{ time: '2018-11-29', open: 176.80, high: 177.27, low: 174.92, close: 175.66 },

]);

//WebSocket

let binanceSocket = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");

binanceSocket.onmessage = function (event) {
    
    let messageObject = JSON.parse(event.data)

    $(".lastsec").append(messageObject.p) // p = price

}