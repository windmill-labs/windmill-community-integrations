# WooCommerce Integration

## Environment variables and credentials setup

To get started with the WooCommerce integration, you will need to set up the following environment variables:

- `API_URL`: Your WooCommerce store URL.
- `WOOCOMMERCE_CK`: The consumer key for WooCommerce API authentication.
- `WOOCOMMERCE_CK`: The consumer secret for WooCommerce API authentication.

The WooCommerce plugin requires consumer key and consumer secret credentials to authenticate with WooCommerce API. You can obtain these credentials by generating them in the WooCommerce dashboard. Navigate to WooCommerce > Settings > Advanced > REST API, and create a new API key. [Refer: https://woo.com/document/woocommerce-rest-api/#section-2]

Ensure that the version of the WooCommerce API is compatible with the plugin. The default version used is v3.

Check out the WooCommerce API endpoints and data that can be manipulated in http://woocommerce.github.io/woocommerce-rest-api-docs/.
 
