import { render } from "@testing-library/react";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
} from "./Accordion";

describe("<Accordion />", () => {
  it(`GIVEN a <Accordion />
      WHEN render is called
      THEN should render a <Accordion />`, () => {
    const rendered = render(
      <Accordion type="multiple" value={["item-1", "item-2"]}>
        <AccordionItem disabled value="item-1">
          <AccordionHeader>Item 1 Header</AccordionHeader>
          <AccordionContent>Item 1 Content</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionHeader>Item 2 Header</AccordionHeader>
          <AccordionContent>Item 2 Content</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionHeader>Item 3 Header</AccordionHeader>
          <AccordionContent>Item 3 Content</AccordionContent>
        </AccordionItem>
        <AccordionItem disabled value="item-4">
          <AccordionHeader>Item 4 Header</AccordionHeader>
          <AccordionContent>Item 4 Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    );
    expect(rendered.container).toMatchSnapshot();
  });

  it(`GIVEN a <Accordion />
      WHEN toString is called
      THEN return a string`, () => {
    expect(Accordion.toString()).toBe(".octo-UI-c-dpBPGy");
  });

  it(`GIVEN a <AccordionItem />
      WHEN toString is called
      THEN return a string`, () => {
    expect(AccordionItem.toString()).toBe(".octo-UI-c-dzOJLW");
  });

  it(`GIVEN a <AccordionHeader />
      WHEN toString is called
      THEN return a string`, () => {
    expect(AccordionHeader.toString()).toBe(".octo-UI-c-hxvpuA");
  });

  it(`GIVEN a <AccordionContent />
      WHEN toString is called
      THEN return a string`, () => {
    expect(AccordionContent.toString()).toBe(".octo-UI-c-iGCJiJ");
  });
});
