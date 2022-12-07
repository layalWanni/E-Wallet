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
import { useRouter } from 'next/router';
import React, { useState, useEffect } from "react";
import { AuthContext } from "../../src/contaxts/AuthContext";
import fakeFetchApi from "../api";


export interface Props {
    shouldRemember: boolean;
    onUsernameChange: (email: string) => void;
    onPasswordChange: (password: string) => void;
    onSubmit: (email: string, password: string) => void;
}


export default function SignIn() {

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
            router.push("/dashboard");
        }
        // eslint-disable-next-line
    }, []);

    function handleLogin(event) {
        try {
            event.preventDefault();
            if (regexEmail.test(email) && regexPass.test(password)) {
                const response = fakeFetchApi({ email, password });
                if (response.status === 200) {
                    localStorage.setItem("isLogged", "true");
                    router.push("/dashboard");
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


    const router = useRouter();


    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setEmail(value);

    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setPassword(value);

    };



    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const result = fakeFetchApi({
            email,
            password,
        })
        if (result.status === 200) {
            router.push('/dashboard')
        }
    };




    const textColor = useColorModeValue("gray.400", "white");

    return (
        <Flex position='relative' mb='40px' >
            <Flex
                h={{ sm: "initial", md: "75vh", lg: "85vh" }}
                w='100%'
                maxW='1044px'
                mx='auto'
                justifyContent='space-between'
                mb='30px'
                pt={{ sm: "100px", md: "0px" }}

            >
                <Flex
                    alignItems='center'
                    justifyContent='start'
                    style={{ userSelect: "none" }}
                    w={{ base: "100%", md: "50%", lg: "42%" }}
                >
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
                            <FormControl data-testid="login-form" onSubmit={handleLogin} >
                                <div>
                                    <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                                        Email
                                    </FormLabel>
                                    <Input
                                        required
                                        onChange={(event) => setEmail(event.target.value)}
                                        name="email"
                                        bg='gray.200'
                                        borderRadius={5}
                                        mb='24px'
                                        fontSize='sm'
                                        type='email'
                                        placeholder='liomanjate@gmail.com'
                                        size='lg'
                                        value={email}


                                    />

                                </div>
                                <div>
                                    <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                                        Senha
                                    </FormLabel>
                                    <Input
                                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                        data-testid="password"
                                        bg='gray.200'
                                        borderRadius={5}
                                        mb='36px'
                                        fontSize='sm'
                                        type={showPassword ? "text" : "password"}
                                        placeholder='digite a sua senha'
                                        size='lg'
                                        required
                                        name="password"
                                        value={password}
                                        onChange={(event) => setPassword(event.target.value)}
                                    />
                                    <p id="error-password">Senha requerido</p>

                                </div>
                                <Button
                                onClick={handleLogin}

                                    fontSize='10px'
                                    type='submit'
                                    bg='#191970'
                                    w='100%'
                                    h='45'
                                    mb='20px'
                                    data-testid="submit"
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
