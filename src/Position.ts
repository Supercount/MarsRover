import { Orientation } from "./Orientation";

export class Position {
  private x: number;
  private y: number;
  private orientation: Orientation;

  constructor(x: number, y: number, orientation: Orientation) {
    this.x = x;
    this.y = y;
    this.orientation = orientation;
  }

  public goForward(): void {
    switch (this.orientation) {
      case Orientation.N:
        this.x += 1;
        break;
      case Orientation.W:
        this.y -= 1;
        break;
      case Orientation.S:
        this.x -= 1;
        break;
      case Orientation.E:
        this.y += 1;
        break;
      default:
        break;
    }
  }

  goBackwards(): void {
    switch (this.orientation) {
      case Orientation.N:
        this.x -= 1;
        break;
      case Orientation.W:
        this.y += 1;
        break;
      case Orientation.S:
        this.x += 1;
        break;
      case Orientation.E:
        this.y -= 1;
        break;
      default:
        break;
    }
  }

  turnRight(): void {
    this.orientation = (this.orientation + 1) % 4;
  }

  turnLeft() {
    this.orientation = (this.orientation + 3) % 4;
  }
}
