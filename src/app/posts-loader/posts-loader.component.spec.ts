import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsLoaderComponent } from './posts-loader.component';

describe('PostsLoaderComponent', () => {
  let component: PostsLoaderComponent;
  let fixture: ComponentFixture<PostsLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
