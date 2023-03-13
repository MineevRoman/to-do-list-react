import styles from "./Button.module.css";

const Button = ({
  children,
  handler,
  name,
  activeButton = false,
  setActiveButton,
}) => {
  return (
    <button
      name={name}
      onClick={(e) => {
        if (!e.target.name) return;
        if (e.target.name === activeButton) {
          handler("revers");
        } else {
          handler(name);
        }
        if (activeButton) setActiveButton(e.target.name);
      }}
      className={`${styles.optionsButton} ${
        name && activeButton === name ? styles.activeButton : ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
