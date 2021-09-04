import PropTypes from "prop-types";

export const Button = (props) => {
  return (
    <button
      onClick={props.click}
      className="btn"
      style={{ backgroundColor: props.color }}
    >
      {props.text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
};

Button.protoType = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
