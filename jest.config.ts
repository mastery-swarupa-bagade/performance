import type {Config} from '@jest/types'

export default async (): Promise<Config.InitialOptions> => {
  return {
    testEnvironment: 'node',
    testPathIgnorePatterns: ['node_modules'],
    testTimeout: 15000
  }
}
