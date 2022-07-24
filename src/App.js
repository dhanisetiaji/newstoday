import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ForgotPassword, Home, NewsDetails, PageNotFound, ProfilePage, ResetPassword, Signin, Signup } from './Pages';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/resetpassword" element={<ResetPassword />} />
      <Route path="/newsdetails" element={<NewsDetails />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/notfound" element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
