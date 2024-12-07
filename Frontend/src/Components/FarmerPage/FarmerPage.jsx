// import React from 'react';
// import Header1 from '../Header1/Header1';
// import Navbar from '../Navbar/Navbar';
// import Footer1 from '../Footer1/Footer1';
// import Hero1 from '../Content1/Hero1/Hero1';
// import Middle1 from '../Content1/Middle1/Middle1';


import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../../../pages/Homepage/Homepage';
import MyProducts from '../../../pages/My Products/MyProducts';
import Orders from '../../../pages/Orders/Orders';
import Profile from '../../../pages/Profile/Profile';
import Footer1 from '../Footer1/Footer1';
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton';

//pervious one --> this was in App.jsx

// import React from 'react';
// import Navbar from './Components/Navbar/Navbar';
// import { Routes, Route } from 'react-router-dom';
// import Homepage from './pages/Homepage/Homepage';
// import MyProducts from './pages/My Products/MyProducts';
// import Orders from './pages/Orders/Orders';
// import Profile from './pages/Profile/Profile';
// import Footer1 from './Components/Footer1/Footer1';
// import ScrollToTopButton from './Components/ScrollToTopButton/ScrollToTopButton';

// const App = () => {

//   return (
//     <div className="App">
//       <Navbar />
//       <Routes>
//         <Route path="/farmer" element={<Homepage />} />
//         <Route path="/farmer/My Products" element={<MyProducts />} />
//         <Route path="/farmer/Orders" element={<Orders />} />
//         <Route path="/farmer/Profile" element={<Profile />} />
//       </Routes>
//       <Footer1 />
//       <ScrollToTopButton />
//     </div>

//   );
// };

// export default App;






const FarmerPage = () => {
  return (
// i change here

    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/farmer" element={<Homepage />} />
        <Route path="/farmer/My Products" element={<MyProducts />} />
        <Route path="/farmer/Orders" element={<Orders />} />
        <Route path="/farmer/Profile" element={<Profile />} />
      </Routes>
      <Footer1 />
      <ScrollToTopButton />
    </div>





    // <div>
    //   <Header1 />
    //   <Navbar />
    //   <Hero1 />
    //   <Middle1 />
    //   <Footer1 />
    // </div>
  );
};

export default FarmerPage;
