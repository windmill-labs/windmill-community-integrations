import { expect, test } from 'bun:test';
import { main } from './script.bun.ts';
import { resource } from '../resource.ts';
import QuickBooks from 'node-quickbooks';

test('Sparse Update Invoice', async () => {
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
  const response = (await main(resource, {
    SyncToken: '0',
    Id: invoiceId,
    sparse: true,
    DueDate: '2015-09-30',
  })) as any;
  expect(response).toBeDefined();
  expect(response.DueDate).toBe('2015-09-30');
  expect(response.Id).toBe(invoiceId);
});
