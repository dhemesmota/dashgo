import { Button, Stack, Icon, Box } from "@chakra-ui/react";
import { RiArrowDownSLine } from "react-icons/ri";

interface PaginationProps {
  totalCountOfRegisters: number;
  currentPage?: number;
  registerPerPage?: number;
  onPageChange?: (page: number) => void;
}

export function ButtonInfiniteScroll({
  totalCountOfRegisters,
  currentPage = 1,
  registerPerPage = 10,
  onPageChange,
}: PaginationProps) {
  const lastPage = Math.floor(totalCountOfRegisters / registerPerPage);

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
        disabled={currentPage === lastPage}
        onClick={() => onPageChange(currentPage + 1)}
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