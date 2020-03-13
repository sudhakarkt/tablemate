import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "./subCategoryItemInner.scss";

function SubCategoryItemInner(props) {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<React.Fragment>
			<div className="col-md-2 subCategoryName">
				<div className="subCategoryInner">
					<Link to='/' className="subCategoryInnerLink"></Link>
					<div className="subCategoryValue">
						<p>Beer</p>
						<p className="valuePrice">&#x20b9; 1500.00</p>
					</div>
					<div className="row m-0 subCategoryMenu">
						<div className="col-md-4 p-0 runningOrder"><button type="button" className="btn btn-primary" onClick={handleShow}>NC</button></div>
						{/* <div className="col-md-4 p-0 tableOrder"><button type="button" className="btn btn-primary" onClick={handleShow}>O</button></div> */}
						<div className="col-md-4 p-0 tableBill"><button type="button" className="btn btn-primary" onClick={handleShow}>CUST</button></div>
					</div>
				</div>
			</div>
			<Modal
				show={show}
				onHide={handleClose}
				{...props}
				size="md"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title>Custom Product</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="customProductContainer">
							<a href="javascript:void(0);" className="customProductValue"><span>Regular</span><span>&#x20b9; 250.00</span></a>
							<a href="javascript:void(0);" className="customProductValue"><span>Large</span><span>&#x20b9; 250.00</span></a>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" className="btn btn-primary" onClick={handleClose}>Close</Button>
					<Button variant="primary" className="btn btn-primary" onClick={handleClose}>Save Changes</Button>
				</Modal.Footer>
			</Modal>
		</React.Fragment>
	);
}

export default SubCategoryItemInner;