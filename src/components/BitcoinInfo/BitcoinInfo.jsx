import React, { useEffect, useState } from "react";

const BitCoinInfo = () => {
  const [bitcoinPrice, setBitcoinPrice] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_API_URL +
            "/simple/price/?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true"
        );
        const data = await response.json();
        setBitcoinPrice(data);
      } catch (error) {
        console.error("Error fetching Bitcoin price:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {bitcoinPrice ? (
        <>
          <p>{bitcoinPrice.bitcoin.usd}</p>
          <p>{bitcoinPrice.bitcoin.inr}</p>
          <p>{bitcoinPrice.bitcoin.usd_24h_change}</p>
          <p>(24H)</p>
        </>
      ) : (
        <p>Loading Bitcoin price...</p>
      )}
    </div>
  );
};

export default BitCoinInfo;
