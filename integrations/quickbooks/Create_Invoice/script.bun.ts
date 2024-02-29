import QuickBooks from 'node-quickbooks';

type Quickbooks = {
  clientId: string;
  clientSecret: string;
  realmId: string;
  authToken: string;
  refreshToken: string;
};

export async function main(
  resource: Quickbooks,
  invoice: {
    CustomerRef: {
      value: string;
      name?: string;
    };
    Line: {
      SalesItemLine?: {
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
      };
      GroupLine?: {
        Id: string;
        GroupLineDetail: {
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
        DetailType: 'GroupLineDetail';
        LineNum?: number;
        Description?: string;
      };
      DescriptionOnlyLine?: {
        Id: string;
        DetailType: 'DescriptionOnly';
        DescriptionLineDetail: {
          TaxCodeRef?: {
            value: string;
            name?: string;
          };
          ServiceDate?: {
            date: string;
          };
        };
        Description?: string;
        LineNum?: number;
        Amount?: number;
      };
    }[];
    CurrencyRef: {
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
    false,
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
