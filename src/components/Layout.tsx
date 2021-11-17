import React, { FC, ReactElement } from "react";

interface Props {
  sidebar: ReactElement;
  content: ReactElement;
}

const Layout: FC<Props>  = (props) => {
  return (
    <div className="grid grid-cols-12" >
      <div>{props.sidebar}</div>
      <div className="col-span-12">{props.content}</div>
    </div>
  )

};

export default Layout;