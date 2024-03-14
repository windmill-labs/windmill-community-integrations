import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

type WooCommerce = {
  url: string;
  consumerKey: string;
  consumerSecret: string;
  version: string;
  queryStringAuth?: boolean;
};

export async function main(resource: WooCommerce) {
  const WooCommerce = new WooCommerceRestApi({
    url: resource.url,
    consumerKey: resource.consumerKey,
    consumerSecret: resource.consumerSecret,
    version: resource.version,
    queryStringAuth: resource.queryStringAuth,
  });

  try {
    const response = await WooCommerce.get('customers');
    return response.data;
  } catch (error) {
    return {
      error: true,
      message: error.response.data || 'Internal Server Error',
    }
  }
}
