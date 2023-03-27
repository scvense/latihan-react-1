import React from 'react';
import './App.css';
// import DesktopNav from './Nav';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home, Dosen, TentangKami, MajorModel, Mahasiswa} from "./page"
import {Container} from '@chakra-ui/react'
import Login from './page/login';
import Register from './page/register';
import PageNotFound from './page/pageNotFound';
import ProtectedRoute from './ProtectedRoute';




function App() {
  return (
    <Container>
    <Router>
    <Routes>
    <Route path='*' element={
      <ProtectedRoute>
          <PageNotFound />
        </ProtectedRoute>}></Route>
      <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>}></Route>
      <Route path='/mahasiswa' element={<ProtectedRoute><Mahasiswa /></ProtectedRoute>}></Route>
      <Route path='/dosen' element={<ProtectedRoute><Dosen /></ProtectedRoute>}></Route>
      <Route path='/major' element={<ProtectedRoute><MajorModel /></ProtectedRoute>}></Route>
      <Route path='/TentangKami' element={<ProtectedRoute><TentangKami /></ProtectedRoute>}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/login' element={<Login />}></Route>
    </Routes>
    </Router>
    </Container>
  )
}

export default App;
