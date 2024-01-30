import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { alegreya } from "@/styles/fonts";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

type PortfolioCardProps = {
  image: StaticImageData;
  imageAlt: string;
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
  imageAlt,
  heading,
  description,
  link,
}: PortfolioCardProps) => {
  return (
    <Card maxW="sm" marginX="10px">
      <CardBody>
        <div className="flex justify-center">
          <Image
            src={image}
            alt={imageAlt}
            width={300}
            height={300}
            placeholder="blur"
          />
        </div>
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
