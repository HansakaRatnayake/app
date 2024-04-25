export default class Post{
    constructor(
        public id:string,
        public userid:string,
        public title:string,
        public  body:string
    ){
      this.id = id;
      this.userid=userid;
      this.title=title;
      this.body=body;
    }
}
