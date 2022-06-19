import { Avatar, Box, Text, Flex } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Felipe Bastos</Text>
        <Text color="gray.300" fontSize="small">
          felipe.bastos.dev@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Felipe Bastos"
        src="https://github.com/felipecfb.png"
      />
    </Flex>
  );
}
