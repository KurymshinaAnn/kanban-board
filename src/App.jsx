import { Routes, Route } from "react-router-dom";

import "./App.css";

import { GlobalStyled } from "./Global.styled";
import { appRoutes } from "./lib/appRoutes";

import MainPage from "./pages/MainPage/MainPage";
import TaskPage from "./pages/TaskPage/TaskPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ExitPage from "./pages/ExitPage/ExitPage";

import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  let user = true;

  return (
    <>
      <GlobalStyled />

      <Routes>
        <Route element={<PrivateRoute user={user} />}>
          <Route path={appRoutes.MAIN} element={<MainPage />}>
            <Route path={`${appRoutes.TASK}/:taskId`} element={<TaskPage />} />
            <Route path={appRoutes.EXIT} element={<ExitPage />} />
          </Route>
        </Route>

        <Route path={appRoutes.NOT_FOUND} element={<ErrorPage />} />
        <Route path={appRoutes.REGISTER} element={<RegisterPage />} />
        <Route path={appRoutes.LOGIN} element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
