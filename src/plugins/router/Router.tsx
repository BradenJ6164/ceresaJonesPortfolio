import {Routes, Route} from "react-router";
import {DefaultLayout} from "../../layout/DefaultLayout";
import {Home} from "../../pages/Home";
import {Works} from "../../pages/Works";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route index element={<Home/>}/>
                <Route path="/works" element={<Works/>}/>
            </Route>
        </Routes>
    )
}