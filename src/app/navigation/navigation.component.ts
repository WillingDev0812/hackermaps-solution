import { Component, Input } from "@angular/core";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
})
export class NavigationComponent {
  @Input() locations: string[];
  @Input() index: Number;

  // Move location up
  moveUp(index: number) {
    if (index > 0) {
      [this.locations[index], this.locations[index - 1]] = [
        this.locations[index - 1],
        this.locations[index],
      ];
    }
  }

  // Move location down
  moveDown(index: number) {
    if (index < this.locations.length - 1) {
      [this.locations[index], this.locations[index + 1]] = [
        this.locations[index + 1],
        this.locations[index],
      ];
    }
  }

  // Used for rendering
  getClasses(ctx, index) {
    let classes = `material-icons ${ctx}`;
    if (ctx === "dots") {
      if (this.isLast(index)) {
        classes += " hidden";
      }
    } else {
      classes += this.isLast(index) ? " small" : " x-small";
      if (index === 0) {
        classes += " first";
      }
    }
    return classes;
  }

  // Used for rendering
  isLast(index) {
    return index === this.locations.length - 1;
  }
}
