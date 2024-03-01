export const resource = {
  clientId: Bun.env.CLIENT_ID!,
  clientSecret: Bun.env.CLIENT_SECRET!,
  authToken: Bun.env.AUTH_TOKEN!,
  realmId: Bun.env.REALM_ID!,
  refreshToken: Bun.env.REFRESH_TOKEN!,
  companyId: Bun.env.COMPANY_ID!,
  isSandBox: Bun.env.IS_SANDBOX === 'true',
};
