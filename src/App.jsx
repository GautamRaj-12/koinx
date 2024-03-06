import './App.css';
import AboutBitcoin from './components/AboutBitcoin/AboutBitcoin';
import Navbar from './components/Navbar/Navbar';
import Team from './components/Team/Team';
import Tokenomics from './components/Tokenomics/Tokenomics';

function App() {
  return (
    <>
      <Navbar />
      <AboutBitcoin />
      <Tokenomics />
      <Team />
    </>
  );
}

export default App;
