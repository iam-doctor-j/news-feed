export class User {
  private _accountCreated: Date;

  constructor(
    private username: string,
    private dob: Date,
    private email: string,
    private uid: string,
    private bio?: string,
    private dp?: string
  ) {
    this._accountCreated = new Date();
  }

  get Username() {
    return this.username;
  }
  get DateOfBirth() {
    return this.dob;
  }
  get Email() {
    return this.email;
  }
  get Bio() {
    return this.bio;
  }
  get DisplayPicture() {
    return this.dp;
  }

  get Uid() {
    return this.uid;
  }

  set Username(username) {
    this.username = username;
  }
  set DateOfBirth(dob) {
    this.dob = dob;
  }
  set Email(email) {
    this.email = email;
  }
  set Bio(bio) {
    this.bio = bio;
  }
  set DisplayPicture(dp) {
    this.dp = dp;
  }
}
