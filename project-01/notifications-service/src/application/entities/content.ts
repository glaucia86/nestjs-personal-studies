/**
 * file: src/application/entities/content.ts
 * date: 12/16/2022
 * description: file responsible for validate the 'Content' class
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export class Content {
  private readonly content: string;

  get value(): string {
    return this.content;
  }

  private validateContentLength(content: string): boolean {
    return content.length >= 5 && content.length <= 240;
  }

  constructor(content: string) {
    const isContentLengthValid = this.validateContentLength(content);

    if (!isContentLengthValid) {
      throw new Error('The content must be between 5 and 240 characters.');
    }

    this.content = content;
  }

}
