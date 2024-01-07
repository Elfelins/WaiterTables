import React from 'react';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';

const Footer = () => {
  const footerStyle = {
    color: "rgb(211, 211, 211)"
  };

  return (
    <MDBFooter className='text-center mt-1'>
      <MDBContainer className='p-3'>
        <span style={footerStyle}>Copyright &copy; PizzeriaApp 2024</span>
      </MDBContainer>
    </MDBFooter>
  );
};

export default Footer;