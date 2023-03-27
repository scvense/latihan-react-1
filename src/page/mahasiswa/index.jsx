import React, { useState, useEffect, useRef } from "react";
import { Container, useDisclosure, useToast } from "@chakra-ui/react";
import { AddUser, AlertDelete, CardUserList, UpdateData } from "../../domain";
import { reset } from "../../reduxToolkit/slice/mahasiswaSlice";
import DesktopNav from "../../Nav";
import {
  getAllAsyncThunk,
  insertAsyncThunk,
  deleteAsyncThunk,
  updateAsyncThunk,
} from "../../reduxToolkit/asyncThunk/mahasiswa";
import { useDispatch, useSelector } from "react-redux";

const Mahasiswa = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const { users, isInsert, loadingUpdate, errorUpdate, isUpdate } = useSelector(
    (state) => state.mahasiswa
  );

  console.log("isInsert", isInsert);

  let [isOpenUser, setIsOpenUser] = useState(false);
  let [isOpenUpdate, setIsOpenUpdate] = useState(false);
  let [idUser, setIdUser] = useState(0);
  const [state, setState] = useState({
    nama: "",
    major: "",
    age: "",
    id: "",
  });

  const [validation, setValidation] = useState({
    nama: false,
    major: false,
    age: false,
  });

  const hookRef = {
    nama: useRef(""),
    major: useRef(""),
    age: useRef(""),
    id: useRef(""),
  };

  useEffect(() => {
    dispatch(getAllAsyncThunk());
  }, []);

  useEffect(() => {
    if (!loadingUpdate) {
      setIsOpenUpdate(false);
    }
  }, [loadingUpdate]);

  useEffect(() => {
    if (errorUpdate && !loadingUpdate) {
      toast({
        position: "top-center",
        tittle: "Gagal",
        description: "Tidak ada data yang diupdate",
        status: "error",
        duration: 1000,
        isClosable: true,
      });
    }
  }, [errorUpdate]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const onChangeAge = (string, type) => {
    if (type === "update") {
      setState((currentValue) => ({ ...currentValue, age: string }));
      return;
    }
    hookRef.age.current = string;
  };
  const cancelRef = React.useRef();

  const onChange = (event) => {
    hookRef[event.target.id].current = event.target.value;
  };

  const onChangeUpdate = (event) => {
    setState({ ...state, [event.target.id]: event.target.value });
  };

  const insertAction = () => {
    setValidation((currentValue) => ({
      ...currentValue,
      nama: false,
      major: false,
      age: false,
    }));

    if (hookRef.nama.current.length === 0) {
      setValidation((currentValue) => ({ ...currentValue, nama: true }));
    }
    if (hookRef.major.current.length === 0) {
      setValidation((currentValue) => ({ ...currentValue, major: true }));
    }

    if (hookRef.nama.current.length > 0 && hookRef.major.current.length > 0) {
      dispatch(
        insertAsyncThunk({
          nama: hookRef.nama.current,
          major: hookRef.major.current,
          age: hookRef.age.current,
        })
      );
    }

    if (
      !isInsert &&
      hookRef.nama.current.length > 0 &&
      hookRef.major.current.length > 0
    ) {
      toast({
        position: "top-center",
        tittle: "Berhasil",
        description: "Berhasil menambah data",
        status: "success",
        duration: 1000,
        isClosable: true,
      });
      console.log("toast..", isInsert);
      dispatch(reset());
      setIsOpenUser(false);
    }
  };

  const deleteAction = (id) => {
    if (hookRef.id.current === id) {
      toast({
        position: "top-center",
        tittle: "Berhasil",
        description: "Berhasil menghapus data",
        status: "success",
        duration: 1000,
        isClosable: true,
      });
    }
    dispatch(deleteAsyncThunk(id));
    onClose();
  };

  const modalUpdate = async (item) => {
    setIsOpenUpdate(true);

    // di bawah ini buat inputnya otomatis ada isi data sebelumnya sebelum akan di updateoleh user
    setState({
      nama: item.nama,
      major: item.major,
      age: item.age,
      id: item.id,
    });
  };

  const updateDataUser = async () => {
    if (!isUpdate) {
      toast({
        position: "top-center",
        tittle: "Berhasil",
        description: "Data berhasil diupdate",
        status: "success",
        duration: 1000,
        isClosable: true,
      });
      dispatch(updateAsyncThunk(state)); //async
      setIsOpenUpdate(false);
    }
  };

  return (
    <div>
      <Container centerContent h="100vh" pt={"2em"}>
        <DesktopNav />

        <AddUser
          isOpenUser={isOpenUser}
          setIsOpenUser={setIsOpenUser}
          hookRef={hookRef}
          onChange={onChange}
          onChangeAge={onChangeAge}
          insertAction={insertAction}
          validation={validation}
        />

        <AlertDelete
          isOpen={isOpen}
          onClose={onClose}
          cancelRef={cancelRef}
          deleteDataUser={deleteAction}
          idUser={idUser}
        />

        <UpdateData
          isOpenUpdate={isOpenUpdate}
          setIsOpenUpdate={setIsOpenUpdate}
          state={state}
          onChange={onChangeUpdate}
          onChangeAge={onChangeAge}
          updateDataUser={updateDataUser}
          validation={validation}
        />

        <CardUserList
          mahasiswas={users}
          onOpen={onOpen}
          setIdUser={setIdUser}
          setIsOpenUser={setIsOpenUser}
          modalUpdate={modalUpdate}
        />

        {/* {users.length !== 0 ? (
      ) : loading ? (
        <Center>
          <Spinner />
        </Center>
      ) : error ? (
        <Text>{errorDesc}</Text> 
      ) : (
        <EmptyData/>
      )}
       */}
      </Container>
    </div>
  );
};

export default Mahasiswa;
