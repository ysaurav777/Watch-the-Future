import React from 'react'
import { Box, Container, Heading,Image } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../Assets/1.jpg';
import img2 from '../Assets/2.jpg';
import img3 from '../Assets/3.jpg';
import img4 from '../Assets/4.jpg';
import img5 from '../Assets/5.png';
import {
    Stack,Text,
  } from '@chakra-ui/react';

const headingOptions =  {
 pos:"absolute",
 left:"50%",
 top:"50%",
 transform :"translate(-50%,-50%)",
 texttransform:"uppercase",
 p:"4",
 size:"2xl"
}

const Home = () => {
    const MyCarousel = () => (
        <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>
            <Box w={'full'} h={'100vh'}>
                <Image src={img1} />
                <Heading bgColor={"blackAlpha.600"} color={'white'} {...headingOptions}>Watch where are you going</Heading>
            </Box>
            <Box w={'full'} h={'100vh'}>
                <Image src={img2} />
                <Heading bgColor={"blackAlpha.600"} color={'white'} {...headingOptions}>Watch where are you going</Heading>
            </Box>
            <Box w={'full'} h={'100vh'}>
                <Image src={img3} />
                <Heading bgColor={"blackAlpha.600"} color={'white'} {...headingOptions}>Watch where are you going</Heading>
            </Box>
            <Box w={'full'} h={'100vh'}>
                <Image src={img4} />
                <Heading bgColor={"blackAlpha.600"} color={'white'} {...headingOptions}>Watch where are you going</Heading>
            </Box>
            <Box w={'full'} h={'100vh'}>
                <Image src={img5} />
                <Heading bgColor={"blackAlpha.600"} color={'white'} {...headingOptions}>Watch where are you going</Heading>
            </Box>
        </Carousel>
    )

  return (
    <Box>
        <MyCarousel/>
        <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
            <Heading textTransform={'uppercase'} m={'auto'} py={'2'} w={'fit-content'} borderBottom={'2px solid'}>Services</Heading>
            <Stack h={'full'} p={'4'} alignItem={'center'} directions={['column','row']}>
                <Image src={img5} h={['40','900']} filter={'hue-rotate(100deg)'}/>
                <Text letterSpacing={'widest'} lineHeight={"190%"} p={['4','16']} textAlign={'center'}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nemo
            tempora deleniti quod, est eos veniam autem asperiores rem, nam
            laudantium ut, similique ducimus amet sequi et voluptas iusto rerum
            at aliquid numquam corporis ipsa reprehenderit? Porro iusto magnam,
            sit vero deleniti, non nemo rem accusamus neque, quibusdam ab.
            Libero, reprehenderit recusandae labore eaque, aspernatur aliquid
            modi soluta ullam voluptatum unde repellat in molestias quod?
            Doloribus ratione illum quisquam earum consequuntur nam voluptatem,
            velit culpa maiores. Inventore esse illum excepturi dolores est
            natus aliquid maiores sunt omnis deserunt accusantium amet enim eos
            adipisci minima hic, nam provident quo aperiam quasi vel?
            Dignissimos accusantium aliquid aut vel explicabo voluptatum
            molestias fugit harum reprehenderit incidunt. Quis cumque explicabo
            omnis officiis autem dolorum!
                </Text>
            </Stack>
        </Container>
    </Box>
  )
}

export default Home