import React, { useEffect, useRef, memo } from 'react';
import BitCoinInfo from '../BitcoinInfo/BitcoinInfo';

const Chart = ({ coinPrice }) => {
  const containerRef = useRef();

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = `
        {
          "width": "700",
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
    <section className='p-4 bg-white rounded-sm md:w-[60%] mx-[5%] mt-4'>
      <div>
        <BitCoinInfo coinPrice={coinPrice} />
      </div>
      <div className='tradingview-widget-container' ref={containerRef}>
        <div className='tradingview-widget-container__widget'></div>
        <div className='tradingview-widget-copyright'>
          <a
            href='https://www.tradingview.com/'
            rel='noopener nofollow'
            target='_blank'
          >
            <span className='blue-text'>Track all markets on TradingView</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default memo(Chart);
