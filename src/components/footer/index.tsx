import {
  Box,
  Center,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { ReactNode } from 'react';


const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={'#000000'}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        w={'100%'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Center> <Text color='white' fontSize={10} ml={300}> E-WALLET 2022, COPYRIGHT © TODOS OS DIREITOS RESERVADOS</Text></Center>
        <Stack direction={'row'} spacing={6} mr={5}>
          <SocialButton label={'Twitter'} href={'#'}>
            <FaTwitter style={{ color: 'white' }} />
          </SocialButton >
          <SocialButton label={'YouTube'} href={'#'}>
            <FaYoutube style={{ color: 'white' }} />
          </SocialButton>
          <SocialButton label={'Instagram'} href={'#'}>
            <FaInstagram style={{ color: 'white' }} />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}