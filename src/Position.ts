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
    this.x += 1;
  }

  goBackwards(): void {
    this.x -= 1;
  }
}
