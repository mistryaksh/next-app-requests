import { NextPage } from "next";
import React from "react";

const BackendUrl = `https://swayamhealth.info/api`;

const App: NextPage = () => {
  return <div>Request type - </div>;
};

export default App;

export async function getServerSideProps() {
  const res = await fetch(`${BackendUrl}/category/gettestfromkiosk/MUMSAN2`, {
    method: "GET",
  });
  const data = await res.json();
  return { props: { data } };
}
