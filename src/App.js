import logo from './logo.svg';
import './App.css';
import Main from './component/Main'
import Header from  './component/Header';
import CollectionCard from './component/CollectionCard';
import axios from 'axios';
import {useState,useEffect} from 'react';
import Punklist from './component/Punklist';


function App() {
  const [punkListData,setPunkListData]=useState([])
  const [selectedPunk,setSelectedPunk]=useState(0)
  useEffect(()=>{
    const getMyNfts=async()=>{
      const openseaData=await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0xAf72aa0e89cF415bD03fA8fc5BEbB299AAbc1d6F&order_direction=asc')
      console.log(openseaData.data.assets)
      setPunkListData(openseaData.data.assets)
    }
    return getMyNfts()
  },[])
  return( <div className='app'>
    <Header/>
    {
      punkListData.length>0 &&(
        <>
<Main punkListData={punkListData} selectedPunk={selectedPunk}></Main>
<Punklist punkListData={punkListData} setSelectedPunk={setSelectedPunk} ></Punklist>

        </>
      )
    }
  </div>)
}

export default App;
