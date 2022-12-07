import { Box, Button, Divider, Flex, FormControl, FormLabel, Heading, HStack, Input, Select, SimpleGrid, Stat, StatGroup, StatLabel, StatNumber, Text, Toast, useDisclosure, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Footer from "../../../src/components/footer";
import WithSubnavigation from "../../../src/components/navigation";
import SimpleSidebar from "../../../src/components/schiBar";
import { createDespesa } from "../../../store/outcomesSlice";
import { returnAllPaymentMethods } from "../../../store/paymentMethodSlice";
import { returnAllTags } from "../../../store/paymentTagSlice";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { ArrowForwardIcon } from "@chakra-ui/icons";





export default function AdicionarDespesa() {
    const [dadosApi, setDadosApi] = useState({});
    
    const [valorConvertido, setValorConvertido] = useState(0);
    const [optionsSelectMoeda, setOptionsSelectMoeda] = useState([]);
    const tags = useSelector(returnAllTags);
    const [isLoading, setIsLoading] = useState(false);
    const [options, setOptions] = useState(tags);
    const [value, setValue] = useState(null);
    const metodos_pagamento = useSelector(returnAllPaymentMethods);
    const dispatch = useDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure();


    const [despesa, setDespesa] = useState({
        valor: 0,
        descricao: "",
        moeda: "",
        metodo: "",
        tag: "",
    });

    const createOption = (label) => ({
        label,
        value: label.toLowerCase(),
    });

    const setDadosApiState = (data) => {
        var currencies = {};
        Object.keys(data).map((currencyKey) => (
            currencies[currencyKey] = {
                code: data[currencyKey].code,
                bid: parseFloat(data[currencyKey].bid),
                label: `${String(data[currencyKey].name).split("/")[0]
                    } ( ${currencyKey} )  `,
            }
        )
        )
        setDadosApi(currencies);
    }

    async function getDadosApi() {
        const response = await axios.get("https://economia.awesomeapi.com.br/json/all");
        if (response.status === 200) {
            var data = response.data;
            setDadosApiState(data)
            var optionsMoeda = [
                Object.keys(data).map((currencyKey) => {
                    return { value: currencyKey, label: `${String(data[currencyKey].name).split("/")[0]} ( ${currencyKey} )` }
                })
            ];
            setOptionsSelectMoeda([{ value: 'REAL', label: 'Real Brasileiro (R$)' }, ...optionsMoeda[0]]);
        }
    };

    const adicionarDespesa = () => {
        dispatch(createDespesa({ id: uuidv4(), ...despesa, tag: value.label }));
        setDespesa({
            valor: 0,
            descricao: "",
            moeda: "",
            metodo: "",
            tag: "",
        });
        setValue(null);
        onClose();
    };

    const handleCreate = (inputValue) => {
        setIsLoading(true);
        setTimeout(() => {
            const newOption = createOption(inputValue);
            setIsLoading(false);
            setOptions((prev) => [...prev, newOption]);
            setValue(newOption);
        }, 1000);
    };

    const handleChangeSelectMoeda = (prop) => (value) => {
        setDespesa({ ...despesa, [prop]: value.value })
    };

    const handleChangeSelect = (prop) => (value) => {
        setDespesa({ ...despesa, [prop]: value.label })
    };

    useEffect(() => {
        getDadosApi();
    }, [ getDadosApi])

    useEffect(() => {
        if (!despesa.moeda || despesa.moeda === 'REAL') {
            setValorConvertido(despesa.valor)
        } else {
            var valorCotacao = dadosApi[despesa.moeda].bid.toFixed(2)
            setValorConvertido((despesa.valor * valorCotacao).toFixed(2))
        }
        
    }, [despesa.valor])

    useEffect(()=>{
        if (despesa.moeda && despesa.moeda !== 'REAL' && despesa.valor){
          var valorCotacao = dadosApi[despesa.moeda].bid.toFixed(2)
          setValorConvertido((despesa.valor * valorCotacao).toFixed(2))
        }else if (despesa.moeda === 'REAL' && despesa.valor){
          setValorConvertido(despesa.valor.toFixed(2))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [despesa.moeda])

    return (
        <div><SimpleSidebar>
            <WithSubnavigation />
            <Flex w="100%" my="6" mx="auto" maxWidth={1480} px="6">
                <Box
                    flex="1" borderRadius={8} p="8"
                // onSubmit={handleSubmit(criarDespesa)}
                >
                    <Heading fontSize="lg" fontWeight="normal">
                        <Text color="#000000" mb={-10} fontWeight={'bold'} onClick={adicionarDespesa}>
                            Adicionar Despesas
                        </Text>

                        <Flex justify="flex-end" >
                            <Button
                                type="submit"
                                bg="#808080"
                                ml="4"
                            >
                                <Text color="whiteAlpha.900">
                                    cancelar
                                </Text>
                            </Button>
                            <HStack spacing="4">
                                <Button

                                    type="submit"
                                    bg="#191970"
                                >
                                    <Text color="whiteAlpha.900" >
                                        Salvar
                                    </Text>
                                </Button>
                            </HStack>
                        </Flex>
                    </Heading>
                    <Divider my="6" borderColor="whiteAlpha.200" />
                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing="8" width="100%">
                            <Input
                                bg="#DFE3E8"
                                placeholder="Descrição"
                                name="Descrição"
                                type="text"
                                onChange={(event) =>
                                    setDespesa({ ...despesa, descricao: event.target.value })
                                }
                            />
                            <Input
                                bg="#DFE3E8"
                                placeholder="valor"
                                type="Number"
                                onChange={(event) =>
                                    setDespesa({
                                        ...despesa,
                                        valor: parseFloat(event.target.value),
                                    })
                                }
                            />
                            <Select
                                bg='#DFE3E8'
                                alignContent={'center'}
                                h="50px"
                                colorScheme={'whiteAlpha.900'}
                                id="tag"
                                name="moeda"
                                autoComplete="Tag"
                                placeholder="Selecione a tag"
                                focusBorderColor="brand.400"
                                shadow="sm"
                                size="sm"
                                w="full"
                                rounded="md"
                                isClearable
                                isDisabled={isLoading}
                                isLoading={isLoading}
                                onChange={(newValue) => setValue(newValue)}
                                onCreateOption={handleCreate}
                                options={options}
                                value={value}

                            />
                        </SimpleGrid>
                        <SimpleGrid minChildWidth="240px" spacing="8" width="100%" >
                            <Input
                                bg="#DFE3E8"
                                colorScheme={'whiteAlpha.900'}
                                placeholder="tag"
                                type="text"

                            />
                            <Select
                                bg='#DFE3E8'
                                alignContent={'center'}
                                h="50px"
                                colorScheme={'whiteAlpha.900'}
                                id="currency"
                                name="moeda"
                                autoComplete="Moeda"
                                placeholder="Selecione o tipo de moeda"
                                focusBorderColor="brand.400"
                                shadow="sm"
                                size="sm"
                                w="full"
                                rounded="md"
                                onChange={handleChangeSelectMoeda("moeda")}
                                options={optionsSelectMoeda}

                            />
                            <StatGroup>
                                <Stat
                                    w={280}
                                    borderRadius={10}
                                    border="1.5px solid lightgray"
                                    p={5}
                                    mt="30"
                                    mx="2"
                                >
                                    <StatLabel>Valor Despesa</StatLabel>
                                    <StatNumber>$ {!isNaN(despesa.valor) ? despesa.valor : 0}</StatNumber>
                                </Stat>

                                <ArrowForwardIcon w={6} h={6} mt="70" />

                                <Stat
                                    w={280}
                                    borderRadius={10}
                                    border="1.5px solid lightgray"
                                    p={5}
                                    mt="30"
                                    mx="2"
                                >
                                    <StatLabel>Valor em REAL (R$)</StatLabel>
                                    <StatNumber>R$ {!isNaN(valorConvertido) ? valorConvertido : 0}</StatNumber>
                                </Stat>
                            </StatGroup>





                        </SimpleGrid>
                    </VStack>

                </Box>
            </Flex>

        </SimpleSidebar>
            <Footer />
        </div>
    )
}