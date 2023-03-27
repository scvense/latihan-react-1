import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

function AddDosen({
  isOpenDosen,
  setIsOpenDosen,
  onChange,
  insertActionDosen,
  validation,
}) {
  return (
    <Modal isOpen={isOpenDosen} onClose={() => setIsOpenDosen(false)}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add New Dosen</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <FormControl isInvalid={validation.nama_dosen}>
            <FormLabel>Nama Dosen</FormLabel>
            <Input
              onChange={onChange}
              placeholder="Isi di sini"
              id="nama_dosen"
              size="sm"
            />
          </FormControl>
          <br />
          <FormControl isInvalid={validation.no_hp}>
            <FormLabel>No HP</FormLabel>
            <Input
              onChange={onChange}
              placeholder="Isi di sini"
              id="no_hp"
              size="sm"
            />
          </FormControl>
          <br />
          <FormControl isInvalid={validation.alamat}>
            <FormLabel>Alamat</FormLabel>
            <Input
              onChange={onChange}
              placeholder="Isi di sini"
              id="alamat"
              size="sm"
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={insertActionDosen}>
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default AddDosen;
