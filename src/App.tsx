import "./App.css";
import { Footer } from "./component/Footer";
import { Rowbar } from "./component/Rowbar";
import { Table } from "./component/Table";
import { Topbar } from "./component/Topbar";

function App() {
  return (
    <>
      <Topbar />
      <Rowbar />
      <Table />
      <Footer />
    </>
  );
}

export default App;
