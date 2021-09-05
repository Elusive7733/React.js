import PropTypes from "prop-types";
import { Button } from "./Button";

export const Header = ({ title, toggle_form, show_form }) => {
  let toggle_form_btn = null;
  if (show_form) {
    toggle_form_btn = <Button text="Close" color="red" click={toggle_form} />;
  } else {
    toggle_form_btn = <Button text="Add" color="green" click={toggle_form} />;
  }

  return (
    <header className="header">
      <h1>{title}</h1>
      {toggle_form_btn}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string,
};
