import ClearButton from "../atoms/clearButton";
import EqualButton from "../atoms/equalButton";
import NumbersButtons from "./numbersButtons";
import OperationsButtons from "./orperationsButtons";

function PanelButtons(params) {
    return(
        <>
            <NumbersButtons></NumbersButtons>
            <OperationsButtons></OperationsButtons>
            <ClearButton></ClearButton>
            <EqualButton></EqualButton>
        </>
    );
}
export default PanelButtons