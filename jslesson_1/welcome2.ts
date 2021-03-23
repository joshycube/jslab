interface ListItem {
  name: string;
}

const value: boolean = true;
const text: string = "Hello";
const oneNumber: number = 12;
const oneFloat: number = 0.012;
const oneArray: number[] = [1, 2, 3];
const list: ListItem[] = [{ name: "foo" }, { name: "bar" }];
const myObj = {};
const myMethod = function () {};
const myOtherMethod = () => {};

interface ICoordinates {
  x: number;
  y: number;
}

function moveItemOnScreen(obj: any, to: ICoordinates): string {
  if (obj === "human") {
    return "Move human";
  } else {
    return "Move object";
  }
}

const result = moveItemOnScreen("human", { x: 0, y: 0 });
console.log(result);
