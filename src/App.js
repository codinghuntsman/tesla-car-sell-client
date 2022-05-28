import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './Components/Register/Register';
import Purchase from './Components/Purchase';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Footer from './Components/Footer/Footer';
import Dashboard from './Components/Dashboard/Dashboard';
import Blogs from './Components/Blogs/Blogs';
import Portfolio from './Components/Portfolio/Portfolio';
import Review from './Components/Review/Review';
import Notfound from './Components/Notfound/Notfound';
import MyOrder from './Components/Dashboard/MyOrder';
import AddReview from './Components/Dashboard/AddReview';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={<Dashboard />}>
          <Route index element={<MyOrder />}></Route>
          <Route path='/dashboard/review' element={<AddReview />}></Route>
        </Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='portfolio' element={<Portfolio />}></Route>
        <Route path='/review' element={<Review />}></Route>
        <Route path='*' element={<Notfound />}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
