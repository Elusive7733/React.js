import { Fragment } from "react";
import { Link } from "react-router-dom";

const Home: React.FC = (props: any) => {
  return (
    <Fragment>
      <h1>Hello Home</h1>
      <Link to="/">app</Link>
    </Fragment>
  );
};

export default Home;
