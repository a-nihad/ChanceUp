import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiEllipsisVertical } from "react-icons/hi2";
import { useOutsideClick } from "../hooks/useOutsideClick";

const MenuContext = createContext();

function Menu({ children }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState("");

  const open = setOpenId;
  const close = () => setOpenId("");

  return (
    <MenuContext.Provider
      value={{ openId, setOpenId, position, setPosition, open, close }}
    >
      {children}
    </MenuContext.Provider>
  );
}

function Toggle({ id }) {
  const { open, close, setPosition, openId } = useContext(MenuContext);

  function handleClick(e) {
    var rect = e.target.closest("button").getBoundingClientRect();
    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.width + 8,
    });

    openId === "" || openId !== id ? open(id) : close();
  }

  return (
    <button
      className="cursor-pointer rounded-lg p-1 hover:bg-color_primary hover:text-color_white"
      onClick={handleClick}
    >
      <HiEllipsisVertical size={20} />
    </button>
  );
}

function List({ id, children }) {
  const {
    openId,
    close,
    position: { x, y },
  } = useContext(MenuContext);

  const ref = useOutsideClick(close);

  if (openId !== id) return null;

  return createPortal(
    <div
      style={{ right: `${x}px`, top: `${y}px` }}
      className={` fixed divide-y divide-dashed rounded-md border bg-white p-3 shadow-lg`}
      ref={ref}
    >
      {children}
    </div>,
    document.body,
  );
}

function Button({ children, icon, onClick }) {
  const { close } = useContext(MenuContext);

  function handleClick() {
    onClick();
    close();
  }
  return (
    <button
      className="hover:bg-color_grey_light flex w-full items-center gap-3 p-2 text-left text-color_text hover:text-color_primary"
      onClick={handleClick}
    >
      {icon} {children}
    </button>
  );
}

Menu.Toggle = Toggle;
Menu.List = List;
Menu.Button = Button;

export default Menu;
