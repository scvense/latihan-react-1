import axiosInstance from "./xhr";
import enums from "../enum";

const getAllDosen = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      let dosen = await axiosInstance({
        method: "get",
        url: enums.dosen,
      });
      resolve(dosen);
    } catch (e) {
      reject(e);
    }
  });
};

const insertDosen = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let addDosen = await axiosInstance({
        method: "post",
        url: enums.dosen,
        data,
      });
      resolve(addDosen);
    } catch (e) {
      reject(e);
    }
  });
};

const deleteDosen = async (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let deleteDosen = await axiosInstance({
        method: "delete",
        url: enums.dosen + "/" + id,
      });
      resolve(deleteDosen);
    } catch (e) {
      reject(e);
    }
  });
};

const updateDosen = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let updateDosen = await axiosInstance({
        method: "put",
        url: enums.dosen + "/" + data.id,
        data: {
          nama_dosen: data.nama_dosen,
          no_hp: data.no_hp,
          alamat: data.alamat,
        },
      });
      console.log("data update", data);
      console.log("update service..", updateDosen.data);
      resolve(updateDosen.data);
    } catch (e) {
      console.log("error service..", e);
      reject(e);
    }
  });
};

export { getAllDosen, insertDosen, deleteDosen, updateDosen };
