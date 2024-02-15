import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Card from "../Card.component.jsx";

describe("Card", () => {
  let originalFetch;

  beforeEach(() => {
    originalFetch = global.fetch;
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            {
              index: 1,
              id: 1,
              title: "Play",
              completed: false,
            },
          ]),
      })
    );
  });

  afterEach(() => {
    global.fetch = originalFetch;
  });

  it("Renders Card component", async () => {
      let data = {
        index: 1,
        name: "hello"
      }
    render(<Card data={data}/>);
    const linkElement = await screen.getByTestId('Play');
    expect(linkElement).toBeInTheDocument();
  });

  //  SNAP SHOT
  test("matches card snapshot", async () => {
    let data = {
      index: 1,
      name: "hello"
    }
    const tree = await renderer.create(<Card data={data} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});


