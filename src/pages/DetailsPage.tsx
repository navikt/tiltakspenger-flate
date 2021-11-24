import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import Timeline from "./details/Timeline";
import { Tab, Tabs } from "../components/Tabs";

const DetailsPage = () => {
  // @ts-ignore
  // @ts-ignore
  return (
    <div>
      <Breadcrumbs />
      <Timeline />
      <div className="flex flex-col items-start p-40">
        <div className="self-stretch flex border-b-2 border-gray-200 mb-16">
          <Tabs>
            <Tab>Utbetaling</Tab>
            <Tab>Inngangsvilkår</Tab>
          </Tabs>
        </div>
      </div>
    </div>
  )
};

export default DetailsPage;