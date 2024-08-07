import React from "react";
import { Link } from "react-router-dom";
import {ComponentListData} from './ComponentListData';

const Spacing = () => {
  return (
    <div className="section-wrap">
      <div className="section-title">
        <h1>Task List</h1>
      </div>
      <ul>
      {ComponentListData.map((item,index)=>{
        return (<li key={index}><Link className="spacing-4" to={item.urlLink === "spacing" ? "/" : item.urlLink}>{item.urlName}</Link></li>)
      })}
      </ul>
    </div>
  );
};
export default Spacing;
