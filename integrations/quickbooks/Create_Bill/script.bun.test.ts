import { expect, test } from 'bun:test';
import { main } from './script.bun.ts';
import { resource } from '../resource.ts';

test('Create Bill', async () => {
  console.log('TEST: Running main function');
  const response = (await main(resource, {
    Line: [
      {
        DetailType: 'AccountBasedExpenseLineDetail',
        Amount: 200.0,
        Id: '1',
        AccountBasedExpenseLineDetail: {
          AccountRef: {
            value: '7',
          },
        },
      },
    ],
    VendorRef: {
      value: '56',
    },
  })) as any;

  expect(response).toBeDefined();
  expect(response.Id).toBeDefined();
  expect(response.TotalAmt).toBe(200);
});
