import styles from "./Button.module.css";

const Button = ({
  children,
  handler,
  name,
  activeButton,
  setActiveButton,
  reversTodo,
}) => {
  return (
    <button
      name={name}
      onClick={(e) => {
        handler();
        if (!e.target.name) return;
        if (e.target.name === activeButton) reversTodo();
        setActiveButton(e.target.name);
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
