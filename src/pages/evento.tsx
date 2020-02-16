import * as React from "react";
import { Redirector } from "../components/redirector";
import { sconfig } from "../components/config";

const Evento = () => {
  return <Redirector url={sconfig.evento} />;
};

export default Evento;
