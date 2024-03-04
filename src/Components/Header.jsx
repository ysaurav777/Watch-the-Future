import React from 'react';
import {Link} from 'react-router-dom';
import {BiMenuAltLeft} from 'react-icons/bi';
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
  } from '@chakra-ui/react';

const Header = () => {

    const {isOpen,onOpen,onClose} = useDisclosure();

  return (
    <>
        <Button pos={'fixed'}
        top={'5'}
        left={'5'}
        zIndex={'overlay'}
        colorScheme='green'
        p={'0'}
        h={'10'}
        w={'10'}
        borderRadius={'full'}
        onClick={onOpen}
        >
            <BiMenuAltLeft size={'25'}/>
        </Button>
        <Drawer isOpen={isOpen} placement='left'  onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>For You</DrawerHeader>
                <DrawerBody>
                    <VStack alignItems={'flex-start'}>
                        <Button onClick={onClose} variant={'ghost'} colorScheme={'green'}>
                            <Link to={'/'}>Home</Link>
                        </Button>
                        <Button onClick={onClose} variant={'ghost'} colorScheme={'green'}>
                            <Link to={'/videos'}>Videos</Link>
                        </Button>
                        <Button onClick={onClose} variant={'ghost'} colorScheme={'green'}>
                            <Link to={'/videos?category=free'}>Free Videos</Link>
                        </Button>
                        <Button onClick={onClose} variant={'ghost'} colorScheme={'green'}>
                            <Link to={'/upload'}>Upload</Link>
                        </Button>
                    </VStack>
                    <VStack pos={'absolute'} bottom={'10'} left={'20'}>
                        <Button onClick={onClose} colorScheme={'green'}>
                            <Link to={'/login'}>Log In</Link>
                        </Button>
                        <Button onClick={onClose} colorScheme={'green'} variant={'outline'}>
                            <Link to={'/signup'}>Sign Up</Link>
                        </Button>
                    </VStack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    </>
  )
};

export default Header;