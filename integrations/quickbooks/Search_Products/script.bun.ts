import QuickBooks from 'node-quickbooks';

type Quickbooks = {
  clientId: string;
  clientSecret: string;
  realmId: string;
  authToken: string;
  refreshToken: string;
  isSandBox: boolean;
};

export async function main(resource: Quickbooks, query: string) {
  var qbo = new QuickBooks(
    resource.clientId,
    resource.clientSecret,
    resource.authToken,
    false,
    resource.realmId,
    resource.isSandBox,
    true,
    null,
    '2.0',
    resource.refreshToken
  );

  return new Promise((resolve, reject) => {
    qbo.findItems(query, function (err: any, result: any) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}
