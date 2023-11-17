import React from "react";
import {Card,Image,Stack,CardBody,Heading,Text,CardFooter,Button,Box, Center,Link,Grid} from "@chakra-ui/react"
import SkateBoard from "../images/Project/SkateBoard.png"
import CycleShop from "../images/Project/CycleShop.png"
import FootLocker from "../images/Project/FootLocker.png"
import GitHubCalendar from 'react-github-calendar';
import OverStock from "../images/OverStock.png"

const Projects = () => {
  return (
    <div id="projects" >
 <Box marginBottom="3%">
        <Text fontSize="45px" marginLeft="30px" marginRight="30px" textAlign="center" color="#b95b24">
          Projects
        </Text>
      </Box>

{/* Hilling */}
<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  className="project-card"
  w="80%"
  m="auto"
  mb="10px"
>
  <Image
    objectFit='cover'
    maxW={{ lg: '500px',  sm: '200px' }}
    src={OverStock}
    alt='Caffe Latte'
    w="500px"
  />

  <Stack>
    <CardBody>
      {/* <Heading as='ins' class="project-title" size='md'>Hilling Traval Agency</Heading> */}
      <Heading className="project-title" size='md'><Text>OverStock-Clone</Text></Heading>

      <Text className="project-description" py='2'>
          • Developed an e-commerce website similar to Overstock.com
      </Text>
      <Text className="project-description" py='2'>
          • Implemented front-end user interface using HTML, CSS, and JavaScript
      </Text>
      <Text className="project-description" py='2'>
          • Created cart module with functionalities such as removing products and scrolling to top
      </Text>
      <Text className="project-tech-stack" py='2'>
          You can Visit Below Link for more...
      </Text>
    </CardBody>

    <CardFooter>
      <Button className="project-github-link" variant='solid' colorScheme='orange'>
       <a href="https://github.com/hrc1s/OverStock-project_">Github</a>
      </Button>
      &nbsp;&nbsp;&nbsp;
      <Button className="project-deployed-link" variant='solid' colorScheme='orange'>
       <a href="https://6556eb900140ac4c7050284a--helpful-taiyaki-1c814c.netlify.app/">Deployed link</a>
      </Button>
    </CardFooter>
  </Stack>
</Card>

{/* Healthkart */}
<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  className="project-card"
  w="80%"
  m="auto"
  mb="10px"
>
  <Image
    objectFit='cover'
    maxW={{ lg: '500px', sm: '200px' }}
    src={CycleShop}
    alt='Caffe Latte'
    w="500px"
  />

  <Stack>
    <CardBody>
      <Heading className="project-title" size='md'>Specialized Cycle Shop</Heading>
        <Text className="project-description" py='2'>
        Implemented responsive navigation bar that goes across all pages. Developed and designed a responsive home page with clear and appealing visuals
        Ensured efficient data retrieval and management of products. Used HTML, CSS, and JavaScript
        </Text>
        <Text className="project-tech-stack" py='2'>
        You can Visit Below Link for more...
        </Text>
    </CardBody>

    <CardFooter>
    <Button className="project-github-link" variant='solid' colorScheme='orange' mr={2}>
      <a href="https://github.com/Rensi2411/cycle-shop">Github</a>
      </Button>
      <Button className="project-deployed-link" variant='solid' colorScheme='orange'>
        <a href="https://64dc7b507eb4113e4aa4919c--relaxed-toffee-9561a5.netlify.app/index.html">Deployed link</a>
      </Button>
    </CardFooter>
  </Stack>
</Card>

{/* Retax */}
<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  className="project-card"
  w="80%"
  m="auto"
  mb="10px"
>
  <Image
    objectFit='cover'
    maxW={{ lg: '500px', sm: '200px' }}
    src={SkateBoard}
    alt='Caffe Latte'
    w="500px"
  />

  <Stack>
    <CardBody>
      <Heading className="project-title" size='md'><Text>SkateBoard Shop</Text></Heading>

      <Text className="project-description" py='2' textAlign={"left"}>
        Implemented responsive navigation bar and Home page. It gives a appealing look to the website. Used HTML, CSS, JavaScript and React.JS.
      </Text>
      <Text className="project-tech-stack" py='2'>
        You can Visit Below Link for more...
      </Text>
    </CardBody>

    <CardFooter>
      <Button className="project-github-link" variant='solid' colorScheme='orange' mr={2}>
        <a href="https://github.com/sbucche/Skate_Board_Project/tree/main/skateboardshop" >Github</a>
      </Button>
      <Button className="project-deployed-link" variant='solid' colorScheme='orange'>
        <a href="https://retaxcrm.netlify.app/">Deployed link</a>
      </Button>
    </CardFooter>
  </Stack>
</Card>

{/* footlocker */}
<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  className="project-card"
  w="80%"
  m="auto"
  mb="10px"
>
  <Image
    objectFit='cover'
    maxW={{ lg: '500px', sm: '200px' }}
    src={FootLocker}
    alt='Caffe Latte'
    w="500px"
  />

  <Stack>
  <CardBody>
            <Heading className="project-title" size='md'>The perfect latte</Heading>

            <Text className="project-description" py='2'>
            Footlocker Clone is a feature-rich online platform designed to replicate the renowned footwear retailer, Footlocker.
            The clone offers a vast collection of sneakers, athletic shoes, and sportswear from popular brands,
            providing customers with an immersive shopping experience. With intuitive search and filtering options,
            users can easily find their desired products, view detailed product information, and make purchases
            hassle-free. The clone also incorporates secure payment gateways, order tracking, and customer support,
            ensuring a seamless and satisfying shopping journey for sneaker enthusiasts.
            </Text>
            <Text className="project-tech-stack" py='2'>
            You can Visit Below Link for more...
            </Text>
          </CardBody>

          <CardFooter>
            <Button className="project-github-link" variant='solid' colorScheme='orange' mr={2}>
              <a href="https://github.com/Roshankr7249/footlocker">Github</a>
            </Button>
            <Button className="project-deployed-link" variant='solid' colorScheme='orange'>
              <a href="https://heartfelt-clafoutis-70d37c.netlify.app/index.html">Deployed link</a>
            </Button>
          </CardFooter>
  </Stack>
</Card>


<Box m={"auto"}>
        <Box gap={6}>
          <Center mb={"3%"} mt={"3%"}>
            <Link href="https://github.com/sbucche">
              <Image id="github-streak-stats" src="https://github-readme-streak-stats.herokuapp.com/?user=sbucche&stroke=0000&background=#122722"/>
            </Link>
          </Center>
          <Center mb={"3%"}>
            <Image src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=sbucche"/>
          </Center>
        </Box>
        <Grid gridTemplateColumns={["1fr", "repeat(2, 1fr)"]} justifyContent={"space-around"} mb={"3%"}>
          <Center>
            <Image id="github-top-langs" src="https://github-readme-stats.vercel.app/api/top-langs?username=sbucche" />
          </Center>
          <Center>
            <Image src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=sbucche"/>
          </Center>
        </Grid>
        <Grid gridTemplateColumns={["1fr", "repeat(2, 1fr)"]} justifyContent={"space-around"} mb={"3%"}>
          <Center>
            <Image id="github-stats-card" src="https://github-readme-stats.vercel.app/api?username=sbucche" />
          </Center>
          <Center>
            <Image src="https://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=sbucche&cutOffset=8"/>
          </Center>
        </Grid>
        <Box>
          <Center ml={[0,-12]}>
            <GitHubCalendar username= "sbucche" />
          </Center>
        </Box>
      </Box>
    </div>
  );
};

export default Projects;
