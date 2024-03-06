import { useEffect, useState } from 'react';
import './App.css';
import AboutBitcoin from './components/AboutBitcoin/AboutBitcoin';
import BitCoinInfo from './components/BitcoinInfo/BitcoinInfo';
import Chart from './components/Chart/Chart';
import Navbar from './components/Navbar/Navbar';
import Team from './components/Team/Team';
import Tokenomics from './components/Tokenomics/Tokenomics';
import Trending from './components/Trending/Trending';
import GetStarted from './components/GetStarted/GetStarted';
import YouMayLike from './components/YouMayLike/YouMayLike';

function App() {
  const [coinPrice, setCoinPrice] = useState(null);
  const [trendingCoin, setTrendingCoin] = useState([]);
  const [allTrendingCoin, setAllTrendingCoin] = useState([]);
  useEffect(() => {
    const coinPriceInfo = async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_API_URL +
            '/simple/price/?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true&precision=2'
        );
        const data = await response.json();
        console.log(data);
        setCoinPrice(data);
      } catch (error) {
        console.error('Error fetching Bitcoin price:', error);
      }
    };

    const trendingCoins = async () => {
      const response = await fetch(
        import.meta.env.VITE_API_URL + '/search/trending'
      );
      const data = await response.json();

      const firstThreeTrendingCoins = data.coins.slice(0, 3).map((coin) => ({
        name: coin.item.name,
        symbol: coin.item.symbol,
        usd: coin.item.data.price_change_percentage_24h.usd,
        thumb: coin.item.thumb,
      }));

      setTrendingCoin(firstThreeTrendingCoins);

      const allTrendingCoins = data.coins.map((coin) => ({
        symbol: coin.item.symbol,
        price: coin.item.data.price,
        usd: coin.item.data.price_change_percentage_24h.usd,
        thumb: coin.item.thumb,
        sparkline: coin.item.data.sparkline,
      }));

      setAllTrendingCoin(allTrendingCoins);
      console.log(allTrendingCoin);
    };

    coinPriceInfo();
    trendingCoins();
  }, []);
  return (
    <>
      <Navbar />
      <Chart coinPrice={coinPrice} />
      <AboutBitcoin />
      <Tokenomics />
      <Team />
      <YouMayLike allTrendingCoin={allTrendingCoin} />
      <GetStarted />
      <Trending trendingCoin={trendingCoin} />
    </>
  );
}

export default App;
