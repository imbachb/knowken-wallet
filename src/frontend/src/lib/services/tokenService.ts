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
    new TokenType({ id: 1, name: 'effort', transferable: true, nrTokens: 8 }),
    new TokenType({ id: 2, name: 'achievement', transferable: false, nrTokens: 1 }),
    new TokenType({ id: 3, name: 'certificate', transferable: false, nrTokens: 1 }),
  ];
  tokenCategories: TokenCategory[] = [
    new TokenCategory({ id: 0, name: 'Music', nrTokens: 3, frame: 'achievement', icon: 'music' }),
    new TokenCategory({
      id: 1,
      name: 'Arts',
      nrTokens: 5,
      frame: 'certificate',
      icon: 'painting',
    }),
    new TokenCategory({
      id: 2,
      name: 'Philosophy',
      nrTokens: 4,
      frame: 'effort',
      icon: 'society',
    }),
    new TokenCategory({ id: 3, name: 'Economy', nrTokens: 3, frame: 'plain', icon: 'growth' }),
  ];

  public async getTokenTypes(): Promise<TokenType[]> {
    return Promise.resolve(this.tokenTypes);
  }

  public async getTokens(): Promise<Token[]> {
    // Create some fake tokens
    return Promise.resolve(this.tokens);
  }

  public async getTokensByCategoryName(tokenCategoryName: string): Promise<Token[]> {
    return Promise.resolve(this.tokens.filter((tk) => tk.categories.includes(tokenCategoryName)));
  }

  public async getTokenCategories(): Promise<TokenCategory[]> {
    return Promise.resolve(this.tokenCategories);
  }

  public async getTokenCategoryBySlug(slug: string): Promise<TokenCategory | undefined> {
    return Promise.resolve(this.tokenCategories.find((tk) => tk.name.toLowerCase() === slug));
  }

  public async getTokenTypeBySlug(slug: string): Promise<TokenType | undefined> {
    return Promise.resolve(this.tokenTypes.find((tt) => tt.name.toLowerCase() === slug));
  }

  public async getTokensByType(tokenTypeName: string): Promise<Token[]> {
    return Promise.resolve(this.tokens.filter((tk) => tk.frame.includes(tokenTypeName)));
  }
}

export const tokenService = new TokenService();
