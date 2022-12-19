/**
 * file: src/application/helpers/Replace.ts
 * date: 12/19/2022
 * description: file responsible for the 'replace' function
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export type Replace<T, R> = Omit<T, keyof R> & R;


