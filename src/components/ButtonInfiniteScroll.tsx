import { Button, Stack, Icon, Box } from "@chakra-ui/react";
import { RiArrowDownSLine } from "react-icons/ri";

export function ButtonInfiniteScroll() {
  return (
    <Stack 
      direction="row"
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Button
        size="sm"
        variant="ghost"
        fontSize="xs"
        colorScheme="pink"
        _disabled={{
          color: 'gray.500',
          cursor: 'default'
        }}
        _hover={{
          bg: 'pink.500',
          color: 'white'
        }}
        rightIcon={<Icon as={RiArrowDownSLine} fontSize="20" />}
      >
        Ver mais
      </Button>
    </Stack>
  )
}