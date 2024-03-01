import { expect, test } from 'bun:test';
import { main } from './script.bun.ts';
import { resource } from '../resource.ts';

test('Search Customers', async () => {
  console.log('TEST: Running main function');
  const response = await main(resource, '');
  expect(response).toBeDefined();
});
