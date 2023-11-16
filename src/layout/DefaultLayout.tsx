import {Outlet} from "react-router";

export function DefaultLayout() {
    return (
        <div className="flex min-h-[100vh] flex-col justify-between">

            <div className="mt-[72px] w-full h-full">
                <Outlet/>
            </div>


        </div>
    )
}