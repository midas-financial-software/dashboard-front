import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <div className="main-header__container">
        <img
          className="main-header__logo"
          src="/images/logo.webp"
          alt="Midas Capital Logo"
          width={200}
          height={117}
        />
        <h1>Dashboard</h1>
      </div>
    </header>
  );
};

export default Header;
