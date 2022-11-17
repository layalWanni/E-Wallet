import { Box, useStyleConfig } from "@chakra-ui/react";

interface CardProps {
    variant?: "primary" | "secondary";
    children: React.ReactNode;

}

function Card({ variant = "primary", children, ...rest }: CardProps) {

  const styles = useStyleConfig("Card", { variant });
  // Pass the computed styles into the `__css` prop
  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
}

export default Card;