import { Button } from "react-bootstrap";

function Title(usuario) {
    usuario = 'juan'
    return(
        <>
        <h1 className="title">calculadora {usuario}</h1>
        <Button variant="success">inicia calculadora</Button>
        </>
    );      
}


export default Title