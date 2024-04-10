import {Route, Routes} from "react-router-dom";
import { Auth } from "@pages/auth";
import {MainPage} from "@pages/main-page";

const Paths = {
    'AUTH': '/auth',
    'MAIN': '/main',
}

export const routes = (
    <Routes>
        <Route path={Paths.AUTH} element={<Auth />} />
        <Route path={Paths.MAIN} element={<MainPage />} />
    </Routes>
)
