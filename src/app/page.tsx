import React from "react";

import dynamic from "next/dynamic";
const Dynamic = dynamic(() => import("./_components/Dynamic"), {
  ssr: false,
});

const Hello = () => {
  return (
    <div>
      <Dynamic />
    </div>
  );
};

export default Hello;
