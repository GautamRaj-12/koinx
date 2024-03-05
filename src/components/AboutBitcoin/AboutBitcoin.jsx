import profitsPic from '../../assets/profits.png';
import taxPic from '../../assets/tax-liability.png';
const AboutBitcoin = () => {
  return (
    <>
      <section className='p-4 bg-white rounded-sm about-bitcoin md:w-[60%] mx-[5%] mt-4'>
        <h2 className='mb-4 text-2xl font-semibold '>About Bitcoin</h2>
        <div className='about-bitcoin-top'>
          <h3 className='mb-2 text-lg font-bold'>What is Bitcoin?</h3>
          <p className='pb-2 mb-2 font-semibold border-b-2 text-slate-700'>
            Bitcoin's price today is US$16,951.82, with a 24-hour trading volume
            of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently
            -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from
            its 7-day all-time low of $16,394.75. BTC has a circulating supply
            of 19.24 M BTC and a max supply of 21 M BTC.
          </p>
        </div>

        <div className='about-bitcoin-middle'>
          <h3 className='mb-2 text-lg font-bold'>
            Lorem ipsum dolor sit amet.
          </h3>
          <p className='mb-2 font-semibold text-slate-700'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            nihil quas commodi animi dignissimos cupiditate, doloremque,
            sapiente aspernatur quibusdam veniam iusto eveniet repudiandae
            dolores aperiam aut reiciendis hic? Excepturi, molestias?
          </p>
          <p className='mb-2 font-semibold text-slate-700'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            officiis, quisquam neque asperiores qui quasi voluptas voluptatum
            dolor rem. Earum repellendus, nisi odio ducimus commodi ullam sequi
            illo architecto fugit?
          </p>
          <p className='pb-2 mb-2 font-semibold border-b-2 text-slate-700'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit voluptatem aspernatur possimus dolorum aliquid.
            Possimus rerum, quaerat aliquid nesciunt optio magni veritatis
            dolorem eveniet ipsum dolore praesentium nulla maxime earum.
          </p>
        </div>

        <div className='about-bitcoin-bottom'>
          <h3 className='mb-4 text-2xl font-semibold'>
            Already Holding Bitcoin?
          </h3>
          <div className='grid grid-cols-1 gap-6 pb-2 mb-2 border-b-2 h-50 lg:grid-cols-2'>
            <div className='flex h-40 gap-4 rounded-lg bg-gradient-to-br from-green-600 to-blue-500'>
              <img
                src={taxPic}
                alt=''
                className='w-[35%] object-cover m-2 rounded-lg'
              />
              <div className='flex flex-col gap-4 w-[38%] justify-start mt-4 items-start'>
                <p className='text-xl font-semibold text-white'>
                  Calculate your Profits
                </p>
                <button className='flex items-center gap-2 px-4 py-1 font-semibold bg-white rounded-lg'>
                  <span>Check Now </span>
                  <i className='mt-[3px] fa-solid fa-arrow-right'></i>
                </button>
              </div>
            </div>
            <div className='flex h-40 gap-4 rounded-lg bg-gradient-to-br from-orange-400 to-orange-700'>
              <img
                src={taxPic}
                alt=''
                className='w-[35%] object-cover m-2 rounded-lg'
              />
              <div className='flex flex-col gap-4 w-[38%] justify-start mt-4 items-start'>
                <p className='text-xl font-semibold text-white'>
                  Calculate your tax liability
                </p>
                <button className='flex items-center gap-2 px-4 py-1 font-semibold bg-white rounded-lg'>
                  <span>Check Now </span>
                  <i className='mt-[3px] fa-solid fa-arrow-right'></i>
                </button>
              </div>
            </div>
          </div>
          <p className='mb-2 font-semibold text-slate-700'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit voluptatem aspernatur possimus dolorum aliquid.
            Possimus rerum, quaerat aliquid nesciunt optio magni veritatis
            dolorem eveniet ipsum dolore praesentium nulla maxime earum.
          </p>
        </div>
      </section>
    </>
  );
};
export default AboutBitcoin;
