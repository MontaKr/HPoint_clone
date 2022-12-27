import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from '../pages/SignUp';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Quickbar from '../components/quickBar/QuickBar';


function RootRouter () {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<SignUp/>} />     
      </Routes>
      <Footer/>
      <Quickbar/>
    </BrowserRouter>
  )
}

export default RootRouter;