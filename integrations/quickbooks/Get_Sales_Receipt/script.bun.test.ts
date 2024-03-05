import { expect, test } from 'bun:test';
import { main } from './script.bun.ts';
import { resource } from '../resource.ts';
import QuickBooks from 'node-quickbooks';

test('Get Sales Receipt', async () => {
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

  const getSalesReceiptsResponse = (await new Promise((resolve, reject) => {
    qbo.findSalesReceipts('', function (err: any, result: any) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  })) as any;
  expect(getSalesReceiptsResponse.QueryResponse.SalesReceipt).toBeDefined();

  const salesReceiptId = getSalesReceiptsResponse.QueryResponse.SalesReceipt[0].Id;
  const response = (await main(resource, salesReceiptId)) as any;
  expect(response).toBeDefined();
  expect(response.Id).toBe(salesReceiptId);
});
