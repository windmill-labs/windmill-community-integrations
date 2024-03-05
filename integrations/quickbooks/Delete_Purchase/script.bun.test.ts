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

  // Create a purchase
  const createResponse = (await new Promise((resolve, reject) => {
    qbo.createPurchase(
      {
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
      },
      function (err: any, result: any) {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }
    );
  })) as any;
  expect(createResponse).toBeDefined();
  expect(createResponse.Id).toBeDefined();

  // Get the purchase id
  const purchaseId = createResponse.Id;

  // Delete the purchase
  const response = await main(resource, { Id: purchaseId, SyncToken: '2' });
  expect(response).toBeDefined();

  // Check that the purchase was deleted
  try {
    (await new Promise((resolve, reject) => {
      qbo.getPurchase(purchaseId, function (err: any, result: any) {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    })) as any;
  } catch (err) {
    expect(err).toBeDefined();
  }
});
