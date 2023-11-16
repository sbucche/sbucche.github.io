import React from "react";
import myimage from "../images/myimage.jpeg";
import { Text, Grid, Center } from "@chakra-ui/react";

const About = () => {
  

  return (
    <div id="about" className="about section">
      <Grid
        id="about-inner"
        gridTemplateColumns={["repeat(2, 1fr)","1rf"]}
        ml={[0,"10%"]}
      >
        <Center>
          <Text
            id="user-detail-intro"
            fontSize={"2xl"}
          >
            <h1 style={{ fontSize: "40px", color: "#cd5ff8", margin: "auto" }}>About</h1>
            Hello, I'm <span style={{ color: "#cd5ff8" }}>Shailesh Wagh</span>, a determined and versatile Full Stack MERN developer.
            <br /> With a passion for web development and a solid foundation in{" "}
            <span style={{ color: "#cd5ff8" }}>MongoDB, Express.js, React.js, Node.js and JavaScript</span> and <span style={{ color: "#cd5ff8" }}> Java </span>, I'm committed to creating impactful and user-centric applications.
            <br /> I thrive on continuous learning, embracing challenges, and collaborating with like-minded professionals to build innovative solutions.
            <br /> Let's connect and explore the possibilities together.
          </Text>
        </Center>
        <Center className="home-imgee">
          <img src={myimage} alt="home pic" className="home-img"  width={"50%"}/>
        </Center>
      </Grid>
      <Center m={"5%"}>
        <div className="heading-name">
          {/* <Text>
            Download <strong className="main-name">Resume:</strong>
          </Text> */}
          {/* <Button
            backgroundColor="#a891b7"
            _hover={{ bg: "#a891b7", color: "black" }}
            color="white"
            variant="solid"
            // onClick={onButtonClick}
            size={["sm", "md"]}
            id="resume-button-2"
          >
            RESUME
          </Button> */}
        </div>
      </Center>
      <style>
        {`
          @media (max-width: 767px) {
            #about-inner {
              display: grid;
              grid-template-columns: repeat(1, 1fr);
              gap: 10px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default About;