import React,{useState,useEffect} from 'react'
import { Container,Row,Form, Button } from 'react-bootstrap'
import Input from '../layout/Input'
import {isUserLoggedIn, login} from '../actions/authactions'
import {useDispatch,useSelector} from 'react-redux'
import { Redirect } from 'react-router-dom'
const SignIn = (props) => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const auth = useSelector(state =>state.auth)
    const dispatch = useDispatch()
    
    const userLogin =(e)=>{
    e.preventDefault()
    const user = {
        email,
        password
    }
    dispatch(login(user))

}

if(auth.authenticate){
    return <Redirect to={`/`} />
}

    return (
        <div>
             <Container>
                <Row>
                    
                        <Form onSubmit={userLogin}>
                            <Row>
                            <Input label="Email" placeholder="Email" type="email" onChange={(e)=>{setEmail(e.target.value)}} />
                            <Input label="Password" placeholder="Password"  type="password" onChange={(e)=>{setPassword(e.target.value)}} />
                             <Button variant="primary"  type="submit" className="mt-5    ">sign in</Button>
                            </Row>
                        </Form>
                
                </Row>
            </Container>
        </div>
    )
}

export default SignIn
