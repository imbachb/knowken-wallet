export class TokenCategory {
  id!: number;
  name!: string;
  nrTokens!: number;
  frame!: string;
  icon!: string;

  constructor(data: Partial<TokenCategory>) {
    Object.assign(this, data);
  }
}
