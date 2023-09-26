import React from "react";
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
      <Link to={"/home"}>Home</Link>
      <Link to={"/message"}>Message</Link>
    </div>
  );
}
