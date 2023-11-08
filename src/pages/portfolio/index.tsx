import Nav from "@/components/nav-bar";
import Portfolio from "./portfolio";
import { Fragment } from "react";

import { Alegreya } from "next/font/google";

const alegreya = Alegreya({ subsets: ["latin"] });

const Home = () => {
  return (
    <Fragment>
      <Nav />
      <Portfolio />
    </Fragment>
  );
};

export default Home;
