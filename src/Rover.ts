import { Orientation } from "./Orientation";
import { Position } from "./Position";

export class Rover {
  private position: Position;

  constructor(x: number, y: number) {
    this.position = { x: x, y: y, orientation: Orientation.N };
  }

  displayPosition(): Position {
    return this.position;
  }
}
