import React from 'react';
import { Box,Button,HStack,Heading,Stack, VStack,Input,Text } from '@chakra-ui/react';
import {AiOutlineSend} from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={"16"} color={'white'}>
        <Stack direction={['column','row']}>
            <VStack w={'full'}>
                <Heading size='md' textTransform={'uppercase'}>
                    Subscribe to get updates 
                </Heading>
                <HStack>
                    <Input placeholder="Enter the email here"/>
                    <Button p={'0'} colorScheme={'green'} borderRadius={'0 20px 20px 0'}>
                        <AiOutlineSend size={'20'} />
                    </Button>
                </HStack>
            </VStack>
            <VStack  w={'full'} borderLeft={['none','1px solid white']} borderRight={['none','1px solid white']}>
            <Heading textTransform={'uppercase'} textAlign={'center'}>
                Video Hub
            </Heading>
            <Text> All rights reserved</Text>
            </VStack>
            <VStack w={'full'}>
                <Heading size={'md'} textTransform={'uppercase'}>
                    Social Media
                </Heading>
                <Button variant={'link'} colorScheme={'green'}>
                    <a href="https://www.youtube.com/">Youtube</a>
                </Button>
                <Button variant={'link'} colorScheme={'green'}>
                    <a href="https://www.instagram.com/">Instagram</a>
                </Button>
                <Button variant={'link'} colorScheme={'green'}>
                    <a href="https://www.facebook.com/">Facebook</a>
                </Button>
            </VStack>
        </Stack>
    </Box>
  )
}

export default Footer;