import { expect, test } from 'bun:test';
import { main } from './script.bun.ts';
import { resource } from '../resource.ts';

test('Search Customers', async () => {
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
      },
    }, {
      id: 248019455,
      date_created: "2024-03-14T21:39:55",
      date_created_gmt: "2024-03-14T16:09:55",
      date_modified: "2024-03-14T21:39:55",
      date_modified_gmt: "2024-03-14T16:09:55",
      email: "8y2qnucc6kb@mockemail.com",
      first_name: "John",
      last_name: "Doe",
      role: "customer",
      username: "1nh9qhozw2m",
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
      avatar_url: "https://secure.gravatar.com/avatar/b1332697330942010c3a7c8d0a1cb61a?s=96&d=identicon&r=g",
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
      },
    }, {
      id: 248019460,
      date_created: "2024-03-14T21:54:56",
      date_created_gmt: "2024-03-14T16:24:56",
      date_modified: "2024-03-14T21:54:56",
      date_modified_gmt: "2024-03-14T16:24:56",
      email: "b06ugo3um3g@mockemail.com",
      first_name: "John",
      last_name: "Doe",
      role: "customer",
      username: "1yy5tjwwa4u",
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
      avatar_url: "https://secure.gravatar.com/avatar/60be47f7995633013025cea7b287de7b?s=96&d=identicon&r=g",
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

  expect(response[0].id).toBe(mockResponse[0].id);
  expect(response[0].email).toBe(mockResponse[0].email);

  expect(response[0].id).toBe(mockResponse[0].id);
  expect(response[0].email).toBe(mockResponse[0].email);
});
