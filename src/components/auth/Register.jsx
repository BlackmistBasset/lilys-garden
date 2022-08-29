import {
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button,
  HStack,
  FormErrorMessage,
} from '@chakra-ui/react'
import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/slices/authSlice'

const schema = object({
  username: string().required('Ingresá un nombre de usuario'),
  email: string().email().required('Debe ser un e-mail válido'),
  password: string()
    .min(6, 'La contraseña debe tener al menos 6 carácteres')
    .required(),
})

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const dispatch = useDispatch()

  const onSubmit = async (data) => {
    const response = await fetch(
      'http://localhost:1337/api/auth/local/register',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: data.username,
          email: data.email,
          password: data.password,
        }),
      }
    )
    const user = await response.json()
    dispatch(login(user))
  }

  console.log(errors)
  return (
    <>
      <Stack as="form" onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.email}>
          <FormLabel htmlFor="email" mt={4}>
            Email
          </FormLabel>
          <Input id="email" borderRadius={20} {...register('email')} />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.username}>
          <FormLabel htmlFor="username" mt={4}>
            Username
          </FormLabel>
          <Input id="username" borderRadius={20} {...register('username')} />
          <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.password}>
          <FormLabel htmlFor="password" mt={4}>
            Contraseña
          </FormLabel>
          <Input id="password" borderRadius={20} {...register('password')} />
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          <HStack justifyContent="center" w="100%">
            <Button
              type="submit"
              colorScheme="whatsapp"
              borderRadius={20}
              mr={3}
              mt={5}
              w="150px"
              isLoading={isSubmitting}
            >
              Registrarme
            </Button>
          </HStack>
        </FormControl>
      </Stack>
    </>
  )
}
