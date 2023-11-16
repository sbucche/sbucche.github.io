import React from "react";
import { Box, Text } from "@chakra-ui/react";
import NetliFy from "../images/Tools/NetliFy.png"
import Vercel from "../images/Tools/Vercel.png"
import vsCode from "../images/Tools/vsCode.jpeg"

const Skills = () => {
  // const boxShadowStyle = "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px";
  return (
    <Box id="skills" marginBottom="5%" display={"flex"} flexDirection="column" >
        <Box marginBottom="5%">
          <Text fontSize="45px" marginLeft="30px" marginRight="30px" textAlign="center" color="#cd5ff8" >
            Skills
          </Text>
        </Box>

        <Box
          className="skills"
          display="grid"
          gridTemplateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
            xl: "repeat(7, 1fr)"
          }}
          gap="15px"
          marginX={{ base: "10%", sm: "5%", md: "auto" }}
          width={{ base: "80%", sm: "70%", md: "60%", lg: "80%" }}
        >
          <Box className="skills-card" backgroundColor="white">
            <img
              className="skills-card-img"
              src="https://img.freepik.com/free-icon/html-5_318-698168.jpg?size=626&ext=jpg&ga=GA1.2.1257637200.1681637663&semt=sph"
              alt=""
            />
            <Text className="skills-card-name" fontSize="25px" textAlign="center" color="black">
              HTML
            </Text>
          </Box>
          <Box className="skills-card" backgroundColor="white">
            <img
              className="skills-card-img"
              src="https://img.freepik.com/free-icon/css_318-674222.jpg?size=626&ext=jpg&ga=GA1.2.1257637200.1681637663&semt=sph"
              alt=""
            />
            <Text className="skills-card-name" fontSize="25px" textAlign="center" color="black">
              CSS
            </Text>
          </Box>
          <Box className="skills-card" backgroundColor="white">
            <img
              className="skills-card-img"
              src="https://img.freepik.com/free-icon/nodejs_318-698166.jpg?size=626&ext=jpg&ga=GA1.1.1257637200.1681637663&semt=sph"
              alt=""
            />
            <Text className="skills-card-name" fontSize="25px" textAlign="center" color="black">
              Node.js
            </Text>
          </Box>
          <Box className="skills-card" backgroundColor="white">
            <img
              className="skills-card-img"
              src="https://img.freepik.com/free-icon/molecule_318-312975.jpg?size=626&ext=jpg&ga=GA1.2.1257637200.1681637663&semt=sph"
              alt=""
            />
            <Text className="skills-card-name" fontSize="25px" textAlign="center" color="black">
              React
            </Text>
          </Box>
          <Box className="skills-card" backgroundColor="white">
            <img
              className="skills-card-img"
              src="https://static.javatpoint.com/mongodb/images/mongodb-tutorial.jpg"
              alt=""
            />
            <Text className="skills-card-name" fontSize="25px" textAlign="center" color="black">
              MongoDB
            </Text>
          </Box>
          <Box className="skills-card" backgroundColor="white">
            <img
              className="skills-card-img"
              src="https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png"
              alt=""
            />
            <Text className="skills-card-name" fontSize="25px" textAlign="center" color="black">
              Express
            </Text>
          </Box>
          <Box className="skills-card" backgroundColor="white">
            <img
              className="skills-card-img"
              src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
              alt=""
            />
            <Text className="skills-card-name" fontSize="25px" textAlign="center" color="black">
              Javascript
            </Text>
          </Box>
          <Box className="skills-card" backgroundColor="white">
            <img
              className="skills-card-img"
              src="https://raw.githubusercontent.com/github/explore/5b3600551e122a3277c2c5368af2ad5725ffa9a1/topics/java/java.png"
              alt=""
            />
            <Text className="skills-card-name" fontSize="25px" textAlign="center" color="black">
              JAVA
            </Text>
          </Box>
          <Box className="skills-card" backgroundColor="white">
            <img
              className="skills-card-img"
              src="https://thumbs.dreamstime.com/b/dsa-triangle-shape-logo-design-white-background-creative-initials-letter-concept-271945121.jpg"
              alt=""
            />
            <Text className="skills-card-name" fontSize="25px" textAlign="center" color="black">
              DSA
            </Text>
          </Box>
          
          <Box className="skills-card" backgroundColor="white">
            <img
              className="skills-card-img"
              src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg"
              alt=""
            />
            <Text className="skills-card-name" fontSize="25px" textAlign="center" color="black">
              Redux
            </Text>
          </Box>
        </Box>

      <Box marginBottom="5%">
          <Text fontSize="45px" marginLeft="30px" marginRight="30px" textAlign="center" color="#cd5ff8">
            Tools
          </Text>
        </Box>

        <Box
          className="skills"
          display="grid"
          gridTemplateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
            xl: "repeat(7, 1fr)"
          }}
          gap="15px"
          marginX={{ base: "10%", sm: "5%", md: "auto" }}
          width={{ base: "80%", sm: "70%", md: "60%", lg: "80%" }}
        >
          
          <Box className="skills-card" backgroundColor="white">
            <img
              className="skills-card-img"
              src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU"
              alt=""
            />
            <Text className="skills-card-name" fontSize="25px" textAlign="center" color="black">
              Github
            </Text>
          </Box>
          <Box className="skills-card" backgroundColor="white">
            <img
              className="skills-card-img"
              src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
              alt=""
            />
            <Text className="skills-card-name" fontSize="25px" textAlign="center" color="black">
              Git
            </Text>
          </Box>
          <Box className="skills-card" backgroundColor="white">
            <img
              className="skills-card-img"
              src={vsCode}
              alt=""
            />
            <Text className="skills-card-name" fontSize="25px" textAlign="center" color="black">
              VsCode
            </Text>
          </Box>
          <Box className="skills-card" backgroundColor="white">
            <img
              className="skills-card-img"
              src={NetliFy}
              alt=""
            />
            <Text className="skills-card-name" fontSize="25px" textAlign="center" color="black">
              Netlify
            </Text>
          </Box>
          <Box className="skills-card" backgroundColor="white">
            <img
              className="skills-card-img"
              src={Vercel}
              alt=""
            />
            <Text className="skills-card-name" fontSize="25px" textAlign="center" color="black">
              Vercel
            </Text>
          </Box>
        </Box>
        
    </Box>
  );
};

export default Skills;