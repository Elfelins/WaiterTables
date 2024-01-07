import { getAllTables } from "../../../redux/tableReducer";
import Spinner from 'react-bootstrap/Spinner';
import { useSelector } from 'react-redux';
import AllTablesDetails from "../../features/AllTablesDetails/AllTablesDetails";

const AllTables = () => {
  const tables = useSelector(getAllTables);

  if (!tables.length) {
    return (
      <div className="mt-5 mb-5 d-flex align-items-center justify-content-center">
        <Spinner />
      </div>
    );
  } else {
    return (
      <div className="d-flex flex-column">
        <h3>All tables</h3>
        <ul>
        {tables.map(table =>
                <AllTablesDetails
                key={table.id}
                id={table.id}
                status={table.status} />
        )}
        </ul>
        </div>
    ); 
  }
};

export default AllTables;