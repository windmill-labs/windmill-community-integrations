import { expect, test } from 'bun:test';
import { main } from './script.bun.ts';
import { resource } from '../resource.ts';

test('Create Product', async () => {
  const productData = {
    name: 'Premium Quality',
    type: 'simple',
    regular_price: '21.99',
    description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
    short_description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    categories: [{ id: 9 }, { id: 14 }],
    images: [
      {
        src:
          'http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/T_2_front.jpg',
      },
      {
        src:
          'http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/T_2_back.jpg',
      },
    ],
  };

  const mockResponse = {
    id: 187,
    name: "Premium Quality",
    slug: "premium-quality-31",
    permalink: "https://woo-deliciously-very-coffee.wpcomstaging.com/product/premium-quality-31/",
    date_created: "2024-03-14T23:34:49",
    date_created_gmt: "2024-03-14T18:04:49",
    date_modified: "2024-03-14T23:34:49",
    date_modified_gmt: "2024-03-14T18:04:49",
    type: "simple",
    status: "publish",
    featured: false,
    catalog_visibility: "visible",
    description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    short_description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    sku: "",
    price: "21.99",
    regular_price: "21.99",
    sale_price: "",
    date_on_sale_from: null,
    date_on_sale_from_gmt: null,
    date_on_sale_to: null,
    date_on_sale_to_gmt: null,
    on_sale: false,
    purchasable: true,
    total_sales: 0,
    virtual: false,
    downloadable: false,
    downloads: [],
    download_limit: -1,
    download_expiry: -1,
    external_url: "",
    button_text: "",
    tax_status: "taxable",
    tax_class: "",
    manage_stock: false,
    stock_quantity: null,
    backorders: "no",
    backorders_allowed: false,
    backordered: false,
    low_stock_amount: null,
    sold_individually: false,
    weight: "",
    dimensions: {
      length: "",
      width: "",
      height: "",
    },
    shipping_required: true,
    shipping_taxable: true,
    shipping_class: "",
    shipping_class_id: 0,
    reviews_allowed: true,
    average_rating: "0",
    rating_count: 0,
    upsell_ids: [],
    cross_sell_ids: [],
    parent_id: 0,
    purchase_note: "",
    categories: [],
    tags: [],
    images: [
      {
        id: 186,
        date_created: "2024-03-15T05:04:49",
        date_created_gmt: "2024-03-14T18:04:49",
        date_modified: "2024-03-15T05:04:49",
        date_modified_gmt: "2024-03-14T18:04:49",
        src: "https://woo-deliciously-very-coffee.wpcomstaging.com/wp-content/uploads/2024/03/T_2_front-30.jpg",
        name: "T_2_front-30.jpg",
        alt: "",
      }, {
        id: 188,
        date_created: "2024-03-15T05:04:49",
        date_created_gmt: "2024-03-14T18:04:49",
        date_modified: "2024-03-15T05:04:49",
        date_modified_gmt: "2024-03-14T18:04:49",
        src: "https://woo-deliciously-very-coffee.wpcomstaging.com/wp-content/uploads/2024/03/T_2_back-30.jpg",
        name: "T_2_back-30.jpg",
        alt: "",
      }
    ],
    attributes: [],
    default_attributes: [],
    variations: [],
    grouped_products: [],
    menu_order: 0,
    price_html: "<span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>21.99</bdi></span>",
    related_ids: [],
    meta_data: [
      {
        id: 1039,
        key: "_wpas_done_all",
        value: "1",
      }
    ],
    stock_status: "instock",
    has_options: false,
    post_password: "",
    permalink_template: "https://woo-deliciously-very-coffee.wpcomstaging.com/product/%pagename%/",
    generated_slug: "premium-quality-31",
    bundled_by: [],
    bundle_stock_status: "instock",
    bundle_stock_quantity: null,
    bundle_virtual: false,
    bundle_layout: "",
    bundle_add_to_cart_form_location: "",
    bundle_editable_in_cart: false,
    bundle_sold_individually_context: "",
    bundle_item_grouping: "",
    bundle_min_size: "",
    bundle_max_size: "",
    bundled_items: [],
    bundle_sell_ids: [],
    jetpack_publicize_connections: [],
    jetpack_sharing_enabled: true,
    jetpack_likes_enabled: true,
    brands: [],
    _links: {
      self: [
        []
      ],
      collection: [
        []
      ],
    },
  };
  

  const response = await main(resource, productData);
  // console.log(response);
  // Assertions
  expect(response).toBeDefined();
  expect(response.name).toBe(mockResponse.name);
  expect(response.regular_price).toBe(mockResponse.regular_price);
});
