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
  customer: {
    sparse: boolean;
    Id?: string;
    SyncToken?: string;
    DisplayName?: string;
    Title?: string;
    GivenName?: string;
    MiddleName?: string;
    Suffix?: string;
    FamilyName?: string;
    PrimaryEmailAddr?: {
      Address?: string;
    };
    ResaleNum?: string;
    SecondaryTaxIdentifier?: string;
    ARAccountRef?: {
      value: string;
      name?: string;
    };
    DefaultTaxCodeRef?: {
      value: string;
      name?: string;
    };
    PreferredDeliveryMethod?: 'Print' | 'Email' | 'None';
    GSTIN?: string;
    SalesTermRef?: {
      value: string;
      name?: string;
    };
    CustomerTypeRef?: {
      value: string;
    };
    Fax?: {
      FreeFormNumber?: string;
    };
    BusinessNumber?: string;
    BillWithParent?: boolean;
    CurrencyRef?: {
      value: string;
      name?: string;
    };
    Mobile?: {
      FreeFormNumber?: string;
    };
    Job?: boolean;
    BalanceWithJobs?: number;
    PrimaryPhone?: {
      FreeFormNumber?: string;
    };
    OpenBalanceDate?: string; // Date format
    Taxable?: boolean;
    AlternatePhone?: {
      FreeFormNumber?: string;
    };
    MetaData?: {
      CreateTime?: string; // Date time format
      LastUpdatedTime?: string; // Date time format
    };
    ParentRef?: {
      value: string;
      name?: string;
    };
    Notes?: string;
    WebAddr?: {
      URI?: string;
    };
    Active?: boolean;
    CompanyName?: string;
    Balance?: number;
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
    PaymentMethodRef?: {
      value: string;
      name?: string;
    };
    IsProject?: boolean;
    Source?: string;
    PrimaryTaxIdentifier?: string;
    GSTRegistrationType?: string;
    PrintOnCheckName?: string;
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
    FullyQualifiedName?: string;
    Level?: number;
    TaxExemptionReasonId?: number;
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
    qbo.updateCustomer(customer, function (err: any, result: any) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}
