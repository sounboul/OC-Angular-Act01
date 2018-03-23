export class Post {
  created_at: number;
  loveIts: number;

  constructor(public title: string, public content: string ) {
    this.loveIts = 0 ;
    this.created_at = new Date().getTime();
  }
}
