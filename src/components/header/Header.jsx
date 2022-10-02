import React from "react";
import { Button } from "react-bootstrap";
import './header.css'
import ludo from "./ludo-2.jpg";



export default function header() {
  return (
    <div className="header" id="header">
      <h1 className="title-header">spysschaert ludovic</h1>
      <img src={ludo} alt="photo spysschaert ludovic" className="fluid  img-ludo" />
      <h3 className="dev-web">developper web</h3>
    </div>
  );
}
