import React from "react";
import { Box, Flex, HStack, chakra } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

export default function CardDash() {
    return (
        <Flex
            bg="#edf3f8"
            _dark={{ bg: "#3e3e3e" }}
            p={50}
            w="full"
            alignItems="center"
            justifyContent="center"
        >
            <Flex
                maxW="md"
                mx="auto"
                bg="white"
                _dark={{ bg: "gray.800" }}
                shadow="lg"
                rounded="lg"
                overflow="hidden"
            >


                <Box bg={'#E3F5FF'} p={{ base: 4, md: 4 }}>
                    <chakra.p
                        mt={2}
                        fontSize="sm"
                        color="gray.600"
                        _dark={{ color: "gray.400" }}
                    >
                        Visão geral
                    </chakra.p>
                    <chakra.h1
                        fontSize="2xl"
                        fontWeight="bold"
                        color="gray.800"
                        _dark={{ color: "white" }}
                    >
                        Dashboard
                    </chakra.h1>
                </Box>


            </Flex>

            {/* <Flex
                maxW="md"
                mx="auto"
                bg="white"
                _dark={{ bg: "gray.800" }}
                shadow="lg"
                rounded="lg"
                overflow="hidden"
            >


                <Box bg={'#E3F5FF'} p={{ base: 4, md: 4 }}>
                    <chakra.p
                        mt={2}
                        fontSize="sm"
                        color="gray.600"
                        _dark={{ color: "gray.400" }}
                    >
                        Gastos
                    </chakra.p>
                    <chakra.h1
                        fontSize="2xl"
                        fontWeight="bold"
                        color="#FFA500"
                        _dark={{ color: "white" }}
                    >
                        total
                    </chakra.h1>
                </Box>


            </Flex> */}

            {/* <Flex
                maxW="md"
                mx="auto"
                bg="white"
                _dark={{ bg: "gray.800" }}
                shadow="lg"
                rounded="lg"
                overflow="hidden"
            >


                <Box bg={'#E3F5FF'} p={{ base: 4, md: 4 }}>
                    <chakra.p
                        mt={2}
                        fontSize="sm"
                        color="gray.600"
                        _dark={{ color: "gray.400" }}
                    >
                        Poupança
                    </chakra.p>
                    <chakra.h1
                        fontSize="2xl"
                        fontWeight="bold"
                        color="#0000FF"
                        _dark={{ color: "white" }}
                    >
                        1,156
                    </chakra.h1>
                </Box>


            </Flex> */}

        </Flex>
    );
};

