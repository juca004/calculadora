import InputNumbers from "../atoms/inputNumbers";
import Title from "../atoms/titulo";
import PanelButtons from "../molecules/panelButtons";
import NavBar from "../organims/navBar";

function ContainerCalc() {
    return(
        <div>
            <NavBar></NavBar>
            <Title></Title>
            <InputNumbers></InputNumbers>
            <PanelButtons></PanelButtons>
        </div>
    );
}

export default ContainerCalc