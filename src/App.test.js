import App from "./App";
import PersonList from "./PersonList";
import { shallow } from "enzyme";

//  We create a "suite" by using the word describe
//      We pass in a label string, as well as a callback function to our suite
describe("App", () => {
  // We describe the behavior of the app componenent
  // "It" also takes in a label and a callback, but this would be considered our first test.
  // it("renders App component successfully", () => {
  //   const appWrapper = shallow(<App />);
  // });
  let appWrapper;
  let state;
  beforeAll(() => {
    appWrapper = shallow(<App />);
    state = appWrapper.state();
  });
  it("Renders A Person List", () => {
    const personList = appWrapper.find(PersonList);
    //  We can check for the occurances of Person List within the App component as an array
    expect(personList).toHaveLength(1);
  });

  it("App Component Has State", () => {
    // We can write an assertion, to expect that our components state is or is not null
    expect(state).not.toBeNull();
  });

  it("State Has 'People' Property", () => {
    expect(state.people).toBeDefined();
  });
});
