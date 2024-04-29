import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { useContext } from "react";
import { GlobalContext } from "../../context";

export default function TransactionForm({ isOpen, onClose }) {
  const { formData, value, setValue, setFormData, handleFormSubmit } = useContext(GlobalContext);

  function handleFormChange(event) {
    
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleFormSubmit(formData);
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Transaction</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mb={"4"}>
              <FormLabel>Enter Description</FormLabel>
              <Input
                placeholder="Enter Transaction Description"
                name="description"
                type="text"
                onChange={handleFormChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Enter Amount</FormLabel>
              <Input
                placeholder="Enter Transaction Amount"
                name="amount"
                type="number"
                onChange={handleFormChange}
              />
            </FormControl>
            <RadioGroup mt={"5"} value={value} onChange={setValue}>
              <Radio checked={formData.type === 'expense'} value="expense" colorScheme="red" name="type" onChange={handleFormChange}>
                Expense
              </Radio>
              <Radio ml={'4'} checked={formData.type === 'income'} value="income" colorScheme="blue" name="type" onChange={handleFormChange}>
                Income
              </Radio>
            </RadioGroup>
          </ModalBody>
          <ModalFooter>
            <Button color={"white"} bg={"red.500"} mr={"4"} onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" color={"white"} bg={"blue.400"}>
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
}
