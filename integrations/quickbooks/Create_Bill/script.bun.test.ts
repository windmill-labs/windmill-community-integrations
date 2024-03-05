import { expect, test } from 'bun:test';
import { main } from './script.bun.ts';
import { resource } from '../resource.ts';
import QuickBooks from 'node-quickbooks';

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

  var qbo = new QuickBooks(
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

  const billResponse = (await new Promise((resolve, reject) => {
    qbo.getBill(response.Id, function (err: any, result: any) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  })) as any;

  expect(billResponse).toBeDefined();
  expect(billResponse.Id).toBe(response.Id);
  expect(billResponse.TotalAmt).toBe(200);
  expect(billResponse.VendorRef.value).toBe('56');
});
