import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

function AddUser({
  isOpenUser,
  setIsOpenUser,
  onChange,
  onChangeAge,
  insertAction,
  validation,
}) {
  // console.log("state..", hookRef.nama.current);
  return (
    <Modal isOpen={isOpenUser} onClose={() => setIsOpenUser(false)}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add User</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl isInvalid={validation.nama}>
            <FormLabel>Full name</FormLabel>
            <Input
              onChange={onChange}
              placeholder="Isi di sini"
              id="nama"
              size="sm"
            />
          </FormControl>
          <br />

          <FormControl isInvalid={validation.major}>
            <FormLabel>Major</FormLabel>
            <Input
              placeholder="Isi di sini"
              id="major"
              // value={state.major}
              onChange={onChange}
              size="sm"
            />
          </FormControl>

          <br />

          <FormControl isInvalid={validation.age}>
            <FormLabel>Age</FormLabel>
            <NumberInput min={18} max={50} onChange={onChangeAge} size="sm">
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={insertAction}>
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default AddUser;
