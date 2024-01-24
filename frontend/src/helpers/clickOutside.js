import { useEffect } from "react";

export default function useClickOutside(ref, fun) {
  useEffect(() => {
    const listener = (e) => {
//provera da li referentni element postoji i da li je kliknuti element unutar tog referentnog elementa
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
//ako klik nije unutar referentnog elementa, pozovi funkciju
      fun();
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref]);
}
