import Page from "@/components/page";

const About = () => {
  return (
    <Page
      header="About"
      className="items-center pb-16 font-alegreya pt-[60px] px-10"
      title="About"
    >
      <div className="max-w-[900px]">
        <div className="p-[10px] text-md">
          Hi there! My name is Walter Woodward and welcome to my portfolio
          website. It was built with NextJS and deployed using AWS Amplify.
        </div>
        <div className="p-[10px] text-md">
          I am a Full Stack Software Developer currently based out of Oregon
          City, OR. At the moment I am primarily building with the following
          tools/stack: TypeScript, JavaScript, React, NextJS, NestJS, GraphQL,
          and PostgreSQL.
        </div>
        <div className="p-[10px] text-md">
          I got into software development for three primary reasons: firstly,
          because I enjoy it; secondly, as my work experience demonstrates,
          because I have an aptitude for it; and lastly because I have a desire
          to contribute to making the world a better place through the use of
          technology. Having established myself over the past five years as
          a software developer, I am now actively seeking/considering remote
          positions for mission-driven companies based in the United States.
          Please reach out if you have a relevant position that you think I
          would be a good fit for. Thank You 🙏 🙇‍♂️
        </div>
        <div className="p-[10px] text-md italic">
          “But seek first the kingdom of God and his righteousness, and all
          these things will be added to you.” - Matthew 6:33 ESV
        </div>
      </div>
       
    </Page>
  );
};

export default About;
