import "./App.css";
import { Routes, Route } from "react-router-dom";
import Root from "./routes/Root";

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Root />,
//         errorElement: <ErrorPage />,
//         children: [
//             {
//                 path: "/",
//                 element: <Home />,
//             },
//         ],
//     },
// ]);

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Root />} />

            {/* <RouterProvider router={router} /> */}
        </Routes>
    );
}
