import {
  Grid,
  GridItem,
  Text,
  Image,
  Box,
  Link,
  Center,
  Flex,
  Tooltip,
} from "@chakra-ui/react";

import { useBreakpointValue } from "@chakra-ui/react";

import { ExternalLinkIcon } from "@chakra-ui/icons";

const ContentGrid = () => {
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });

  return (
    <Flex
      align="center"
      justify="center"
      height="75vh" // Set the height to the full viewport height or adjust as needed
    >
      <Grid
        h="calc(75vh)"
        templateRows="repeat(2, 1fr)"
        // templateColumns="repeat(5, 1fr)"
        templateColumns={isLargeScreen ? "repeat(5, 1fr)" : "repeat(3, 1fr)"}
        gap={4}
        m={5}
      >
        {isLargeScreen && (
          <GridItem rowSpan={2} colSpan={1}>
            <Tooltip label="Chicago, IL" aria-label="A tooltip">
              <Image objectFit="cover" src="/chicago.jpg" w="100%" h="100%" />
            </Tooltip>
          </GridItem>
        )}
        <Link
          href="/about"
          isExternal
          bg="orange"
          _hover={{
            boxShadow: "lg",
            bg: "orange.500",
            backdropBlur: "8px",
          }}
        >
          <GridItem rowSpan={1} colSpan={1}>
            <Text fontSize="l" m={5} color={"white"}>
              Hey there! I’m Siddharth Tickle (or just Sid) and a software
              engineer with an interest in deisgn 🎨. I’m always eager to learn
              more and enjoy teaching what I’ve discovered along the way. In the
              past, I interned at Qualtrics and Capital One as a Software
              Engineer and I will be graduating in May of 2024 with a degree in
              Computer Science and a minor in Engineering Business from UVA.
            </Text>
          </GridItem>
        </Link>
        {isLargeScreen && (
          <GridItem rowSpan={1} colSpan={2} bg="papayawhip">
            <Tooltip label="Lucerne, Switzerland" aria-label="A tooltip">
              <Image
                objectFit="cover"
                src="/switzerland.jpg"
                w="100%"
                h="100%"
              />
            </Tooltip>
          </GridItem>
        )}
        <GridItem
          colSpan={1}
          rowSpan={1}
          bg="teal.400"
          _hover={{
            boxShadow: "lg",
            bg: "teal.700",
            transition: "background-color 0.3s ease-in-out",
          }}
        >
          <Text fontSize="l" m={5} color={"white"}>
            I started photography recently and am available for any bookings! A
            few of my photos are shown here on this site: one from my summer in
            Chicago and another from my trip to Switzerland during the new year.
            <br />
            If you're interested in graduation shoots, team pictures, or
            whatever else it may be, DM me on Instagram! You can find more
            photos and my profile{" "}
            <Link
              textDecoration="underline"
              isExternal
              href="https://www.instagram.com/sids.visuals"
            >
              here.
            </Link>
          </Text>
        </GridItem>
        {isLargeScreen && (
          <GridItem
            colSpan={3}
            bg="tomato"
            _hover={{
              boxShadow: "lg",
              bg: "red.600",
              transition: "background-color 0.3s ease-in-out",
            }}
          >
            <Text fontSize="l" m={5} color={"white"}>
              coming soon...
            </Text>
          </GridItem>
        )}
        <Link
          href="https://sidtickle.com/1_Tickle_Siddharth_Resume.pdf"
          isExternal
          bg="blue.300"
          _hover={{
            boxShadow: "lg",
            bg: "blue.500",
            backdropBlur: "8px",
          }}
        >
          <GridItem colSpan={1} rowSpan={1}>
            <Flex>
              <Text h="100%" fontSize="l" m={5} color={"white"}>
                resumé <ExternalLinkIcon mx="2px" />
              </Text>
            </Flex>
          </GridItem>
        </Link>
      </Grid>
    </Flex>
  );
};

export default ContentGrid;
