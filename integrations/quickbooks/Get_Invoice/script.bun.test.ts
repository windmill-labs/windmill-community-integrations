import { expect, test } from 'bun:test';
import { main } from './script.bun.ts';
import { resource } from '../resource.ts';
import QuickBooks from 'node-quickbooks';

test('Get Invoice', async () => {
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

  const getInvoicesResponse = (await new Promise((resolve, reject) => {
    qbo.findInvoices('', function (err: any, result: any) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  })) as any;
  expect(getInvoicesResponse.QueryResponse.Invoice).toBeDefined();

  const invoiceId = getInvoicesResponse.QueryResponse.Invoice[0].Id;

  const response = (await main(resource, invoiceId)) as any;
  expect(response).toBeDefined();
  expect(response.Id).toBe(invoiceId);
});
