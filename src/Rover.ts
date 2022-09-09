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
    const orders = command.split("");
    orders.forEach((order) => {
      if (order == "b") {
        this.position.goBackwards();
      } else if (order == "r") {
        this.position.turnRight();
      } else if (order == "l") {
        this.position.turnLeft();
      } else {
        this.position.goForward();
      }
    });
  }
}
