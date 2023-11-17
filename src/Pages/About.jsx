import React from "react";
import myimage from "../images/Shritesh_Photo.jpg";
import { Text, Grid, Center } from "@chakra-ui/react";

const About = () => {
  
  /// Hey 
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
            <h1 style={{ fontSize: "40px", color: "#b95b24", margin: "auto" }}>About</h1>
            Hello, I'm <span style={{ color: "#b95b24" }}>Shritesh Bucche</span>, a determined and versatile Full Stack MERN developer.
            <br /> Dynamic full stack web developer with expertise in{" "}
            <span style={{ color: "#b95b24" }}>MongoDB, Express.js, React.js, Node.js and JavaScript</span> and <span style={{ color: "#b95b24" }}> Java </span>. Proven track record of collaborating with designers and product managers to develop scalable applications that seamlessly integrate frontend and backend components. 
            <br /> Exceptional problem solving and communication skills with a strong focus on code quality and software excellence.
          </Text>
        </Center>
        <Center className="home-imgee">
          <img src={myimage} alt="home pic" className="home-img"  width={"50%"}/>
        </Center>
      </Grid>
      <Center m={"5%"}>
        <div className="heading-name">
          
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