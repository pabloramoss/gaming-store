import React, {useEffect, useState, useCallback} from "react";
import {Button, VisuallyHidden} from "@chakra-ui/react";
import {FaArrowUp} from "react-icons/fa";

import {SCROLL_BUTTON_POSITION} from "@utils/scrollButtonPosition";

interface Props {
  limit: number;
  right?: number | string | object;
  bottom?: number | string | object;
  translateY?: string;
  accessibilityContent?: string;
}

const ScrollTopButton: React.FC<Props> = ({
  limit,
  right = SCROLL_BUTTON_POSITION.RIGHT,
  bottom = SCROLL_BUTTON_POSITION.BOTTOM,
  translateY = "30px",
  accessibilityContent = "Volver al inicio",
}) => {
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);

  const handleScroll = useCallback((): void => {
    if (!hasScrolled && window.scrollY >= limit) {
      setHasScrolled(true);
    } else if (hasScrolled && window.scrollY < limit) {
      setHasScrolled(false);
    }
  }, [limit, hasScrolled]);

  const handleScrollTop = useCallback((): void => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <Button
      backgroundColor="white"
      bottom={bottom}
      height={68}
      opacity={hasScrolled ? "1" : "0"}
      pointerEvents={hasScrolled ? "initial" : "none"}
      position="fixed"
      right={right}
      rounded="full"
      shadow="xl"
      transform={!hasScrolled ? `translateY(${translateY})` : ""}
      width={68}
      onClick={handleScrollTop}
    >
      <FaArrowUp height={10} width={10} />
      <VisuallyHidden>{accessibilityContent}</VisuallyHidden>
    </Button>
  );
};

export default ScrollTopButton;
