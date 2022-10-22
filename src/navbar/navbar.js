import React from "react";
import "./navbar.css"
import {
  Breadcrumb,
  BreadcrumbItem
} from 'reactstrap';

const Navbar = () => {
  const data = [{ name: "Home" }, { name: "Admin" }, { name: "Workspace" }]
  return (<div className="navbar_123">
    <span>Admin</span>
    <Breadcrumb>
      {data.map((item) =>
        <BreadcrumbItem active>
          {item.name}
        </BreadcrumbItem>
      )}
    </Breadcrumb>

  </div>);
}

export default Navbar;