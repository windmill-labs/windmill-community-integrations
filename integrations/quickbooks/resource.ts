export const resource = {
  clientId: Bun.env.CLIENT_ID!,
  clientSecret: Bun.env.CLIENT_SECRET!,
  authToken: Bun.env.ACCESS_TOKEN!,
  realmId: Bun.env.REALM_ID!,
  refreshToken: Bun.env.REFRESH_TOKEN!,
  isSandBox: Bun.env.IS_SANDBOX === 'true',
};
