import './App.css';
import { Route, Routes } from "react-router-dom";
import RegistrationPage from "../RegistrationPage/RegistrationPage";
import AuthorizationPage from "../AuthorizationPage/AuthorizationPage";
import Main from "../Main/Main";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import * as auth from "../../api/auth";
import Header from "../Header/Header";

function App() {
    const handleRegister = (data) => {
        return auth
            .register(data)
            .then(() => {
                // dispatch(setIsLoading(true));
                // handleLogin({ email, password }, setData, setErrors, resetForm);
            })
            .catch((err) => {

            });
    };

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
        <Route path='/signin' element={(<AuthorizationPage />)}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
