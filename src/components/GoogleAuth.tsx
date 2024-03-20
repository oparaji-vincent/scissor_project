import Button from "./Button";
import GoogleLogo from "../assets/icons/googleLogo.svg";
import { useLocation, useNavigate } from "react-router";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";

const GoogleAuth = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const onClickHandler = async (event: React.MouseEvent) => {
    event.preventDefault();
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (user) {
        const userData = await getUserData(user.uid);
        if (!userData) {
          const userInfo: User = {
            Email: user.email,
            Name: user.displayName,
            uuid: user.uid,
            photo_url: user?.photoURL,
          };
          const userStored = await storeUserData(userInfo);
          console.log(userStored);
        }
      }
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Could not authenticate account. Please try again.");
    }
  };
  return (
    <Button
      onclick={onClickHandler}
      className="btn-primary flex mx-auto px-4 rounded-md"
    >
      <img className="mr-2" src={GoogleLogo} alt="" />
      {location.pathname.includes("signup") ? "Sign up" : "Login"}
    </Button>
  );
};

async function getUserData(uuid: string) {
  const response = await fetch(`https://shorts.zictracks.com/api/users?key=${uuid}`);
  if (!response.ok) {
    return false;
  }

  const responseData = await response.json();
  if (!responseData.status) {
    return false;
  }

  return responseData.data;
}

async function storeUserData(data: User) {
  const response = await fetch(`https://shorts.zictracks.com/api/users`, {
    method: "POST",
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    return false;
  }

  const responseData = await response.json();
  if (!responseData.status) {
    return false;
  }

  return responseData.data;
}
export default GoogleAuth;
