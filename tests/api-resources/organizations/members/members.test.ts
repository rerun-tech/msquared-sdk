// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Msquared from 'msquared';
import { Response } from 'node-fetch';

const client = new Msquared({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource members', () => {
  test('create: only required params', async () => {
    const responsePromise = client.organizations.members.create('organizationId', 'memberId', {
      role: 'admin',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.organizations.members.create('organizationId', 'memberId', {
      role: 'admin',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.organizations.members.retrieve('organizationId', 'memberId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.organizations.members.retrieve('organizationId', 'memberId', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Msquared.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.organizations.members.delete('organizationId', 'memberId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.organizations.members.delete('organizationId', 'memberId', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Msquared.NotFoundError);
  });
});
