import App from "./App";
import { shallow } from "enzyme";
// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

//  We create a "suite" by using the word describe
//      We pass in a label string, as well as a callback function to our suite
describe("App", () => {
  // We describe the behavior of the app componenent
  // "It" also takes in a label and a callback, but this would be considered our first test.
  it("", () => {
    const appWrapper = shallow(<App />);
  });
});
