import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

type WooCommerce = {
  url: string;
  consumerKey: string;
  consumerSecret: string;
  version?: string;
  queryStringAuth?: boolean;
};

export async function main(
  resource: WooCommerce,
  customer: {
    email: string;
    first_name: string;
    last_name: string;
    username: string;
    billing: {
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
    shipping: {
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
  }
) {
  const WooCommerce = new WooCommerceRestApi(resource);

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
