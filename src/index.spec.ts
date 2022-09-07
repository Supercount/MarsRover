import { doTheThing } from ".";
import { Orientation } from "./Orientation";
import { Position } from "./Position";
import { Rover } from "./Rover";

describe("Test of the test framework", function () {
  it("Should pass", function () {
    expect(doTheThing()).toEqual(true);
  });
});

describe("Test the position of the rover", function () {
  it("Should display base position when the rover is initialized", function () {
    const rover = new Rover(0, 0);
    const position = new Position(0, 0, Orientation.N);
    expect(rover.displayPosition()).toEqual(position);
  });

  it("Should display position when initialised not at origin", function () {
    const rover = new Rover(3, -4);
    const position = new Position(3, -4, Orientation.N);
    expect(rover.displayPosition()).toEqual(position);
  });

  it("Should display base position when the rover is initialized facing South", function () {
    const rover = new Rover(0, 0, Orientation.S);
    const position = new Position(0, 0, Orientation.S);
    expect(rover.displayPosition()).toEqual(position);
  });

  it("Should go forward when receive command 'f'", function () {
    const rover = new Rover(0, 0);
    rover.processMovement("f");

    const position = new Position(1, 0, Orientation.N);

    expect(rover.displayPosition()).toEqual(position);
  });

  it("Should go backwards when receive command 'b'", function () {
    const rover = new Rover(0, 0);
    rover.processMovement("b");

    const position = new Position(-1, 0, Orientation.N);

    expect(rover.displayPosition()).toEqual(position);
  });
});
