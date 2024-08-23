import Nav from "@/components/nav-bar";
import Portfolio from "./portfolio";
import { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <Nav />
      <Portfolio />
    </Fragment>
  );
};

export default Home;
