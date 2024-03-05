import { expect, test } from 'bun:test';
import { main } from './script.bun.ts';
import { resource } from '../resource.ts';

test('Get My Company', async () => {
  const response = (await main(resource, resource.realmId)) as any;
  expect(response).toBeDefined();
  expect(response.Id).toBe('1');
});
