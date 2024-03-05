import { expect, test } from 'bun:test';
import { main } from './script.bun.ts';
import { resource } from '../resource.ts';
import QuickBooks from 'node-quickbooks';

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

  const qbo = new QuickBooks(
    resource.clientId,
    resource.clientSecret,
    resource.authToken,
    false,
    resource.realmId,
    resource.isSandBox,
    true,
    null,
    '2.0',
    resource.refreshToken
  );

  const salesReceiptResponse = (await new Promise((resolve, reject) => {
    qbo.getSalesReceipt(response.Id, function (err: any, result: any) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  })) as any;

  expect(salesReceiptResponse).toBeDefined();
  expect(salesReceiptResponse.Id).toBe(response.Id);
  expect(salesReceiptResponse.TotalAmt).toBe(35);
  expect(salesReceiptResponse.Line[0].Amount).toBe(35);
  expect(salesReceiptResponse.Line[0].Description).toBe('Pest Control Services');
});
