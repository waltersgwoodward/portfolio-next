import { Link } from "@chakra-ui/next-js";
import clsx from "clsx";
import { Button, useColorModeValue } from "@chakra-ui/react";
import Page from "@/components/page";

type HomeProps = {
  name?: string;
  jobTitle?: string;
};

const Home = ({
  name = "Walter Woodward",
  jobTitle = "Senior Full Stack Software Developer",
}: HomeProps) => {
  return (
    <Page className="justify-center items-center pb-16 font-alegreya" title="Home">
      <div className="p-[10px] text-center text-6xl">{name}</div>
      <div className="p-[10px] text-center text-2xl">{jobTitle}</div>
      <div
        className={clsx(
          "flex justify-between",
          useColorModeValue("text-red-900", "text-blue-200")
        )}
      >
        <div className="p-[10px] text-center text-sm">
          <Link
            className="page-row__link"
            href="/about"
            aria-label="Click here to read more about Walter"
          >
            <Button backgroundColor={"transparent"}>ABOUT</Button>
          </Link>
        </div>
        <div className="p-[10px] text-center text-sm">
          <Link
            className="page-row__link"
            href="/portfolio"
            aria-label="Click here to view Walter's current projects"
          >
            <Button backgroundColor={"transparent"}>PORTFOLIO</Button>
          </Link>
        </div>
        <div className="p-[10px] text-center text-sm">
          <Link
            className="page-row__link"
            href="/contact"
            aria-label="Click here to view Walter's Contact form"
          >
            <Button backgroundColor={"transparent"}>CONTACT</Button>
          </Link>
        </div>
      </div>
    </Page>
  );
};

export default Home;
