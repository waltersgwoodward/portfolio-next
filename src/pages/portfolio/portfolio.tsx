import Page from "@/components/page";
import PortfolioCard from "@/components/portfolio-card";
import { StaticImageData } from "next/image";
import useSWR from "swr";

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

const fetcher = () => fetch("/api/projects").then((res) => res.json());

const Portfolio = () => {
  const { data, error } = useSWR("/api/profile-data", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const projects: ProjectData = [...data];

  const cards = projects.map((card, index) => {
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

  return (
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

      <div className="flex justify-between">{cards}</div>
    </Page>
  );
};

export default Portfolio;
