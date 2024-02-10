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
  image: { alt: string; data: any };
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
  const { alt, data } = image || {};

  return (
    <Card maxW="xs" marginX="10px" className="mb-5 sm:mb-0">
      <CardBody>
        <div className="flex justify-center">
          <Image
            src={data}
            alt={alt}
            height={200}
            className="rounded-md"
            placeholder="blur"
            objectFit="cover"
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
          <Link href={link.href} aria-label={link.aria} target="_blank">
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
