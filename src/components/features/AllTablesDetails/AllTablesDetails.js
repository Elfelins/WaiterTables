import { useState } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Link } from 'react-router-dom';
import { Col, Row, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { getTableById } from '../../../redux/tableReducer';

const AllTablesDetails = props => {

  const singleTableData = useSelector(state => getTableById(state, props.id));
  const [id] = useState(singleTableData.id); 
  const [status] = useState(singleTableData.status); 

  return (
    <li className="mt-4 mb-4" style={{ marginLeft: "-30px"}}>
      <Row className="mb-4">
        <Col className="col-9 d-flex">
          <Col className="col-2">
            <h4>Table {id}</h4>
          </Col>
          <Col className="col-2 d-flex align-items-center justify-content-left">
            <strong>Status:</strong>&nbsp;{status}
          </Col>
        </Col>
        <Col className="col-3 d-flex justify-content-end">
          <Link to={`/table/${props.id}`}>
            <Button variant="primary">
              Show more
            </Button>
          </Link>
        </Col>
      </Row>    
    </li>
  );
};

AllTablesDetails.propTypes = {
  id: PropTypes.number.isRequired,
};

export default AllTablesDetails;