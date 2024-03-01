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
  bill: {
    VendorRef: {
      value: string;
      name?: string;
    };
    Line: {
      Id?: string;
      DetailType: 'AccountBasedExpenseLineDetail';
      Amount: number;
      AccountBasedExpenseLineDetail: {
        AccountRef: {
          value: string;
          name?: string;
        };
        TaxAmount?: number;
        TaxInclusiveAmt?: number;
        ClassRef?: {
          value: string;
          name?: string;
        };
        TaxCodeRef?: {
          value: string;
          name?: string;
        };
        BillableStatus?: string;
        CustomerRef?: {
          value: string;
          name?: string;
        };
      };
      Description?: string;
      LineNum?: number;
    }[];
    CurrencyRef?: {
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
    qbo.createBill(bill, function (err: any, result: any) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}
