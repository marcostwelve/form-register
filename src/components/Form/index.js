import { useState } from "react";
import {Box, Flex, Center, Button} from "@chakra-ui/react";
import InputField from "../InputField";
import TableElement from "../Table";

const FormElement = ({onRegister}) => {
 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [cpf, setCpf] = useState("");
  const [showData, setShowData] = useState(false);
  const [dataForm, setdataForm] = useState([]);

  const onSave = (e) => {
    e.preventDefault();
    if(name && email && age && cpf) {
      const newRegister = {name, email, cpf, age};
      setdataForm([...dataForm, newRegister]);
      onRegister(dataForm);
      setName("");
      setEmail("");
      setCpf("");
      setAge("");
      setShowData(true);
    }
  }

  return(
    <Flex bg="#333" h="100vh" justify="center" align="center" flexDirection="column" gap="10px">
      <Box as="form" onSubmit={onSave} display="flex" flexDirection="column" justifyContent="center" gap="10px">
        <InputField
            label="Nome"
            required={true}
            type="text"
            value={name}
            inputChange={value => setName(value)}
          />

          <InputField
            label="E-mail"
            required={true}
            type="email"
            value={email}
            inputChange={value => setEmail(value)}
          />

          <InputField
            label="CPF"
            required={true}
            type="number"
            value={cpf}
            inputChange={value => setCpf(value)}
          />
      
          <InputField
            label="Idade"
            required={true}
            type="number"
            value={age}
            inputChange={value => setAge(value)}
          />      
          <Center marginTop="10px">
            <Button type="submit" cursor="pointer" bg="#9D76C1" padding="15px" fontSize="16px" fontWeight={600} border="none" borderRadius="8px" color="#F1f1f1">
              Cadastrar
            </Button>
          </Center>
      </Box>
      {showData && (
        <TableElement data={dataForm}/>
      )}
    </Flex>
  );
}

export default FormElement;