import React from "react";
import { Container, Button, Text } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { getAllAsyncThunk } from "../../reduxToolkit/asyncThunk/mahasiswa";
import DesktopNav from "../../Nav";

const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.mahasiswa);
  // console.log("users", users.users)

  return (
    <Container centerContent h={"100vh"}>
      <DesktopNav />
      <Text>Home Page</Text>

      {users.users.length > 0 &&
        users.users.map((item, index) => {
          return <Text key={index}>{item.namavv}</Text>;
        })}
      <Button
        isLoading={users.loading}
        onClick={() => dispatch(getAllAsyncThunk())}
      >
        Get All User
      </Button>
    </Container>
  );
};

export default Home;
