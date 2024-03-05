import { expect, test } from 'bun:test';
import { main } from './script.bun.ts';
import { resource } from '../resource.ts';
import QuickBooks from 'node-quickbooks';

test('Update Customer', async () => {
  // Initialize client
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

  // Generate a random name since QuickBooks does not allow duplicate names,
  // nor do they allow deleting customers using the API
  const name = Math.random().toString(36).slice(2);
  const email = `${Math.random().toString(36).slice(2)}@myemail.com`;

  // Create a customer
  const createResponse = (await new Promise((resolve, reject) => {
    qbo.createCustomer(
      {
        FullyQualifiedName: name,
        PrimaryEmailAddr: {
          Address: email,
        },
        DisplayName: name,
        Suffix: 'Jr',
        Title: 'Mr',
        MiddleName: 'B',
        Notes: 'Here are other details.',
        FamilyName: 'Dummy',
        PrimaryPhone: {
          FreeFormNumber: '(555) 555-5555',
        },
        CompanyName: name,
        BillAddr: {
          CountrySubDivisionCode: 'CA',
          City: 'Mountain View',
          PostalCode: '94042',
          Line1: '123 Main Street',
          Country: 'USA',
        },
        GivenName: 'James',
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

  // Get the customer id
  const customerId = createResponse.Id;

  // Update the customer
  const response = (await main(resource, {
    MiddleName: 'Mark',
    SyncToken: '0',
    Id: customerId,
    sparse: true,
  })) as any;
  expect(response).toBeDefined();
  expect(response).toHaveProperty('Id');
  expect(response).toHaveProperty('MiddleName');
  expect(response.MiddleName).toBe('Mark');

  // Check that the customer was updated
  const updatedCustomer = (await new Promise((resolve, reject) => {
    qbo.getCustomer(customerId, function (err: any, result: any) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  })) as any;
  expect(updatedCustomer).toBeDefined();
  expect(updatedCustomer).toHaveProperty('Id');
  expect(updatedCustomer).toHaveProperty('MiddleName');
  expect(updatedCustomer.MiddleName).toBe('Mark');
});
