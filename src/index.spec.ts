import { doTheThing } from ".";
import { Rover } from "./Rover";

describe("Test of the test framework", function () {
  it("Should pass", function () {
    expect(doTheThing()).toEqual(true);
  });
});

describe("Test the position of the rover", function () {
  it("Should display base position when the rover is initialized", function () {
    const rover = new Rover(0, 0);
    expect(rover.displayPosition()).toEqual([0, 0, "N"]);
  });
});
