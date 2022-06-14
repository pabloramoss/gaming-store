import {Button, Container, Heading, Stack} from "@chakra-ui/react";
import {FaCartPlus, FaUser} from "react-icons/fa";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <Stack align="center" bg="white" direction="row" height="4vh" justify="center" width="100vw">
      <Stack direction="row" justify="space-between" maxW="container.lg" w="100%">
        <Link href="/">
          <a>
            <Heading fontSize="xl">GAMING ZONE</Heading>
          </a>
        </Link>
        <Stack direction="row">
          <Link href="/order">
            <a>
              <Button size="sm">
                <FaCartPlus height={20} width={20} />
              </Button>
            </a>
          </Link>
          <Link href="/login">
            <a>
              <Button gap={3} size="sm">
                <FaUser height={20} width={20} />
                Login in
              </Button>
            </a>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Navbar;
