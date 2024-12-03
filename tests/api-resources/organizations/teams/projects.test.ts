// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MSquared from 'msquared';
import { Response } from 'node-fetch';

const client = new MSquared({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource projects', () => {
  test('create: only required params', async () => {
    const responsePromise = client.organizations.teams.projects.create('projectId', { name: 'name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.organizations.teams.projects.create('projectId', { name: 'name' });
  });

  test('retrieve', async () => {
    const responsePromise = client.organizations.teams.projects.retrieve('projectId');
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
      client.organizations.teams.projects.retrieve('projectId', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(MSquared.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.organizations.teams.projects.list();
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
      client.organizations.teams.projects.list({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(MSquared.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.organizations.teams.projects.list({ limit: 0, offset: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(MSquared.NotFoundError);
  });
});
