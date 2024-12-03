// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MSquared from 'msquared';
import { Response } from 'node-fetch';

const client = new MSquared({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource versions', () => {
  test('create: only required params', async () => {
    const responsePromise = client.mmlObjects.objectTemplates.versions.create('projectId', 'templateId', {
      id: 'id',
      source: 'source',
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
    const response = await client.mmlObjects.objectTemplates.versions.create('projectId', 'templateId', {
      id: 'id',
      source: 'source',
      description: 'description',
      parametersSchema: { foo: 'bar' },
      setAsDefault: true,
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.mmlObjects.objectTemplates.versions.retrieve(
      'projectId',
      'templateId',
      'versionId',
    );
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
      client.mmlObjects.objectTemplates.versions.retrieve('projectId', 'templateId', 'versionId', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(MSquared.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = client.mmlObjects.objectTemplates.versions.update(
      'projectId',
      'templateId',
      'versionId',
      {},
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list', async () => {
    const responsePromise = client.mmlObjects.objectTemplates.versions.list('projectId', 'templateId');
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
      client.mmlObjects.objectTemplates.versions.list('projectId', 'templateId', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(MSquared.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.mmlObjects.objectTemplates.versions.list(
        'projectId',
        'templateId',
        { limit: 0, offset: 0, search: 'search' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(MSquared.NotFoundError);
  });
});
