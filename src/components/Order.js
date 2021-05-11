import React, { useEffect } from "react";
import Menu from "./Menu";

export default function Order() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Menu />
    </div>
  );
}
