const YouMayLike = ({ allTrendingCoin }) => {
  let cardContainer = document.querySelector('.card-container');
  let trendCardContainer = document.querySelector('.trend-card-container');
  const btnPressPrev = () => {
    let width = cardContainer.clientWidth;
    cardContainer.scrollLeft = cardContainer.scrollLeft - width;
    console.log(width);
  };
  const btnPressNext = () => {
    let width = cardContainer.clientWidth;
    cardContainer.scrollLeft = cardContainer.scrollLeft + width;
    console.log(width);
  };

  const trendBtnPressPrev = () => {
    let width = trendCardContainer.clientWidth;
    trendCardContainer.scrollLeft = trendCardContainer.scrollLeft - width;
    console.log(width);
  };
  const trendBtnPressNext = () => {
    let width = trendCardContainer.clientWidth;
    trendCardContainer.scrollLeft = trendCardContainer.scrollLeft + width;
    console.log(width);
  };
  return (
    <>
      <section className='mt-4 bg-white relative'>
        <h2 className='mx-auto w-[90%] mb-4 text-2xl font-semibold py-4 '>
          You May Also Like
        </h2>
        <div className='flex gap-4 mx-auto w-[90%] card-container scroll-smooth overflow-hidden'>
          {allTrendingCoin.map((coin) => (
            <div key={coin.symbol}>
              <div className='flex flex-col w-48 gap-2 p-2 border rounded-md'>
                <div className='flex items-center gap-2'>
                  <img src={coin.thumb} alt='' className='w-6 h-6' />
                  <p className='font-semibold'>{coin.symbol}</p>
                  {coin.usd > 0 ? (
                    <p className='font-semibold text-green-500 bg-green-200 px-1'>
                      {coin.usd.toFixed(2)}
                    </p>
                  ) : (
                    <p className='font-semibold text-red-500 bg-red-200 px-1'>
                      {coin.usd.toFixed(2)}
                    </p>
                  )}
                </div>
                <div>
                  <p className='text-xl font-semibold'>{coin.price}</p>
                </div>
                <div>
                  <img src={coin.sparkline} alt='' />
                </div>
              </div>
            </div>
          ))}
          <div className='absolute flex items-center justify-center w-8 h-8 bg-white rounded-full top-32 left-12'>
            <i
              className='cursor-pointer fa-solid fa-angle-left'
              onClick={btnPressPrev}
            ></i>
          </div>
          <div className='absolute flex items-center justify-center w-8 h-8 bg-white rounded-full right-10 top-32'>
            <i
              className='cursor-pointer fa-solid fa-angle-right'
              onClick={btnPressNext}
            ></i>
          </div>
        </div>
      </section>

      <section className='bg-white relative'>
        <h2 className='mx-auto w-[90%] mb-4 text-2xl font-semibold py-4 '>
          Trending Coins
        </h2>
        <div className='flex gap-4 mx-auto w-[90%] trend-card-container scroll-smooth overflow-hidden'>
          {allTrendingCoin.map((coin) => (
            <div key={coin.symbol}>
              <div className='flex flex-col w-48 gap-2 p-2 border rounded-md'>
                <div className='flex items-center gap-2'>
                  <img src={coin.thumb} alt='' className='w-6 h-6' />
                  <p className='font-semibold'>{coin.symbol}</p>
                  {coin.usd > 0 ? (
                    <p className='font-semibold text-green-500 bg-green-200 px-1'>
                      {coin.usd.toFixed(2)}
                    </p>
                  ) : (
                    <p className='font-semibold text-red-500 bg-red-200 px-1'>
                      {coin.usd.toFixed(2)}
                    </p>
                  )}
                </div>
                <div>
                  <p className='text-xl font-semibold'>{coin.price}</p>
                </div>
                <div>
                  <img src={coin.sparkline} alt='' />
                </div>
              </div>
            </div>
          ))}
          <div className='absolute flex items-center justify-center w-8 h-8 bg-white rounded-full top-32 left-12'>
            <i
              className='cursor-pointer fa-solid fa-angle-left'
              onClick={trendBtnPressPrev}
            ></i>
          </div>
          <div className='absolute flex items-center justify-center w-8 h-8 bg-white rounded-full right-10 top-32'>
            <i
              className='cursor-pointer fa-solid fa-angle-right'
              onClick={trendBtnPressNext}
            ></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default YouMayLike;
