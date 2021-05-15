import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex
      align="center"
    >
      <Box mr="4" textAlign="right">
        <Text>Dhemes Mota</Text>
        <Text color="gray.300">
          dhemes.mota@gmail.com
        </Text>
      </Box>

      <Avatar size="md" src="https://github.com/dhemesmota.png" />
    </Flex>
  )
}