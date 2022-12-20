import { styled } from "@stitches/react";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import { useEthers } from "@usedapp/core";
import { userData } from "./types/userData";
import ClearIcon from "@mui/icons-material/Clear";
import { Link } from "react-router-dom";

function DataSection(props: any) {
  // save name email and isAuth is the session storage, to rerendering page give it from session stroage
  const [name, setName] = useState(
    JSON.parse(sessionStorage.getItem("username"))
  );
  const [email, setEmail] = useState(
    JSON.parse(sessionStorage.getItem("email"))
  );
  const [auth, setAuth] = useState(false);
  const [usersData, setUsersData] = useState([]);
  const { items }: any = props.userData; //getting data from props
  const { account } = useEthers(); //getting account token from metamask
  const currentUser: userData = {
    id: 100, // I should use uudiv but current user is 1 and I give it constant. (I KNOW THAT IS BAD PRACTISE)
    username: name,
    email: email,
    address: account,
  };
  useEffect(() => {
    setUsersData(items);
  }, [items]);
  useEffect(() => {
    //  new array with authed user
    setUsersData([currentUser, ...usersData]);
  }, []);
  const handleChangeName = (event: any) => {
    setName(event.target.value);
  };
  const handleChangeEmail = (event: any) => {
    setEmail(event.target.value);
  };
  const handleClick = () => {
    if (account != null) {
      setAuth(true);
      //when we click we save in session storage
      sessionStorage.setItem("auth", JSON.stringify(true));
      sessionStorage.setItem("username", JSON.stringify(name));
      sessionStorage.setItem("email", JSON.stringify(email));

      setUsersData([currentUser, ...usersData]);
    } else {
      alert("You should connect to METAMASK");
    }
  };
  const addUserToList = () => {
    let isUser = false;
    usersData.map((user: userData) => {
      if (user.username == name && user.email == email) {
        isUser = true;
      }
    });
    if (!isUser) setUsersData([currentUser, ...usersData]);
    else alert("User is already in the list");
  };
  const deleteOnClick = (id: number) => {
    const newUsersData = [...usersData].filter(
      (item: userData) => item.id !== id
    );
    setUsersData(newUsersData);
  };
  return (
    <MainSection>
      <RegistrationColumn>
        <TitleReg>BETA TEST REGISTRATION</TitleReg>
        <Descriptopn>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </Descriptopn>
        {sessionStorage.getItem("auth") == "true" ? (
          <>
            <Label>NAME</Label>
            <Authed>{JSON.parse(sessionStorage.getItem("username"))}</Authed>
            <Label>EMAIL</Label>
            <Authed>{JSON.parse(sessionStorage.getItem("email"))}</Authed>
            <Button
              sx={{ width: "200px", backgroundColor: "#E75626" }}
              variant="contained"
              onClick={addUserToList}
            >
              LIST ME TO THE TABLE
            </Button>
          </>
        ) : (
          <>
            <Form>
              <Label>NAME</Label>
              <Input onChange={handleChangeName}></Input>
              <Label>EMAIL</Label>
              <Input onChange={handleChangeEmail}></Input>
              <Button
                onClick={handleClick}
                sx={{ width: "200px", backgroundColor: "#E75626" }}
                variant="contained"
              >
                GET EARLY ACCCESS
              </Button>
            </Form>
          </>
        )}
      </RegistrationColumn>
      {sessionStorage.getItem("auth") == "true" ? (
        <DataColumn>
          <TitleTable>
            Participation listing (enable only for participants)
          </TitleTable>
          <Table>
            <thead>
              <TableRow>
                <TableCol>NAME</TableCol>
                <TableCol style={{ marginRight: "5vw" }}>EMAIL</TableCol>
                <TableCol>WALLET</TableCol>
              </TableRow>
            </thead>
            <TableBody>
              {usersData ? (
                usersData.map((item: userData) =>
                  item.username == name && item.email == email ? (
                    <TableRow key={item.id}>
                      <TableCol style={{ color: "#E75626" }}>
                        {item.username}
                      </TableCol>
                      <TableCol
                        style={{ color: "#E75626", marginRight: "6vw" }}
                      >
                        {item.email}
                      </TableCol>
                      <TableCol style={{ color: "#E75626" }}>
                        {item.address?.substring(0, 15)}...
                      </TableCol>
                      <ClearButton onClick={() => deleteOnClick(item.id)}>
                        <ClearIcon></ClearIcon>
                      </ClearButton>
                    </TableRow>
                  ) : (
                    <Link to={`/data/id/${item.id}`}>
                      <TableRow key={item.id}>
                        <TableCol>{item.username}</TableCol>
                        <TableCol style={{ marginRight: "6vw" }}>
                          {item.email}
                        </TableCol>
                        <TableCol>{item.address?.substring(0, 15)}...</TableCol>
                      </TableRow>
                    </Link>
                  )
                )
              ) : (
                <></>
              )}
            </TableBody>
          </Table>
        </DataColumn>
      ) : (
        <></>
      )}
    </MainSection>
  );
}

const MainSection = styled("section", {
  height: "90vh",
  display: "flex",
});

const RegistrationColumn = styled("div", {
  display: "flex",
  width: "40vw",
  flexDirection: "column",
  marginRight: "5vw",
});
const TitleReg = styled("div", {
  color: "#E75626",
  fontSize: "35px",
  paddingBottom: "30px",
});
const TitleTable = styled("div", {
  color: "White",
  fontSize: "25px",
  paddingBottom: "30px",
});
const Table = styled("table", {
  overflow: "auto",
  height: "20vh",
});
const TableBody = styled("tbody", {
  overflow: "auto",
  maxWidth: "50vw",
  maxHeight: "50vh",
  display: "flex",
  flexDirection: "column",
});
const TableRow = styled("tr", {
  display: "flex",
  borderBottom: "1px solid white",
  paddingBottom: "2vh",
  marginBottom: "2vh",
});
const TableCol = styled("th", {
  color: "White",
  display: "flex",
  width: "15vw",
  justifyContent: "flex-start",
});
const Descriptopn = styled("div", {
  fontSize: "20px",
  color: "White",
  paddingBottom: "30px",
});
const Form = styled("form", {
  display: "flex",
  flexDirection: "column",
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
const Input = styled("input", {
  borderRadius: "25%",
  backgroundColor: "transparent",
  width: "400px",
  height: "30px",
  marginBottom: "30px",
  color: "White",
  fontSize: "20px",
});

const DataColumn = styled("div", {
  display: "flex",
  width: "50vw",
  flexDirection: "column",
});

const ClearButton = styled("button", {
  backgroundColor: "transparent",
  border: "none",
  color: "White",
});
export default DataSection;
