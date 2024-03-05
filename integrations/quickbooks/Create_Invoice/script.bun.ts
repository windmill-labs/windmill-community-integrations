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
  invoice: {
    CustomerRef: {
      value: string;
      name?: string;
    };
    Line: {
      DetailType: 'SalesItemLineDetail' | 'GroupLineDetail' | 'DescriptionOnly';
      Amount: number;
      Description?: string;
      LineNum?: number;
      SalesItemLineDetail?: {
        TaxInclusiveAmt?: number;
        DiscountAmt?: number;
        ItemRef?: {
          value: string;
          name?: string;
        };
        ClassRef?: {
          value: string;
          name?: string;
        };
        TaxCodeRef?: {
          value: string;
          name?: string;
        };
        MarkupInfo?: {
          PriceLevelRef?: {
            value: string;
            name?: string;
          };
          Percent?: number;
          MarkUpIncomeAccountRef?: {
            value: string;
            name?: string;
          };
        };
        ItemAccountRef?: {
          value: string;
          name?: string;
        };
        ServiceDate?: string;
        DiscountRate?: number;
        Qty?: number;
        UnitPrice?: number;
        TaxClassificationRef?: {
          value: string;
          name?: string;
        };
      };
      GroupLineDetail?: {
        Quantity?: number;
        Line?: {
          Id: string;
          DetailType: 'SalesItemLineDetail';
          SalesItemLineDetail: {
            TaxInclusiveAmt?: number;
            DiscountAmt?: number;
            ItemRef?: {
              value: string;
              name?: string;
            };
            ClassRef?: {
              value: string;
              name?: string;
            };
            TaxCodeRef?: {
              value: string;
              name?: string;
            };
            MarkupInfo?: {
              PriceLevelRef?: {
                value: string;
                name?: string;
              };
              Percent?: number;
              MarkUpIncomeAccountRef?: {
                value: string;
                name?: string;
              };
            };
            ItemAccountRef?: {
              value: string;
              name?: string;
            };
            ServiceDate?: string;
            DiscountRate?: number;
            Qty?: number;
            UnitPrice?: number;
            TaxClassificationRef?: {
              value: string;
              name?: string;
            };
          };
          Amount: number;
          Description?: string;
          LineNum?: number;
        }[];
        GroupItemRef?: {
          value: string;
          name?: string;
        };
      };
      DescriptionLineDetail?: {
        TaxCodeRef?: {
          value: string;
          name?: string;
        };
        ServiceDate?: {
          date: string;
        };
      };
    }[];
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
    qbo.createInvoice(invoice, function (err: any, result: any) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}
