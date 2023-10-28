import { Table, Tbody, Tr, Td} from "@chakra-ui/react";

const TableElement = ({data}) => {

  const tableStyle = {
    border: "1px solid #FFF",
  };

  const rowStyle = {
    borderBotom: "1px solid #FFF",
  }

  const dataRowStyle = {
    color: "#FFF",
    borderRight: "1px solid white",
    padding: "8px",
  };

  if(!data && data.length === 0) {
    return null;
  
  }

  return(
    <Table style={tableStyle}>
      <Tbody>
        {data.map((item, index) =>
          <Tr key={index} style={rowStyle}>
            <Td style={dataRowStyle}>{item.name}</Td>
            <Td style={dataRowStyle}>{item.email}</Td>
            <Td style={dataRowStyle}>{item.cpf}</Td>
            <Td style={{...dataRowStyle, border: "none"}}>{item.age}</Td>
        </Tr>
        )}
      </Tbody>
    </Table>
  );
}

export default TableElement;