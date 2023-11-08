import { Link } from "@chakra-ui/next-js";
import clsx from "clsx";
import { Button, useColorModeValue } from "@chakra-ui/react";
import { alegreya } from "@/styles/fonts";

type HomeProps = {
  name?: string;
  jobTitle?: string;
};

const Home = ({
  name = "Walter Woodward",
  jobTitle = "Senior Full Stack Software Developer",
}: HomeProps) => {
  return (
    <div
      className={clsx(
        alegreya.className,
        "min-h-screen bg-gradient-to-r flex flex-col justify-center items-center pb-16 font-alegreya",
        useColorModeValue(
          "gray.200 p-[10px] from-rose-100 to-teal-100",
          "gray.700 p-[10px] from-gray-700 via-gray-900 to-black bg-cover w-full h-full"
        )
      )}
    >
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
    </div>
  );
};

export default Home;
