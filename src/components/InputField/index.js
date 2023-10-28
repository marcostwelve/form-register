import {Input, FormLabel, Flex} from "@chakra-ui/react";

const InputField = (props) => {

  const inputDigit = (e) => {
    props.inputChange(e.target.value);
  }

  return(
    <Flex align="center" justify="space-between" gap="10px">
      <FormLabel color="#fff">
          {props.label}
        </FormLabel>

        <Input bg="#333" color="#fff" border="1px solid #fff" padding="5px" borderRadius="8px" outline="none" fontSize="16px"
          required={props.required}
          type={props.type}
          value={props.value}
          onChange={inputDigit}
        />
    </Flex>
  );
}

export default InputField;