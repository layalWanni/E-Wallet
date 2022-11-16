import React from "react";
// Chakra imports
import {
    Box,
    Flex,
    Button,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Switch,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
// Assets
import signInImage from "assets/img/signInImage.png";

function SignIn() {
    // Chakra color mode
    const titleColor = useColorModeValue("teal.300", "teal.200");
    const textColor = useColorModeValue("gray.400", "white");
    return (
        <Flex position='relative' mb='40px'>
            <Flex
                h={{ sm: "initial", md: "75vh", lg: "85vh" }}
                w='100%'
                maxW='1044px'
                mx='auto'
                justifyContent='space-between'
                mb='30px'
                pt={{ sm: "100px", md: "0px" }}>
                <Flex
                    alignItems='center'
                    justifyContent='start'
                    style={{ userSelect: "none" }}
                    w={{ base: "100%", md: "50%", lg: "42%" }}>
                    <Flex
                        direction='column'
                        w='100%'
                        background='transparent'
                        p='48px'
                        mt={{ md: "150px", lg: "80px" }}>
                        <Heading color='#191970' fontSize='32px' mb='10px'>
                            E-WALET
                        </Heading>
                        <Text
                            mb='36px'
                            ms='4px'
                            color={textColor}
                            fontWeight='bold'
                            fontSize='14px'>
                            Seja bem vindo!
                        </Text>
                        <FormControl>
                            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                                Email
                            </FormLabel>
                            <Input
                                bg='gray.200'
                                borderRadius={5}
                                mb='24px'
                                fontSize='sm'
                                type='text'
                                placeholder='liomanjate@gmail.com'
                                size='lg'
                            />
                            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                                Senha
                            </FormLabel>
                            <Input
                                 bg='gray.200'
                                borderRadius={5}
                                mb='36px'
                                fontSize='sm'
                                type='password'
                                placeholder='digite a sua senha'
                                size='lg'
                            />
                          
                            <Button
                                fontSize='10px'
                                type='submit'
                                bg='#191970'
                                w='100%'
                                h='45'
                                mb='20px'
                                color='white'
                                mt='20px'
                                _hover={{
                                    bg: "teal.200",
                                }}
                                _active={{
                                    bg: "teal.400",
                                }}>
                                Entrar
                            </Button>
                        </FormControl>
                        <Flex
                            flexDirection='column'
                            justifyContent='center'
                            alignItems='center'
                            maxW='100%'
                            mt='0px'>
                            <Text color='#FEAF00' fontWeight='medium'>
                            Não tem uma conta?
                                <Link color='#191970' as='span' ms='5px' fontWeight='bold'>
                                    Sign Up
                                </Link>
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
                <Box
                    display={{ base: "none", md: "block" }}
                    overflowX='hidden'
                    h='100%'
                    w='40vw'
                    position='absolute'
                    right='0px'>
                    <Box
                        bgImage={'https://static-cse.canva.com/blob/759754/IMAGE1.jpg'}
                        w='100%'
                        h='100%'
                        bgSize='cover'
                        bgPosition='50%'
                        position='absolute'
                        bg='#191970'
                        ></Box>
                </Box>
            </Flex>
        </Flex>
    );
}

export default SignIn;