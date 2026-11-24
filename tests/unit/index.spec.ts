import { SERVICE_NAME } from '../../src/index';

describe('internal-backend-test', () => {
  it('should export SERVICE_NAME', () => {
    expect(SERVICE_NAME).toBe('internal-backend-test');
  });
});