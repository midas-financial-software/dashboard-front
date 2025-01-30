import "./Card.css";

interface CardProps {
  title: string;
}

const Card: React.FC<CardProps> = ({ title }) => {
  return <h3 className="dashboard-card">{title}</h3>;
};

export default Card;
