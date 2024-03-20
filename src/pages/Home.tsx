import HeaderSection from "../components/HeaderSection";
import Info from "../components/Info";
import Button from "../components/Button";
import Nav from "../components/Nav";
import "../pages/home.css";
import URLShortening from "../assets/icons/Group 6.svg";
import CustomUrls from "../assets/icons/edit.svg";
import QRCodes from "../assets/icons/four squares.svg";
import DataAnalytics from "../assets/icons/barLine.svg";
import PricingCard from "../components/PricingCard";
import URLForm from "../components/URLForm";
import Footer from "../components/Footer";
import { Dash, Plus } from "react-bootstrap-icons";

const Home = () => {
  return (
    <>
      <Nav />
      <HeaderSection />
      <section id="myurls">
        <div className="head">
          <h2 className="font-bold text-3xl">
            One Stop. <br />
            Four <span className="text-primary">Possibilities</span>.
          </h2>
        </div>
        <div className="details">
          <div>
            <h3 className="font-bold text-2xl">3M</h3>
            <p>Active users</p>
          </div>
          <div>
            <h3 className="font-bold text-2xl">60M</h3>
            <p>
              Links & QR <br />
              codes created
            </p>
          </div>
          <div>
            <h3 className="font-bold text-2xl">1B</h3>
            <p>Clicked & Scanned connections</p>
          </div>
          <div>
            <h3 className="font-bold text-2xl">300k</h3>
            <p>App Integrations</p>
          </div>
        </div>
      </section>
      <section id="whyUs">
        <div className="head">
          <h2 className="font-bold text-3xl mb-2 leading-10">
            Why choose <br /> <span className="text-primary">Scissors</span>
          </h2>
          <p>
            Scissors is the hub of everything that has to do with your link
            management. We shorten your URLs, allow you creating custom ones for
            your personal, business, event usage. Our swift QR code creation,
            management and usage tracking with advance analytics for all of
            these is second to none.
          </p>
        </div>
        <div className="details">
          <Info
            img={URLShortening}
            title="URL Shortening"
            text="Scissor allows you to shorten URLs of your business, events.
              Shorten your URL at scale, URL redirects."
          />
          <Info
            img={CustomUrls}
            title="Custom URLs"
            text="With Scissor, you can create custom URLs, with the length you want! A solution for socials and businesses."
          />
          <Info
            img={QRCodes}
            title="QR Codes"
            text="Generate QR codes to your business, events. Bring your audience
            and customers to your doorstep with this scan and go solution."
          />
          <Info
            img={DataAnalytics}
            title="Data Analytics"
            text="Receive data on the usage of either your shortened URL, custom
            URLs or generated QR codes. Embedded to monitor progress."
          />
        </div>
      </section>
      <section id="pricing">
        <h2 className="font-bold text-3xl">
          <span className="has_sidebar">A </span>
          <span className="text-primary">price perfect</span> for your needs.
        </h2>
        <p>
          From catering for your personal, business, event, social needs, you
          can be <br />
          rest assured we have you in mind in our pricing.
        </p>

        <div id="pricing_cards">
          <PricingCard
            title="Basic"
            price="Free"
            description="Free plan for all users"
            features={[
              "Unlimited URL Shortening",
              "Basic Link Analytics",
              "Customizable Short Links",
              "Standard Support",
              "Ad-supported",
            ]}
          />
          <PricingCard
            title="Professional"
            price="$15/month"
            className="primary"
            description="Ideal for business creators"
            features={[
              "Enhanced Link Analytics",
              "Custom Branded Domains",
              "Advanced Link Customization",
              "Priority Support",
              "Ad-free Experience",
            ]}
          />
          <PricingCard
            title="Teams"
            price="$25/month"
            description="Share with up to 10 users"
            features={[
              "Team Collaboration",
              "User Roles and Permissions",
              "Enhanced Security",
              "API Access",
              "Dedicated Account Manager",
            ]}
          />
        </div>

        <div className="cta_buttons">
          <Button className="btn-secondary-outline py-2">
            Get Custom Pricing
          </Button>
          <Button className="btn-primary py-2">Select Pricing</Button>
        </div>
      </section>
      <div id="formsection">
        <URLForm className="mx-auto" />
      </div>

      <section id="faq">
        <h2 className="font-bold text-2xl">
          <span className="has_sidebar">F</span>AQs
        </h2>
        <ul>
          <li>
            <p>How does URL shortening work?</p>
            <br />
            <p>
              URL shortening works by taking a long URL and creating a shorter,
              condensed version that redirects to the original URL. When a user
              clicks on the shortened link, they are redirected to the intended
              destination.
            </p>
            <Dash />
          </li>
          <li>
            <p>
              Is it necessary to create an account to use the URL shortening
              service?
            </p>
            <Plus />
          </li>
          <li>
            <p>Are the shortened links permanent? Will they expire?</p>
            <Plus />
          </li>
          <li>
            <p>
              Are there any limitations on the number of URLs I can shorten?
            </p>
            <Plus />
          </li>
          <li>
            <p>
              Can I customize the shortened URLs to reflect my brand or content?
            </p>
            <Plus />
          </li>
          <li>
            <p>Can I track the performance of my shortened URLs?</p>
            <Plus />
          </li>
          <li>
            <p>
              How secure is the URL shortening service? Are the shortened links
              protected against spam or malicious activity?
            </p>
            <Plus />
          </li>
          <li>
            <p>What is a QR code and what can it do?</p>
            <Plus />
          </li>
          <li>
            <p>
              Is there an API available for integrating the URL shortening
              service into my own applications or websites?
            </p>
            <Plus />
          </li>
        </ul>
      </section>

      <section id="cta">
        <h2>Revolutionizing Link Optimization</h2>
        <Button className="btn btn-primary py-2">Get Started</Button>
      </section>
      <Footer />
    </>
  );
};

export default Home;
