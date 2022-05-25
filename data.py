API_KEY = "Qk51zehhMZWEPLtQD0ovuqdEVHEGwgrKSzB33XLyoa5PVm0bg7FQUuL6kYm5eTf9"
API_SECRET= "6mG6Um9v8rxIy3xA57jUpUsYBgVyWn75U6UsOvB73Bsi31X35K3sf8UFL70Ty4P8",

import csv

from binance.client import Client

client = Client(API_KEY, API_SECRET)

#prices = client.get_all_tickers()

#for price in prices:
    #print(price)
    
candles = client.get_klines(symbol='BTCUSDT', interval=Client.KLINE_INTERVAL_30MINUTE)

csvfile = open('2017-2022.csv', 'w', newline='')
candlestick_writer = csv.writer(csvfile, delimiter=',')

candlesticks = client.get_historical_klines("BTCUSDT", Client.KLINE_INTERVAL_30MINUTE,"1 jan, 2017", "25 May, 2022")
                     
for candlestick in candlesticks:
    candlestick_writer.writerow(candlestick)

csvfile.close()
