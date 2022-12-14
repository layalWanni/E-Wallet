import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { Logo } from "../logo";
import { NotificationsNav } from "../NotificationsNav";
import { Profile } from "../profile";
import { SearchBox } from "../searchBox";

export function Header() {
  // const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as="header"
      maxW={1480}
      w="100%"
      mx="auto"
      mt="4"
      px="6"
      h="20"
      align="center"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          // onClick={onOpen}
          mr="2"
        ></IconButton>
      )}

      <Logo />

      {isWideVersion && <SearchBox />}
      <Flex align="center" ml="auto">
        <NotificationsNav />
      
      </Flex>
    </Flex>
  );
}

// function useSidebarDrawer(): { onOpen: any; } {
//     throw new Error("Function not implemented.");
// }
