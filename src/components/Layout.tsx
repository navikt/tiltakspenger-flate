import React, { FC, ReactElement } from "react";

interface Props2 {
  sidebar: ReactElement;
  content: ReactElement;
}

interface Props3 {
  sidebar1: ReactElement;
  content: ReactElement;
  sidebar2: ReactElement;
}

export const Layout2: FC<Props2>  = (props) => {
  return (
    <div className="grid grid-cols-12" >
      <div className="col-span-2">{props.sidebar}</div>
      <div className="col-span-10">{props.content}</div>
    </div>
  )
};

export const Layout3: FC<Props3>  = (props) => {
  return (
    <div className="grid grid-cols-12" >
      <div className="col-span-2">{props.sidebar1}</div>
      <div className="col-span-8">{props.content}</div>
      <div className="col-span-2">{props.sidebar2}</div>
    </div>
  )
};
