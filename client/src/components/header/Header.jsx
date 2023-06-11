import React from "react";
import "./Header.css";

import { AiOutlineSearch } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { TfiShoppingCartFull } from "react-icons/tfi";

const Header = () => {
  return (
    <>
      <div className="head">
        <div className="logo ps-4">
          <h2>Logo</h2>
        </div>
        <div className="nav-center">
          <li style={{cursor:"pointer"}}>LivingRoom</li>
          <li style={{cursor:"pointer"}}>kichen & Dining</li>
          <li style={{cursor:"pointer"}}>Bedroom</li>
          <li>|</li>
          <li style={{cursor:"pointer"}}>clearance</li>
          <li style={{cursor:"pointer"}}>New in</li>
        </div>
        <div className="nav-icon p-0">
          <li className="fs-5" style={{cursor:'pointer'}}>
            <AiOutlineSearch />
          </li>
          <li className="fs-5" style={{cursor:'pointer'}}>
            <FiUser />
          </li>
          <li className="fs-5" style={{cursor:'pointer'}}>
            <FaRegHeart />
          </li>
          <li className="fs-5" style={{cursor:'pointer'}}>
            <TfiShoppingCartFull />
          </li>
        </div>
      </div>

      <div className="mobile-Screen">

      </div>
    </>
  );
};

export default Header;
