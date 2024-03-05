import { expect, test } from 'bun:test';
import { main } from './script.bun.ts';
import { resource } from '../resource.ts';
import QuickBooks from 'node-quickbooks';

test('Delete Purchase', async () => {
  // Initialize the client
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

  // Fetch all purchases
  const purchasesResponse = (await new Promise((resolve, reject) => {
    qbo.findPurchases('', function (err: any, result: any) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  })) as any;
  expect(purchasesResponse.QueryResponse.Purchase).toBeDefined();

  // Get the ID of the first one
  const purchase = purchasesResponse.QueryResponse.Purchase[0];

  // Delete the purchase
  const response = await main(resource, { Id: purchase.Id, SyncToken: '2' });
  expect(response).toBeDefined();

  // Check that the purchase was deleted
  const getPurchaseResponse = (await new Promise((resolve, reject) => {
    qbo.getPurchase(purchase.Id, function (err: any, result: any) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  })) as any;
  console.log(getPurchaseResponse);
  expect(getPurchaseResponse).toBeDefined();
  expect(getPurchaseResponse.Fault).toBeDefined();
});
