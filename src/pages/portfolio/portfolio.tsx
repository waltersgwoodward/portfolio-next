import Page from "@/components/page";
import PortfolioCard from "@/components/portfolio-card";
import WalkInPetsLogo from "./walkin-pets-logo.png";

const projectData = [
  {
    image: { alt: "Walkin Pets Company Logo" },
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
      {projectData.map((card, index) => {
        const { image, heading, description, link } = card || {};

        return (
          <PortfolioCard
            key={index}
            imageAlt={image.alt}
            image={WalkInPetsLogo}
            link={link}
            heading={heading}
            description={description}
          ></PortfolioCard>
        );
      })}
    </div>
  </Page>
);

export default Portfolio;
