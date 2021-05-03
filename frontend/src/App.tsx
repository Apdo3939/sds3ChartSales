import DataTable from 'components/dataTable';
import Footer from 'components/footer';
import NavBar from 'components/navBar';

function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <h2
          className="text-primary container mb-5">
          Hello devSuperior sds3
        </h2>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
