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
  Heading,
  Button,
  // IconButton
} from "@chakra-ui/react";

function CardDosenList({
  dosen,
  onOpen,
  setIdDosen,
  setIsOpenDosen,
  modalUpdateDosen,
}) {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">Daftar Dosen</Heading>
      </CardHeader>
      <CardBody>
        <Button size={"sm"} onClick={() => setIsOpenDosen(true)}>
          tambah+
        </Button>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Nama Dosen</Th>
                <Th>No HP</Th>
                <Th>Alamat</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {dosen.map((item) => {
                console.log("dosen card", dosen);
                console.log("item ", item);
                return (
                  <Tr key={item.id_dosen}>
                    <Td>{item.nama_dosen}</Td>
                    <Td>{item.no_hp}</Td>
                    <Td>{item.alamat}</Td>
                    <Td>
                      <Button
                        size={"sm"}
                        onClick={() => {
                          modalUpdateDosen(item);
                        }}
                      >
                        update
                      </Button>
                    </Td>
                    <Td>
                      <Button
                        size={"sm"}
                        onClick={() => {
                          setIdDosen(item.id_dosen);
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

export default CardDosenList;
