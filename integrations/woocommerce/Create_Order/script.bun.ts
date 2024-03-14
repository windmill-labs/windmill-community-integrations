import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

type WooCommerce = {
  url: string;
  consumerKey: string;
  consumerSecret: string;
  version: string;
  queryStringAuth?: boolean;
};

type OrderData = {
  payment_method: string;
  payment_method_title: string;
  set_paid: boolean;
  billing: BillingAddress;
  shipping: ShippingAddress;
  line_items: LineItem[];
  shipping_lines: ShippingLine[];
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

type LineItem = {
  product_id: number;
  quantity: number;
  variation_id?: number;
};

type ShippingLine = {
  method_id: string;
  method_title: string;
  total: string;
};

export async function main(resource: WooCommerce, order: OrderData) {
  const WooCommerce = new WooCommerceRestApi({
    url: resource.url,
    consumerKey: resource.consumerKey,
    consumerSecret: resource.consumerSecret,
    version: resource.version,
    queryStringAuth: resource.queryStringAuth,
  });

  try {
    const response = await WooCommerce.post('orders', order);
    return response.data;
  } catch (error) {
    return {
      error: true,
      message: error.response.data || 'Internal Server Error',
    };
  }
}
