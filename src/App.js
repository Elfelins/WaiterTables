import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTables } from './redux/tableReducer';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import Error404 from './components/common/Error404/Error404';
import AllTables from './components/pages/AllTables/AllTables';
import SingleTableDetails from './components/pages/OneTable/OneTable';

const App = () => {

  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchTables()), [dispatch]);

  return (
    <div>      
      <Container>
        <Header/>
        <Routes>
          <Route path="/" element={<AllTables/>} />
          <Route path="/table/:tableId" element={<SingleTableDetails/>} />
          <Route path="*" element={<Error404/>}/>
        </Routes>
        <Footer/>
      </Container>
    </div>
  );
}

export default App;
