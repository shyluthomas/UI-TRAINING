import React from "react";
import Controlbar from "../controlbar/controlbar";
import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/sidebar";
import MainTable from "../table/table";

const Body = () => {
    return ( <div className="bodystyle">
        <Navbar/>
        <Controlbar/>
        <MainTable/>
    </div> );
}
 
export default Body;