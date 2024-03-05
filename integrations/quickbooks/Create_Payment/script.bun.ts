import QuickBooks from 'node-quickbooks';

type Quickbooks = {
  clientId: string;
  clientSecret: string;
  realmId: string;
  authToken: string;
  refreshToken: string;
  isSandBox: boolean;
};

export async function main(
  resource: Quickbooks,
  payment: {
    TotalAmt: number;
    CustomerRef: {
      value: string;
      name?: string;
    };
    CurrencyRef?: {
      value: string;
      name?: string;
    };
    ProjectRef?: {
      value: string;
      name?: string;
    };
  }
) {
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
    qbo.createPayment(payment, function (err: any, result: any) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}
