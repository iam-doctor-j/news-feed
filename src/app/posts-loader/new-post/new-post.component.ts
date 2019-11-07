import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  // @ViewChild('f', { static: false }) postForm: NgForm;
  isEdit = false;
  postRow = 2;
  photoUrl: string;

  constructor() {}

  ngOnInit() {}

  onPostEdit() {
    this.isEdit = true;
    this.postRow = 4;
  }

  onPostEditClose() {
    this.isEdit = false;
    this.postRow = 2;
  }

  onSubmit(postForm: NgForm) {
    console.log(postForm);
    this.photoUrl = postForm.form.value.postImg;
  }
}
