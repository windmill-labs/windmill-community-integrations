import { expect, test } from 'bun:test';
import { main } from './script.bun.ts';
import { resource } from '../resource.ts';

test('Create Sales Receipt', async () => {
  console.log('TEST: Running main function');
  const response = (await main(resource, {
    Line: [
      {
        Description: 'Pest Control Services',
        DetailType: 'SalesItemLineDetail',
        SalesItemLineDetail: {
          TaxCodeRef: {
            value: 'NON',
          },
          Qty: 1,
          UnitPrice: 35,
          ItemRef: {
            name: 'Pest Control',
            value: '10',
          },
        },
        LineNum: 1,
        Amount: 35.0,
        Id: '1',
      },
    ],
  })) as any;

  expect(response).toBeDefined();
  expect(response.Id).toBeDefined();
  expect(response.TotalAmt).toBe(35);
});
