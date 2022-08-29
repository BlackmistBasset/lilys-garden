import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useDisclosure,
  Button,
} from '@chakra-ui/react'
import { Login } from './Login'
import { Register } from './Register'

export const ModalAuth = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen} colorScheme="whatsapp" borderRadius={20}>
        Ingresar
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Tabs isFitted mt="40px">
              <TabList>
                <Tab _selected={{ color: 'white', bg: 'green' }}>
                  Iniciar Sesión
                </Tab>
                <Tab _selected={{ color: 'white', bg: 'green' }}>
                  Registrarse
                </Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <Login />
                </TabPanel>
                <TabPanel>
                  <Register />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
