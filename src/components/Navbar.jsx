import { Link as RouterLink } from 'react-router-dom'

import { Button, HStack, Text, Flex, Link } from '@chakra-ui/react'

import { ModalAuth } from './auth/ModalAuth'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/slices/authSlice'

export const links = [
  {
    url: '/',
    label: 'Home',
  },
  {
    url: '/profile',
    label: 'Perfil',
  },
]

export const Navbar = () => {
  const auth = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const handleLogOut = () => {
    dispatch(logout())
  }

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      h="50px"
      borderBottom="2px"
      borderBottomStyle="solid"
      borderBottomColor="green"
      p={8}
    >
      <Text color="green" w="200px" fontSize="3xl" className="text-font">
        Lily&apos;s Garden
      </Text>
      <HStack
        justifyContent="flex-end"
        alignItems="center"
        direction="row-reverse"
        p={8}
      >
        {links.map((link) => (
          <Link
            as={RouterLink}
            to={link.url}
            key={`link-${link.label}`}
            fontWeight="bold"
            color="green.500"
            px={3}
          >
            {link.label}
          </Link>
        ))}

        <Button
          colorScheme="whatsapp"
          borderRadius={20}
          variant="ghost"
          px={5}
          fontWeight="bold"
        >
          Catálogo
        </Button>
        {auth.user ? (
          <Button
            onClick={handleLogOut}
            colorScheme="whatsapp"
            borderRadius={20}
          >
            Cerrar Sesión
          </Button>
        ) : (
          <ModalAuth />
        )}
      </HStack>
    </Flex>
  )
}
