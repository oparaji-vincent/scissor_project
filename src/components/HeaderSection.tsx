import "../components/headerSection.css";
import LinkIcon from "../assets/icons/Frame 1000001716.svg";
import Shape1 from "../assets/images/Vector 2.svg";
import Button from "./Button";
import { useNavigate } from "react-router";
const HeaderSection = () => {
  const navigate = useNavigate();
  return (
    <header id="showcase">
      <h1 className="showcase_header font-bold text-4xl">
        Optimize Your Online Experience with Our <br />
        Advanced
        <span className="text-primary with-stroke"> URL Shortening </span>
        Solution
      </h1>

      <p className="info">
        Personalize your shortened URLs to align with your brand identity.
        Utilize custom slugs, branded links, and domain customization options to
        reinforce your brand presence and enhance user engagement.
      </p>

      <div className="cta_buttons">
        <Button
          onclick={() => {
            navigate("/signup");
          }}
          className="btn-primary py-2"
        >
          Sign Up
        </Button>
        <button className="btn btn-secondary">Learn more</button>
      </div>

      <div id="info_card_container">
        <div id="info_card">
          <img src={LinkIcon} alt="linkicon" />
          <p id="info_details">
            Seamlessly transform your long URLs into concise and shareable links
            with just few clicks.
          </p>
        </div>
        <img id="vector2" src={Shape1} alt="vectorshape" />
      </div>

      <div id="showcase_foot">
        <div></div>
      </div>
    </header>
  );
};

export default HeaderSection;
