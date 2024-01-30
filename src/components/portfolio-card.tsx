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

type PortfolioCardProps = {
  image: {
    src: string;
    alt: string;
  };
  heading: string;
  description: string;
  link: {
    href: string;
    label: string;
    aria: string;
  };
};
const PortfolioCard = ({
  image,
  heading,
  description,
  link,
}: PortfolioCardProps) => {
  return (
    <Card maxW="sm" marginX="10px">
      <CardBody>
        <Image src={image.src} alt={image.alt} borderRadius="lg"/>
        <Stack pt="6" spacing="3">
          <Heading size="md" className={alegreya.className}>
            {heading}
          </Heading>
          <Text>{description}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Link href={link.href} aria-label={link.aria}>
            <Button variant="link" colorScheme="blue">
              {link.label}
            </Button>
          </Link>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default PortfolioCard;
