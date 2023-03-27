import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Container, useDisclosure, useToast } from "@chakra-ui/react";
import {
  AddDosen,
  AlertDeleteDosen,
  UpdateDosen,
  CardDosenList,
} from "../../domain";
import DesktopNav from "../../Nav";
import {
  getAllAsyncThunk,
  insertAsyncThunk,
  deleteAsyncThunk,
  updateAsyncThunk,
} from "../../reduxToolkit/asyncThunk/dosen";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../reduxToolkit/slice/dosenSlice";

const DosenModel = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const {
    dosen,
    isInsert,
    loadingUpdate,
    errorUpdate,
    errorDescUpdate,
    isUpdate,
  } = useSelector((state) => state.dosen);

  let [isOpenDosen, setIsOpenDosen] = useState(false);
  let [isOpenUpdate, setIsOpenUpdate] = useState(false);
  let [idDosen, setIdDosen] = useState(0);
  const [state, setState] = useState({
    nama_dosen: "",
    no_hp: "",
    alamat: "",
    id: "",
  });
  console.log("xxx");

  const [validation, setValidation] = useState({
    nama_dosen: false,
    no_hp: false,
    alamat: false,
  });

  const hookRef = {
    nama_dosen: useRef(""),
    no_hp: useRef(""),
    alamat: useRef(""),
    id: useRef(""),
  };

  // useEffect agar All data dosen langsung muncul pada page tanpa ada action
  useEffect(() => {
    dispatch(getAllAsyncThunk());
  }, []);

  // jika pending, modal update close jika loadingUpdate = true
  useEffect(() => {
    if (!loadingUpdate) {
      setIsOpenUpdate(false);
    }
  }, [loadingUpdate]);

  useEffect(() => {
    if (errorDescUpdate && !loadingUpdate) {
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
  const cancelRef = React.useRef();
  // onChange untuk menangkap semua perubahan ke dalam event. (event.target.value = mengambil value nya)
  const onChange = (event) => {
    // setState({...state, nama: event.target.value})
    hookRef[event.target.id].current = event.target.value;
  };
  const onChangeUpdate = (event) => {
    setState({ ...state, [event.target.id]: event.target.value });
  };

  // Controller
  // Action menambah data
  const insertActionDosen = () => {
    //
    setValidation((currentValue) => ({
      ...currentValue,
      nama_dosen: false,
      no_hp: false,
      alamat: false,
    }));

    // jika data tidak diisi
    if (hookRef.nama_dosen.current.length === 0) {
      setValidation((currentValue) => ({ ...currentValue, nama_dosen: true }));
    }
    if (hookRef.no_hp.current.length === 0) {
      setValidation((currentValue) => ({ ...currentValue, no_hp: true }));
    }
    if (hookRef.alamat.current.length === 0) {
      setValidation((currentValue) => ({ ...currentValue, alamat: true }));
    }

    // jika data telah diisi
    if (
      hookRef.nama_dosen.current.length > 0 &&
      hookRef.no_hp.current.length > 0 &&
      hookRef.alamat.current.length > 0
    ) {
      // dispatch untuk mengubah dan menyimpan data dari user ke dalam state
      dispatch(
        insertAsyncThunk({
          nama_dosen: hookRef.nama_dosen.current,
          no_hp: hookRef.no_hp.current,
          alamat: hookRef.alamat.current,
        })
      );
    }

    // jika berhasil muncul toast, data dosen langsung tertambah, modal addDosen langsung tertutup
    if (
      !isInsert &&
      hookRef.nama_dosen.current.length > 0 &&
      hookRef.no_hp.current.length > 0 &&
      hookRef.alamat.current.length > 0
    ) {
      toast({
        position: "top-center",
        tittle: "Berhasil",
        description: "Berhasil menambah data",
        status: "success",
        duration: 1000,
        isClosable: true,
      });
      dispatch(reset());
      setIsOpenDosen(false);
    }
  };

  // yg dilakukan ketika klik tombol delete
  const deleteActionDosen = (id) => {
    // jika id yg dipilih user sama dengan id pada database
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
    console.log("id dosen", id);
    // data dengan id yg sama didelete
    dispatch(deleteAsyncThunk(id));
    // berhasil delete, maka alert langsung ditututp
    onClose();
  };

  const modalUpdateDosen = (item) => {
    setIsOpenUpdate(true);
    console.log("ini item", item);
    setState({
      nama_dosen: item.nama_dosen,
      no_hp: item.no_hp,
      alamat: item.alamat,
      id: item.id_dosen,
    });
  };

  const updateActionDosen = async () => {
    if (!isUpdate) {
      toast({
        position: "top-center",
        tittle: "Berhasil",
        description: "Data berhasil diupdate",
        status: "success",
        duration: 1000,
        isClosable: true,
      });
      dispatch(updateAsyncThunk(state));
    }
  };

  return (
    <Container centerContent h="100vh" pt={"2em"}>
      <DesktopNav />
      <CardDosenList
        dosen={dosen}
        onOpen={onOpen}
        setIdDosen={setIdDosen}
        setIsOpenDosen={setIsOpenDosen}
        modalUpdateDosen={modalUpdateDosen}
      />

      <AddDosen
        isOpenDosen={isOpenDosen}
        setIsOpenDosen={setIsOpenDosen}
        hookRef={hookRef}
        onChange={onChange}
        insertActionDosen={insertActionDosen}
        validation={validation}
      />

      <UpdateDosen
        isOpenUpdate={isOpenUpdate}
        setIsOpenUpdate={setIsOpenUpdate}
        state={state}
        onChange={onChangeUpdate}
        updateDataDosen={updateActionDosen}
        validation={validation}
      />

      <AlertDeleteDosen
        isOpen={isOpen}
        onClose={onClose}
        cancelRef={cancelRef}
        deleteDataDosen={deleteActionDosen}
        idDosen={idDosen}
      />
    </Container>
  );
};

export default DosenModel;
