import Page from "@/components/page";
import PortfolioCard from "@/components/portfolio-card";
import WalkInPetsLogo from "./walkin-pets-logo.png";
import { StaticImageData } from "next/image";

type ProjectData = {
  image: {
    alt: string;
    data: StaticImageData;
  };
  heading: string;
  description: string;
  link: {
    href: string;
    label: string;
    aria: string;
  };
}[];

const projectData: ProjectData = [
  {
    image: { alt: "Walkin Pets Company Logo", data: WalkInPetsLogo },
    heading: "SureFit Calculator",
    description:
      "An embedded javascript application that calculates the correct wheelchair size for your pet",
    link: {
      href: "https://www.handicappedpets.com/wheelchair-sizer/",
      label: "Try the SureFit Calculator!",
      aria: "Click here to view the deployed version of the Surefit Calculator",
    },
  },
];

const renderedPortfolioCards = 
  projectData.map((card, index) => {
    const { image, heading, description, link } = card || {};

    return (
      <PortfolioCard
        key={index}
        image={image}
        link={link}
        heading={heading}
        description={description}
      ></PortfolioCard>
    );
  });

const Portfolio = () => (
  <Page
    className="items-center pb-16 font-alegreya pt-[50px]"
    title="Portfolio"
  >
    <div className="p-[10px] text-md pb-[20px]">
      Unfortunately since most of the projects I have worked on have been for
      proprietary products, the only example I currently have of my work dates
      back to the beginning of my journey with HandicappedPets and the SureFit
      Calculator.
    </div>

    <div className="flex justify-between">
      {renderedPortfolioCards}
    </div>
  </Page>
);

export default Portfolio;
