export class TokenType {
  id!: number;
  name!: string;
  transferable!: boolean;

  constructor(data: Partial<TokenType>) {
    Object.assign(this, data);
  }
}
