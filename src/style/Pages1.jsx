import {React} from "react";
import {Form, Button} from "react-bootstrap"
import {useDispatch, useSelector} from "react-redux";
import userRegisterActions from "../redux/actions/userRegisterActions";

const Pages1 = () => {
    const dispatch = useDispatch();
    const userRegister = useSelector(state => state.userRegister)

    const submitHandler = e => {
        e.preventDefault()
        dispatch(userRegisterActions.registerUserSubmit(
            userRegister.nama,
            userRegister.quote 
        ))
    }
    return (
        <>
        <Form onSubmit={submitHandler}>
            <Form.Group controlId="formBasicText">
                <Form.Label>Nama</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="masukin nama"
                value = {userRegister.nama}
                onChange = {e => dispatch(userRegisterActions.setNama(e.target.value))} 
                />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicText">
                <Form.Label>Quote</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="masukin quote" 
                value = {userRegister.quote}
                onChange = {e => dispatch(userRegisterActions.setQuote(e.target.value))} 
                />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </>
    )
}

export default Pages1;