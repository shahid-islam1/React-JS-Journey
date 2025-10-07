import Header from "./hearder"
import Component from "./component.jsx"
import JsxHTML from "./JsxAndHTML.jsx"
import ToDo from "./toDo.jsx"
import Veriables from "./Veriables.jsx"
import BtnFun from "./BtnFun.jsx"
import StateFun from "./state.jsx"
import Counter from "./counter.jsx"
import Toggle from "./toggle.jsx"
import TogCondition from "./toggleCondition"
import ReactProps from "./Props.jsx"
import WrapperApp from "./WrapperApp.jsx"
import Inputfield from "./input.jsx"
import ControlledInput from "./Form.jsx"
import Checkbox from "./checkBox.jsx"
import RadioBtn from "./radioBtn.jsx"
import ReactLoop from "./ReactLoop.jsx"
import Clock from "./DigitalClock.jsx"

function App() {
  return (
    <div>
      <Header />
      <Component />
      <JsxHTML />
      <h1>This is app</h1>
      <ToDo />
      <Veriables />
      <BtnFun />
      <StateFun />
      <Counter />
      <Toggle />
      <TogCondition />
      <ReactProps />
      <WrapperApp/>
      <Inputfield/>
      <ControlledInput/>
      <Checkbox/>
      <RadioBtn/>
      <ReactLoop/>
      <Clock/>
    </div>

  )
}

export default App
