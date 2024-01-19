import Page from "@/components/page";

const About = () => {
  return (
    <Page
      header="About"
      className="items-center pb-16 font-alegreya pt-[60px] px-10"
      title="About"
    >
      <div className="p-[10px] text-md">
        Hi there! My name is Walter Woodward and this is my portfolio website.
        It was built with NextJS and deployed using AWS Amplify. I am a Full
        Stack Software Developer currently based out of Oregon City, OR. At the
        moment I am primarily building with the following tools/stack:
        TypeScript, JavaScript, React, NextJS, NestJS, GraphQL, and PostgreSQL.
        I have just over five years of professional experience as a dev and was
        recently a part of a large scale layoff at Enerflo. If you are
        interested in hiring me, please reach out to me via LinkedIn. Thank You!
      </div>
       
    </Page>
  );
};

export default About;
