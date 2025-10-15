import React from "react";

function Copyright() {
  const currentYear = new Date().getFullYear();
  return (
    <p style={{fontSize:'15px'}}>{currentYear} © Proscene. All rights reserved.</p>
  );
}

export default Copyright;