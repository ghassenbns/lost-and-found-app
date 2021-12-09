export class Post {
  public date: string;
  public description: string;
  public idPost: number;
  public imagePath: string;
  public location: string;
  public title: string;
  public type: string;
  public phoneNumber: string;

  constructor(
    date: string,
    description: string,
    idPost: number,
    imagePath: string,
    location: string,
    title: string,
    type: string,
    phoneNumber: string
  ) {
    this.date = date;
    this.location = location;
    this.idPost = idPost;
    this.description = description;
    this.imagePath = imagePath;
    this.title = title;
    this.type = type;
    this.phoneNumber = phoneNumber;
  }
}
