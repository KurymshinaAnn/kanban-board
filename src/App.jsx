import { Routes, Route } from "react-router-dom";
import { GlobalStyled } from "./Global.styled";
import { appRoutes } from "./lib/appRoutes";
import { useState } from "react";

import "./App.css";

import MainPage from "./pages/MainPage/MainPage";
import TaskPage from "./pages/TaskPage/TaskPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ExitPage from "./pages/ExitPage/ExitPage";

import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {

  const [userData, setUserData] = useState(null);

  return (
    <>
       <GlobalStyled />

      <Routes>
        <Route element={<PrivateRoute user={userData} />}>
          <Route path={appRoutes.MAIN} element={<MainPage userData={userData}/>}>
            <Route path={`${appRoutes.TASK}/:taskId`} element={<TaskPage />} />
            <Route path={appRoutes.EXIT} element={<ExitPage setUserData={setUserData}/>} />
          </Route>
        </Route>

        <Route path={appRoutes.NOT_FOUND} element={<ErrorPage />} />
        <Route path={appRoutes.REGISTER} element={<RegisterPage setUserData={setUserData}/>} />
        <Route path={appRoutes.LOGIN} element={<LoginPage setUserData={setUserData}/>} />
      </Routes>
    </>
  );
}

export default App;
