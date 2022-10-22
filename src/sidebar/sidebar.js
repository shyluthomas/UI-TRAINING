import React from "react";
import "./sidebar.css"
import naruto from "./naruto.jpg"
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
  } from 'reactstrap';

  import { useState } from "react";
  

const Sidebar = () => {

    const sideData = [{name:"workspace",subject:"subject",targetId:1,accordionId:1},{name:"portal members",subject:"subject1",targetId:2,accordionId:2},{name:"Invitation",subject:"subject1",targetId:3,accordionId:3},{name:"labels",subject:"subject1",targetId:4,accordionId:4}]

    const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };


    return ( <div className="sidebar">

<div className="namecard">
            <img src={naruto} alt="not_found" />
        <h5>Full Name</h5>
        <h6>Professional title</h6>
        </div>


{sideData.map((item)=>
    <Accordion open={open} toggle={toggle}>
            <AccordionItem>
                <AccordionHeader targetId={item.targetId}>{item.name}</AccordionHeader>
                <AccordionBody accordionId={item.accordionId}>
                   {item.subject}
          </AccordionBody>
        </AccordionItem>
        </Accordion>

)}
    </div> 
    );
}
 
export default Sidebar;