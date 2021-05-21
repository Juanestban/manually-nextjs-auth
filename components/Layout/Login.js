import { useState } from "react";
import {
  HStack,
  Box,
  Heading,
  Button,
  FormControl,
  FormLabel,
  Input
} from "@chakra-ui/react";
import { useAuthContext } from "../../contexts/AuthProvider";

export const Login = () => {
  const [value, setValue] = useState({
    username: "",
    password: ""
  });
  const { handleAuth } = useAuthContext();

  const handleChange = ({ target: { name, value } }) =>
    setValue({ ...value, [name]: value });

  const handleSubmit = () => handleAuth(value);

  return (
    <HStack
      w="100%"
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        w="400px"
        p="4"
        borderWidth="1px"
        borderColor="blue"
        borderRadius="md"
      >
        <Heading>Login</Heading>
        <FormControl py="2">
          <FormLabel>username</FormLabel>
          <Input
            name="username"
            value={value.username}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl py="2">
          <FormLabel>password</FormLabel>
          <Input
            name="password"
            type="password"
            value={value.password}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl py="2" d="flex">
          <Button
            variant="solid"
            colorScheme="facebook"
            w="100%"
            onClick={handleSubmit}
          >
            log
          </Button>
        </FormControl>
      </Box>
    </HStack>
  );
};
