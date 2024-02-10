import type { NextApiRequest, NextApiResponse } from 'next'
import { StaticImageData } from 'next/image';
import WalkInPetsLogo from "./walkin-pets-logo.png";
import SamWilliams from "./sam-williams.jpeg";

export type ProjectData = {
    image: {
        alt: string;
        data: StaticImageData
    };
    heading: string;
    description: string;
    link: {
        href: string;
        label: string;
        aria: string;
    };
}[];

export default function handler(
    _req: NextApiRequest,
    res: NextApiResponse<ProjectData>
) {

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
        {
            image: { alt: "Sam Williams Photo", data: SamWilliams },
            heading: "Nine Acre Photography Website",
            description:
                "A website I am currently building for a friend of mine, Sam Williams, founder of Nine Acre Corner Photography.",
            link: {
                href: "https://nineacrephotography.vercel.app/",
                label: "Checkout Nine Acre Photography!",
                aria: "Click here to view the deployed version of (what will be) nineacrephotography.com",
            },
        },
    ];

    res.status(200).json(projectData)
}
