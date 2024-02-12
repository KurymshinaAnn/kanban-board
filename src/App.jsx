import { Routes, Route } from "react-router-dom";

import { GlobalStyled } from "./Global.styled";
import { appRoutes } from "./lib/appRoutes";

import "./App.css";

import MainPage from "./pages/MainPage/MainPage";
import TaskPage from "./pages/TaskPage/TaskPage";
import NewTaskPage from "./pages/NewTaskPage/NewTaskPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ExitPage from "./pages/ExitPage/ExitPage";

import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <>
      <GlobalStyled />

      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path={appRoutes.MAIN} element={<MainPage />}>
            <Route path={`${appRoutes.TASK}/:taskId`} element={<TaskPage />} />
            <Route path={appRoutes.NEW_TASK} element={<NewTaskPage />} />
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
