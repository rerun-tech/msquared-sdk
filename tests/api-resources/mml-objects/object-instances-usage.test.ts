// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MSquared from 'msquared';
import { Response } from 'node-fetch';

const client = new MSquared({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource objectInstancesUsage', () => {
  test('list: only required params', async () => {
    const responsePromise = client.mmlObjects.objectInstancesUsage.list('projectId', {
      endTime: '2019-12-27T18:11:19.117Z',
      interval: 'P1D',
      startTime: '2019-12-27T18:11:19.117Z',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.mmlObjects.objectInstancesUsage.list('projectId', {
      endTime: '2019-12-27T18:11:19.117Z',
      interval: 'P1D',
      startTime: '2019-12-27T18:11:19.117Z',
    });
  });
});
