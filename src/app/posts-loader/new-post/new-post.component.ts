import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Post } from 'src/app/models/post.model';
import { PostStorageService } from 'src/app/services/post-storage.service';

@Component({
  selector: "app-new-post",
  templateUrl: "./new-post.component.html",
  styleUrls: ["./new-post.component.css"]
})
export class NewPostComponent implements OnInit {
  // @ViewChild('f', { static: false }) postForm: NgForm;
  isEdit = false;
  postRow = 2;
  imgUrl: any;
  imagePath: string;

  constructor(private postStorageService: PostStorageService) {}

  ngOnInit() {}

  onPostEdit() {
    this.isEdit = true;
    this.postRow = 4;
  }

  onPostEditClose() {
    this.isEdit = false;
    this.postRow = 2;
    this.imgUrl = null;
    this.imagePath = null;
  }

  onImageChange(event) {
    const files = event.target.files;
    if (files.length === 0) return;
    let reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgUrl = reader.result;
    }
    console.log(this.imagePath);
    console.log(this.imgUrl);
    this.onPostEdit();
  }

  onSubmit(postForm: NgForm) {
    console.log(postForm);
    const newPost = new Post(postForm.form.value.postText, this.imgUrl, new Date());
    this.postStorageService.sendPost(newPost, 'jyotirmayasahu');
  }
}
