import { Outlet, Route } from "react-router-dom";
import { AppRoutes } from "./PageRoutes";

function getHandler(route: any, path: any) {
    //@ts-ignore — dynamic route import not typed
    // const idProperty = route.idProperty || 'id';

    if (route.element) {
        return <>

        </>
    }

    return (
        <Route key={path} path={route.path} element={<Outlet />} >

        </Route>
    )
}


const getIndexRoute = (path: string, _route: any, key: any) => {
    return <Route
        index
        path={path}
        element={<> </>}
        key={key}
    />
}

const generateRoute = (routes: any, parentPath?: string) => {
    return routes.map((route: any, index: number) => {
 
        const path = (parentPath) ? parentPath + "/" + route.path : route.path;

        if (route.idProperty) {
            return getHandler(route, path);
        }

        return route.index ? getIndexRoute(path, route, index) : (
            <Route
                path={route.path}
                element={
                    route.element
                }
                key={path}
            >
                {route.children && (
                    generateRoute(route.children, path)
                )}
            </Route>
        )
    });
};

export const projectRoutes = generateRoute(AppRoutes);
