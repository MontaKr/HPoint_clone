import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from '../pages/SignUp';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Quickbar from '../components/quickBar/QuickBar';
import QuickButton from '../components/quickButton/QuickButton';


function RootRouter () {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<SignUp/>} />     
      </Routes>
      <Footer/>
      <Quickbar/>
      <QuickButton/>
    </BrowserRouter>
  )
}

export default RootRouter;