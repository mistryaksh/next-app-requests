const BackendUrl = `https://swayamhealth.info/api`;

export default function App() {
  return <div>Request type - </div>;
}

// export async function getServerSideProps() {
//   const res = await fetch(`${BackendUrl}/category/gettestfromkiosk/MUMSAN2`, {
//     method: "GET",
//   });
//   const data = await res.json();
//   return { props: { data } };
// }
