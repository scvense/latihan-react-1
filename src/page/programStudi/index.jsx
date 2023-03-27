import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Container} from '@chakra-ui/react'
import { CardMajorList } from "../../domain"; 
import DesktopNav from "../../Nav";

const MajorModel = () => {

    let [major, setMajor] = useState([])
    let [isLoading, setIsLoading] = useState(false)
    

    useEffect(() => {
        getAllMajor()
    }, [])


    const getAllMajor = async () => {
        try{
            setIsLoading(true)
            let major = await axios.get("http://localhost:8080/major")
            setIsLoading(false)
            setMajor(major.data)
        } catch(e){
            setIsLoading(false)
            alert(e)
        }
    }

    return (
            <Container centerContent h="100vh" pt={"2em"}>
                <DesktopNav />
                <CardMajorList 
                major={major}
                isLoading={isLoading}/>
            </Container>
      
    )
};

export default MajorModel;