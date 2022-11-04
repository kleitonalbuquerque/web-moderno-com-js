import React from "react";
import ReactDOM from "react-dom";

import BomDia from "./components/BomDia";
import Multi, { CoisaLinda, CoisaFeia } from "./components/Multiplos";
import Saudacao from "./components/Saudacao";

ReactDOM.render(
  <div>
    <BomDia nome="Mariana" />
    <Multi.BoaTarde nome="João" />
    <Multi.BoaNoite nome="Maria" />
    <CoisaLinda nome="Mariana" />
    <CoisaFeia nome="Mulambo" />
    <hr />
    <Saudacao tipo="Bom dia" nome="José" />
  </div>,
  document.getElementById("root")
);
