import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex
      align="center"
    >
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Dhemes Mota</Text>
          <Text color="gray.300">
            dhemes.mota@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" src="https://github.com/dhemesmota.png" />
    </Flex>
  )
}