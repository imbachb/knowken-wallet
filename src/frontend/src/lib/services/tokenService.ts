import { Token } from '$lib/domain/token';
import { TokenCategory } from '$lib/domain/tokenCategory';
import { TokenType } from '$lib/domain/tokenType';

export default class TokenService {
  // TODO: Get from Backend

  tokens: Token[] = [
    new Token({
      id: 0,
      name: '5 Years of experience in accompanying doctorates',
      categories: ['Economy'],
      creatorName: 'OST, University of Applied Sciences, St. Gallen',
      creationDate: new Date(),
      receivedDate: new Date(),
      description:
        'This token stands for the experience of 5 years of tutoring doctorates at the University of Applied Sciences "OST" in St. Gallen Switzerland.',
      frame: 'achievement',
      icon: 'writer',
    }),
    new Token({
      id: 1,
      name: 'Teaching Award',
      categories: ['Arts'],
      creatorName: 'PH Bern',
      creationDate: new Date(),
      receivedDate: new Date(),
      description: 'How to teach properly, workshop',
      frame: 'effort',
      icon: 'growth',
    }),
    new Token({
      id: 2,
      name: 'Oxford Union Speaker',
      categories: ['Philosophy', 'Arts'],
      creatorName: 'Oxford Union',
      creationDate: new Date(),
      receivedDate: new Date(),
      description: 'Partaking in the Oxford Union debates of the summer of 2019',
      frame: 'effort',
      icon: 'sun',
    }),
    new Token({
      id: 3,
      name: 'Oxford Union Speaker',
      categories: ['Philosophy', 'Arts'],
      creatorName: 'Oxford Union',
      creationDate: new Date(),
      receivedDate: new Date(),
      description: 'Partaking in the Oxford Union debates of the summer of 2020',
      frame: 'effort',
      icon: 'sun',
    }),
    new Token({
      id: 4,
      name: 'Oxford Union Speaker',
      categories: ['Philosophy', 'Arts'],
      creatorName: 'Oxford Union',
      creationDate: new Date(),
      receivedDate: new Date(),
      description: 'Partaking in the Oxford Union debates of the summer of 2021',
      frame: 'effort',
      icon: 'sun',
    }),
    new Token({
      id: 5,
      name: 'Oxford Union Speaker',
      categories: ['Philosophy', 'Arts'],
      creatorName: 'Oxford Union',
      creationDate: new Date(),
      receivedDate: new Date(),
      description: 'Partaking in the Oxford Union debates of the summer of 2022',
      frame: 'effort',
      icon: 'sun',
    }),
    new Token({
      id: 6,
      name: 'Business Angel',
      categories: ['Economy'],
      creatorName: 'Business Angels Switzerland',
      creationDate: new Date(),
      receivedDate: new Date(),
      description:
        'Appreciation for the efforts of counseling young startups in the role of a business angel.',
      frame: 'effort',
      icon: 'oxphilo',
    }),
    new Token({
      id: 7,
      name: 'Phd in Ethnomusicology',
      categories: ['Music'],
      creatorName: 'MDW Wien',
      creationDate: new Date(),
      receivedDate: new Date(),
      description: 'Phd in Ethnomusicology.',
      frame: 'certificate',
      icon: 'music',
    }),
    new Token({
      id: 7,
      name: 'Winner of Jodelfest',
      categories: ['Music'],
      creatorName: 'Zuger Jodelverein',
      creationDate: new Date(),
      receivedDate: new Date(),
      description: 'Winner of Jodelfest 2020.',
      frame: 'effort',
      icon: 'music',
    }),
    new Token({
      id: 8,
      name: 'Winner of Jodelfest',
      categories: ['Music'],
      creatorName: 'Zuger Jodelverein',
      creationDate: new Date(),
      receivedDate: new Date(),
      description: 'Winner of Jodelfest 2021.',
      frame: 'effort',
      icon: 'music',
    }),
  ];

  tokenTypes: TokenType[] = [
    new TokenType({ id: 0, name: 'plain', transferable: false, nrTokens: 0 }),
    new TokenType({ id: 1, name: 'effort', transferable: true, nrTokens: 0 }),
    new TokenType({ id: 2, name: 'achievement', transferable: false, nrTokens: 0 }),
    new TokenType({ id: 3, name: 'certificate', transferable: false, nrTokens: 0 }),
  ];
  tokenCategories: TokenCategory[] = [
    new TokenCategory({ id: 0, name: 'Music', nrTokens: 0, frame: 'achievement', icon: 'music' }),
    new TokenCategory({
      id: 1,
      name: 'Arts',
      nrTokens: 0,
      frame: 'certificate',
      icon: 'painting',
    }),
    new TokenCategory({
      id: 2,
      name: 'Philosophy',
      nrTokens: 0,
      frame: 'effort',
      icon: 'society',
    }),
    new TokenCategory({ id: 3, name: 'Economy', nrTokens: 0, frame: 'plain', icon: 'growth' }),
  ];

  public async getTokenTypes(): Promise<TokenType[]> {
    const tokenTypes = this.tokenTypes.map((tt) => new TokenType({ ...tt }));
    tokenTypes.forEach((tt) => {
      tt.nrTokens = this.tokens.filter((tk) => tk.frame === tt.name).length;
    });
    return Promise.resolve(tokenTypes);
  }

  public async getTokens(): Promise<Token[]> {
    // Create some fake tokens
    return Promise.resolve(this.tokens.map((tk) => new Token({ ...tk })));
  }

  public async updateToken(token: Token): Promise<void> {
    console.log('hello');
    const existingToken = this.tokens.find((tk) => tk.id === token.id);
    if (existingToken) {
      existingToken.categories = [...token.categories];
    }
  }

  public async getTokensByCategoryName(tokenCategoryName: string): Promise<Token[]> {
    return Promise.resolve(
      this.tokens
        .filter((tk) => tk.categories.includes(tokenCategoryName))
        .map((tk) => new Token({ ...tk })),
    );
  }

  public async getTokenCategories(): Promise<TokenCategory[]> {
    const tokenCategories = this.tokenCategories.map((tkc) => new TokenCategory({ ...tkc }));
    tokenCategories.forEach((tkc) => {
      tkc.nrTokens = this.tokens.filter((tk) => tk.categories.includes(tkc.name)).length;
    });
    return Promise.resolve(tokenCategories);
  }

  public async getTokenCategoryBySlug(slug: string): Promise<TokenCategory | undefined> {
    const tokenCategory = new TokenCategory({
      ...this.tokenCategories.find((tk) => tk.name.toLowerCase() === slug),
    });
    tokenCategory.nrTokens = this.tokens.filter((tk) =>
      tk.categories.includes(tokenCategory.name),
    ).length;
    return Promise.resolve(tokenCategory);
  }

  public async getTokenTypeBySlug(slug: string): Promise<TokenType | undefined> {
    const tokenType = this.tokenTypes.find((tt) => tt.name.toLowerCase() === slug);
    return Promise.resolve(tokenType ? new TokenType({ ...tokenType }) : undefined);
  }

  public async getTokensByType(tokenTypeName: string): Promise<Token[]> {
    return Promise.resolve(
      this.tokens
        .filter((tk) => tk.frame.includes(tokenTypeName))
        .map((tk) => new Token({ ...tk })),
    );
  }
}

export const tokenService = new TokenService();
