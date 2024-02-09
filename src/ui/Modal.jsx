import { cloneElement, createContext, useContext, useState } from "react";
import {useOutsideClick} from '../hooks/useOutsideClick'
import { HiMiniXMark } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import { createPortal } from "react-dom";

// 1. Create context
const ModalContext = createContext();

// 2. Create parent component
function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const open = setOpenName;
  const close = () => setOpenName("");

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

// 3. Create child components

function Open({ children, windowName }) {
  console.log(windowName);
  const { open } = useContext(ModalContext);
  return cloneElement(children, {
    onClick: () => open(windowName),
  });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);

  const ref = useOutsideClick(close)

  if (openName !== name) return null;

  return createPortal(
    <div className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center backdrop-blur-sm ">
      <div className="relative" ref={ref} >
        <ButtonIcon onClick={close} className="absolute right-2 top-2">
          <HiMiniXMark size={22} />
        </ButtonIcon>
        <div> {cloneElement(children, { onClose: close })} </div>
      </div>
    </div>,
    document.body,
  );
}

//4. Add child components as properties to parent component

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
