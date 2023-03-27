// npm init buat file json
// npm instal react
// npm instal axios
// npm instal chakra
// import chakra provider di index.js


/* 
di App.js: 
- import chakra di app.js
- import axios buat ambil data dari database
- import useState
- import useEffect
- buat state untuk nampung data getAllData
- buat state: users, setUsers ([])
- buat function getAllData 
- getAllData dimasukin lifecicle => useEffect
- return: CardUser buat masukin props
 */

/* 
- buat file CardUser.jsx
- import react, chakra
- buat function CardUser()
- return Tools Card dari chakra
- export default CardUser
- karna data array, dan data di looping biar tiap tambah data langsung otomatis. ga statis
- looping data yg ada di state users(App.js) pake users.map()
- export default
- di App.jsx import CardUser
 */


// file AddUser
// import
// buat function AddUser()
// return modal yang berisi form input
// kasi atribute id 
// value harus pake onchange
// kasi button submit dgn onclick logic function addDataUser di App.jsx
// export default
// >>> di App.jsx buat function addDataUser pke asynchronus
// let dataUser buat sambungin ke API
// url harus sesuai sm di postman, klo ada id kasi id, klo ada req body kasi req body
// masukin dataUser ke dalem state addData
// setIsOpenUser(false)
// masukin default state(nama, major, age) supaya klo mau tambah baru data di input sudah kosong lgi
// cek console.log dataUser, data{} nya ada dimana. 
// klo data object ada di "data", maka buat let dataNew = [...users, dataUser.data]
// masukin dataNew ke state users dengan setStateUsers


// delete user
/*
1. di CardUserList.jsx tambahin button delete dengan onclick onOpen Alert
2. buat file AlertDelete.jsx
3. buat function AlertDelete, return card yang berisi AlertDialog
4. import
5. AlertDialog dikasi atribut isOpen dan onClose
6. Button delete, kasi onClick ke function deleteUser(idUsr) yang ada di App.jsx
7. export default
>>>>
di App.jsx 
- import AlertDelete.jsx, masukin ke return
- buat function deleteUser pke asynchronus, parameter(id)
- let deleteUser axios buat sambungin ke API
- kasi setIsLoadingDelete(true) sblm deleteUser, setIsLoadingDelete(false)
- kasi onClose()
- setUsers isi users.filter(), menerima parameter (id), dengan item.id tidak sama dngan id
- kasi setIsLoadingDelete(false) di catch
 */

/* 
Update User
- tambah button update di CardUserlist
- kasi onclick modalUpdateUser() yg di props dari App.jsx
>>> di App.jsx
- buat function modalupdatedata() buat membuka modals
*/



/* 
tabel mahasiswa(user):
1. nama
2. major 
3. age 
4. id (foreign key)

table mata kuliah
1. id matkul 
2. mata kuliah 
3. jumlah sks 
4. id dosen

table dosen
1. nama dosen
2. no hp
3. alamat
4. id dosen

mahasiswa ke mata_kuliah = many to many
mata_kuliah ke daftar_dosen = one to manys
 */