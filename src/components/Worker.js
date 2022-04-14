import React from "react";
import base_url from "../api/workerboot";
import axios from "axios";
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container,

} from "reactstrap";
import { Form } from "reactstrap";

const Worker = ({ worker, update }) => {
    const deleteWorker = (workerId) => {
        axios.delete(`${base_url}/worker/${workerId}`).then(
            (Response) => {
                console.log("deleted successfully")
                update(workerId);
            }, (Error) => {
                console.log("server problem");
            }
        )
    };


    return (

        
        <Card>
            <Form action="/contactus">
                <CardBody className="text-center">
               
                    <div className="card-deck">
                        <div className="card" style={{width: '50%'}} >
                            {/* <img className="card-img-top" src="pic3.PNG"/> */}
                                <div className="card-body">
                                 
                                    <CardSubtitle className="font-weight-bold"><h2>Name : {worker.name}</h2></CardSubtitle>
                                    <CardText><h5>Address : {worker.address} </h5> </CardText>
                                    <CardText><h5>Email :{worker.email} </h5></CardText>
                                    <CardText><h5>Service :{worker.services} </h5></CardText>
                                    <CardText>{worker.wphoto}</CardText>

                                    <Container className="text-center">
                                        <Button color="danger" >Book</Button>

                                        {/* <Button color="success"
                                            onClick={() => {
                                                deleteWorker(worker.workerId);
                                            }}
                                        >Delete</Button> */}

                                    </Container>
                                </div>
                               
                        </div>
                        </div>
                </CardBody>
            </Form>
        </Card>

        // <Card>
        //     <Form action="/contactus">
        //         <CardBody className="text-center">
        //             <CardSubtitle className="font-weight-bold"><h2>Name : {worker.name}</h2></CardSubtitle>
        //             <CardText><h5>Address : {worker.address} </h5> </CardText>
        //             <CardText><h5>Email :{worker.email} </h5></CardText>
        //             <CardText><h5>Service :{worker.services} </h5></CardText>
        //             <CardText>{worker.wphoto}</CardText>

        //             <Container className="text-center">
        //                 <Button color="danger" >Book</Button>

        //                 <Button color="success"
        //                     onClick={() => {
        //                         deleteWorker(worker.workerId);
        //                     }}
        //                 >Delete</Button>

        //             </Container>
        //         </CardBody>
        //     </Form>
        // </Card>
    );
};

export default Worker;





