import {
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCircleInfo,
  faEnvelope,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import clsx from "clsx";
import { alegreya } from "@/styles/fonts";

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <div className="fixed flex w-full justify-end pr-3 mt-3 sm:hidden z-20">
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="ghost"
          />
          <MenuList className={alegreya.className}>
            <MenuItem icon={<FontAwesomeIcon icon={faHome} />} as="a" href="/">
              Home
            </MenuItem>
            <MenuItem
              icon={
                <FontAwesomeIcon
                  icon={faCircleInfo}
                  aria-hidden="false"
                  role="img"
                  aria-label="about"
                />
              }
              as="a"
              href="/about"
            >
              About
            </MenuItem>
            <MenuItem
              icon={<FontAwesomeIcon icon={faBriefcase} />}
              as="a"
              href="/portfolio"
            >
              Portfolio
            </MenuItem>
            <MenuItem
              icon={<FontAwesomeIcon icon={faEnvelope} />}
              as="a"
              href="/contact"
            >
              Contact
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
      <div className="hidden sm:flex justify-between absolute">
        <div className={clsx("flex p-[10px] bg-transparent fixed left-0")}>
          <Link
            className="page-row__link"
            href="/"
            aria-label="Click here to read more about Walter"
          >
            <Button backgroundColor={"transparent"}>
              <FontAwesomeIcon
                icon={faHome}
                aria-hidden="false"
                role="img"
                aria-label="home"
              />
            </Button>
          </Link>
          <Link
            className="page-row__link"
            href="/about"
            aria-label="Click here to read more about Walter"
          >
            <Button backgroundColor={"transparent"}>
              <FontAwesomeIcon
                icon={faCircleInfo}
                aria-hidden="false"
                role="img"
                aria-label="about"
              />
            </Button>
          </Link>
          <Link
            className="page-row__link"
            href="/portfolio"
            aria-label="Click here to view Walter's current projects"
          >
            <Button backgroundColor={"transparent"}>
              <FontAwesomeIcon
                icon={faBriefcase}
                aria-hidden="false"
                role="img"
                aria-label="portfolio"
              />
            </Button>
          </Link>
          <Link
            className="page-row__link"
            href="/contact"
            aria-label="Click here to view Walter's Contact form"
          >
            <Button backgroundColor={"transparent"}>
              <FontAwesomeIcon
                icon={faEnvelope}
                aria-hidden="false"
                role="img"
                aria-label="contact"
              />
            </Button>
          </Link>
        </div>
        <div className={clsx("flex p-[10px] bg-transparent fixed right-0")}>
          <Link
            className="page-row__link"
            href="https://github.com/waltersgwoodward"
            aria-label="Click here to read more about Walter"
          >
            <Button backgroundColor={"transparent"} borderBottom={"5px"}>
              <FontAwesomeIcon
                icon={faGithub}
                aria-hidden="false"
                role="img"
                aria-label="github"
                size="xl"
              />
            </Button>
          </Link>

          <Button onClick={toggleColorMode} backgroundColor={"transparent"}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </div>
      </div>
    </>
  );
}
