import { Link } from "react-router-dom";

const HomeNavItems = () => {
  return (
    <ul id="nav-list">
      <li>
        <a href="#myurls" className="text-primary">
          My URLs
        </a>
      </li>
      <li>
        <a href="#whyUs">Features </a>
        <i className="bi bi-chevron-down"></i>
      </li>
      <li>
        <a href="#pricing">Pricing</a>
      </li>
      <li>
        <a href="#formsection">Analytics</a>
      </li>
      <li>
        <a href="#faq">FAQs</a>
      </li>
      <Link
        className="block md:hidden w-full text-center py-2 hover:bg-blue-700 hover:text-white"
        to={"/signin"}
      >
        Login
      </Link>
      <Link
        className="block md:hidden w-full text-center py-2 hover:bg-blue-700 hover:text-white"
        to={"/signup"}
      >
        Sign up
      </Link>
    </ul>
  );
};

export default HomeNavItems;
