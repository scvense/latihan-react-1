import React from "react";
import {
  Card,
  CardBody,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  CardHeader,
  Button,
  Heading,
} from "@chakra-ui/react";

function CardUserList({
  mahasiswas,
  onOpen,
  setIdUser,
  setIsOpenUser,
  modalUpdate,
}) {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">Data Mahasiswa</Heading>
      </CardHeader>
      <CardBody>
        <Button
          size="sm"
          colorScheme="teal"
          onClick={() => setIsOpenUser(true)}
        >
          Add User+
        </Button>
        <br />
        <TableContainer>
          <Table variant="simple" size="md">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Major</Th>
                <Th>Age</Th>
                <Th colSpan={{ base: 1, md: 3 }}>ACTION</Th>
              </Tr>
            </Thead>
            <Tbody>
              {mahasiswas.map((item) => {
                return (
                  <Tr key={item.id}>
                    <Td>{item.nama}</Td>
                    <Td>{item.major}</Td>
                    <Td>{item.age}</Td>
                    <Td>
                      <Button
                        size="sm"
                        onClick={() => {
                          modalUpdate(item);
                        }}
                      >
                        update
                      </Button>
                    </Td>
                    <Td>
                      <Button
                        size="sm"
                        onClick={() => {
                          setIdUser(item.id);
                          onOpen();
                        }}
                      >
                        delete
                      </Button>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </CardBody>
    </Card>
  );
}

export default CardUserList;
