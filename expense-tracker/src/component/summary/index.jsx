import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import TransactionForm from "../add-transaction";
import TransactionChartSummary from "../chart";
import { useContext } from "react";
import { GlobalContext } from "../../context";

export default function Summary({ isOpen, onClose }) {

  const {totalExpense, totalIncome} = useContext(GlobalContext)

  return (
    <Box
      p={"6"}
      border={"1px solid"}
      borderColor={"gray.300"}
      overflow={"hidden"}
      borderRadius={"10"}
      bg={"whitesmoke"}
      mt={"10"}
      display={"flex"}
      flexDirection={{
        base: "column",
        sm: "column",
        md: "column",
        lg: "row",
        xl: "row",
      }}>
      <Flex
        flex={"1"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
        mr={"2"}>
        <Heading size={"md"} mb={"4"} color={"gray.600"}>
          Balance is ${totalIncome - totalExpense}
        </Heading>
        <Box
          bg={"gray.100"}
          w={"full"}
          h={"100px"}
          border={"1px solid"}
          borderColor={"gray.100"}
          borderRadius={'10'}
          mb={"2"}>
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            h={"100%"}
            borderRadius={'18'}>
            <Heading color={"gray.700"}>$ {totalIncome}</Heading>
            <Text color={"gray.600"}>Total Income</Text>
          </Flex>
        </Box>
        <Box
          bg={"gray.100"}
          w={"full"}
          h={"100px"}
          border={"1px solid"}
          borderColor={"gray.100"}
          borderRadius={'10'}>
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            h={"100%"}
            >
            <Heading color={"gray.700"}>$ {totalExpense}</Heading>
            <Text color={"gray.600"}>Total Expense</Text>
          </Flex>
        </Box>
      </Flex>
      <Box
        ml={"5"}
        width={"300px"}
        height={"300px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}>
        <TransactionChartSummary expense={totalExpense} income={totalIncome} />
      </Box>
      <TransactionForm onClose={onClose} isOpen={isOpen} />
    </Box>
  );
}
