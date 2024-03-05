import { expect, test } from 'bun:test';
import { main } from './script.bun.ts';
import { resource } from '../resource.ts';
import QuickBooks from 'node-quickbooks';

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

  const paymentResponse = (await new Promise((resolve, reject) => {
    qbo.getPayment(response.Id, function (err: any, result: any) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  })) as any;

  expect(paymentResponse).toBeDefined();
  expect(paymentResponse.Id).toBe(response.Id);
  expect(paymentResponse.TotalAmt).toBe(25);
  expect(paymentResponse.CustomerRef.value).toBe('20');
});
