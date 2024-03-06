const BitCoinInfo = ({ coinPrice }) => {
  return (
    <>
      <p>{coinPrice?.bitcoin.usd}</p>
      <p>{coinPrice?.bitcoin.inr}</p>
      <p>{coinPrice?.bitcoin.usd_24h_change}</p>
    </>
  );
};

export default BitCoinInfo;
