import React from 'react'
import { Container,Row,Form,Col, Button } from 'react-bootstrap'
import Input from '../layout/Input'
import {useSelector} from 'react-redux'
import { Redirect } from 'react-router-dom'


const Register = (props) => {
    const auth = useSelector(state =>state.auth)

    if(auth.authenticate){
        return <Redirect to={`/`} />
    }
 
    return (
        <div>
            <Container>
                <Row>
                   
                        <Form >
                            <Row>
                                <Col md={6}>
                                    <Input label="Full Name" placeholder="Full Name" value="" type="text" onChange={()=>{}} />
                                </Col>
                                <Col md={6}>
                                    <Input label="Phone Number" placeholder="Phone Number" value="" type="text" onChange={()=>{}} />
                                </Col>
                            </Row>
                            <Row>
                            <Input label="Email" placeholder="Email" value="" type="email" onChange={()=>{}} />
                            <Input label="Password" placeholder="Password" value="" type="password" onChange={()=>{}} />
                             <Button variant="primary" type="submit">register</Button>
                            </Row>
                        </Form>
                  
                </Row>
            </Container>
            
        </div>
    )
}

export default Register
