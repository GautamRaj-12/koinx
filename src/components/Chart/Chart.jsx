import React, { useEffect, useRef, memo } from 'react';
import BitCoinInfo from '../BitcoinInfo/BitcoinInfo';
import GetStarted from '../GetStarted/GetStarted';
import Trending from '../Trending/Trending';

const Chart = ({ coinPrice, coinInfo, trendingCoin }) => {
  const containerRef = useRef();

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = `
        {
          "width": "100%",
          "height": "500",
          "symbol": "BITSTAMP:BTCUSD",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "2",
          "locale": "en",
          "enable_publishing": false,
          "calendar": false,
          "hide_volume":true,
          "support_host": "https://www.tradingview.com"
        }`;
    containerRef.current.appendChild(script);

    // Cleanup the script when the component is unmounted
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <div className='w-[90%] mx-auto mt-4 text-sm'>
        <span className='font-semibold text-slate-500'>Cryptocurrencies</span>{' '}
        <i className='fa-solid fa-chevron-right'></i>
        <i className='fa-solid fa-chevron-right'></i> Bitcoin
      </div>
      <div className='flex'>
        <section className='p-4 bg-white rounded-sm md:basis-[60%] basis-[100%] mx-[5%] mt-4'>
          <div>
            <BitCoinInfo coinPrice={coinPrice} coinInfo={coinInfo} />
          </div>
          <div className='tradingview-widget-container' ref={containerRef}>
            <div className='tradingview-widget-container__widget'></div>
            <div className='tradingview-widget-copyright'>
              <a
                href='https://www.tradingview.com/'
                rel='noopener nofollow'
                target='_blank'
              >
                <span className='blue-text'>
                  Track all markets on TradingView
                </span>
              </a>
            </div>
          </div>
        </section>
        <div className='basis-[28%] md:block hidden'>
          <GetStarted />
          <Trending trendingCoin={trendingCoin} />
        </div>
      </div>
    </>
  );
};

export default memo(Chart);
