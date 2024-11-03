import { Person } from "./components/Person";

function App() {
  return (
    <>
      <h1>Hello App!</h1>
      <Person name={"Joey"} age={48} isMarried={false} />
      <Person name={"Yvelisse"} age={16} isMarried={false} />
    </>
  );
}

export default App;
