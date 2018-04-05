import { Component } from "@angular/core";

@Component({
  selector: "abi-alert-close",
  templateUrl: "./AlertClose.example.html"
})
export class AlertClose {
  closed = false;

  onClose() {
    this.closed = true;
  }
}
