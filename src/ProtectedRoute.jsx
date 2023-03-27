import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
// import { updateDataFromLocalStorage } from "./reduxToolkit/slice/loginSlice";
// import { useEffect } from "react";

const ProtectedRoute = ({children}) => {
    const dispatch = useDispatch();
    const {isLogin} = useSelector((state) => state.login);



    if (!isLogin) {
        return <Navigate to="/login" replace />
    }

    return children
};

export default ProtectedRoute;

// api itu di service
// buat api
// masukin url di enums
// buat cont baru di service (api), parameter (data) karena ada body di backend
// new promise, async, try catch

// async thunc

//slice
// tambah slice ke dalam store
// import store


// reducer untuk mengubah state
// synchronus di reducer
// asynchronus di extraReducer melalui thunk