import Nav from "../components/Nav";
import NotFoundImage from "../assets/bg/NotFound.svg"

const NotFound = () => {
  return (
    <>
      <Nav />
      <img className="mx-auto" src={NotFoundImage} alt="" />
      <h2 className="text-center mt-5 text-2xl font-bold uppercase">Page not found!!</h2>
    </>
  );
};

export default NotFound;
