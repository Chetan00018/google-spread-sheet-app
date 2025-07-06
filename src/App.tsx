import "./App.css";
import { Footer } from "./component/Footer";
import { Rowbar } from "./component/Rowbar";
import { Table } from "./component/Table";
import { Topbar } from "./component/Topbar";
function App() {
  return (
    <main>
      <Topbar />

      <Rowbar />
      <Table />
      <Footer />
    </main>
  );
}

export default App;
