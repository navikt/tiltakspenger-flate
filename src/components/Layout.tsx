import React, { FC, ReactElement } from "react";

interface Props {
  sidebar: ReactElement;
  content: ReactElement;
}

const Layout: FC<Props>  = (props) => {
  return (
    <div className="grid grid-cols-12" >
      <div className="col-span-2">{props.sidebar}</div>
      <div className="col-span-10">{props.content}</div>
    </div>
  )
};

export default Layout;