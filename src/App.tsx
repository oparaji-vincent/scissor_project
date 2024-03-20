import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { AuthUserProvider } from "./firebase/auth";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Links from "./pages/Links";
import ErrorBoundary from "./components/ErrorBoundary";
import NotFound from "./pages/NotFound";
import ForgotPassword from "./pages/ForgotPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Oops</h1>,
  },
  { path: "signup", element: <Signup /> },
  { path: "signin", element: <Login /> },
  { path: "forgotpassword", element: <ForgotPassword /> },
  { path: "dashboard", element: <Dashboard /> },
  {
    path: "links",
    element: <Links />,
  },
  { path: "/*", element: <NotFound /> },
]);

function App() {
  return (
    <>
      <AuthUserProvider>
        <ErrorBoundary>
          <RouterProvider router={router} />
        </ErrorBoundary>
        <ToastContainer />
      </AuthUserProvider>
    </>
  );
}

export default App;
