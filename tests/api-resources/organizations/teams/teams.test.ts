// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MSquared from 'msquared';
import { Response } from 'node-fetch';

const client = new MSquared({
  authToken: 'My Auth Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource teams', () => {
  test('create: only required params', async () => {
    const responsePromise = client.organizations.teams.create('organizationId', { name: 'name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.organizations.teams.create('organizationId', { name: 'name' });
  });

  test('retrieve', async () => {
    const responsePromise = client.organizations.teams.retrieve('organizationId', 'teamId');
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
      client.organizations.teams.retrieve('organizationId', 'teamId', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(MSquared.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = client.organizations.teams.update('organizationId', 'teamId', { name: 'name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.organizations.teams.update('organizationId', 'teamId', { name: 'name' });
  });

  test('list', async () => {
    const responsePromise = client.organizations.teams.list('organizationId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.organizations.teams.list('organizationId', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(MSquared.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.organizations.teams.list(
        'organizationId',
        { limit: 0, offset: 0, search: 'search' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(MSquared.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.organizations.teams.delete('organizationId', 'teamId');
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
      client.organizations.teams.delete('organizationId', 'teamId', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(MSquared.NotFoundError);
  });
});
