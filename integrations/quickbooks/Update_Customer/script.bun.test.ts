import { expect, test } from 'bun:test';
import { main } from './script.bun.ts';
import { resource } from '../resource.ts';
import QuickBooks from 'node-quickbooks';

test('Update Customer', async () => {
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

  const customerResponse = (await new Promise((resolve, reject) => {
    qbo.findCustomers('', function (err: any, result: any) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  })) as any;

  expect(customerResponse.QueryResponse.Customer.length).toBeGreaterThan(0);

  const customerId = customerResponse.QueryResponse.Customer[0].Id;

  const response = (await main(resource, {
    MiddleName: 'Mark',
    SyncToken: '0',
    Id: customerId,
    sparse: true,
  })) as any;

  console.log(response);

  expect(response).toBeDefined();
  expect(response).toHaveProperty('Id');
  expect(response).toHaveProperty('MiddleName');
  expect(response.MiddleName).toBe('Mark');
});
