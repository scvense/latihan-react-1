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
import { loginThunk } from "../../reduxToolkit/asyncThunk/login";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../reduxToolkit/slice/loginSlice";
import { Navigate, useNavigate } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";


const Login = () => {
    const dispatch =useDispatch()
    const navigate = useNavigate()
    const toast = useToast();
    const {loading, error, errorDesc, isLogin} = useSelector(
        (state) => state.login
    );

    const [show, setShow] = useState(false)
    const [validation, setValidation] = useState({
        account: false,
        password: false,
    })

    const hookRef = {
        account: useRef(""),
        password: useRef(""),
    }




    useEffect(() => {
        if (error ) {
            toast({
                position: "top-center",
                title: 'Gagal login',
                description: errorDesc,
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        }

        if (isLogin) {
            toast({
                position: "top-center",
                tittle: "Berhasil",
                description: "Berhasil Login",
                status: "success",
                duration: 5000,
                isClosable: true,
            });
        }
    }, [isLogin, error])



    const onChange = (event) => {
        hookRef[event.target.id].current = event.target.value;
    }

    const loginAction = () =>{
        setValidation((currentValue) => ({ 
            ...currentValue, 
            account: false, 
            password:false}))

        if (hookRef.account.current.length === 0) {
            setValidation((currentValue) => ({...currentValue, account: true}))
        }
        if (hookRef.password.current.length === 0) {
            setValidation((currentValue) => ({...currentValue, password: true}))
        }


        if (hookRef.account.current.length > 0 && hookRef.password.current.length > 0) {
            dispatch(reset())
            dispatch(
                loginThunk({
                    account: hookRef.account.current,
                    password: hookRef.password.current,
                })
            )
        }
        
    };

    console.log('state dari redux', loading, error, errorDesc, isLogin)


    return (
        <Container centerContent>
            {isLogin && <Navigate to={"/"} replace />}
            <Center h={"100vh"} w={"100vh"}>
            <Card >
                <CardBody>
                    <Stack>
                    <Text>Login</Text>

                    <FormControl  isInvalid={validation.account}>
                    <Input   
                        placeholder="Username or email" 
                        onChange={onChange}
                        id={"account"} 
                        />
                    {validation.account && (
                        <FormErrorMessage>Akun tidak boleh kosong</FormErrorMessage>
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
                        {show ? <ViewOffIcon /> :  <ViewIcon />}
                    </Button>
                    </InputRightElement>
                    </InputGroup>
                    {validation.password && (
                        <FormErrorMessage>Password tidak boleh kosong</FormErrorMessage>
                    )}
                   </FormControl>
                    
                    
                    <Button size={"sm"} colorScheme={"teal"} variant={"solid"} onClick={loginAction} >Login</Button>
                    <Button size={"sm"} colorScheme={"teal"} variant={"outline"} onClick={() => navigate("/register")} >Register</Button>
                    </Stack>
                </CardBody>
            </Card>
            </Center>

        </Container>
    )
}

export default Login;