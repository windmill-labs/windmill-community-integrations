import { expect, test } from 'bun:test';
import { main } from './script.bun.ts';
import { resource } from '../resource.ts';
import QuickBooks from 'node-quickbooks';

test('Get Bill', async () => {
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

  const getBillsResponse = (await new Promise((resolve, reject) => {
    qbo.findBills('', function (err: any, result: any) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  })) as any;
  expect(getBillsResponse.QueryResponse.Bill).toBeDefined();

  const billId = getBillsResponse.QueryResponse.Bill[0].Id;

  const response = (await main(resource, billId)) as any;
  expect(response).toBeDefined();
  expect(response.Id).toBe(billId);
});
