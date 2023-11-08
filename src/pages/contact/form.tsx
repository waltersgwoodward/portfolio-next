import * as React from "react";
import emailjs, { init } from "emailjs-com";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack,
  useToast,
  Link,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import { alegreya } from "@/styles/fonts";
init("UUDb2VVym6bRHm5QH");

export type ContactFormProps = {};

export default function ContactForm({}: ContactFormProps) {
  const { hasCopied, onCopy } = useClipboard(
    "walter.sekope.woodward@gmail.com"
  );

  const toast = useToast();

  const sendEmail = (e: any) => {
    e.preventDefault();

    toast.promise(
      emailjs.sendForm(
        "service_qt25ufu",
        "template_6wb8xsv",
        e.target,
        "UUDb2VVym6bRHm5QH"
      ),
      {
        success: { title: "Success", description: "Email sent" },
        error: { title: "Error", description: "Something wrong" },
        loading: { title: "Sending", description: "Please wait" },
      }
    );
  };

  return (
    <div
      className={clsx(
        alegreya.className,
        "min-h-screen bg-gradient-to-r flex flex-col justify-center items-center",
        useColorModeValue(
          "gray.200 p-[10px] from-rose-100 to-teal-100",
          "gray.700 p-[10px] from-gray-700 via-gray-900 to-black bg-cover w-full h-full"
        )
      )}
    >
      <VStack spacing={{ base: 4, md: 8 }}>
        <Stack
          spacing={{ base: 4, md: 8, lg: 20 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack
            align="center"
            justify="space-around"
            direction={{ base: "row", md: "column" }}
          >
            <Tooltip
              label={hasCopied ? "Email Copied!" : "Copy Email"}
              closeOnClick={false}
              hasArrow
            >
              <IconButton
                aria-label="email"
                variant="ghost"
                size="lg"
                fontSize="3xl"
                icon={<FontAwesomeIcon icon={faEnvelope} />}
                onClick={onCopy}
                isRound
                colorScheme="blue"
              />
            </Tooltip>

            <Link href="https://github.com/waltersgwoodward">
              <IconButton
                aria-label="github"
                variant="ghost"
                size="lg"
                fontSize="3xl"
                icon={<FontAwesomeIcon icon={faGithub} />}
                isRound
                colorScheme="blue"
              />
            </Link>

            <Link href="https://www.linkedin.com/in/walter-woodward-83b656130/">
              <IconButton
                aria-label="linkedin"
                variant="ghost"
                size="lg"
                icon={<FontAwesomeIcon icon={faLinkedin} />}
                isRound
                colorScheme="blue"
              />
            </Link>
          </Stack>

          <form onSubmit={sendEmail}>
            <Box
              bg={useColorModeValue("white", "gray.700")}
              borderRadius="lg"
              p={8}
              color={useColorModeValue("gray.700", "whiteAlpha.900")}
              shadow="base"
            >
              <VStack spacing={5}>
                <FormControl isRequired>
                  <FormLabel>Name</FormLabel>

                  <InputGroup>
                    <InputLeftElement>
                      <FontAwesomeIcon icon={faUser} />
                    </InputLeftElement>
                    <Input type="text" name="name" placeholder="Your Name" />
                  </InputGroup>
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>

                  <InputGroup>
                    <InputLeftElement>
                      <FontAwesomeIcon icon={faEnvelope} />
                    </InputLeftElement>
                    <Input type="email" name="email" placeholder="Your Email" />
                  </InputGroup>
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Message</FormLabel>

                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={6}
                    resize="none"
                  />
                </FormControl>

                <Button width="full" type="submit" colorScheme="blue">
                  Send Message
                </Button>
              </VStack>
            </Box>
          </form>
        </Stack>
      </VStack>
    </div>
  );
}
