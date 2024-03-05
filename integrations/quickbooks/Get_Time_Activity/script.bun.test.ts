import { expect, test } from 'bun:test';
import { main } from './script.bun.ts';
import { resource } from '../resource.ts';
import QuickBooks from 'node-quickbooks';

test('Get Time Activity', async () => {
  const qbo = new QuickBooks(
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

  const getTimeActivitiesResponse = (await new Promise((resolve, reject) => {
    qbo.findTimeActivities('', function (err: any, result: any) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  })) as any;
  expect(getTimeActivitiesResponse.QueryResponse.TimeActivity).toBeDefined();

  const timeActivityId = getTimeActivitiesResponse.QueryResponse.TimeActivity[0].Id;
  const response = (await main(resource, timeActivityId)) as any;
  expect(response).toBeDefined();
  expect(response.Id).toBe(timeActivityId);
});
