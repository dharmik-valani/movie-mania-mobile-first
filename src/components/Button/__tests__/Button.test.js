import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Button from "../Button.component";

describe("Button", () => {
  let originalFetch;

  beforeEach(() => {
    originalFetch = global.fetch;
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            {
                text: "View Details",
                buttonclassName: "border-amber-300 rounded-xl border-4 text-black py-2 px-4 rounded transition-opacity duration-300",
                textclassName: "text-white"
            },
          ]),
      })
    );
  });

  afterEach(() => {
    global.fetch = originalFetch;
  });

  it("Renders Button component", async () => {
    
    let propData = {
        text: "View Details",
        buttonclassName: "border-amber-300 rounded-xl border-4 text-black py-2 px-4 rounded transition-opacity duration-300",
        textclassName: "text-white"
    } 

    
    render(<Button {...propData}/>);
    const linkElement = await screen.getByTestId('View Details');
    expect(linkElement).toBeInTheDocument();
  });

  //  SNAP SHOT
  test("matches button snapshot", async () => {
    let propData = {
        text: "View Details",
        buttonclassName: "border-amber-300 rounded-xl border-4 text-black py-2 px-4 rounded transition-opacity duration-300",
        textclassName: "text-white"
    } 
    const tree = await renderer.create(<Button {...propData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});


