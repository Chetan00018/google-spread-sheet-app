import "./App.css";
import { Footer } from "./component/Footer";
import { Row } from "./component/Row";
import { Table } from "./component/Table";
import { Topbar } from "./component/Topbar";
function App() {
  return (
    <main>
      <Topbar />
      {/* <Rowbar /> */}
      <Row />
      <Table />
      <Footer />
    </main>
  );
}

export default App;
