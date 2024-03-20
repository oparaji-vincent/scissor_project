import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import Logo from "../assets/icons/Logo-dark.svg";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="">
      <div className="footer_data flex justify-between ">
        <div className="w-1/5">
          <img src={Logo} alt="logo" />
          <ul className="flex gap-4  mt-4 list-none">
            <li>
              <Twitter />
            </li>
            <li>
              <Instagram />
            </li>
            <li>
              <LinkedIn />
            </li>
            <li>
              <Facebook />
            </li>
          </ul>
        </div>

        <div className="p-2 w-3/4">
          <div className="flex justify-start gap-10 w-full mb-4">
            <div className="w-1/4">
              <h4 className="font-bold text-lg">Why Scissor?</h4>
              <ul>
                <li>Scissor 101</li>
                <li>Integrations & API</li>
                <li>Pricing</li>
              </ul>
            </div>

            <div className="w-1/4">
              <h4 className="font-bold text-lg">Solutions</h4>
              <ul>
                <li>Social Media</li>
                <li>Digital Marketing</li>
                <li>Customer Service</li>
                <li>For Developers</li>
              </ul>
            </div>
            <div className="w-1/4">
              <h4 className="font-bold text-lg">Products</h4>
              <ul>
                <li>Link Management</li>
                <li>QR Codes</li>
                <li>Link-in-bio</li>
              </ul>
            </div>
            <div className="w-1/4">
              <h4 className="font-bold text-lg">Company</h4>
              <ul>
                <li>About Scissor</li>
                <li>Careers</li>
                <li>Partners</li>
                <li>Press</li>
                <li>Contact</li>
                <li>Reviews</li>
              </ul>
            </div>
          </div>

          <div className="flex justify-start gap-10 w-full">
          <div className="w-1/4">
              <h4 className="font-bold text-lg">Resources</h4>
              <ul>
                <li>Blog</li>
                <li>Resource Library</li>
                <li>Developers</li>
                <li>App Connectors</li>
                <li>Support</li>
                <li>Trust Center</li>
                <li>Browser Extension</li>
                <li>Mobile App</li>
              </ul>
            </div>
            <div className="w-1/4">
              <h4 className="font-bold text-lg">Features</h4>
              <ul>
                <li>Branded Links</li>
                <li>Mobile Links</li>
                <li>Campaign</li>
                <li>Management & Analytics</li>
                <li>QR Code generation</li>
              </ul>
            </div>
            <div className="w-1/4">
              <h4 className="font-bold text-lg">Legal</h4>
              <ul>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
                <li>Terms of Service</li>
                <li>Acceptable Use Policy</li>
                <li>Code of Conduct</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p className="lg:text-right text-center">Term of Service | Security | Scissor 2023</p>
    </footer>
  );
};

export default Footer;
