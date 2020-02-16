import * as React from "react";
import { Redirector } from "../components/redirector";
import { sconfig } from "../components/config";

const Comprar = () => {
  return <Redirector url={sconfig.online} />;
};

export default Comprar;
