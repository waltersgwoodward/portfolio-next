import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { alegreya } from "@/styles/fonts";
import Link from "next/link";
import Page from "@/components/page";

const Portfolio = () => {
  return (
    <Page className="justify-center items-center pb-16 font-alegreya pt-[50px]" title="Portfolio">
      <Card maxW="sm">
        <CardBody>
          <Image
            src="/portfolio/walkin-pets-logo.jpeg"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack pt="6" spacing="3">
            <Heading size="md" className={alegreya.className}>
              SureFit Calculator
            </Heading>
            <Text>
              An embedded javascript application that calculates the correct
              wheelchair size for your pet
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Link
              href="https://www.handicappedpets.com/wheelchair-sizer/"
              aria-label="Click here to view Walter's Contact form"
            >
              <Button variant="link" colorScheme="blue">
                Try the SureFit Calculator!
              </Button>
            </Link>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Page>
  );
};

export default Portfolio;
