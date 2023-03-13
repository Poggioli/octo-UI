import { render } from "@testing-library/react";
import {
  Dialog,
  DialogClose,
  DialogCloseIcon,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "./Dialog";

describe("<Dialog />", () => {
  it(`GIVEN a <Dialog />
      WHEN render is called
      THEN should render a <Dialog />`, () => {
    const rendered = render(
      <Dialog defaultOpen>
        <DialogTrigger>
          <button>Trigger</button>
        </DialogTrigger>
        <DialogContent blur>
          <DialogCloseIcon />
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut
            quam in dui facilisis consequat. Ut quis varius neque. Nulla et
            tellus velit.
          </DialogDescription>

          <DialogClose>
            <button>Cancel</button>
          </DialogClose>
          <DialogClose>
            <button>Save</button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    );
    expect(rendered.container).toMatchSnapshot();
  });

  it(`GIVEN a <Dialog />
      WHEN render is called
      THEN should render a <Dialog />`, () => {
    const rendered = render(
      <Dialog>
        <DialogTrigger>
          <button>Trigger</button>
        </DialogTrigger>
        <DialogContent blur>
          <DialogCloseIcon />
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut
            quam in dui facilisis consequat. Ut quis varius neque. Nulla et
            tellus velit.
          </DialogDescription>

          <DialogClose>
            <button>Cancel</button>
          </DialogClose>
          <DialogClose>
            <button>Save</button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    );
    expect(rendered.container).toMatchSnapshot();
  });

  it(`GIVEN a <Dialog />
      WHEN toString is called
      THEN return a string`, () => {
    expect(Dialog.toString()).toBe(".octo-UI-c-PJLV");
  });

  it(`GIVEN a <DialogClose />
      WHEN toString is called
      THEN return a string`, () => {
    expect(DialogClose.toString()).toBe(".octo-UI-c-PJLV");
  });

  it(`GIVEN a <DialogCloseIcon />
      WHEN toString is called
      THEN return a string`, () => {
    expect(DialogCloseIcon.toString()).toBe(".octo-UI-c-PJLV");
  });

  it(`GIVEN a <DialogContent />
      WHEN toString is called
      THEN return a string`, () => {
    expect(DialogContent.toString()).toBe(".octo-UI-c-hEFdbp");
  });

  it(`GIVEN a <DialogDescription />
      WHEN toString is called
      THEN return a string`, () => {
    expect(DialogDescription.toString()).toBe(".octo-UI-c-ceIQAL");
  });

  it(`GIVEN a <DialogTitle />
      WHEN toString is called
      THEN return a string`, () => {
    expect(DialogTitle.toString()).toBe(".octo-UI-c-dAnBzO");
  });

  it(`GIVEN a <DialogTrigger />
      WHEN toString is called
      THEN return a string`, () => {
    expect(DialogTrigger.toString()).toBe(".octo-UI-c-fDiieJ");
  });
});
