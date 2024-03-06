import { useEffect, useState } from "react";
import "./App.css";
import AboutBitcoin from "./components/AboutBitcoin/AboutBitcoin";
import BitCoinInfo from "./components/BitcoinInfo/BitcoinInfo";
import Chart from "./components/Chart/Chart";
import Navbar from "./components/Navbar/Navbar";
import Team from "./components/Team/Team";
import Tokenomics from "./components/Tokenomics/Tokenomics";
import Trending from "./components/Trending/Trending";

function App() {
  const [coinPrice, setCoinPrice] = useState(null);
  const [trendingCoin, setTrendingCoin] = useState([]);
  useEffect(() => {
    const coinPriceInfo = async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_API_URL +
            "/simple/price/?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true"
        );
        const data = await response.json();

        setCoinPrice(data);
      } catch (error) {
        console.error("Error fetching Bitcoin price:", error);
      }
    };

    const trendingCoins = async () => {
      const response = await fetch(
        import.meta.env.VITE_API_URL + "/search/trending"
      );
      const data = await response.json();

      const firstThreeTrendingCoins = data.coins.slice(0, 3).map((coin) => ({
        id: coin.item.id,
        name: coin.item.name,
        symbol: coin.item.symbol,
        usd: coin.item.data.price_change_percentage_24h.usd,
        thumb: coin.item.thumb,
      }));
      console.log(firstThreeTrendingCoins);

      setTrendingCoin(firstThreeTrendingCoins);
    };

    coinPriceInfo();
    trendingCoins();
  }, []);
  return (
    <>
      <Navbar />
      <BitCoinInfo coinPrice={coinPrice} />
      <Chart />
      <AboutBitcoin />
      <Tokenomics />
      <Team />
      <Trending trendingCoin={trendingCoin} />
    </>
  );
}

export default App;
