const BitCoinInfo = ({ coinPrice, coinInfo }) => {
  return (
    <>
      <div className='flex items-center mb-8'>
        <img src={coinInfo?.image?.thumb} alt='' className='mr-2' />
        <p className='mr-2 text-3xl font-semibold'>{coinInfo?.name}</p>
        <p className='mr-2 text-xl font-semibold text-slate-500'>
          {coinInfo?.symbol?.toUpperCase()}
        </p>
        <p className='px-2 ml-12 text-lg text-white rounded-lg bg-slate-500'>
          Rank #{coinInfo?.market_cap_rank}
        </p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='mb-2 text-2xl font-bold'>{`$${coinPrice?.bitcoin.usd.toLocaleString(
          'en-US'
        )}`}</p>
        {coinPrice?.bitcoin.usd_24h_change > 0 ? (
          <>
            <p className='px-2 font-semibold text-green-600 bg-green-200'>
              <i className='mr-2 text-green-600 fa-solid fa-caret-up'></i>
              {coinPrice?.bitcoin.usd_24h_change.toFixed(2)}
            </p>
          </>
        ) : (
          <>
            <i className='text-red-500 fa-solid fa-caret-down'></i>
            <p className='font-semibold text-red-500'>
              {coinPrice?.bitcoin.usd_24h_change.toFixed(2)}
            </p>
          </>
        )}
        <p>(24 H)</p>
      </div>
      <p>
        <i className='mb-2 mr-2 text-sm fa fa-inr'></i>
        {Math.round(coinPrice?.bitcoin.inr).toLocaleString('en-IN')}
      </p>
    </>
  );
};

export default BitCoinInfo;
