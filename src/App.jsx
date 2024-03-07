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
import Sentiment from './components/Sentiment/Sentiment';
import Details from './components/Details/Details';

function App() {
  const [coinPrice, setCoinPrice] = useState(null);
  const [trendingCoin, setTrendingCoin] = useState([]);
  const [allTrendingCoin, setAllTrendingCoin] = useState([]);
  const [coinInfo, setCoinInfo] = useState([]);
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

    const fetchCoinWithId = async () => {
      const response = await fetch(
        import.meta.env.VITE_API_URL + '/coins/bitcoin'
      );
      const data = await response.json();
      console.log(data);
      setCoinInfo(data);
    };
    coinPriceInfo();
    trendingCoins();
    fetchCoinWithId();
  }, []);
  return (
    <>
      <Navbar />
      <Chart
        coinPrice={coinPrice}
        coinInfo={coinInfo}
        trendingCoin={trendingCoin}
      />
      <Details />
      <Sentiment />
      <AboutBitcoin />
      <Tokenomics />
      <Team />
      <YouMayLike allTrendingCoin={allTrendingCoin} />

      <div className='block md:hidden'>
        <GetStarted />
        <Trending trendingCoin={trendingCoin} />
      </div>
    </>
  );
}

export default App;
