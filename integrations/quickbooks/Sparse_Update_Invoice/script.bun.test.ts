import { expect, test } from 'bun:test';
import { main } from './script.bun.ts';
import { resource } from '../resource.ts';
import QuickBooks from 'node-quickbooks';

test('Sparse Update Invoice', async () => {
  // Initialize client
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

  // Create an invoice
  const createResponse = (await new Promise((resolve, reject) => {
    qbo.createInvoice(
      {
        Line: [
          {
            DetailType: 'SalesItemLineDetail',
            Amount: 100.0,
            SalesItemLineDetail: {
              ItemRef: {
                name: 'Services',
                value: '1',
              },
            },
          },
        ],
        CustomerRef: {
          value: '1',
        },
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

  // Get the invoice id
  const invoiceId = createResponse.Id;

  // Update the invoice
  const response = (await main(resource, {
    SyncToken: '0',
    Id: invoiceId,
    sparse: true,
    DueDate: '2015-09-30',
  })) as any;
  expect(response).toBeDefined();
  expect(response.DueDate).toBe('2015-09-30');
  expect(response.Id).toBe(invoiceId);

  // Check that the invoice was updated
  const updatedInvoice = (await new Promise((resolve, reject) => {
    qbo.getInvoice(invoiceId, function (err: any, result: any) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  })) as any;
  expect(updatedInvoice).toBeDefined();
  expect(updatedInvoice.DueDate).toBe('2015-09-30');
  expect(updatedInvoice.Id).toBe(invoiceId);

  // Delete the invoice
  await new Promise((resolve, reject) => {
    qbo.deleteInvoice(invoiceId, function (err: any, result: any) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
});
