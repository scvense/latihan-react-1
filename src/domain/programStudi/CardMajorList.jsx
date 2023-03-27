import React from "react";
import { Card, 
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
    IconButton
} from '@chakra-ui/react'
import { 
    SearchIcon,
} from '@chakra-ui/icons'

function CardMajorList({
    major,
}){
    return (
        <Card>
            <CardHeader>
                <Heading size='md'>Program Studi</Heading>
                
            </CardHeader>
            <CardBody>
                <TableContainer>
                    <Table variant='simple'>
                        <Thead>
                        <Tr>
                            <Th>Major</Th>
                            <Th>Jumlah SKS</Th>
                            <Th>Dosen PA</Th>
                        </Tr>
                        </Thead>
                        <Tbody>{major.map((item) => {
                            return(
                                <Tr key={item.code}>
                                    <Td>{item.nama_major}</Td>
                                    <Td>{item.jumlah_sks}</Td>
                                    <Td>{item.dosen_pa}</Td>
                                    <Td><IconButton 
                                    colorScheme='blue'
                                    aria-label='Search database'
                                    size={"xs"}
                                    left={"7"}
                                    icon={<SearchIcon />}/></Td>
                                    </Tr>
                                )
                        })}</Tbody>
                    </Table>
                </TableContainer>
            </CardBody>
        </Card>
    )
} 

export default CardMajorList;