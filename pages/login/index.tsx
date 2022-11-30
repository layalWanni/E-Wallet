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
} from "@chakra-ui/react";
import { useRouter } from 'next/router';
import React, { useContext } from "react";
import { AuthContext } from "../../src/contaxts/AuthContext";

export interface Props {
    shouldRemember: boolean;
    onUsernameChange: (email: string) => void;
    onPasswordChange: (password: string) => void;
    onSubmit: (email: string, password: string) => void;
}



export default function SignIn(props: Props) {

    const router = useRouter();

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setEmail(value);
        props.onUsernameChange(value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setPassword(value);
        props.onPasswordChange(value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        props.onSubmit(email, password);
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
                            <FormControl data-testid="login-form" onSubmit={handleSubmit} >
                                <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                                    Email
                                </FormLabel>
                                <Input
                                    name="email"
                                    bg='gray.200'
                                    borderRadius={5}
                                    mb='24px'
                                    fontSize='sm'
                                    type='text'
                                    placeholder='liomanjate@gmail.com'
                                    size='lg'
                                    value={email}
                                    onChange={handleUsernameChange}

                                />
                                <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                                    Senha
                                </FormLabel>
                                <Input
                                    data-testid="password"
                                    bg='gray.200'
                                    borderRadius={5}
                                    mb='36px'
                                    fontSize='sm'
                                    type='password'
                                    placeholder='digite a sua senha'
                                    size='lg'
                                    required
                                    name="password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                />

                                <Button
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
