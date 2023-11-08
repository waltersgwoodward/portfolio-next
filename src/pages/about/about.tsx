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
        My career as a software developer started out in web development,
        primarily as a native JavaScript developer. Currently, I enjoy working
        on a daily basis with TypeScript, React, NestJS, TailwindCSS, GraphQL,
        and PostgreSQL. Outside of programming languages and tools, day to day,
        I work within a modified Agile Scrum environment as an individual
        contributor at Enerflo. We have daily standups and use git and Github
        for version control. On any given day I might be researching different
        solutions to a project still in the works, coding out a pull request to
        address bugs / build new features requested through our support team,
        writing tests (we use Jest and Cypress), or reviewing pull requests
        submitted by my co-workers. Much of the code that I write centers around
        building and integrating with API&apos;s in order to streamline and
        standardize the entire solar deal process.
      </div>
      <div className="p-[10px] text-start text-md">
        <Text>My strengths include:</Text>
        <br />
        <List>
          <ListItem>
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-blue-300 pr-2"
            />
            The ability to quickly adapt in a changing / fast paced environment
          </ListItem>
          <ListItem>
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-blue-300 pr-2"
            />
            Maintaining open communication with all members of my team
          </ListItem>
          <ListItem>
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-blue-300 pr-2"
            />
            A strong aptitude for analytical thinking / problem solving
          </ListItem>
          <ListItem>
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-blue-300 pr-2"
            />
            Being honest and acting with integrity
          </ListItem>
        </List>
        <br />
        <Text>
          On a personal level, I am motivated by my faith to follow the example
          of Christ - to live sacrificially, to love abundantly, to work
          &apos;as unto the Lord&apos;. I am a husband, a father, and a
          homeowner - so, outside of work, most of my time is dedicated to my
          family, working on home improvement projects, or contributing in
          various ways to our local church.
        </Text>
      </div>
    </div>
  );
};

export default About;
