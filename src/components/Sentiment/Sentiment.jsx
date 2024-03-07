const Sentiment = () => {
  return (
    <>
      <section className='sentiment p-4 bg-white rounded-sm about-bitcoin md:w-[60%] mx-[5%] mt-4 relative'>
        <h2 className='mb-4 text-2xl font-semibold'>Sentiment</h2>
        <div>
          <h3 className='mb-4 text-2xl font-semibold text-slate-500'>
            Key Events <i className='text-xl fa-solid fa-circle-info'></i>
          </h3>
          <div className='flex items-start gap-6 overflow-hidden w-9/10'>
            <div className='flex gap-2 p-4 mb-4 bg-blue-100 rounded-lg basis-[80%] shrink-0'>
              <div>
                <i className='flex items-center justify-center w-12 h-12 text-2xl text-white bg-blue-500 rounded-full fa-solid fa-newspaper'></i>
              </div>
              <div>
                <p className='font-bold'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                  nemo provident modi illum aliquam quas maxime est repudiandae
                  sed veritatis!
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Illum dicta, dolorem pariatur, fugiat autem amet vitae
                  asperiores explicabo rerum voluptate quia rem suscipit nemo
                  cupiditate qui doloribus non odit. Neque excepturi facilis,
                  repudiandae nobis itaque similique. Veniam at pariatur nihil?
                </p>
              </div>
            </div>
            <div className='flex gap-2 p-4 mb-4 bg-green-100 rounded-lg basis-[80%] shrink-0'>
              <div>
                <i className='flex items-center justify-center w-12 h-12 text-2xl text-white bg-green-600 rounded-full fa-solid fa-arrow-trend-up'></i>
              </div>
              <div>
                <p className='font-bold'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                  nemo provident modi illum aliquam quas maxime est repudiandae
                  sed veritatis!
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Illum dicta, dolorem pariatur, fugiat autem amet vitae
                  asperiores explicabo rerum voluptate quia rem suscipit nemo
                  cupiditate qui doloribus non odit. Neque excepturi facilis,
                  repudiandae nobis itaque similique. Veniam at pariatur nihil?
                </p>
              </div>
            </div>
          </div>
          <button className='absolute w-12 h-12 text-xl bg-white rounded-full right-4 top-52'>
            <i className='fa-solid fa-chevron-right'></i>
          </button>
        </div>
        <div>
          <h3 className='mb-4 text-2xl font-semibold text-slate-500'>
            Analyst Estimates{' '}
            <i className='text-xl fa-solid fa-circle-info'></i>
          </h3>
          <div className='grid items-center justify-start grid-cols-12 gap-8'>
            <div className='flex items-center justify-center w-20 h-20 col-span-3 text-2xl font-bold text-green-500 bg-green-200 rounded-full md:text-4xl md:w-28 md:h-28'>
              <p>
                76<span className='text-2xl'>%</span>
              </p>
            </div>
            <div className='col-span-9'>
              <div className='flex items-center justify-start gap-3 mb-2 text-base'>
                <p className='font-semibold text-slate-500'>Buy</p>
                <div className='rounded-full h-2.5 w-[60%] '>
                  <div className='bg-green-400 h-2.5 rounded-md w-[76%] relative'>
                    {' '}
                    <p className='absolute font-semibold -right-10 -top-2 text-slate-600'>
                      76%
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex items-center justify-start gap-3 mb-2 text-base'>
                <p className='font-semibold text-slate-500'>Hold</p>
                <div className='rounded-full h-2.5 w-[60%] '>
                  <div className='bg-slate-400 h-2.5 rounded-md w-[8%] relative'>
                    <p className='absolute font-semibold -right-10 -top-2 text-slate-600'>
                      8%
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex items-center justify-start gap-3 mb-2 text-base'>
                <p className='font-semibold text-slate-500'>Sell</p>
                <div className='rounded-full h-2.5 w-[60%] '>
                  <div className='bg-red-500 h-2.5 rounded-md w-[16%] relative'>
                    <p className='absolute font-semibold -right-10 -top-2 text-slate-600'>
                      16%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sentiment;
