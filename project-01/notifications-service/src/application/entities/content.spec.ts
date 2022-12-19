/**
 * file: src/application/entities/content.spec.ts
 * date: 12/19/2022
 * description: file responsible for the tests of the 'Content' entity
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Content } from "./content";

describe('Notitication Content', () => {

  it('should be able to create a content notification', () => {
    const content = new Content('You received a new friendship notification');

    expect(content).toBeTruthy();
  });

  it('should not be able to create a content notification with less than 5 characters', () => {
    expect(() => new Content('aaa')).toThrow();
  });

  it('should not be able to create a content notification with more than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
