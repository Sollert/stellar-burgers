import {ReactNode} from "react";

export type ModalProps = {
  children: ReactNode;
  closeModal: () => void;
  title?: string;
}