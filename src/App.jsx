import Homepage from "./Day-First-JSX/HomeComponent"
import MenuComponent from  "./Day-First-JSX/MenuComponent"
import Greetings from "./Day-First-JSX/Class-Comonents/ClassComponent"
import HeaderClassComponent from "./Day-First-JSX/Class-Comonents/HeaderClassComponent"
import BodyClassCompoenet from "./Day-First-JSX/Class-Comonents/BOdyClassCompoenet"
import FooterClassComponent from "./Day-First-JSX/Class-Comonents/FooterClassComponent"
import StateInClassComponent from "./Day-First-JSX/Class-Comonents/StateInClassComponent"
import Counter from "./Day-First-JSX/Class-Comonents/CounterClassComponent"
import MicroPhoneComponent from "./Day-First-JSX/Class-Comonents/MicroPhoneComponent"
import FormInClassComponent from "./Day-First-JSX/Class-Comonents/FormInClassComponent"

function App() {
  return (
    <>
      {/* <Homepage></Homepage>
      <MenuComponent></MenuComponent> */}
      
      <HeaderClassComponent/>
      <BodyClassCompoenet/>
      <Greetings/>
      <p>State In class Compoent</p>
      <StateInClassComponent/>
      <p>Counter Functionaloity using Class Compoent</p>
      <Counter/>
      <p>Chaange style in class component</p>
      <MicroPhoneComponent/>
      <FormInClassComponent/>
      <FooterClassComponent/>
    </>
  )
}

export default App
