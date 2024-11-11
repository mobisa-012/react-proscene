import React from "react";

function Copyright() {
  const currentYear = new Date().getFullYear();
  return (
    <p>Copyright © {currentYear} PROSCENE. All Rights Reserved.</p>
  );
}

export default Copyright;