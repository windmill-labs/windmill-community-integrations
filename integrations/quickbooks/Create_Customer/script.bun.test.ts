import { expect, test } from 'bun:test';
import { main } from './script.bun.ts';
import { resource } from '../resource.ts';
import QuickBooks from 'node-quickbooks';

test('Create Customer', async () => {
  console.log('TEST: Running main function');
  const response = (await main(resource, {
    FullyQualifiedName: 'King Groceries',
    PrimaryEmailAddr: {
      Address: 'jdrew@myemail.com',
    },
    DisplayName: "King's Groceries",
    Suffix: 'Jr',
    Title: 'Mr',
    MiddleName: 'B',
    Notes: 'Here are other details.',
    FamilyName: 'King',
    PrimaryPhone: {
      FreeFormNumber: '(555) 555-5555',
    },
    CompanyName: 'King Groceries',
    BillAddr: {
      CountrySubDivisionCode: 'CA',
      City: 'Mountain View',
      PostalCode: '94042',
      Line1: '123 Main Street',
      Country: 'USA',
    },
    GivenName: 'James',
  })) as any;

  expect(response).toBeDefined();
  expect(response.FullyQualifiedName).toBe("King's Groceries");
  expect(response.Id).toBeDefined();

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
    qbo.getCustomer(response.Id, function (err: any, result: any) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  })) as any;

  expect(customerResponse).toBeDefined();
  expect(customerResponse.FullyQualifiedName).toBe("King's Groceries");
  expect(customerResponse.Id).toBe(response.Id);
});
