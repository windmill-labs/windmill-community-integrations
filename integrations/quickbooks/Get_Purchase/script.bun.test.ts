import { expect, test } from 'bun:test';
import { main } from './script.bun.ts';
import { resource } from '../resource.ts';
import QuickBooks from 'node-quickbooks';

test('Get Purchase', async () => {
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

  const getPurchasesResponse = (await new Promise((resolve, reject) => {
    qbo.findPurchases('', function (err: any, result: any) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  })) as any;
  expect(getPurchasesResponse.QueryResponse.Purchase).toBeDefined();

  const purchaseId = getPurchasesResponse.QueryResponse.Purchase[0].Id;
  const response = (await main(resource, purchaseId)) as any;
  expect(response).toBeDefined();
  expect(response.Id).toBe(purchaseId);
});
