import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  counter = 0;
  constructor(private titleService: Title) {}

  getPageTitle() {
    return this.titleService.getTitle();
  }

  setPageTitle(title: string) {
    this.titleService.setTitle(`${title} - ${this.counter++}`);
  }
}
