import {Routes, Route} from "react-router";
import {DefaultLayout} from "../../layout/DefaultLayout";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route index/>
            </Route>
        </Routes>
    )
}