import { Box, Button, Center, Divider, Heading, Icon, Link, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { RiAddLine, RiDeleteBinLine, RiPencilLine } from "react-icons/ri";
import Footer from "../../src/components/footer";
import WithSubnavigation from "../../src/components/navigation";
import SimpleSidebar from "../../src/components/schiBar";
import { Flex } from "@chakra-ui/react";
import Pagination from "@choc-ui/paginator";
import { useDispatch, useSelector } from "react-redux";
import { changeDespesas, returnAllDespesas } from "../../store/outcomesSlice";
import { changeCurrencies, returnAllCurrenties } from "../../store/currenciesData";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import { ToastContainer, toast } from "react-toastify";
import { findAllDespesas } from "../api/despesas";

export default function ListaDespesas() {
    const router = useRouter()

    const despesas = useSelector(returnAllDespesas);
    const currenciesData = useSelector(returnAllCurrenties);
    
    const dispatch = useDispatch();
    const [totalDespesa, setTotalDespesa] = useState(0);
    
  
    function trataDadosApi(data){
      var currencies = {};
      Object.keys(data).map((currencyKey) => (
          currencies[currencyKey] = {
            code: data[currencyKey].code,
            bid: parseFloat(data[currencyKey].bid),
            label: `${
              String(data[currencyKey].name).split("/")[0]
            } ( ${currencyKey} )  `,
          }
        )
      )
      return currencies;
    }
    
  async function getCurrencies() {
    try {
      const response = await axios.get("https://economia.awesomeapi.com.br/json/all");
      if (response.status === 200){
        dispatch(changeCurrencies(trataDadosApi(response.data)));
        toast.success("Dados Atualizados com Sucesso");
      }else{
        toast.error("Erro ao Consumir a API");
      }
    } catch (err) {
      toast.error(err);
    }
  }
  useEffect(() => {
    if (!localStorage.getItem("isLogged")) {
        router.push("/despesas");
    } else {
      const lista_despesas = findAllDespesas();
      dispatch(changeDespesas(lista_despesas));
    }
    getCurrencies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function getValorCotacao(moeda, valor){
    var valorCotacao = currenciesData[moeda].bid.toFixed(2)
    return parseFloat((valor * valorCotacao).toFixed(2))
  }

  useEffect(() => {
    setTotalDespesa(
      despesas
        .reduce((acc, curr) => {
          !curr.moeda.includes('REAL') ? acc += getValorCotacao(curr.moeda, curr.valor) : acc += curr.valor;
          return acc;
        }, 0)
        .toFixed(2)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [despesas]);


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
                                onClick={() => router.push('/despesas/criar')}
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

                            {despesas.map((despesa) => (
                                <Tr key={despesa.id}>
                                    <Td> </Td>
                                    <Td>
                                        <Text fontSize={14} color={'whiteAlpha.900'}>{despesa.valor}</Text>

                                    </Td>
                                    <Td>
                                        <Text fontSize={14} color={'whiteAlpha.900'}>{despesa.descricao}</Text>
                                    </Td>
                                    <Td>
                                        <Text fontSize={14} color={'whiteAlpha.900'}>{despesa.moeda}</Text>
                                    </Td>
                                    <Td>
                                        <Text fontSize={14} color={'whiteAlpha.900'}>{despesa.metodo}</Text>
                                    </Td>

                                </Tr>
                               ))}
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