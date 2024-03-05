import { expect, test } from 'bun:test';
import { main } from './script.bun.ts';
import { resource } from '../resource.ts';
import QuickBooks from 'node-quickbooks';

test('Get Purchase Order', async () => {
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

  const getPurchaseOrdersResponse = (await new Promise((resolve, reject) => {
    qbo.findPurchaseOrders('', function (err: any, result: any) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  })) as any;
  expect(getPurchaseOrdersResponse.QueryResponse.PurchaseOrder).toBeDefined();

  const purchaseOrderId = getPurchaseOrdersResponse.QueryResponse.PurchaseOrder[0].Id;
  const response = (await main(resource, purchaseOrderId)) as any;
  expect(response).toBeDefined();
  expect(response.Id).toBe(purchaseOrderId);
});
