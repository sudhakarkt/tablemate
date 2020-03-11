import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "./tableViewInner.scss";

function TableViewInner(props) {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<React.Fragment>
			<div className="col-md-2 tableName">
				<Link to='./menu' className="tableNameInner">
					<div className="row tableHeader">
						<div className="col-md-4">
							<div className="tableInnerName">F10</div>
						</div>
						<div className="col-md-8">
							<div className="tableValue">Sudhakar KT</div>
						</div>
					</div>
					<div className="row tableNameValue">
						<div className="col-md-7">
							<button type="button" className="guestName">Karthick V</button>
						</div>
						<div className="col-md-5">
							<button type="button" className="paxName">KT</button>
						</div>
					</div>
					<div className="row m-0 tableMenu">
						<div className="col-md-2 p-0 runningOrder"><button type="button" className="btn btn-primary">RO</button></div>
						<div className="col-md-2 p-0 tableOrder"><button type="button" className="btn btn-primary">O</button></div>
						<div className="col-md-2 p-0 tableNC"><button type="button" className="btn btn-primary">NC</button></div>
						<div className="col-md-2 p-0 tableBill"><button type="button" className="btn btn-primary" onClick={handleShow}>Bill</button></div>
					</div>
				</Link>
				

				<button type="button" className="btn btn-primary" onClick={handleShow}>Bill</button>

				<Modal
					show={show}
					onHide={handleClose}
					{...props}
					size="lg"
					aria-labelledby="contained-modal-title-vcenter"
					centered
				>
					<Modal.Header closeButton>
						<Modal.Title>Modal heading</Modal.Title>
					</Modal.Header>
					<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							Close
												</Button>
						<Button variant="primary" onClick={handleClose}>
							Save Changes
												</Button>
					</Modal.Footer>
				</Modal>
			</div>
		</React.Fragment>
	);
}

export default TableViewInner;