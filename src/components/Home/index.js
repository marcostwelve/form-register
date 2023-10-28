import { useEffect } from "react";
import {Text, Flex, Link} from "@chakra-ui/react";


const Home = () => {

  return(
    <Flex h="100vh" bg="#333" align="center" justify="center" direction="column">
      <Text fontFamily="Arial, sans-serif" fontSize="30px" color="#f1f1f1">
        Formulário de cadastro
      </Text>
      <Link href="/form" bg="#9D76C1" padding="15px" fontSize="16px" fontWeight={600} textDecoration="none" borderRadius="8px" color="#F1f1f1" cursor="pointer">
        Cadastrar
      </Link>
    </Flex>
  );
}

export default Home;