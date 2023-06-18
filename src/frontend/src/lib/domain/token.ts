export class Token {
  id!: number;
  name!: string;
  description!: string;
  creatorName!: string;
  categories!: string[];
  creationDate!: Date;
  receivedDate!: Date;
  frame!: string;
  icon!: string;

  constructor(data: Partial<Token>) {
    Object.assign(this, data);
    if (this.creationDate != null) {
      this.creationDate = new Date(this.creationDate);
    }
    if (this.receivedDate != null) {
      this.receivedDate = new Date(this.receivedDate);
    }
  }
}
