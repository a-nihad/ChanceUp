import { useEffect, useRef } from "react";

export function useOutsideClick(close) {
  const ref = useRef();

  // close in outside the modal window.
  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) close();
      }
      document.addEventListener("click", handleClick,true );

      return () => document.removeEventListener("click", handleClick, true);
    },
    [close],
  );
  return ref;
}
