import React from "react";
import ReactDOM from "react-dom";

import BomDia from "./components/BomDia";
import Multi, { CoisaLinda, CoisaFeia } from "./components/Multiplos";

ReactDOM.render(
  <div>
    <BomDia nome="Mariana" />
    <Multi.BoaTarde nome="João" />
    <Multi.BoaNoite nome="Maria" />
    <CoisaLinda nome="Mariana" />
    <CoisaFeia nome="Mulambo" />
  </div>,
  document.getElementById("root")
);
