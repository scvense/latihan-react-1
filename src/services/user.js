import enums from "../enum";
import axiosInstance from "./xhr";

const getAllMahasiswa = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      let mahasiswa = await axiosInstance({
        method: "get",
        url: enums.mahasiswa,
      });
      resolve(mahasiswa);
    } catch (e) {
      console.log("error", e);
      reject(e);
    }
  });
};

const insertMahasiswa = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let tambahMahasiswa = await axiosInstance({
        method: "post",
        url: enums.mahasiswa,
        data,
      });
      resolve(tambahMahasiswa);
    } catch (e) {
      reject(e);
    }
  });
};

const deleteMahasiswa = async (id) => {
  console.log("id hapuss", id);
  return new Promise(async (resolve, reject) => {
    try {
      let deleteData = await axiosInstance({
        method: "delete",
        url: enums.mahasiswa + "/" + id,
      });
      resolve(deleteData);
    } catch (e) {
      reject(e);
    }
  });
};

const updateMahasiswa = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let updateData = await axiosInstance({
        method: "put",
        url: enums.mahasiswa + "/" + data.id,
        data: {
          nama: data.nama,
          major: data.major,
          age: data.age,
        },
      });
      console.log("update data...", updateData);
      resolve(updateData.data);
    } catch (e) {
      console.log("error", e);
      reject(e);
    }
  });
};

//   let updateData = await axios.put(
//     `http://localhost:8080/mahasiswa/${state.id}`,
//     {
//       nama: state.nama,
//       major: state.major,
//       age: state.age,
//     }
//   );
const loginAPI = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let login = await axiosInstance({
        method: "post",
        url: enums.login,
        data,
      });
      resolve(login);
    } catch (e) {
      console.log("error http request", e);
      reject(e);
    }
  });
};

const registerAPI = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let register = await axiosInstance({
        method: "post",
        url: enums.register,
        data,
      });
      resolve(register);
    } catch (e) {
      reject(e);
    }
  });
};

export {
  getAllMahasiswa,
  insertMahasiswa,
  deleteMahasiswa,
  updateMahasiswa,
  loginAPI,
  registerAPI,
};
