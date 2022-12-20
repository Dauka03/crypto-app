import React, { useEffect, useState } from 'react';
import Body from '../components/Body';
import DataSection from '../components/DataSection';
import axios from 'axios';

function Home() {
  const [data,setData] = useState({});
  //getting data from api
  const getData = () =>{
    const apiUrl = 'https://new-backend.unistory.app/api/data/'
    axios.get(apiUrl).then((response)=>{
      setData(response.data)
    })
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div >
        <Body/>
        <DataSection userData={data}/> 
    </div>
  );
}              
export default Home;