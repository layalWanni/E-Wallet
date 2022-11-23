import { Box, Button, Divider, Flex, Heading, HStack, Input, Select, SimpleGrid, Text, Toast, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import axios from "axios";
import Footer from "../../../src/components/footer";
import WithSubnavigation from "../../../src/components/navigation";
import SimpleSidebar from "../../../src/components/schiBar";
import { useDispatch } from "react-redux";
import  {changeCurrencies} from '../../../store/currenciesData'

 

export default function AdicionarDespesa() {

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
    const dispatch = useDispatch();
    async function getCurrencies() {
        try {
          const response = await axios.get("https://economia.awesomeapi.com.br/json/all");
          if (response.status === 200){
            console.log("passou")
            console.log(response.data)
            dispatch(changeCurrencies(trataDadosApi(response.data)));
          }
        } catch (err) {
          console.log(err);
        }
      }


    useEffect(()=>{
        getCurrencies();
    }, [])

    return (
        <div><SimpleSidebar>
            <WithSubnavigation />
            <Flex w="100%" my="6" mx="auto" maxWidth={1480} px="6">
                <Box
                    flex="1" borderRadius={8} p="8"
                // onSubmit={handleSubmit(criarDespesa)}
                >
                    <Heading fontSize="lg" fontWeight="normal">
                        <Text color="#000000" mb={-10} fontWeight={'bold'}>
                            Adicionar Despesas
                        </Text>

                        <Flex justify="flex-end" >
                            <Button
                                type="submit"
                                bg="#808080"
                                ml="4"
                            >
                                <Text color="whiteAlpha.900" >
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
                                
                            // {...register("nome")}

                            />
                            <Input
                                bg="#DFE3E8"
                                placeholder="valor"
                                type="Number"
                                
                            
                            />
                        </SimpleGrid>
                        <SimpleGrid minChildWidth="240px" spacing="8" width="100%" >
                            <Input
                                bg="#DFE3E8"
                                colorScheme={'whiteAlpha.900'}
                                placeholder="Descrição"
                                type="text"
                            />
                            <Select
                                bg='#DFE3E8'
                                alignContent={'center'}
                                h="50px"
                                colorScheme={'whiteAlpha.900'}
                                id="category"
                                name="categoria"
                                autoComplete="categoria"
                                placeholder="Selecione a categoria"
                                focusBorderColor="brand.400"
                                shadow="sm"
                                size="sm"
                                w="full"
                                rounded="md">
                                <option>Bebidas</option>
                                <option>Doces</option>
                                <option>Sopas</option>
                            </Select>


                        </SimpleGrid>
                    </VStack>

                </Box>
            </Flex>

        </SimpleSidebar>
            <Footer />
        </div>
    )
}