const Trending = ({ trendingCoin }) => {
  return (
    <>
      <section className="trending p-4 bg-white rounded-sm md:w-[60%] mx-[5%] mt-4">
        <h2 className="mb-4 text-2xl font-semibold">
          Trending Coins <span>(24h)</span>
        </h2>
        {trendingCoin.map((coin) => (
          <div key={coin.id} className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <img src={coin.thumb} alt="" className="w-6 h-6" />
              <p className="text-xl">{coin.name}</p>
              <p className="text-xl">({coin.symbol})</p>
            </div>
            <div className="flex items-center justify-between w-24 gap-2 px-2 text-xl rounded-sm bg-slate-200">
              {coin.usd > 0 ? (
                <>
                  <i className="text-green-600 fa-solid fa-caret-up"></i>
                  <p className="font-semibold text-green-600">
                    {coin.usd.toFixed(2)}
                  </p>
                </>
              ) : (
                <>
                  <i className="text-red-500 fa-solid fa-caret-down"></i>
                  <p className="font-semibold text-red-500">
                    {coin.usd.toFixed(2)}
                  </p>
                </>
              )}
            </div>
          </div>
        ))}
      </section>
    </>
  );
};
export default Trending;
