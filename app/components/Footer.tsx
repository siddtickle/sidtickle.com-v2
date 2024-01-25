import { Icon, Center, Link } from "@chakra-ui/react";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <Center gap={5} mr={5} h="calc(5vh)">
      <Link isExternal href="mailto:ticklesiddharth@gmail.com">
        <Icon as={FaEnvelope} />
      </Link>
      <Link isExternal href="https://github.com/siddtickle">
        <Icon as={FaGithub} />
      </Link>
      <Link isExternal href="https://www.linkedin.com/in/sid-tickle/">
        <Icon as={FaLinkedinIn} />
      </Link>
    </Center>
  );
};

export default Footer;
