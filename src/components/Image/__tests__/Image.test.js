import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Imagecomponent from "../Image.component.jsx";

describe("Imagecomponent", () => {
  it("renders an image with the correct attributes", () => {
    const src = "test-image.jpg";
    const alttext = "Test Alt Text";
    const imageclassName = "test-class";
    const onClick = jest.fn();

    render(
      <Imagecomponent
        src={src}
        alttext={alttext}
        imageclassName={imageclassName}
        onClick={onClick}
      />
    );

    const imgElement = screen.getByAltText(alttext);
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", src);
    expect(imgElement).toHaveClass(imageclassName);
  });

  test("matches image snapshot", () => {
    const src = "test-image.jpg";
    const alttext = "Test Alt Text";
    const imageclassName = "test-class";
    const onClick = jest.fn();

    const tree = renderer
      .create(
        <Imagecomponent
          src={src}
          alttext={alttext}
          imageclassName={imageclassName}
          onClick={onClick}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
