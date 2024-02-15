import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Header from "../Header.component";

describe("Header", () => {
  let originalFetch;

  beforeEach(() => {
    originalFetch = global.fetch;
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            {
              text: "Pop Movies",
              morebutton: true,
            },
          ]),
      })
    );
  });

  afterEach(() => {
    global.fetch = originalFetch;
  });

  it("Renders Header component", async () => {
    let propData = {
      text: "Pop Movies",
      morebutton: true,
    };

    render(<Header {...propData} />);
    const linkElement = await screen.getByTestId("Pop Movies");
    expect(linkElement).toBeInTheDocument();
  });

  //  SNAP SHOT
  test("matches header snapshot", async () => {
    let propData = {
      text: "Pop Movies",
      morebutton: true,
    };
    const tree = await renderer.create(<Header {...propData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
