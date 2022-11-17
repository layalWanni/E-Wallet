import React, { useEffect, useState } from "react";
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

    Text,
    useColorModeValue,
    useToast,
} from "@chakra-ui/react";
// Assets
import { useRouter } from 'next/router';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import fakeFetchApi from "../api";



interface SigInData {
    email: string;
    password: string;
}

const singInScema =
    yup.object().shape({
        email: yup.string().required('Email obrigatório').email('Email inválido'),
        senha: yup.string().required('Senha obrigatória'),
    })

const useUser = () => ({ user: null, loading: false });

export default function SignIn() {
    const {
        formState: { errors },
        register,
        handleSubmit, } = useForm({
            resolver: yupResolver(singInScema)
        });

    // Chakra color mode
    const router = useRouter()
    const textColor = useColorModeValue("gray.400", "white");
    const [num, setNum] = useState('');



    const { user, loading } = useUser()

    const toast = useToast();

    const regexEmail =
        // eslint-disable-next-line no-useless-escape
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexPass = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    const [email, setEmail] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");


    useEffect(() => {
        if (localStorage.getItem("isLogged")) {
            router.push('/login')
        }
        if (!(user || loading)) {
            router.push('/login')
        }
        // eslint-disable-next-line
    }, [user, loading]);

    function handleLogin(event) {
        try {
            event.preventDefault();
            if (regexEmail.test(email) && regexPass.test(password)) {
                const response = fakeFetchApi({ email, password });
                if (response.status === 200) {
                    localStorage.setItem("isLogged", "true");
                    router.push('/wallet')
                } else {
                    toast({
                        title: response.message,
                        status: "error",
                        position: "top-right",
                        duration: 3000,
                        isClosable: true,
                    });
                }
            } else {
                if (!regexEmail.test(email)) {
                    let input = document.getElementById("email-input");
                    toast({
                        title: "Erro no Campo E-mail",
                        description: "padrão Incorreto, Example: (example@gmail.com)",
                        status: "error",
                        position: "top-right",
                        duration: 3000,
                        isClosable: true,
                    });
                }
                if (!regexPass.test(password)) {
                    let input = document.getElementById("password-input");
                    toast({
                        title: "Erro no Campo de Senha, padrão Incorreto",
                        description: "Exemple: a-z, A-Z, 0-9, !@#$*, Mais de 8 Caracteres.",
                        position: "top-right",
                        status: "error",
                        duration: 3000,
                        isClosable: true,
                    });
                }
            }
        } catch (err) {
            toast({
                title: "Erro ao fazer login !!!",
                status: "error",
                position: "top-right",
                duration: 3000,
                isClosable: true,
            });
        }
    }




    return (
        <Flex position='relative' mb='40px' >
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
                        <div >
                            <FormControl >
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
                                    {...register("email")}
                                    onChange={(event) => setEmail(event.target.value)}

                                />
                                <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                                    Senha
                                </FormLabel>
                                <Input
                                    bg='gray.200'
                                    borderRadius={5}
                                    mb='36px'
                                    fontSize='sm'
                                    placeholder='digite a sua senha'
                                    size='lg'
                                    required
                                    {...register("senha")}
                                    min="1"
                                    max="5"
                                    type={showPassword ? "text" : "password"}
                                    onChange={(event) => setPassword(event.target.value)}

                                />

                                <Button
                                    onClick={() => router.push('/dashboard')}
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

                        </div>

                        <Flex
                            flexDirection='column'
                            justifyContent='center'
                            alignItems='center'
                            maxW='100%'
                            mt='0px'>
                            <Text color='#FEAF00' fontWeight='medium'>
                                Não tem uma conta?
                                <Link color='#191970' as='span' ms='5px' fontWeight='bold'>
                                    cadastro
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
