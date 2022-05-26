let url = "https://api.nomics.com/v1/"
let apiKey = "4df0c65c7bca02ee8ff0c34d949bc60920484f38"

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
        start($("#searchInput").val().toUpperCase())
		var name1 = $("#searchInput").val()+"USDT"
		console.log(name1)
		new TradingView.widget(
			{
			"symbol": name1,
			"interval": "D",
			"timezone": "Etc/UTC",
			"theme": "light",
			"style": "1",
			"locale": "tr",
			"toolbar_bg": "#f1f3f6",
			"enable_publishing": false,
			"allow_symbol_change": true,
			"container_id": "tradingview_acdbe"
			}
		);
    }
})

let CMCKey = "6940a510-937f-4e18-b673-960d12cc14c7"
let CMCURL ="https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest"

//`${CMCURL}?CMC_PRO_API_KEY=${CMCKey}`

//"https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest?CMC_PRO_API_KEY=6940a510-937f-4e18-b673-960d12cc14c7"

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
    console.log(result2.data.quote.USD.total_market_cap) 

})


//Graphs

$("#clickButtonBTC").click(function(){
    start("BTC")
	var name1 = "BINANCE:BtcUSDT";
	console.log(name1)

	new TradingView.widget(
		{
		"symbol": name1,
		"interval": "D",
		"timezone": "Etc/UTC",
		"theme": "light",
		"style": "1",
		"locale": "tr",
		"toolbar_bg": "#f1f3f6",
		"enable_publishing": false,
		"allow_symbol_change": true,
		"container_id": "tradingview_acdbe"
		}
	);
})

$("#clickButtonETH").click(function(){
    start("ETH")
	var name1 = "BINANCE:EthUSDT";
	console.log(name1)

	new TradingView.widget(
		{
		"symbol": name1,
		"interval": "D",
		"timezone": "Etc/UTC",
		"theme": "light",
		"style": "1",
		"locale": "tr",
		"toolbar_bg": "#f1f3f6",
		"enable_publishing": false,
		"allow_symbol_change": true,
		"container_id": "tradingview_acdbe"
		}
	);
})

$("#clickButtonXLM").click(function(){
    start("XLM")
	var name1 = "BINANCE:XlmUSDT";
	console.log(name1)

	new TradingView.widget(
		{
		"symbol": name1,
		"interval": "D",
		"timezone": "Etc/UTC",
		"theme": "light",
		"style": "1",
		"locale": "tr",
		"toolbar_bg": "#f1f3f6",
		"enable_publishing": false,
		"allow_symbol_change": true,
		"container_id": "tradingview_acdbe"
		}
	);
})

$("#clickButtonBNB").click(function(){
    start("BNB")
	var name1 = "BINANCE:BnbUSDT";
	console.log(name1)

	new TradingView.widget(
		{
		"symbol": name1,
		"interval": "D",
		"timezone": "Etc/UTC",
		"theme": "light",
		"style": "1",
		"locale": "tr",
		"toolbar_bg": "#f1f3f6",
		"enable_publishing": false,
		"allow_symbol_change": true,
		"container_id": "tradingview_acdbe"
		}
	);
})

$("#clickButtonXRP").click(function(){
    start("XRP")
	var name1 = "BINANCE:XrpUSDT";
	console.log(name1)

	new TradingView.widget(
		{
		"symbol": name1,
		"interval": "D",
		"timezone": "Etc/UTC",
		"theme": "light",
		"style": "1",
		"locale": "tr",
		"toolbar_bg": "#f1f3f6",
		"enable_publishing": false,
		"allow_symbol_change": true,
		"container_id": "tradingview_acdbe"
		}
	);
})

$("#clickButtonADA").click(function(){
    start("ADA")
	var name1 = "BINANCE:AdaUSDT";
	console.log(name1)

	new TradingView.widget(
		{
		"symbol": name1,
		"interval": "D",
		"timezone": "Etc/UTC",
		"theme": "light",
		"style": "1",
		"locale": "tr",
		"toolbar_bg": "#f1f3f6",
		"enable_publishing": false,
		"allow_symbol_change": true,
		"container_id": "tradingview_acdbe"
		}
	);
})

$("#clickButtonSOL").click(function(){
    start("SOL")
	var name1 = "BINANCE:SolUSDT";
	console.log(name1)

	new TradingView.widget(
		{
		"symbol": name1,
		"interval": "D",
		"timezone": "Etc/UTC",
		"theme": "light",
		"style": "1",
		"locale": "tr",
		"toolbar_bg": "#f1f3f6",
		"enable_publishing": false,
		"allow_symbol_change": true,
		"container_id": "tradingview_acdbe"
		}
	);
})

$("#clickButtonDOGE").click(function(){
    start("DOGE")
	var name1 = "BINANCE:DogeUSDT";
	console.log(name1)

	new TradingView.widget(
		{
		"symbol": name1,
		"interval": "D",
		"timezone": "Etc/UTC",
		"theme": "light",
		"style": "1",
		"locale": "tr",
		"toolbar_bg": "#f1f3f6",
		"enable_publishing": false,
		"allow_symbol_change": true,
		"container_id": "tradingview_acdbe"
		}
	);
})

$("#clickButtonDOT").click(function(){
    start("DOT")
	var name1 = "BINANCE:DotUSDT";
	console.log(name1)

	new TradingView.widget(
		{
		"symbol": name1,
		"interval": "D",
		"timezone": "Etc/UTC",
		"theme": "light",
		"style": "1",
		"locale": "tr",
		"toolbar_bg": "#f1f3f6",
		"enable_publishing": false,
		"allow_symbol_change": true,
		"container_id": "tradingview_acdbe"
		}
	);
})

$("#clickButtonAVAX").click(function(){
    start("AVAX")
	var name1 = "BINANCE:AvaxUSDT";
	console.log(name1)

	new TradingView.widget(
		{
		"symbol": name1,
		"interval": "D",
		"timezone": "Etc/UTC",
		"theme": "light",
		"style": "1",
		"locale": "tr",
		"toolbar_bg": "#f1f3f6",
		"enable_publishing": false,
		"allow_symbol_change": true,
		"container_id": "tradingview_acdbe"
		}
	);
})

$("#clickButtonLTC").click(function(){
    start("LTC")
	var name1 = "BINANCE:ltcUSDT";
	console.log(name1)

	new TradingView.widget(
		{
		"symbol": name1,
		"interval": "D",
		"timezone": "Etc/UTC",
		"theme": "light",
		"style": "1",
		"locale": "tr",
		"toolbar_bg": "#f1f3f6",
		"enable_publishing": false,
		"allow_symbol_change": true,
		"container_id": "tradingview_acdbe"
		}
	);
})




//WebSocket

let binanceSocket = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");

binanceSocket.onmessage = function (event) {
    
    let messageObject = JSON.parse(event.data)

    //$(".lastsec").append(messageObject.p) // p = price

}










