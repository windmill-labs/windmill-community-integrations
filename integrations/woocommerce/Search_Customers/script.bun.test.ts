import { expect, test } from 'bun:test';
import { main } from './script.bun.ts';
import { main as Create_Customer } from '../Create_Customer/script.bun.ts';
import { resource } from '../resource.ts';

test('Search Customers', async () => {

  // Create a customer first
  // Generate a random username and email since WooCommerce does not allow duplicate names
  // and emails. (Results in 'registration-error-email-exists' 400 Error)
  const username = Math.random().toString(36).slice(2);
  const email = `${Math.random().toString(36).slice(2)}@mockemail.com`;

  const customer = await Create_Customer(resource, {
    email: email,
    first_name: 'John',
    last_name: 'Doe',
    username: username,
    billing: {
      first_name: 'John',
      last_name: 'Doe',
      company: '',
      address_1: '969 Market',
      address_2: '',
      city: 'San Francisco',
      state: 'CA',
      postcode: '94103',
      country: 'US',
      email: 'john.doe@mockexample.com',
      phone: '(555) 555-5555'
    },
    shipping: {
      first_name: 'John',
      last_name: 'Doe',
      company: '',
      address_1: '969 Market',
      address_2: '',
      city: 'San Francisco',
      state: 'CA',
      postcode: '94103',
      country: 'US'
    }
  });
  
  const mockResponse = [
    {
      id: 248019458,
      date_created: "2024-03-14T21:42:39",
      date_created_gmt: "2024-03-14T16:12:39",
      date_modified: "2024-03-14T21:42:39",
      date_modified_gmt: "2024-03-14T16:12:39",
      email: "txwqjel5jy@mockemail.com",
      first_name: "John",
      last_name: "Doe",
      role: "customer",
      username: "0z0z8n6cor1",
      billing: {
        first_name: "John",
        last_name: "Doe",
        company: "",
        address_1: "969 Market",
        address_2: "",
        city: "San Francisco",
        postcode: "94103",
        country: "US",
        state: "CA",
        email: "john.doe@mockexample.com",
        phone: "(555) 555-5555",
      },
      shipping: {
        first_name: "John",
        last_name: "Doe",
        company: "",
        address_1: "969 Market",
        address_2: "",
        city: "San Francisco",
        postcode: "94103",
        country: "US",
        state: "CA",
        phone: "",
      },
      is_paying_customer: false,
      avatar_url: "https://secure.gravatar.com/avatar/04eb9c1df24f02a70c8856d5e5373c66?s=96&d=identicon&r=g",
      "meta_data": [],
      "_links": {
        "self": [
          {
            "href": "https://example.com/wp-json/wc/v3/customers/26"
          }
        ],
        "collection": [
          {
            "href": "https://example.com/wp-json/wc/v3/customers"
          }
        ]
      }
    }
  ];

  const response = await main(resource);
  // console.log(response);
  // Assertions
  expect(response).toBeDefined();

  expect(response[0].first_name).toBe(mockResponse[0].first_name);
  expect(response[0].billing.phone).toBe(mockResponse[0].billing.phone);
  expect(response[0].shipping.first_name).toBe(mockResponse[0].shipping.first_name);
});
