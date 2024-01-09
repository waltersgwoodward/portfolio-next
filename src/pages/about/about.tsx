import clsx from "clsx";
import { List, ListItem, Text, useColorModeValue } from "@chakra-ui/react";
import { alegreya } from "@/styles/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div
      className={clsx(
        alegreya.className,
        "min-h-screen bg-gradient-to-r flex flex-col items-center pb-16 font-alegreya pt-[60px] px-10",
        useColorModeValue(
          "gray.200 p-[10px] from-rose-100 to-teal-100",
          "gray.700 p-[10px] from-gray-700 via-gray-900 to-black bg-cover w-full h-full"
        )
      )}
    >
      <div className="p-[10px] text-md">
        Below is my attempt at an introduction to who I am as a professional and
        as a person. If you would prefer a copy of my resume, please see my
        LinkedIn profile here.
      </div>
      <div className="p-[10px] text-md">
        [INSERT PICTURE OF OREGON / home] I live out in the woods here in Oregon
        City, OR. I spent most of my education focused on three areas (music,
        sustainable farming, and christian theology) until I got engaged in 2017
        and decided to pursue a career that could support my desire to someday
        buy a house and raise a family. I was always been drawn to computers and
        automation. Becoming a software developer has allowed me to continue to
        explore and develop the art of programming.{" "}
      </div>
      <div className="p-[10px] text-md">
        [Logos from past companies] While I do not have specific metrics to
        offer, in the five years that I have had the privilege of working in
        this industry, I have worked on many projects at the enterprise level
        with world wide reach and high profits.{" "}
      </div>
      <div className="p-[10px] text-md">
        [Logo from Enerflo] I currently am employed at a company called Enerflo,
        which is a solar platform that primarily serves the residential sector
        of solar sales.
      </div>
    </div>
  );
};

export default About;
