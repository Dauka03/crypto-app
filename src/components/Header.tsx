import { styled } from "@stitches/react";
import React from "react";
import ButtonConnect from "./buttons/ButtonConnect";
function Header() {
  return (
        <HeaderSection>
           <Logo>LOGO</Logo>
           <ButtonConnect/>
        </HeaderSection>
  );
}              

const HeaderSection = styled("header",{
  height: '10vh',
  width:'85vw',
  display: 'flex',
  position: 'fixed',
  zIndex: 2,
  
  
})
const Logo = styled("div", {
  display: 'flex',
  backgroundColor: '#5A5A5A',
  color: "White",
  border: "2px solid #C7C7C7",
  width: '199px',
  height: '44px',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  top: '14px',
});
export default Header;
