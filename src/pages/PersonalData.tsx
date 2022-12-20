import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { styled } from "@stitches/react";
import { userData } from '../components/types/userData';
import planet from '../assets/planet.png';


function PersonalData() {
  const [data,setData] = useState<userData>({});
  const {id} = useParams();
  //get data by id, use useParams for check and find data
  const getData = () =>{
    const apiUrl = `https://new-backend.unistory.app/api/data/id/${id}`
    axios.get(apiUrl).then((response)=>{
      setData(response.data)
    })
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <Body>
        <DataCol>
            <Title>
                PERSONAL DATA
            </Title>
            <Label>NAME</Label>
            <Authed>{data.username}</Authed>
            <Label>EMAIL</Label>
            <Authed>{data.email}</Authed>
            <Label>WALLET</Label>
            <Authed>{data.address}</Authed>
        </DataCol>
        <PlanetCol>
        <Planet>
            <Eclipse>
                <img style={{height:'350px'}} alt={'planet'} src={planet}></img>
            </Eclipse>
        </Planet>
        </PlanetCol>
    </Body>
  );
}              

const Body = styled("div", {
    display: 'flex',
    height: '80vh',
    paddingTop: '20vh'
  });
  const DataCol = styled("div", {
    display: 'flex',
    flexDirection:'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width:'50vw',
    height: '60vh'
  });
  const Title = styled("div", {
    color: "White",
    fontSize: '60px',
    marginBottom: '5vh'
  });
  const PlanetCol = styled("div", {
    display: 'flex',
    height: '80vh',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '10vw',
    width:'45vw',

  });
  const Label = styled("label", {
    color: "White",
    fontSize: "20px",
    marginBottom: "5px",
  });
  const Authed = styled("div", {
    fontSize: "30px",
    color: "#E75626",
    marginBottom: "30px",
  });
  const Planet = styled('div',{
    position: 'absolute',
    border: '2px solid orange',
    borderRadius: "50%",
    padding: '30px 30px',
})
const Eclipse = styled('div',{
    border: '2px solid #323232',
    borderRadius: "50%",
    padding: '30px 30px',
    backgroundColor: '#1E1E20'
})
export default PersonalData;