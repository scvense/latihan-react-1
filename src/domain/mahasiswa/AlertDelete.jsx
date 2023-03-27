import React from "react";
import {
  Card,
  CardBody,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";

function AlertDelete({ isOpen, onClose, cancelRef, deleteDataUser, idUser }) {
  return (
    <Card>
      <CardBody>
        <AlertDialog isOpen={isOpen} onClose={onClose}>
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Delete User
              </AlertDialogHeader>

              <AlertDialogBody>
                Are you sure to delete this user?
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  colorScheme="red"
                  onClick={() => deleteDataUser(idUser)}
                  ml={3}
                >
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </CardBody>
    </Card>
  );
}
export default AlertDelete;
