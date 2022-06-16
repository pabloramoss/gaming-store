import {Heading, Stack, Text} from "@chakra-ui/react";
import {FaCartPlus, FaUser} from "react-icons/fa";
import Link from "next/link";

import {useAppSelector} from "@redux/hooks";
import ButtonBase from "@components/commons/BtnBase";

const Navbar: React.FC = () => {
  const cart = useAppSelector((state) => state.products.cart);

  return (
    <Stack align="center" bg="gray.50" direction="row" height="5vh" justify="center" width="100vw">
      <Stack
        direction="row"
        justify="space-between"
        maxW="container.lg"
        mx={{base: 4, md: 0}}
        w="100%"
      >
        <Link href="/">
          <a>
            <Heading
              bgClip="text"
              bgGradient="linear(to-r, #5B86E5, #36D1DC)"
              fontSize={20}
              fontWeight={800}
              textAlign="center"
            >
              GAMING
              <Text as="span" color="gray.800" fontWeight={800} px={2}>
                ZONE
              </Text>
            </Heading>
          </a>
        </Link>
        <Stack direction="row">
          <Link href="/order">
            <a>
              <ButtonBase size="xs">
                <FaCartPlus height={20} width={20} />
                {cart.length ? (
                  <Text
                    bg="red.400"
                    color="white"
                    position="absolute"
                    px={1}
                    right={0}
                    rounded="full"
                    top={0}
                  >
                    {cart.length}
                  </Text>
                ) : (
                  ""
                )}
              </ButtonBase>
            </a>
          </Link>
          <Link href="/login">
            <a>
              <ButtonBase gap="2" size="xs">
                <FaUser height={20} width={20} />
                Login
              </ButtonBase>
            </a>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Navbar;
