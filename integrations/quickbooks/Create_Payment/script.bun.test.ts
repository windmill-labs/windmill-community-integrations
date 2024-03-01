import { expect, test } from 'bun:test';
import { main } from './script.bun.ts';
import { resource } from '../resource.ts';

test('Create Payment', async () => {
  console.log('TEST: Running main function');
  const response = (await main(resource, {
    TotalAmt: 25.0,
    CustomerRef: {
      value: '20',
    },
  })) as any;

  expect(response).toBeDefined();
  expect(response.Id).toBeDefined();
  expect(response.TotalAmt).toBe(25);
});
