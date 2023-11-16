
import React from "react";
import homeLogo from "../images/home-main.svg";
import { Center, Text } from "@chakra-ui/react";
import Type from "./type";
import { Button } from "@chakra-ui/react";

const ShaileshWaghResume = require("../Components/Shailesh-Wagh-Resume.pdf");

const Home = () => {
  const onButtonClick = () => {
    // Open in new tab or window
    window.open(ShaileshWaghResume, "_blank");

    // Trigger download
    const link = document.createElement("a");
    link.href = ShaileshWaghResume;
    link.download = "Shailesh-Wagh-Resume.pdf";
    link.click();
  };

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
            My Name is <strong className="main-name">Shailesh Wagh</strong>
          </h1>
          <div className="main-name" style={{ padding: 50, textAlign: "center", fontSize: "2.4em" }}>
            <Type />
          </div>
          <Center>
          <Text className="heading-name">
            Download <strong className="main-name">Resume:-</strong>
          </Text>
          </Center>
          <Center>
          <Button
            backgroundColor="#a891b7"
            _hover={{ bg: "#a891b7", color: "black" }}
            color="white"
            variant="solid"
            onClick={onButtonClick}
            size={["sm", "md"]}
            id="resume-button-2"
          >
            RESUME
          </Button>
          </Center>
        </div>
        <div className="home-imgee">
          <img src={homeLogo} alt="home pic" className="home-imgee" style={{ maxHeight: "450px" }} />
        </div>
      </div>
    </div>
  );
};

export default Home;