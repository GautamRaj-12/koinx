import { useState } from 'react';
import koinxLogo from '../../assets/koinx-logo.svg';
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [translate, setTranslate] = useState('right-[-50%]');
  const openNav = () => {
    setTranslate('right-0');
    setOpen(true);
  };
  const closeNav = () => {
    setTranslate('right-[-50%]');
    setOpen(false);
  };
  return (
    <>
      <header className='bg-white shadow-lg'>
        <nav className='flex w-[90%] mx-auto justify-between items-center p-3'>
          <div>
            <img src={koinxLogo} alt='' className='w-40' />
          </div>
          <ul
            className={`absolute flex flex-col gap-16 bg-white md:top-auto top-16 md:flex-row md:relative md:w-auto w-[50%] md:right-auto ${translate} md:h-auto items-center md:p-0 py-2`}
          >
            <li className='py-1 font-semibold'>Crypto Taxes</li>
            <li className='py-1 font-semibold'>Free Tools</li>
            <li className='py-1 font-semibold'>Resource Center</li>
            <li className='px-4 py-1 font-semibold bg-blue-600 rounded-md text-slate-100'>
              Get Started
            </li>
          </ul>
          <div className='cursor-pointer black md:hidden'>
            {open === true ? (
              <i className='text-3xl fa-solid fa-xmark' onClick={closeNav}></i>
            ) : (
              <i className='text-3xl fa-solid fa-bars' onClick={openNav}></i>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};
export default Navbar;
