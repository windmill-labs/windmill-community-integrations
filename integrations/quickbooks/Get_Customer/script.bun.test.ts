import { expect, test } from 'bun:test';
import { main } from './script.bun.ts';
import { resource } from '../resource.ts';
import QuickBooks from 'node-quickbooks';

test('Get Customer', async () => {
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

  const getCustomersResponse = (await new Promise((resolve, reject) => {
    qbo.findCustomers('', function (err: any, result: any) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  })) as any;
  expect(getCustomersResponse.QueryResponse.Customer).toBeDefined();

  const customerId = getCustomersResponse.QueryResponse.Customer[0].Id;

  const response = (await main(resource, customerId)) as any;
  expect(response).toBeDefined();
  expect(response.Id).toBe(customerId);
});
