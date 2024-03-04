import { Container, Heading, Input, VStack,Button, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container maxWidth={'container.xl'} height={'100vh'} padding={'16'}>
        <form>
            <VStack alignItems={'stretch'} spacing={'8'} width={['full','96']} margin={'auto'} my={'16'}>
                <Heading>Welcome Back</Heading>
                <Input required placeholder='Enter your Email' type='email'/>
                <Input required placeholder='Enter your passwords' type='password'/>
                <Button variant={'link'} alignSelf={'flex-end'}  color='green'>
                    <Link to={'/forgetpassword'}>Forget Password</Link>
                </Button>
                <Button colorScheme={'green'}>
                    LogIn
                </Button>
                <Text alignSelf={'flex-end'}>New User?{' '}
                <Button variant={'link'} alignSelf={'flex-end'} color='green'>
                    <Link to={'/signup'}>SignUp</Link>
                </Button>
                </Text>
            </VStack>
        </form>
    </Container>
  )
}

export default Login;