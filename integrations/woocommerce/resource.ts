export const resource = {
  url: Bun.env.API_URL!,
  consumerKey: Bun.env.WOOCOMMERCE_CK!,
  consumerSecret: Bun.env.WOOCOMMERCE_CS!,
  version: 'wc/v3',
  queryStringAuth: true,
}