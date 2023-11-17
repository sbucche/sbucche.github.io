
import React from "react";
import homeLogo from "../images/home-main.jpeg";
import { Center, Text } from "@chakra-ui/react";
import Type from "./type";
import { Button } from "@chakra-ui/react";


const Home = () => {
 
  return (
    <div id="home">
      <div style={{  display: "flex", justifyContent: "space-around" }}>
        <div>
          <Center>
          <h1 style={{ paddingBottom: 15 }} className="heading">
            Hi There!{"  "}
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
            
          </h1>
          </Center>
          
          <h1 className="heading-name">
            My Name is <strong className="main-name">Shritesh Bucche</strong>
          </h1>
          <div className="main-name" style={{ padding: 50, textAlign: "center", fontSize: "2.4em" }}>
            <Type />
          </div>
          
        </div>
        <div className="home-imgee">
          <img src={homeLogo} alt="home pic" className="home-imgee" style={{ maxHeight: "450px" }} />
        </div>
      </div>
    </div>
  );
};

export default Home;