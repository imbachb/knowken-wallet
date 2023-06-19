export class TokenType {
  id!: number;
  name!: string;
  transferable!: boolean;
  nrTokens!: number;

  constructor(data: Partial<TokenType>) {
    Object.assign(this, data);
  }
}
