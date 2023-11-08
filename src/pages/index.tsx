import { Alegreya } from "next/font/google";
import { Fragment } from "react";
import HomePage from "./home";

const alegreya = Alegreya({ subsets: ["latin"] });

export default function Home() {
  return (
    <Fragment>
      <HomePage />
    </Fragment>
  );
}
