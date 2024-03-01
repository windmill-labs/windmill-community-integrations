import { expect, test } from 'bun:test';
import { main } from './script.bun.ts';
import { resource } from '../resource.ts';

test('Get Bill', async () => {
  const response = (await main(resource, '1')) as any;
  expect(response).toBeDefined();
  expect(response.Id).toBe('1');
});
