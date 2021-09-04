import PropTypes from "prop-types";
import { Button } from "./Button";

export const Header = ({ title }) => {
  let counter = 0;
  const onClickHandler = (e) => {
    console.log(counter);
    counter += 1;
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button text="Add" color="green" click={onClickHandler} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string,
};
