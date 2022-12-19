/**
 * file: jest.config.ts
 * date: 12/19/2022
 * description: file responsible for the jest configuration
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export default {
  moduleFileExtensions: [
    'js',
    'json',
    'ts'
  ],
  rootDir: 'src',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest'
  },
  collectCoverageFrom: [
    '**/*.(t|j)s'
  ],
  coverageDirectory: '../coverage',
  testEnvironment: 'node'
}
