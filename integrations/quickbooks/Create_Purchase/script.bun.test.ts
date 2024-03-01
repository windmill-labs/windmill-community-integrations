import { expect, test } from 'bun:test';
import { main } from './script.bun.ts';
import { resource } from '../resource.ts';

test('Create Purchase', async () => {
  console.log('TEST: Running main function');
  const response = await main(resource, {
    PaymentType: 'CreditCard',
    AccountRef: {
      value: '42',
    },
    Line: [
      {
        DetailType: 'AccountBasedExpenseLineDetail',
        Amount: 10.0,
        AccountBasedExpenseLineDetail: {
          AccountRef: {
            value: '13',
          },
          ProjectRef: {
            value: '42991284',
          },
        },
      },
    ],
  });

  console.log(response);
});
