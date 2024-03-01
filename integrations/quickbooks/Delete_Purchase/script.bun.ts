import QuickBooks from 'node-quickbooks';

type Quickbooks = {
  clientId: string;
  clientSecret: string;
  realmId: string;
  authToken: string;
  refreshToken: string;
};

export async function main(resource: Quickbooks /* other parameters */) {
  var qbo = new QuickBooks(
    resource.clientId,
    resource.clientSecret,
    resource.authToken,
    false,
    resource.realmId,
    false,
    true,
    null,
    '2.0',
    resource.refreshToken
  );

  // return new Promise((resolve, reject) => {
  //   qbo.createBill(, function (err: any, result: any) {
  //     if (err) {
  //       reject(err);
  //     } else {
  //       resolve(result);
  //     }
  //   });
  // });
}
