import clsx from "clsx";
import { Divider, Heading, useColorModeValue } from "@chakra-ui/react";
import { alegreya } from "@/styles/fonts";
import { ReactNode } from "react";

export type PageProps = {
  children: ReactNode;
  header?: string;
  className?: string;
};

const Page = ({ children, header, className }: PageProps) => {
  return (
    <div
      className={clsx(
        alegreya.className,
        "min-h-screen bg-gradient-to-r flex flex-col",
        useColorModeValue(
          "gray.200 p-[10px] from-rose-100 to-teal-100",
          "gray.700 p-[10px] from-gray-700 via-gray-900 to-black bg-cover w-full h-full"
        ),
        className ?? ""
      )}
    >
      {header && (
        <>
          <Heading
            fontSize="2xl"
            fontFamily={alegreya.className}
            alignSelf={"flex-start"}
          >
            {header}
          </Heading>
          <Divider></Divider>
        </>
      )}
      {children}
    </div>
  );
};

export default Page;
