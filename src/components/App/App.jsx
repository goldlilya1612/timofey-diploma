import './App.css';
import { Route, Routes, useNavigate } from "react-router-dom";
import RegistrationPage from "../RegistrationPage/RegistrationPage";
import AuthorizationPage from "../AuthorizationPage/AuthorizationPage";
import Main from "../Main/Main";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import * as api from "../../api/api";
import Header from "../Header/Header";

function App() {
    const navigate = useNavigate();
    const handleRegister = (data) => {
        return api
            .register(data)
            .then(() => {
                const { email, password } = data;
                handleLogin({username: email, password});
            })
            .catch((err) => {
                console.log(err)
            });
    };


    const handleLogin = (data) => {
        return api
            .login(data)
            .then((res) => {
                localStorage.setItem('token', res.access_token);
                localStorage.setItem('userId', res.user_id);
                navigate('/');
            })
            .catch((err) => {
                console.log(err)
            });
    }

  return (
    <div className="App">
      <Routes>
          <Route
              path="/"
              element={
                  <ProtectedRoute>
                      <Header />
                      <Main />
                  </ProtectedRoute>
              }
          ></Route>
        <Route path='/signup' element={(<RegistrationPage onRegister={handleRegister}/>)}>
        </Route>
        <Route path='/signin' element={(<AuthorizationPage onLogin={handleLogin}/>)}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
