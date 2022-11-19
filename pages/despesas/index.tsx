import { Box, Button, Center, Divider, Heading, Icon, Link, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { RiAddLine, RiDeleteBinLine, RiPencilLine } from "react-icons/ri";
import Footer from "../../src/components/footer";
import WithSubnavigation from "../../src/components/navigation";
import SimpleSidebar from "../../src/components/schiBar";
import { Flex } from "@chakra-ui/react";
import Pagination from "@choc-ui/paginator";




export default function ListaDespesas() {

    return (
        <>
            <SimpleSidebar>
                <WithSubnavigation />
                <Flex w="100%" my="6" mx="auto" px="6" justifyContent={'center'}>
                    <Box flex="1" borderRadius={8} p="8">
                        <Flex mb="1" justify="space-between" align="center">
                            <Heading fontSize="lg" fontWeight="normal">
                                <Text color="blackAlpha.900" fontWeight="bold" >
                                    Lista de Despesas

                                </Text>

                            </Heading>

                            <Button
                                m={5}
                                as="a"
                                size="sm"
                                fontSize="sm"
                                bg="#483D8B"
                                leftIcon={<Icon as={RiAddLine} fontSize="20" color='white' />}
                            >
                                <Text color="whiteAlpha.900" >
                                    Adicionar
                                </Text>

                            </Button>

                        </Flex>
                        <Divider orientation='horizontal' />
                        <Table colorScheme="whiteAlpha">
                            <Thead>
                                <Tr>
                                    <Th color="blackAlpha.900" fontWeight="bold" >Descrição</Th>
                                    <Th color="blackAlpha.900" fontWeight="bold" >Moeda</Th>
                                    <Th color="blackAlpha.900" fontWeight="bold" >Tag</Th>
                                    <Th color="blackAlpha.900" fontWeight="bold" >Valor</Th>

                                    <Th width="8"></Th>
                                    <Th width="8"></Th>
                                </Tr>

                            </Thead>
                            <Divider orientation='horizontal' w="100%" />

                            <Tbody>

                                {/* {data.map((endereco) => ( */}
                                <Tr>
                                    <Td> </Td>
                                    <Td>
                                        <Text fontSize={14} color={'whiteAlpha.900'}></Text>

                                    </Td>
                                    <Td>
                                        <Text fontSize={14} color={'whiteAlpha.900'}></Text>
                                    </Td>
                                    <Td>
                                        <Text fontSize={14} color={'whiteAlpha.900'}></Text>
                                    </Td>

                                </Tr>
                                {/* ))} */}
                            </Tbody>
                        </Table>
                    </Box>

                </Flex>
                <Box flex="1" bg={"#D9D9D9"} borderRadius={10} p="1">
                    <Table colorScheme="whiteAlpha" ml={5}>
                        <Tbody>
                            <Center mt={5}>
                                <Pagination
                                    total={60}
                                    paginationProps={{ display: "flex" }}
                                    colorScheme="blackAlpha.900"
                                    rounded="4"
                                    size="sm"
                                />
                            </Center>

                            <Td >

                                <Button

                                    ml={2}
                                    as="a"
                                    size="sm"
                                    fontSize="sm"
                                    colorScheme="yellow"
                                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                                >
                                    Editar
                                </Button>

                                <Button
                                    mr={1}
                                    as="a"
                                    size="sm"
                                    fontSize="sm"
                                    colorScheme="red"
                                    // onClick={}
                                    leftIcon={
                                        <Icon
                                            as={RiDeleteBinLine}
                                            fontSize="16"

                                        />
                                    }
                                >
                                    Excluir
                                </Button>
                            </Td>

                        </Tbody>
                    </Table>
                </Box>
                <Box w="100%" mt={"13%"}>
                    <Footer />
                </Box>

            </SimpleSidebar>

        </>
    )
}