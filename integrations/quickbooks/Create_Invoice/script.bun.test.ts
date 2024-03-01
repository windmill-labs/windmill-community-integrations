import { expect, test } from 'bun:test';
import { main } from './script.bun.ts';
import { resource } from '../resource.ts';

test('Create Invoice', async () => {
  console.log('TEST: Running main function');
  const response = (await main(resource, {
    Line: [
      {
        DetailType: 'SalesItemLineDetail',
        Amount: 100.0,
        SalesItemLineDetail: {
          ItemRef: {
            name: 'Services',
            value: '1',
          },
        },
      },
    ],
    CustomerRef: {
      value: '1',
    },
  })) as any;

  expect(response).toBeDefined();
  expect(response.Id).toBeDefined();
  expect(response.TotalAmt).toBe(100);
});
