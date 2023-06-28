import React from "react";
import Link from "next/link";

const CustomButton = ({ name, href, className }) => {
  return (
    <Link href={href}>
      <button className={className}>{name}</button>
    </Link>
  );
};

export default CustomButton;
