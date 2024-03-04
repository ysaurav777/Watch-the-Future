import { Container, Heading, Input, VStack,Button, Text, Avatar } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <Container maxWidth={'container.xl'} height={'100vh'} padding={'16'}>
            <form>
                <VStack alignItems={'stretch'} spacing={'8'} width={['full','96']} margin={'auto'} my={'16'}>
                    <Heading textTransform={'uppercase'}>Video hub</Heading>
                    <Avatar alignSelf={'center'} boxSize={'32'}/>
                    <Input required placeholder='Enter your Full Name' type='text'/>
                    <Input required placeholder='Enter your Email' type='email'/>
                    <Input required placeholder='Enter your passwords' type='password'/>
                    <Button colorScheme={'green'}>
                        SignUp
                    </Button>
                    <Text alignSelf={'flex-end'}>Already Sign Up?{' '}
                    <Button variant={'link'} alignSelf={'flex-end'} color='green'>
                        <Link to={'/login'}>LogIn</Link>
                    </Button>
                    </Text>
                </VStack>
            </form>
        </Container>
    )
}

export default Signup;