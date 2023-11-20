import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Home from './pages/Home';
import History from './pages/History';
import Pnf from './pages/Pnf';
import SingleCategory from './pages/SingleCategory';



function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Landing></Landing>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/history' element={<History></History>}></Route>
        <Route path='*' element={<Pnf></Pnf>}></Route>
        <Route path='/home/singlecategory/:id' element={<SingleCategory></SingleCategory>}></Route>


      </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
