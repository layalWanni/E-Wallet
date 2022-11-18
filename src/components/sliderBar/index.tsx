import {
    Box,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    useBreakpointValue,
  } from "@chakra-ui/react";

  import { SidebarNav } from "./SidebarNav";
  
  export function Sidebar() {
    // const { isOpen, onClose } = useSidebarDrawer();
  
    const isDrawerSidebar = useBreakpointValue({
      base: true,
      lg: false,
    });
  
    if (isDrawerSidebar) {
      return (
        <Drawer>
          <DrawerOverlay>
            <DrawerContent bg="gray.800" padding="4">
              <DrawerCloseButton mt="6" />
              <DrawerHeader>Navegação</DrawerHeader>
              <DrawerBody>
                <SidebarNav />
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      );
    }
  
    return (
      <Box as="aside" w="64" mr="8">
        <SidebarNav />
      </Box>
    );
  }

// function useSidebarDrawer(): { isOpen: any; onClose: any; } {
//     throw new Error("Function not implemented.");
// }
