import { Check2Circle } from "react-bootstrap-icons";
import "../components/PricingCard.css";
const PricingCard: React.FC<{
  title: string;
  price: string;
  description: string;
  features: string[];
  className?: string;
}> = ({ className, title, price, description, features }) => {
  return (
    <div className={`card ${className}`}>
      <p className="title">{title}</p>
      <h4 className="price">{price}</h4>
      <p className="description">{description}</p>

      <ul>
        {features.map((feature) => {
          return (
            <li className="" key={feature}>
              <Check2Circle className="inline" /> {feature}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PricingCard;
