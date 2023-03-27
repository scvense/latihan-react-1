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

function UpdateDosen({
  isOpenUpdate,
  setIsOpenUpdate,
  state,
  onChange,
  updateDataDosen,
  validation,
}) {
  return (
    <Modal isOpen={isOpenUpdate} onClose={() => setIsOpenUpdate(false)}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Update Data Dosen</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <FormControl isInvalid={validation.nama_dosen}>
            <FormLabel>Nama Dosen</FormLabel>
            <Input
              value={state.nama_dosen}
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
              value={state.no_hp}
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
              value={state.alamat}
              onChange={onChange}
              placeholder="Isi di sini"
              id="alamat"
              size="sm"
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={updateDataDosen}>
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default UpdateDosen;
