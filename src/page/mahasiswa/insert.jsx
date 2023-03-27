import React, { useState, useRef } from "react";
import { reset } from "../../reduxToolkit/slice/mahasiswaSlice";
import { insertAsyncThunk } from "../../reduxToolkit/asyncThunk/mahasiswa";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "@chakra-ui/react";

const InsertData = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const { users, loading, error, errorDesc, isInsert } = useSelector(
    (state) => state.mahasiswa
  );

  let [isOpenUser, setIsOpenUser] = useState(false);

  const InsertMahasiswa = () => {
    const [validation, setValidation] = useState({
      nama: false,
      major: false,
      age: false,
    });

    const hookRef = {
      nama: useRef(""),
      major: useRef(""),
      age: useRef(""),
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

      if (!isInsert) {
        toast({
          position: "top-center",
          tittle: "Berhasil",
          description: "Berhasil menambah data",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        console.log("toast..", isInsert);
        dispatch(reset());
        setIsOpenUser(false);
      }
    };
  };
};

export default InsertData;
