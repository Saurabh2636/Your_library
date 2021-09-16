import React, { useState,useContext } from "react";
import { useHistory,useLocation } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Navbar from "react-bootstrap/Navbar";
import { Mycontext ,MyId} from "../App";
const Layout = ({ children }) => {
  const history = useHistory();
  const [path,setPath]=useState(false)
  const setId = useContext(Mycontext);
  const id = useContext(MyId)


  const abc= ()=>{
    
    }
  return (
    <div>
      <div className="top">
        <Navbar expand="lg" style={{ backgroundColor: "#6d5d79" }}>
          <Navbar.Brand></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ Height: "auto" }}
              navbarScroll
            >
              <Nav.Link href="/" style={{ fontSize: "4vh", marginLeft: "6vh" }}>
                Home
              </Nav.Link>
              <Nav.Link
                href="/create"
                style={{ fontSize: "4vh", marginLeft: "6vh" }}
              >
                CreateBook
              </Nav.Link>
              <Nav.Link
                href="/books"
                style={{ fontSize: "4vh", marginLeft: "6vh" }}
              >
                YourStore
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      {children}
    </div>
  );
};

export default Layout;
