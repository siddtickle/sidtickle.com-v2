import {
  Box,
  Text,
  Heading,
  Tab,
  TabList,
  Tabs,
  Flex,
  Link,
  Spacer,
} from "@chakra-ui/react";

import Typewriter from "typewriter-effect";
import Footer from "./Footer";

const Header = () => {
  return (
    <Flex m={5} align="center" justify="center" h="calc(10vh)">
      <Box maxW="32rem">
        <Heading as="h2" size="2xl">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("sidtickle.com")
                .pauseFor(2500)
                // .deleteAll()
                .start();
            }}
          />
        </Heading>
        <Text fontSize="xl">welcome to my personal website.</Text>
      </Box>
      <Spacer />
      {/* <Tabs variant="soft-rounded" colorScheme="purple">
        <TabList>
          <Tab>about me</Tab>
          <Link
            href="https://sidtickle.com/1_Tickle_Siddharth_Resume.pdf"
            isExternal
          >
            <Tab>resumé</Tab>
          </Link>
          <Tab>photography</Tab>
        </TabList>
      </Tabs> */}
      <Footer />
    </Flex>
  );
};

export default Header;
