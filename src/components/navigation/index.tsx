import {
    Box,
    Flex,
    Stack,
    useColorModeValue,
    useDisclosure,
    Input,
    Center,
    Text,
} from '@chakra-ui/react';
import {
    SunIcon,
} from '@chakra-ui/icons';

import { AiTwotoneBell } from "react-icons/ai";
import { FaUserAlt } from 'react-icons/fa';

export default function WithSubnavigation() {

    return (
        <Box>
            <Flex

                borderRadius={5}
                bg='#00FF7F'
                minH={'80px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}>

                <Flex flex={{ base: 1 }}
                    justify=
                    {{
                        base: 'center',
                        md: 'start'
                    }}>
                    <Input type='search' bg='#E2EAF3' placeholder='Pesquise aqui ...'
                        w={263} ml={5}
                    />

                </Flex>
                <Center >
                    <FaUserAlt style={{marginLeft:5}}/>
                    <Text  m={5} color='grey' mr={200}>Layal@popozuda.com</Text>
                </Center>


                <Center mr={8}>
                    <Stack
                        flex={{ base: 1, md: 0 }}
                        justify={'flex-end'}
                        direction={'row'}
                        spacing={6}>
                        <AiTwotoneBell />
                        <SunIcon />
                    </Stack></Center>
            </Flex>
        </Box>
    );
}




