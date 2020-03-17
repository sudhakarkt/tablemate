import React, { useState } from 'react';
import logo from '../Assets/logo.png';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
// import table from '../Assets/table.svg';
// import transfer from '../Assets/transfer.svg';
// import menu from '../Assets/menu.svg';
// import shoppingCart from '../Assets/shopping-cart.svg';
import "./header.scss";
import { Link } from 'react-router-dom';

function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <header>
      <div className="container-fluid">
        <div className="row">
          <div className="col p-0">
            <nav className="navbar navbar-expand-lg">
              <Link className="navbar-brand" title="" to='./'>
                <img height="45" src={logo} alt="Tablemate POS" />
              </Link>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" title="Transfer" href="javascript:void(0);" onClick={handleShow}>Table</a>
                  </li>
                  <li className="nav-item active">
                    <Link className="nav-link" title="Menu" to='./'>Switch</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" title="Transfer" to='./'>OTP</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" title="Transfer" to='./'>Transfer</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" title="Transfer" to='./'>KOT</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" title="Transfer" to='./'>Bill</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" title="Transfer" to='./'>Orders</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" title="Transfer" to='./'>Transfer</Link>
                  </li>
                </ul>
              </div>
            </nav>

            <Modal
              show={show}
              onHide={handleClose}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title>KOT Reprint</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <div class="table-responsive">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>Date Time</th>
                      <th>Table</th>
                      <th>KOT</th>
                      <th>KOT Type</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>13-03-2020 11:35:00 AM</td>
                      <td>3A</td>
                      <td>130320205-1</td>
                      <td>EKOT</td>
                      <td>Print</td>
                    </tr>
                    <tr>
                      <td>13-03-2020 11:35:00 AM</td>
                      <td>3A</td>
                      <td>130320205-1</td>
                      <td>EKOT</td>
                      <td>Print</td>
                    </tr>
                    <tr>
                      <td>13-03-2020 11:35:00 AM</td>
                      <td>3A</td>
                      <td>130320205-1</td>
                      <td>EKOT</td>
                      <td>Print</td>
                    </tr>
                    <tr>
                      <td>13-03-2020 11:35:00 AM</td>
                      <td>3A</td>
                      <td>130320205-1</td>
                      <td>EKOT</td>
                      <td>Print</td>
                    </tr>
                    <tr>
                      <td>13-03-2020 11:35:00 AM</td>
                      <td>3A</td>
                      <td>130320205-1</td>
                      <td>EKOT</td>
                      <td>Print</td>
                    </tr>
                  </tbody>
                </table>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" className="btn btn-primary" onClick={handleClose}>Close</Button>
                <Button variant="primary" className="btn btn-primary" onClick={handleClose}>Save Changes</Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;