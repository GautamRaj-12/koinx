const YouMayLike = ({ allTrendingCoin }) => {
  return (
    <>
      <section>
        <h2>You May Also Like</h2>
        {allTrendingCoin.map((coin) => (
          <div
            key={coin.symbol}
            className="flex items-center justify-between mb-4"
          >
            <div className="flex items-center gap-2">
              <img src={coin.thumb} alt="" className="w-6 h-6" />
              <p className="text-xl">{coin.symbol}</p>
              <p className="text-xl">({coin.price})</p>
              <p className="text-xl">({coin.usd})</p>
              <img src={coin.thumb} alt="" />
              <img src={coin.sparkline} alt="" />
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default YouMayLike;
