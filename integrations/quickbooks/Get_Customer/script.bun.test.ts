import { expect, test } from 'bun:test';
import { main } from './script.bun.ts';
import { resource } from '../resource.ts';

test('Get Customer', async () => {
  console.log('TEST: Running main function');
  const response = (await main(resource, '1')) as any;

  expect(response).toBeDefined();
  expect(response.Id).toBe('1');
});
