import { expect, test } from 'bun:test';
import { main } from './script.bun.ts';
import { resource } from '../resource.ts';
import QuickBooks from 'node-quickbooks';

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

  const invoiceResponse = (await new Promise((resolve, reject) => {
    qbo.getInvoice(response.Id, function (err: any, result: any) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  })) as any;

  expect(invoiceResponse).toBeDefined();
  expect(invoiceResponse.Id).toBe(response.Id);
  expect(invoiceResponse.TotalAmt).toBe(100);
  expect(invoiceResponse.CustomerRef.value).toBe('1');
});
