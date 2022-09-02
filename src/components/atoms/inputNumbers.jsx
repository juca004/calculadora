import Form from 'react-bootstrap/Form';
function InputNumbers(params) {
    return(
        <>
            <Form.Label htmlFor="inputPassword5">Ingrese operaciones:</Form.Label>
            <Form.Control
            type="text"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            />
        </>
    );
}
export default InputNumbers