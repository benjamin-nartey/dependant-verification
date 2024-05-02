import { Route, Routes } from "react-router-dom";
import SignInPage from "./Routes/SignInPage";
import Navigation from "./layouts/Navigation";
import Home from "./Routes/Home";
import Dashboard from "./Routes/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignInPage />} />
      <Route index element={<SignInPage />} />
      <Route path="login" element={<SignInPage />} />
      <Route element={<Navigation />}>
        <Route path="home" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
