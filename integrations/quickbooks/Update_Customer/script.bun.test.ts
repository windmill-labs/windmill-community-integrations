import { expect, test } from 'bun:test';
import { main } from './script.bun.ts';
import { resource } from '../resource.ts';

test('Update Customer', async () => {
  // // script arguments here (also load environment variables if needed using Bun.env.VARIABLE_NAME!)
  // console.log('TEST: Will test Update Customer with arguments: ' /* arguments */);
  // // any setup code here
  // // calling main
  // console.log('TEST: Running main function');
  // const response = await main(resource, {
  //   PrimaryEmailAddr: {
  //     Address: 'jdrew@myemail.com',
  //   },
  //   DisplayName: "Bill's Windsurf Shop",
  //   PreferredDeliveryMethod: 'Print',
  //   GivenName: 'Bill',
  //   FullyQualifiedName: "Bill's Windsurf Shop",
  //   BillWithParent: false,
  //   Job: false,
  //   BalanceWithJobs: 85.0,
  //   PrimaryPhone: {
  //     FreeFormNumber: '(415) 444-6538',
  //   },
  //   Active: true,
  //   MetaData: {
  //     CreateTime: '2014-09-11T16:49:28-07:00',
  //     LastUpdatedTime: '2015-07-23T11:07:55-07:00',
  //   },
  //   BillAddr: {
  //     City: 'Half Moon Bay',
  //     Line1: '12 Ocean Dr.',
  //     PostalCode: '94213',
  //     Lat: '37.4307072',
  //     Long: '-122.4295234',
  //     CountrySubDivisionCode: 'CA',
  //     Id: '3',
  //   },
  //   MiddleName: 'Mac',
  //   Taxable: false,
  //   Balance: 85.0,
  //   SyncToken: '3',
  //   CompanyName: "Bill's Windsurf Shop",
  //   FamilyName: 'Lucchini',
  //   PrintOnCheckName: "Bill's Wind Surf Shop",
  //   sparse: false,
  //   Id: '2',
  // });
  // console.log(response);
});
