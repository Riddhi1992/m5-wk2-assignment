import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusCircle, faMinusCircle} from "@fortawesome/free-solid-svg-icons";
// import {useLocation} from 'react-router-dom';
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

// function DisplayProducts(props) {
//     return (
//       <div>
//         {props.Products.map(Product => {
//           return (
//             <div className="card" key={Product.id}>
//               <h4 className="text-start mt-4 ms-5 me-4 mb-2">{Product.desc}</h4>
//               <div className="row p-2 align-middle">
//                 <img alt={Product.desc} src={Product.image} width="50px" className="col-6 col-md-4 mt-1 ms-4 me-4 mb-2" />
//                 <p className="col-sm-6 col-md-8 align-self-center text-start">
//                     <FontAwesomeIcon className="me-1" icon={faPlusCircle} />
//                     <FontAwesomeIcon className="me-1" icon={faMinusCircle} />
//                     <span className="border border-2 p-3">{Product.value}</span>
//                      quantity
//                 </p>
//               </div>
//             </div>
//           )
//         })}
//       </div>
//     )
//   }

function DisplayProducts(props) {
    const [show, setShow] = useState(false);
    const [showImge, setShowImge] = useState({});
    const handleClose = () => setShow(false);
    const handleShow = (Product) => {
        setShow(true);
        setShowImge(Product);
    }

    return (
        <div>
            {props.Products.map(Product => {
                return (
                    <div className="card" key={Product.id}>
                    <h4 className="text-start mt-4 ms-5 me-4 mb-2">{Product.desc}</h4>
                    <div className="row p-2 align-middle">
                        <Button variant="" className="w-25" onClick={() => setShow(true)}>
                            <img alt={Product.desc} src={Product.image} width="50px" className="col-6 col-md-4 mt-1 ms-4 me-4 mb-2"
                            onClick={() => handleShow(Product)} />
                        </Button>
                        
                        <p className="col-sm-6 col-md-8 align-self-center text-start">
                            <button className="btn btn-secondary mx-1 ps-3" onClick={() => props.onIncrement(Product)}>         <FontAwesomeIcon className="me-1" icon={faPlusCircle} /> </button>
                            <button className="btn btn-secondary mx-1 ps-3" onClick={() => props.onDecrement(Product)}> 
                            <FontAwesomeIcon className="me-1" icon={faMinusCircle} /></button>
                            <span className="p-3">{Product.value}</span>
                            quantity
                        </p>
                    </div>
                    </div>
                )
            })}
            <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="">{showImge.desc}</Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                        <img alt={showImge.desc} src={showImge.image} width="50px" className="col-6 col-md-4 mt-1 ms-4 me-4 mb-2" />
                        <p>Ratings: {showImge.ratings}/5</p>
                    </Modal.Body>
                    {/* <Modal.Footer>
                        <Button onClick={props.onHide}>Close</Button>
                    </Modal.Footer> */}
            </Modal>
        </div>
    )
}

export default DisplayProducts;