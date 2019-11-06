import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-new-post",
  templateUrl: "./new-post.component.html",
  styleUrls: ["./new-post.component.css"]
})
export class NewPostComponent implements OnInit {
  @ViewChild("f", { static: false }) postForm: NgForm;

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.postForm);
  }
}
