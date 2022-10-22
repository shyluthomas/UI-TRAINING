import React from "react";
import "./table.css"
import { Table,Button } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const MainTable = () => {

    const tableData = [
        {
            name:"Max",
            workSpacePermission:"lorem ipsum",
            email:"max@gmail.com",
            telephone:"Admin",
            user:"remove",
            permission:"true"
        },
        {
            name:"Huggie",
            workSpacePermission:"lorem ipsum",
            email:"huggie@gmail.com",
            telephone:"Owner",
            user:"remove",
            permission:"true"
        },{
            name:"whiskey",
            workSpacePermission:"lorem ipsum",
            email:"whiskey@gmail.com",
            telephone:"Member",
            user:"remove",
            permission:"true"
        }
    ]

    return ( 
    
    <div className="table">
        <div className="button">
        <Button color="info">
    + Add User
  </Button>
        </div>
  
<Table>
  <thead>
    <tr>
      <th>
        NAME
      </th>
      <th>
        WORKSPACEPERMISSION
      </th>
      <th>
        EMAIL
      </th>
      <th>
        TELEPHONE
      </th>
      <th>
      </th>
    </tr>
  </thead>
  <tbody>
    {tableData.map((item)=> <tr>
      <th scope="row">
        {item.name}
      </th>
      <td>
        {item.workSpacePermission}
      </td>
      <td>
        {item.email}
      </td>
      <td>
        {/* {item.telephone} */}
        <button id="admin">admin</button>
      </td>
      <td>
        {item.user}{" | "}{item.permission}
      </td>
    </tr>)}
   
  </tbody>
</Table>






    </div> 
    );
}
 
export default MainTable;