const BitCoinInfo = ({ coinPrice }) => {
  return (
    <>
      <div className='flex items-center gap-2'>
        <p className='text-2xl font-bold mb-2'>{`$${coinPrice?.bitcoin.usd.toLocaleString(
          'en-US'
        )}`}</p>
        {coinPrice?.bitcoin.usd_24h_change > 0 ? (
          <>
            <p className='font-semibold text-green-600 bg-green-200 px-2'>
              <i className='text-green-600 fa-solid fa-caret-up mr-2'></i>
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
        <i className='fa fa-inr text-sm mr-2 mb-2'></i>
        {Math.round(coinPrice?.bitcoin.inr).toLocaleString('en-IN')}
      </p>
    </>
  );
};

export default BitCoinInfo;
