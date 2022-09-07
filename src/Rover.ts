import { Orientation } from "./Orientation";
import { Position } from "./Position";

export class Rover {
  private position: Position;

  constructor(x: number, y: number, orientation = Orientation.N) {
    this.position = new Position(x, y, orientation);
  }

  displayPosition(): Position {
    return this.position;
  }

  processMovement(command: string): void {
    if (command == "b") {
      this.position.goBackwards();
    } else {
      this.position.goForward();
    }
  }
}
