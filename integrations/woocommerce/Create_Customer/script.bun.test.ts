import { expect, test } from 'bun:test';
import { main } from './script.bun.ts';
import { resource } from '../resource.ts';

test('Create Customer', async () => {
  // Generate a random username and email since WooCommerce does not allow duplicate names
  // and emails. (Results in 'registration-error-email-exists' 400 Error)
  const username = Math.random().toString(36).slice(2);
  const email = `${Math.random().toString(36).slice(2)}@mockemail.com`;
  
  const customerData = {
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
  };

  const mockResponse = {
    id: 25,
    date_created: '2024-03-14T23:41:25',
    date_created_gmt: '2024-03-14T18:11:25',
    date_modified: '2024-03-14T23:41:25',
    date_modified_gmt: '2024-03-14T18:11:25',
    email: email,
    first_name: 'John',
    last_name: 'Doe',
    role: 'customer',
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
    },
    is_paying_customer: false,
    avatar_url: 'https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=96',
    meta_data: [],
    _links: {
      self: [
        {
          href: 'https://example.com/wp-json/wc/v3/customers/25'
        }
      ],
      collection: [
        {
          href: 'https://example.com/wp-json/wc/v3/customers'
        }
      ]
    }
  };

  const response = await main(resource, customerData);
  // console.log(response);

  // Assertions
  expect(response).toBeDefined();
  expect(response.email).toBe(mockResponse.email);
  expect(response.username).toBe(mockResponse.username);
  expect(response.billing.phone).toBe(mockResponse.billing.phone);
});
