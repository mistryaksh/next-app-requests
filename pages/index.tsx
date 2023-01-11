const BackendUrl = `https://swayamhealth.info/api`;

export default function App(props: any) {
  console.log(props.data.data.result);
  return <div>Request type - {props.data.type}</div>;
}

export async function getServerSideProps() {
  const res = await fetch(`${BackendUrl}/category/gettestfromkiosk/MUMSAN2`, {
    method: "GET",
  });
  const data = await res.json();
  return { props: { data } };
}
