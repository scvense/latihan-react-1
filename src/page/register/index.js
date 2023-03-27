import React, { useState, useRef, useEffect } from "react";
import { Container, 
    Card, 
    CardBody, 
    Text, 
    Input, 
    Stack, 
    Center, 
    Button, 
    InputGroup,
    InputRightElement,
    FormControl,
    FormErrorMessage,
    useToast, } from "@chakra-ui/react";
import { ViewOffIcon, ViewIcon } from "@chakra-ui/icons"; 
import { registerThunk } from "../../reduxToolkit/asyncThunk/register";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../reduxToolkit/slice/registerSlice";
import { Navigate, useNavigate } from "react-router-dom";


const Register = () => {
    const dispatch =useDispatch() 
    const navigate = useNavigate()                                      // dispatch untuk mengubah state
    const toast = useToast();
    const {loading, error, errorDesc, isRegister} = useSelector(        // distructering
        (state) => state.register                                       // useSelector untuk akses data
    );

    console.log("data useSelector...", loading, error, errorDesc, isRegister )

    const [show, setShow] = useState(false)
    const [validation, setValidation] = useState({
        email: false,
        username: false,
        password: false,
    })

    const hookRef = {
        email: useRef(""),
        username: useRef(""),
        password: useRef(""),
    }


    useEffect(() => {
        if (error ) {
            toast({
                position: "top-center",
                title: 'Gagal register',
                description: errorDesc,
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        }

        if (isRegister) {
            toast({
                position: "top-center",
                tittle: "Berhasil",
                description: "Register berhasil",
                status: "success",
                duration: 5000,
                isClosable: true,
            });
            reset()
        }
    }, [isRegister, error])



    const onChange = (event) => {
        hookRef[event.target.id].current = event.target.value;
    }

    const RegisterAction = () =>{
        setValidation((currentValue) => ({ 
            ...currentValue, 
            email:false,
            username: false, 
            password:false}))

        if (hookRef.email.current.length === 0) {
            setValidation((currentValue) => ({...currentValue, email: true}))
        }
        if (hookRef.username.current.length === 0) {
            setValidation((currentValue) => ({...currentValue, username: true}))
        }
        if (hookRef.password.current.length === 0) {
            setValidation((currentValue) => ({...currentValue, password: true}))
        }


        if ( hookRef.email.current.length > 0 && hookRef.username.current.length > 0 && hookRef.password.current.length > 0) {
            dispatch(reset())
            dispatch(
                registerThunk({
                    email: hookRef.email.current,
                    username: hookRef.username.current,
                    password: hookRef.password.current,
                })
            )
        } 
    };

    return (
        <Container centerContent>
            
            {isRegister && <Navigate to={"/login"} replace />}
            <Center h={"100vh"} w={"100vh"}>
            <Card >
                <CardBody>
                    <Stack>
                    <Text>Register</Text>


                    <FormControl  isInvalid={validation.email}>
                    <Input   
                        placeholder="Email" 
                        onChange={onChange}
                        id={"email"} 
                        />
                    {validation.email && (
                        <FormErrorMessage>Email tidak boleh kosong</FormErrorMessage>
                    )}

                    </FormControl>

                    <FormControl  isInvalid={validation.username}>
                    <Input   
                        placeholder="Username" 
                        onChange={onChange}
                        id={"username"} 
                        />
                    {validation.username && (
                        <FormErrorMessage>Username tidak boleh kosong</FormErrorMessage>
                    )}

                    </FormControl>
                   
                   <FormControl isInvalid={validation.password}>
                   <InputGroup>
                    <Input 
                        placeholder="Password" 
                        type={show ? "text" : "password"}
                        onChange={onChange}
                        id={"password"} />
                    
                    <InputRightElement>
                    <Button 
                        h="1.75rem" 
                        size={"sm"} 
                        onClick={() => setShow(!show)} 
                        > 
                        {show ? <ViewOffIcon /> : <ViewIcon />}
                    </Button>
                    </InputRightElement>
                    </InputGroup>
                    {validation.password && (
                        <FormErrorMessage>Password tidak boleh kosong</FormErrorMessage>
                    )}
                   </FormControl>
                    
                    <Button size={"sm"} colorScheme={"teal"} variant={"solid"} onClick={RegisterAction} >Register</Button>
                    
                    <Button size={"sm"} colorScheme={"teal"} variant={"outline"} onClick={() => navigate("/login")} >Login</Button>
                    </Stack>
                </CardBody>
            </Card>
            </Center>

        </Container>
    )
}

export default Register;