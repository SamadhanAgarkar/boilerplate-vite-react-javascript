import Homepage from "./Day-First-JSX/HomeComponent"
import MenuComponent from "./Day-First-JSX/MenuComponent"
import Greetings from "./Day-First-JSX/Class-Comonents/ClassComponent"
import HeaderClassComponent from "./Day-First-JSX/Class-Comonents/HeaderClassComponent"
import BodyClassCompoenet from "./Day-First-JSX/Class-Comonents/BOdyClassCompoenet"
import FooterClassComponent from "./Day-First-JSX/Class-Comonents/FooterClassComponent"
import StateInClassComponent from "./Day-First-JSX/Class-Comonents/StateInClassComponent"
import Counter from "./Day-First-JSX/Class-Comonents/CounterClassComponent"
import MicroPhoneComponent from "./Day-First-JSX/Class-Comonents/MicroPhoneComponent"
import Registration from "./Day-First-JSX/Class-Comonents/FormWithClassComponent"
import HobbbiesFiddler from "./Day-First-JSX/Class-Comonents/HobbiesFiddler"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ToDoListComponent from "./Day-First-JSX/Class-Comonents/ToDoList"
import LifeCycleComponent from "./Day-First-JSX/LifeCycle/MountingComponent"
import UpdatingComponent from "./Day-First-JSX/LifeCycle/UpdattingComponent"
import ConterFC from "./Component/FunctionComponent/Conter"
import GreetingsFunction from "./Component/FunctionComponent/WelcomeComponent"
import ToggleUI from "./Component/FunctionComponent/ToggleUIComponent"
import FormAssignmentWithFunComponent from "./Component/FunctionComponent/FormAssignmentWithFunComponent"
import StaleCounter from "./Component/FunctionComponent/StaleStateIssue"
import HobbiesFunc from "./Component/FunctionComponent/HobbiesFunct"
import ProfileObj from "./Component/FunctionComponent/profile-obj"
import UseEffectComponent from "./Component/FunctionComponent/UseEffectComponent"
import ShowProducts from "./Component/API Calling/ShowProducts"
import PostData from "./Component/API Calling/PostData"

function App() {
  return (
    <>
      {/* <Homepage></Homepage>
      <MenuComponent></MenuComponent> */}
      <ToastContainer />
      <HeaderClassComponent />
      {/* <BodyClassCompoenet/>
      <Greetings/>
      <br/>
      <p>State In class Compoent</p>
      <StateInClassComponent/>
      <br/>
      <p>Counter Functionaloity using Class Compoent</p>
      <Counter/>
      <br/>
      <p>Chaange style in class component</p>
      <MicroPhoneComponent/>
      <br/> */}
      {/* <FormInClassComponent /> */}
      {/* <RegistrationForm /> */}
      {/* <Registration /> */}
      <br />
      {/* <HobbbiesFiddler /> */}
      <br />
      {/* <ToDoListComponent></ToDoListComponent> */}
      {/* <LifeCycleComponent />
      <UpdatingComponent /> */}
      {/* <ConterFC></ConterFC>
      <hr />
      <GreetingsFunction />
      <hr />
      <ToggleUI />
      <hr /> */}
      {/* <FormAssignmentWithFunComponent /> */}
      {/* <StaleCounter />
      <hr></hr>
      <ProfileObj />
      <HobbiesFunc />
      <hr></hr>
      <UseEffectComponent /> */}
      {/* <ShowProducts /> */}
      <PostData />
      <FooterClassComponent />


    </>
  )
}

export default App
