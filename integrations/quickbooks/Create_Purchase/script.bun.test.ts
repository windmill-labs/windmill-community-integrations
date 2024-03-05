import { expect, test } from 'bun:test';
import { main } from './script.bun.ts';
import { resource } from '../resource.ts';
import QuickBooks from 'node-quickbooks';

test('Create Purchase', async () => {
  console.log('TEST: Running main function');
  const response = (await main(resource, {
    PaymentType: 'CreditCard',
    AccountRef: {
      value: '42',
    },
    Line: [
      {
        DetailType: 'AccountBasedExpenseLineDetail',
        Amount: 10.0,
        AccountBasedExpenseLineDetail: {
          AccountRef: {
            value: '13',
          },
        },
      },
    ],
  })) as any;

  expect(response).toBeDefined();
  expect(response.Id).toBeDefined();
  expect(response.TotalAmt).toBe(10);
  expect(response.PaymentType).toBe('CreditCard');
  expect(response.AccountRef.value).toBe('42');

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

  const purchaseResponse = (await new Promise((resolve, reject) => {
    qbo.getPurchase(response.Id, function (err: any, result: any) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  })) as any;

  expect(purchaseResponse).toBeDefined();
  expect(purchaseResponse.Id).toBe(response.Id);
  expect(purchaseResponse.TotalAmt).toBe(10);
  expect(purchaseResponse.PaymentType).toBe('CreditCard');
  expect(purchaseResponse.AccountRef.value).toBe('42');
});
