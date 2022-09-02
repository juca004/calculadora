import { Nav } from "react-bootstrap"

function Links(props) {// routes = routes []
    return(
        <>
          {
            props.routes.map(function (route) {
                return (<Nav.Link href={route.path}>{route.name}</Nav.Link>)
            })
          }
        </>
    );
}
export default Links