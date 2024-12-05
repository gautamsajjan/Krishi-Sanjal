<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Header1 from './components/Header1/Header1';
// import Navbar from './components/Navbar/Navbar';
// import Footer1 from './components/Footer1/Footer1';
// import Hero1 from './components/Content1/Hero1/Hero1';
// import Middle1 from './components/Content1/Middle1/Middle1';
import SignupForm from './Components/SignupForm';
import FarmerPage from './Components/FarmerPage/FarmerPage';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const ProtectedRoute = ({ children }) => {
    return user && user.role === 'farmer' ? children : <Navigate to="/signup" />;
  };

  return (
    <Router>
      <div className="App">
        {/* <Header1 />
        <Navbar /> */}
        <Routes>
          <Route path="/signup" element={<SignupForm onLogin={handleLogin} />} />
          <Route
            path="/farmer"
            element={
              <ProtectedRoute>
                <FarmerPage />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<SignupForm />} />
            {/* <Route index element={<Middle1 />} />
          </Route> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        {/* <Footer1 /> */}
      </div>
    </Router>
=======
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import MyProducts from './pages/My Products/MyProducts';
import Orders from './pages/Orders/Orders';
import Profile from './pages/Profile/Profile';
import Footer1 from './Components/Footer1/Footer1';
import ScrollToTopButton from './Components/ScrollToTopButton/ScrollToTopButton';

const App = () => {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/My Products" element={<MyProducts />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
      <Footer1 />
      <ScrollToTopButton />
    </div>
>>>>>>> 0b3916417539ff72642527db05b9bd46c6594865
  );
};

export default App;

<<<<<<< HEAD




// import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// // import Header1 from './components/Header1/Header1';
// // import Navbar from './components/Navbar/Navbar';
// // import Footer1 from './components/Footer1/Footer1';
// // import Hero1 from './components/Content1/Hero1/Hero1';
// // import Middle1 from './components/Content1/Middle1/Middle1';
// // import SignupForm from './components/SignupForm/SignupForm';
// import FarmerPage from './Components/FarmerPage/FarmerPage';

// const App = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const loggedInUser = localStorage.getItem('user');
//     if (loggedInUser) {
//       setUser(JSON.parse(loggedInUser));
//     }
//   }, []);

//   const handleLogin = (userData) => {
//     setUser(userData);
//     localStorage.setItem('user', JSON.stringify(userData));
//   };

//   const handleLogout = () => {
//     setUser(null);
//     localStorage.removeItem('user');
//   };

//   const ProtectedRoute = ({ component: Component, ...rest }) => {
//     return (
//       <Route
//         {...rest}
//         render={(props) =>
//           user && user.role === 'farmer' ? (
//             <Component {...props} />
//           ) : (
//             <Redirect to="/signup" />
//           )
//         }
//       />
//     );
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Header1 />
//         <Navbar />
//         <Switch>
//           <Route path="/signup" render={(props) => <SignupForm {...props} onLogin={handleLogin} />} />
//           <ProtectedRoute path="/farmer" component={FarmerPage} />
//           <Route path="/" exact>
//             <Hero1 />
//             <Middle1 />
//           </Route>
//           <Redirect to="/" />
//         </Switch>
//         <Footer1 />
//       </div>
//     </Router>
//   );
// };

// export default App;

=======
>>>>>>> 0b3916417539ff72642527db05b9bd46c6594865
