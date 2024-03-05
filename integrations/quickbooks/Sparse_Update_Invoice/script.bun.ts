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
    Id?: string;
    sparse: boolean;
    DueDate?: string;
    Line?: any[];
    CustomerRef?: {
      value: string;
      name?: string;
    };
    SyncToken?: string;
    ShipFromAddr?: {
      Id?: string;
      PostalCode?: string;
      City?: string;
      Country?: string;
      Line5?: string;
      Line4?: string;
      Line3?: string;
      Line2?: string;
      Line1?: string;
      Lat?: string;
      Long?: string;
      CountrySubDivisionCode?: string;
    };
    CurrencyRef?: {
      value: string;
      name?: string;
    };
    DocNumber?: string;
    BillEmail?: {
      Address?: string;
    };
    TxnDate?: string;
    ShipDate?: {
      date: string;
    };
    TrackingNum?: string;
    ClassRef?: {
      value: string;
      name?: string;
    };
    PrintStatus?: string;
    SalesTermRef?: {
      value: string;
      name?: string;
    };
    TxnSource?: string;
    LinkedTxn?: {
      TxnId: string;
      TxnType: string;
      TxnLineId?: string;
    }[];
    DepositToAccountRef?: {
      value: string;
      name?: string;
    };
    GlobalTaxCalculation?: string;
    AllowOnlineACHPayment?: boolean;
    TransactionLocationType?: string;
    MetaData?: {
      CreateTime?: {
        dateTime: string;
      };
      LastUpdatedTime?: {
        dateTime: string;
      };
    };
    PrivateNote?: string;
    BillEmailCc?: {
      Address?: string;
    };
    CustomerMemo?: {
      value: string;
    };
    EmailStatus?: string;
    ProjectRef?: {
      value: string;
      name?: string;
    };
    ExchangeRate?: number;
    Deposit?: number;
    TxnTaxDetail?: {
      TxnTaxCodeRef?: {
        value: string;
        name?: string;
      };
      TotalTax?: number;
      TaxLine?: {
        DetailType: string;
        TaxLineDetail: {
          TaxRateRef: {
            value: string;
            name?: string;
          };
          NetAmountTaxable?: number;
          PercentBased?: boolean;
          TaxInclusiveAmount?: number;
          OverrideDeltaAmount?: number;
          TaxPercent?: number;
        };
        Amount?: number;
      }[];
    };
    ApplyTaxAfterDiscount?: boolean;
    HomeBalance?: number;
    DeliveryInfo?: {
      DeliveryType: string;
      DeliveryTime: {
        dateTime: string;
      };
    };
    TotalAmt?: number;
    InvoiceLink?: string;
    RecurDataRef?: {
      value: string;
      name?: string;
    };
    TaxExemptionRef?: {
      value: string;
      name?: string;
    };
    Balance?: number;
    HomeTotalAmt?: number;
    FreeFormAddress?: boolean;
    CustomField?: {
      DefinitionId: string;
      StringValue?: string;
      Name?: string;
      Type: string;
    }[];
    ShipAddr?: {
      Id?: string;
      PostalCode?: string;
      City?: string;
      Country?: string;
      Line5?: string;
      Line4?: string;
      Line3?: string;
      Line2?: string;
      Line1?: string;
      Lat?: string;
      Long?: string;
      CountrySubDivisionCode?: string;
    };
    DepartmentRef?: {
      value: string;
      name?: string;
    };
    BillEmailBcc?: {
      Address?: string;
    };
    ShipMethodRef?: {
      value: string;
      name?: string;
    };
    BillAddr?: {
      Id?: string;
      PostalCode?: string;
      City?: string;
      Country?: string;
      Line5?: string;
      Line4?: string;
      Line3?: string;
      Line2?: string;
      Line1?: string;
      Lat?: string;
      Long?: string;
      CountrySubDivisionCode?: string;
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
    qbo.updateInvoice(invoice, function (err: any, result: any) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}
