import { useParams } from 'react-router';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Navigate } from 'react-router-dom';
import { getTableById } from '../../../redux/tableReducer';
import OneTableDetails from '../../features/OneTableDetails/OneTableDetails';

const OneTable = () => {
  const { tableId } = useParams();
  const singleTableData = useSelector(state => getTableById(state, parseInt(tableId)));

  if (!singleTableData) {
    return <Navigate to="/"/>; 
  } else {
    return (
      <div className="col-12">
        <h3 className='mt-3'>Table {tableId}</h3>
        <OneTableDetails/>
      </div>
    );
  }
};

export default OneTable;