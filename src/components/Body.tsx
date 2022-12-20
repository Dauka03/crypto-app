import { styled } from "@stitches/react";
import React from 'react';
import '../style/Body.css';
import planet from '../assets/planet.png';
import { Box, Button, Modal, Typography } from "@mui/material";



function Body() {
    const [open, setOpen] = React.useState(true);
    const handleClose = () => setOpen(false);
  return (
        <MainSection>
           <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box 
        sx={style}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2" 
          sx={{color: '#E75626',fontWeight:700,fontSize: '30px'}}>
            METAMASK EXTENTION
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2,color:'white',fontSize:'20px' }}>
          To work with our application, you have to install the 
            <span id="modal-modal-description" style={{color:'#E75626' }}>
            <a href={'https://metamask.io/download/'} style={{color: '#E75626'}}> Metamask browser extention</a>
          </span>
          </Typography>
          <Button
              sx={{ width: "200px", backgroundColor: "#E75626", fontSize:'20px' ,marginTop:'20px'}}
              variant="contained"
              onClick={handleClose}
            >
              SKIP THIS STEP
            </Button>
        </Box>
      </Modal>
          <MainText>
            <Text1>EXPLORE YOUR OWN PLANET</Text1>
            <Text1>IN <Transparent>OUR NEW</Transparent>  METAVERSE</Text1>
          </MainText>
          <Eclipse4>
          <Planet>
            <Eclipse>
              <Eclipse2>
                <Eclipse3>
                  <img style={{height:'350px'}} alt={'planet'} src={planet}></img>
                </Eclipse3>
              </Eclipse2>
            </Eclipse>
          </Planet>
          </Eclipse4>

          <Stats>
              <StatsTitle>
                ROADMAP STATS
              </StatsTitle>
              <StatsInf><StatsNumber>12, 345</StatsNumber><StatsText>Lorem ipsum dolor</StatsText></StatsInf>
              <StatsInf><StatsNumber>12, 345</StatsNumber><StatsText>Lorem ipsum dolor</StatsText></StatsInf>
              <StatsInf><StatsNumber>12, 345</StatsNumber><StatsText>Lorem ipsum dolor</StatsText></StatsInf>

          </Stats>
            
        </MainSection>
  );
}              

const MainSection = styled("section",{
  height: '90vh',
  display: 'flex',

})
const Planet = styled('div',{
    border: '2px solid #E75626',
    borderRadius: "50%",
    padding: '15px 15px',
})
const Eclipse = styled('div',{
    border: '2px solid #1E1E20',
    borderRadius: "50%",
    padding: '20px 20px',
    backgroundColor: '#1E1E20',


})
const Eclipse2 = styled('div',{
  border: '2px solid #323232',
  borderRadius: "50%",
  padding: '18px 18px',
  backgroundColor: '#1E1E20'
})
const Eclipse3 = styled('div',{
  border: '2px solid #323232',
  borderRadius: "50%",
  padding: '15px 15px',
  backgroundColor: '#1E1E20'
})
const Eclipse4 = styled('div',{
  border: '5px solid #323232',
  borderRadius: "50%",
  padding: '20px 20px',
  position: 'absolute',
    top:'5vh',
    left:'40vw',
})
const MainText = styled("div",{
    display:'flex',
    flexDirection:'column',
    justifyContent: 'center',
    zIndex: 1,
    color: 'transparent'
})
const Text1 = styled("div",{
    fontSize: '56px',
    color: 'White',
    fontFamily: 'Bebas Neue',
    fontWeight: 700,
    lineHeight: '90px',
})
const Transparent = styled("span",{
  color:'transparent',
  textShadow: '-1px 0 #171719, 0 1px white, 1px 0 white, 0 -1px white'
})
const Stats = styled('div',{
  display: 'flex',
  flexDirection: 'column',
  textAlign:'center',
  justifyContent: 'center',
  alignItems:'flex-end',
  width:'20vw',
})
const StatsTitle = styled('div',{
  color:'White',
  fontSize: '20px',
  fontFamily:'Bebas Neue',
  textAlign:'center',
  fontWeight:700

  
})
const StatsInf = styled('div',{
  borderBottom: '2px solid #D2C4C4',
  paddingBottom: '2vh',
  paddingTop: '2vh',

  textAlign:'center',
})

const StatsNumber = styled('div',{
  color: '#E75626',
  paddingBottom: '1vh',
  fontSize: '20px',
  fontFamily:'Bebas Neue',
  fontWeight: 700


})
const StatsText = styled('div',{
  color:'White',
  fontSize: '20px',
  fontFamily:'Bebas Neue'


})
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#262628',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display:'flex',
  flexDirection: 'column',
  alignItems: 'center'
};
export default Body;
