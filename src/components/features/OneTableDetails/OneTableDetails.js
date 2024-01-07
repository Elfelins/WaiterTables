import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getTableById, editTableRequest } from '../../../redux/tableReducer';

const OneTableDetails = () => {

  const { tableId } = useParams();
  const singleTableData = useSelector(state => getTableById(state, parseInt(tableId)));
  const dispatch = useDispatch();
  const id = singleTableData.id; 
  const [status, setStatus] = useState(singleTableData.status); 
  const [peopleAmount, setPeopleAmount] = useState(singleTableData.peopleAmount); 
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(singleTableData.maxPeopleAmount); 
  const [bill, setBill] = useState(singleTableData.bill); 

  const handleEditTable = event => {
    event.preventDefault();
    const thisTable = {
      id: parseInt(id),
      status: status,
      peopleAmount: parseInt(peopleAmount),
      maxPeopleAmount: parseInt(maxPeopleAmount),
      bill: parseInt(bill)
    };
    if (status !== "Busy") {
      thisTable.bill = 0;
    };
    if (status === "Free" || status ==="Cleaning") {
      thisTable.peopleAmount = 0;
    };
    dispatch(editTableRequest(thisTable));
  }

  if (maxPeopleAmount > 10) {
    setMaxPeopleAmount(10);
    setPeopleAmount(0);
  };
  if (peopleAmount > maxPeopleAmount) {
    setPeopleAmount(maxPeopleAmount);
  };
  if (maxPeopleAmount < 0 || maxPeopleAmount === "") {
    setMaxPeopleAmount(0);
    setPeopleAmount(0);
  };
  if (peopleAmount < 0 || peopleAmount === "") {
    setPeopleAmount(0);
  };
  if (bill < 0 || bill === "") {
    setBill(0);
  };
 
  if (status === "Busy") {
  return (
    <Col className='col-5 d-flex flex-column'>
      <Row className='col-12 mt-3'>
        <strong className='col-2'>Status:</strong>
        <select className='col-4' name="Status" onChange={event => setStatus(event.target.value)} defaultValue={status}>
          <option value="Free">Free</option>
          <option value="Busy">Busy</option>
          <option value="Reserved">Reserved</option>
          <option value="Cleaning">Cleaning</option>
        </select>
      </Row>
      <Row className='col-12 mt-3'>
        <strong className='col-2'>People:</strong>
        <input className='col-1' value={peopleAmount} defaultValue={status} onChange={event => setPeopleAmount(event.target.value)}></input>
        &nbsp;/&nbsp;
        <input className='col-1' value={maxPeopleAmount} onChange={event => setMaxPeopleAmount(event.target.value)}></input>
      </Row>
      <Row className='col-12 mt-3'>
        <strong className='col-2'>Bill:</strong>
        <div className="d-flex align-items-center col-4">
          <span>$&nbsp;</span>
          <input className='col-3' value={bill} onChange={event => setBill(event.target.value)}></input>
        </div>
      </Row>
      <Row className='col-12 mt-3'>
        <Button className='col-2 mt-3' style={{ marginLeft: "10px"}} onClick={event => handleEditTable(event)} variant="primary">Update</Button>
      </Row>
    </Col>
  );
  } else if (status === "Reserved") {
    return (
      <Col className='col-5 d-flex flex-column '>
        <Row className='col-12 mt-3'>
          <strong className='col-2'>Status:</strong>
          <select className='col-4' name="Status" onChange={event => setStatus(event.target.value)} defaultValue={status}>
            <option value="Free">Free</option>
            <option value="Busy">Busy</option>
            <option value="Reserved">Reserved</option>
            <option value="Cleaning">Cleaning</option>
          </select>
        </Row>
        <Row className='col-12 mt-3'>
          <strong className='col-2'>People:</strong>
          <input className='col-1' value={peopleAmount} defaultValue={status} onChange={event => setPeopleAmount(event.target.value)}></input>
          &nbsp;/&nbsp;
          <input className='col-1' value={maxPeopleAmount} onChange={event => setMaxPeopleAmount(event.target.value)}></input>
        </Row>
        <Row className='col-12 mt-3 gap-2'>
          <Button className='col-2 mt-3' style={{ marginLeft: "10px"}} onClick={event => handleEditTable(event)} variant="primary">Update</Button>
        </Row>
      </Col>
    )
  } else {
    return (
      <Col className='col-5 d-flex flex-column '>
        <Row className='col-12 mt-3'>
          <strong className='col-2'>Status:</strong>
          <select className='col-4' name="Status" onChange={event => setStatus(event.target.value)} defaultValue={status}>
            <option value="Free">Free</option>
            <option value="Busy">Busy</option>
            <option value="Reserved">Reserved</option>
            <option value="Cleaning">Cleaning</option>
          </select>
        </Row>
        <Row className='col-12 mt-3 gap-2'>
          <Button className='col-2 mt-3' style={{ marginLeft: "10px"}} onClick={event => handleEditTable(event)} variant="primary">Update</Button>
        </Row>
      </Col>
    )
  }
};

export default OneTableDetails;