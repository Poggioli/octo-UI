import { render } from "@testing-library/react";
import {
  Card,
  CardContainerAction,
  CardDescription,
  CardSubtitle,
  CardTitle
} from "./Card";

describe("<Card />", () => {
  it(`GIVEN a <Card />
      WHEN render is called
      THEN should render a <Card />`, () => {
    const rendered = render(
      <Card>
        <CardTitle>CardTitle</CardTitle>
        <CardSubtitle>CardSubtitle</CardSubtitle>
        <CardDescription>Card Description</CardDescription>
        <CardContainerAction>
          <button>CardContainerAction Button</button>
        </CardContainerAction>
      </Card>
    );
    expect(rendered.container).toMatchSnapshot();
  });

  it(`GIVEN a <Card />
      WHEN toString is called
      THEN return a string`, () => {
    expect(Card.toString()).toBe(".octo-UI-c-gqwkJN");
  });

  it(`GIVEN a <CardContainerAction />
      WHEN toString is called
      THEN return a string`, () => {
    expect(CardContainerAction.toString()).toBe(".octo-UI-c-gqwkJN");
  });

  it(`GIVEN a <CardDescription />
      WHEN toString is called
      THEN return a string`, () => {
    expect(CardDescription.toString()).toBe(".octo-UI-c-gWerhV");
  });
  
  it(`GIVEN a <CardSubtitle />
      WHEN toString is called
      THEN return a string`, () => {
    expect(CardSubtitle.toString()).toBe(".octo-UI-c-gWerhV");
  });

  it(`GIVEN a <CardTitle />
      WHEN toString is called
      THEN return a string`, () => {
    expect(CardTitle.toString()).toBe(".octo-UI-c-gWerhV");
  });
});
