import { Chart } from 'react-google-charts';
export const data = [
  ['Task', 'Hours per Day'],
  ['Crowdsale Investors', 8],
  ['Fundation', 2],
];

export const options = {
  title: '',
  pieHole: 0.7,
  is3D: false,
  pieSliceText: 'none',
  colors: ['#2563eb', '#fb923c'],
};
const Tokenomics = () => {
  return (
    <>
      <section className='tokenomics p-4 bg-white rounded-sm about-bitcoin md:w-[60%] mx-[5%] mt-4'>
        <h2 className='mb-4 text-2xl font-semibold '>Tokenomics</h2>
        <h3 className='mb-2 text-xl font-semibold'>Initial Distribution</h3>
        <Chart
          chartType='PieChart'
          data={data}
          options={options}
          height={'400px'}
        />
        <p className='pb-2 mb-2 font-semibold text-slate-700'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          atque placeat harum magnam voluptate perspiciatis fugiat assumenda
          sunt ullam laborum maiores in consequuntur rem, laudantium ipsam
          maxime quia debitis, officiis voluptas sed perferendis labore nemo
          iusto excepturi? Vel, autem magni?
        </p>
      </section>
    </>
  );
};
export default Tokenomics;
