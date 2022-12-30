import React  from "react";
import { Link } from "react-router-dom";

const ConditionalLink = ({ children, condition, ...props }) => {
  return !!condition && props.to ? <Link {...props}>{children}</Link> : <>{children}</>
};

export default ConditionalLink;
