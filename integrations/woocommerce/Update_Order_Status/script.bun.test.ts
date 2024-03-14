import { expect, test } from 'bun:test';
import { main } from './script.bun.ts';
import { resource } from '../resource.ts';

test('Update Order Status', async () => {
  const orderId = 121;
  const data = {
    status: "completed"
  };

  const mockResponse = {
    id: 121,
    parent_id: 0,
    status: "completed",
    currency: "USD",
    version: "8.7.0.11",
    prices_include_tax: false,
    date_created: "2024-03-14T22:05:43",
    date_modified: "2024-03-14T23:17:42",
    discount_total: "0.00",
    discount_tax: "0.00",
    shipping_total: "10.00",
    shipping_tax: "0.00",
    cart_tax: "0.00",
    total: "10.00",
    total_tax: "0.00",
    customer_id: 0,
    order_key: "wc_order_So7aFnHI6irDb",
    billing: {
      first_name: "John",
      last_name: "Doe",
      company: "",
      address_1: "969 Market",
      address_2: "",
      city: "San Francisco",
      state: "CA",
      postcode: "94103",
      country: "US",
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
      state: "CA",
      postcode: "94103",
      country: "US",
      phone: "",
    },
    payment_method: "bacs",
    payment_method_title: "Direct Bank Transfer",
    transaction_id: "",
    customer_ip_address: "",
    customer_user_agent: "",
    created_via: "rest-api",
    customer_note: "",
    date_completed: "2024-03-14T22:05:43",
    date_paid: "2024-03-14T22:05:43",
    cart_hash: "",
    number: "121",
    meta_data: [
      {
        id: 66,
        key: "_automatewoo_order_created",
        value: "1",
      }
    ],
    line_items: [
      {
        id: 64,
        name: "",
        product_id: 0,
        variation_id: 0,
        quantity: 2,
        tax_class: "",
        subtotal: "0.00",
        subtotal_tax: "0.00",
        total: "0.00",
        total_tax: "0.00",
        taxes: [],
        meta_data: [],
        sku: null,
        price: 0,
        image: [],
        parent_name: null,
        bundled_by: "",
        bundled_item_title: "",
        bundled_items: [],
      }, {
        id: 65,
        name: "",
        product_id: 0,
        variation_id: 0,
        quantity: 1,
        tax_class: "",
        subtotal: "0.00",
        subtotal_tax: "0.00",
        total: "0.00",
        total_tax: "0.00",
        taxes: [],
        meta_data: [],
        sku: null,
        price: 0,
        image: [],
        parent_name: null,
        bundled_by: "",
        bundled_item_title: "",
        bundled_items: [],
      }
    ],
    tax_lines: [],
    shipping_lines: [
      {
        id: 66,
        method_title: "Flat Rate",
        method_id: "flat_rate",
        instance_id: "",
        total: "10.00",
        total_tax: "0.00",
        taxes: [],
        meta_data: [],
      }
    ],
    fee_lines: [],
    coupon_lines: [],
    refunds: [],
    payment_url: "https://woo-deliciously-very-coffee.wpcomstaging.com/checkout/order-pay/121/?pay_for_order=true&key=wc_order_So7aFnHI6irDb",
    is_editable: false,
    needs_payment: false,
    needs_processing: false,
    date_created_gmt: "2024-03-14T16:35:43",
    date_modified_gmt: "2024-03-14T17:47:42",
    date_completed_gmt: "2024-03-14T16:35:43",
    date_paid_gmt: "2024-03-14T16:35:43",
    gift_cards: [],
    currency_symbol: "$",
    _links: {
      self: [
        []
      ],
      collection: [
        []
      ],
    },
  };

  const response = await main(resource, orderId, data);
  // console.log(response);
  // Assertions
  expect(response).toBeDefined();
  expect(response.order_key).toBe(mockResponse.order_key);
  expect(response.number).toBe(mockResponse.number);
  expect(response.status).toBe(mockResponse.status);
});
