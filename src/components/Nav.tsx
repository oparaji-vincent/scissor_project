import "../components/nav.css";
import Logo from "../assets/icons/logo.svg";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../firebase/auth";
import HomeNavItems from "./HomeNavItems";
import { LogOut } from "lucide-react";
import { getAuth } from "firebase/auth";
import { toast } from "react-toastify";

const Nav = () => {
  const navigate = useNavigate();
  const { authUser } = useAuth();

  const onLogoutHandler = async () => {
    const auth = getAuth();
    try {
      await auth.signOut();
      navigate("/signin");
    } catch (error) {
      toast.error("Sign out failed.");
    }
  };

  return (
    <nav className="nav">
      <img src={Logo} alt="" />

      <div className="toggle">
        <input
          type="checkbox"
          name=""
          id="nav-toggle"
          className="navigation__checkbox"
        />
        <label htmlFor="nav-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>
        {!authUser && <HomeNavItems />}
        {authUser && (
          <ul id="nav-list">
            <Link
              className="block  w-full text-center py-2 hover:bg-blue-700 hover:text-white"
              to="/dashboard"
            >
              Dashboard
            </Link>

            <Link
              className="block w-full text-center py-2 hover:bg-blue-700 hover:text-white"
              to="/links"
            >
              Links
            </Link>

            <Link
              className="block w-full text-center py-2 hover:bg-blue-700 hover:text-white"
              to="/profile"
            >
              Profile
            </Link>

            <Link
              className="block lg:hidden w-full text-center py-2 hover:bg-blue-700 hover:text-white"
              to={"/signin"}
            >
              Logout
            </Link>
          </ul>
        )}
      </div>
      <div>
        {!authUser && (
          <>
            <Button
              onclick={() => {
                navigate("signin");
              }}
              className="btn-secondary py-2"
            >
              Login
            </Button>
            <Button
              onclick={() => {
                navigate("signup");
              }}
              className="btn-primary py-2"
            >
              Try for free
            </Button>
          </>
        )}

        {authUser && (
          <Button onclick={onLogoutHandler} className="btn-primary flex py-2">
            Logout
            <LogOut className="ml-3" />
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Nav;
