import { Box, Show, Text } from "@chakra-ui/react";

const Name = () => {
  return (
    <Text
    as="b"
    fontSize={{ base: "18px", md: "24px", lg: "30px" }}
    id="user-detail-name"
    whiteSpace="nowrap"
  >
    Shailesh Wagh
  </Text>
  );
};

export default Name;
