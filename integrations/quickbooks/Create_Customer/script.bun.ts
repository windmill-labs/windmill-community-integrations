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
  customer: {
    FullyQualifiedName?: string;
    PrimaryEmailAddr?: {
      Address: string;
    };
    DisplayName?: string;
    Suffix?: string;
    Title?: string;
    MiddleName?: string;
    Notes?: string;
    FamilyName?: string;
    PrimaryPhone?: {
      FreeFormNumber: string;
    };
    CompanyName?: string;
    BillAddr?: {
      CountrySubDivisionCode: string;
      City: string;
      PostalCode: string;
      Line1: string;
      Country: string;
    };
    GivenName?: string;
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
    qbo.createCustomer(customer, function (err: any, result: any) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}
