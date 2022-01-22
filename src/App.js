import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import CollectionCard from './components/CollectionCard';
import Header from './components/Header';
import CardList from './components/CardList';

function App() {
  const [nftData, setNFTData] = useState([]);

  useEffect(() => {
    const getMyNFTs = async () => {
      const openseaData = await axios.get('https://testnets-api.opensea.io/api/v1/assets?asset_contract_addresses=0x514854d720d37288BdfD26ab01Fb38612F69f707&order_direction=asc');

      console.log('test data nft', openseaData.data.assets);
      setNFTData(openseaData.data.assets);
    }

    return getMyNFTs();
  }, [])


  return (
    <div className="app">
      <Header />
      <CardList cardListData={nftData} />
    </div>
  )
}

export default App;
