import React from "react";
import "./controlbar.css"
import { Button,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem} from "reactstrap";

const Controlbar = () => {
    const data = [{label:"option1"},{label:"option2"},{label:"option3"}]
    return ( <div className="controlbar">
        <h5>Workspace1</h5>
        <Button
    color="light"
  >
    New workspace
  </Button>

  <UncontrolledDropdown setActiveFromChild>
      <DropdownToggle
        caret
        className="nav-link"
        tag="a"
      >
        Copy Workspace
      </DropdownToggle>
      <DropdownMenu>
        {data.map((item)=>        <DropdownItem
          active
          href="#"
          tag="a"
        >
          {item.label}
        </DropdownItem>)}
      </DropdownMenu>
    </UncontrolledDropdown>

    <UncontrolledDropdown setActiveFromChild>
      <DropdownToggle
        caret
        className="nav-link"
        tag="a"
      >
        Rename  Workspace
      </DropdownToggle>
      <DropdownMenu>
        {data.map((item)=>        <DropdownItem
          active
          href="#"
          tag="a"
        >
          {item.label}
        </DropdownItem>)}
      </DropdownMenu>
    </UncontrolledDropdown>

    <Button
    color="light"
  >
    Change desktop sync
  </Button>

  <Button
    color="light"
  >
    Delete Workspace
  </Button>

    </div> 
    );
}
 
export default Controlbar;