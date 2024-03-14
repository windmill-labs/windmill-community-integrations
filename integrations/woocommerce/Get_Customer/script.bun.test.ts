import { expect, test } from 'bun:test';
import { main } from './script.bun.ts';
import { resource } from '../resource.ts';

test('Get Customer', async () => {
  const customerId = 248019463;
  
  const mockResponse = {
    "id": customerId,
    "date_created": "2024-03-14T23:41:25",
    "date_created_gmt": "2024-03-14T18:11:25",
    "date_modified": "2024-03-14T23:41:25",
    "date_modified_gmt": "2024-03-14T18:11:25",
    "email": "sdmzmear8z@mockemail.com",
    "first_name": "John",
    "last_name": "Doe",
    "role": "customer",
    "username": "heifmcs6d88",
    "billing": {
      "first_name": "John",
      "last_name": "Doe",
      "company": "",
      "address_1": "969 Market",
      "address_2": "",
      "city": "San Francisco",
      "state": "CA",
      "postcode": "94103",
      "country": "US",
      "email": "john.doe@example.com",
      "phone": "(555) 555-5555"
    },
    "shipping": {
      "first_name": "John",
      "last_name": "Doe",
      "company": "",
      "address_1": "969 Market",
      "address_2": "",
      "city": "San Francisco",
      "state": "CA",
      "postcode": "94103",
      "country": "US"
    },
    "is_paying_customer": false,
    "avatar_url": "https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=96",
    "meta_data": [],
    "_links": {
      "self": [
        {
          "href": "https://example.com/wp-json/wc/v3/customers/25"
        }
      ],
      "collection": [
        {
          "href": "https://example.com/wp-json/wc/v3/customers"
        }
      ]
    }
  };

  const response = await main(resource, customerId);
  // console.log(response);

  // Assertions
  expect(response).toBeDefined();
  expect(response.email).toBe(mockResponse.email);
  expect(response.username).toBe(mockResponse.username);
  expect(response.billing.phone).toBe(mockResponse.billing.phone);
});
