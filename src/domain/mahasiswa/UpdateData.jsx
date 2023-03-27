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

function UpdateData({
  isOpenUpdate,
  setIsOpenUpdate,
  state,
  onChange,
  onChangeAge,
  updateDataUser,
  validation,
}) {
  return (
    <Modal isOpen={isOpenUpdate} onClose={() => setIsOpenUpdate(false)}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Update User</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl isInvalid={validation.nama}>
            <FormLabel>Full name</FormLabel>
            <Input
              value={state.nama}
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
              value={state.major}
              onChange={onChange}
              size="sm"
            />
          </FormControl>

          <br />

          <FormControl isInvalid={validation.age}>
            <FormLabel>Age</FormLabel>
            <NumberInput
              min={18}
              max={50}
              onChange={(age) => onChangeAge(age, "update")}
              size="sm"
              defaultValue={state.age}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={updateDataUser}>
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default UpdateData;
