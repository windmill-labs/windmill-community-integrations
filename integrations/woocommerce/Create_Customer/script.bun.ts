import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

type WooCommerce = {
  url: string;
  consumerKey: string;
  consumerSecret: string;
  version: string;
  queryStringAuth?: boolean;
};

type BillingAddress = {
  first_name: string;
  last_name: string;
  company: string;
  address_1: string;
  address_2: string;
  city: string;
  state: string;
  postcode: string;
  country: string;
  email: string;
  phone: string;
};

type ShippingAddress = {
  first_name: string;
  last_name: string;
  company: string;
  address_1: string;
  address_2: string;
  city: string;
  state: string;
  postcode: string;
  country: string;
};

type CustomerData = {
  email: string;
  first_name: string;
  last_name: string;
  username: string;
  billing: BillingAddress;
  shipping: ShippingAddress;
};

export async function main(resource: WooCommerce, customer: CustomerData) {
  const WooCommerce = new WooCommerceRestApi({
    url: resource.url,
    consumerKey: resource.consumerKey,
    consumerSecret: resource.consumerSecret,
    version: resource.version,
    queryStringAuth: resource.queryStringAuth,
  });

  try {
    const response = await WooCommerce.post('customers', customer);
    return response.data;
  } catch (error) {
    return {
      error: true,
      message: error.response.data || 'Internal Server Error',
    }
  }
}
