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
  
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
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
                    <a className="nav-link" title="Transfer" href="javascript:void(0);">Switch</a>
                  </li>
                  <li className="nav-item">
                  <a className="nav-link" title="Transfer" href="javascript:void(0);">OTP</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" title="Transfer" href="javascript:void(0);" onClick={handleShow1}>Transfer</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" title="Transfer" href="javascript:void(0);" onClick={handleShow}>KOT</a>
                  </li>
                  <li className="nav-item">
                  <a className="nav-link" title="Transfer" href="javascript:void(0);" onClick={handleShow}>Bill</a>
                  </li>
                  <li className="nav-item">
                  <a className="nav-link" title="Transfer" href="javascript:void(0);" onClick={handleShow}>Orders</a>
                  </li>
                </ul>
              </div>
            </nav>

            <Modal
              show={show}
              onHide={handleClose}
              size="lg"
              scrollable = "true"
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


            <Modal
              show={show1}
              onHide={handleClose1}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title>Transfer</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p className="d-flex col-3 mx-auto">
                  <select className="form-control">
                    <option select>Select Table</option>
                    <option value="1A">1A</option>
                    <option value="1B">1B</option>
                    <option value="1C">1C</option>
                    <option value="1D">1D</option>
                  </select>
                </p>
              <div class="table-responsive">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Quantity</th>
                      <th>Item</th>
                      <th>Price</th>
                      <th>Comments</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td>3</td>
                      <td>2+1 franchino wheat bear</td>
                      <td>939.00</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>3</td>
                      <td>2+1 HEINEKEN</td>
                      <td>960.70</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" className="btn btn-primary" onClick={handleClose1}>Close</Button>
                <Button variant="primary" className="btn btn-primary" onClick={handleClose1}>Save Changes</Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;