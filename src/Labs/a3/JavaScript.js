import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";
import BooleanVariables from "./BooleanVariables";
import IfElse from "./IfElse";
import TernaryOperator from "./TernaryOperator";
import WorkingWithFunctions from "./WorkingWithFunctions";
import WorkingWithArrays from "./WorkingWithArrays";
import TemplateLiterals from "./TemplateLiterals";
import House from "./House";
import Spread from "./Spread";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";

function JavaScript() {
    console.log('Hello World');
    return (
        <div>
            <h1>JavaScript</h1>
            <VariablesAndConstants />
            <VariableTypes />
            <BooleanVariables />
            <IfElse />
            <TernaryOperator />
            <br />
            <WorkingWithFunctions />
            <br />
            <WorkingWithArrays />
            <br />
            <TemplateLiterals />
            <br />
            <House />
            <br />
            <Spread />
            <br />
            <Destructing />
            <br/>
            <FunctionDestructing/>
            <br/>
        </div>
    );
}

export default JavaScript;