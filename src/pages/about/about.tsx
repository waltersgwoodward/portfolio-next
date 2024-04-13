import Page from "@/components/page";
import { Link } from "@chakra-ui/next-js";

const About = () => {
  return (
    <Page
      header="About"
      className="items-center pb-16 font-alegreya pt-[60px] px-10"
      title="About"
    >
      <div className="max-w-[900px]">
        <div className="p-[10px] text-md">
          Hi there! My name is Walter Woodward and this is a simple portfolio
          website that I built earlier this year.
        </div>
        <div className="p-[10px] text-md">
          I am a Full Stack Software Developer currently based out of Oregon
          City, OR. If you are interested in hiring me for a position, please
          contact me using my{" "}
          <Link
            className="page-row__link font-medium"
            href="/contact"
            aria-label="Click here to view Walter's Contact form"
          >
            <span className="text-blue-600 hover:underline">contact page</span>
          </Link>
          , or via my{" "}
          <Link
            href="https://www.linkedin.com/in/walter-woodward-83b656130/"
            className="page-row__link font-medium"
            aria-label="Click here to view Walter's LinkedIn Profile"
          >
            <span className="text-blue-600 hover:underline">
              LinkedIn profile
            </span>
          </Link>
          . Thank You 🙏
        </div>
      </div>
       
    </Page>
  );
};

export default About;
