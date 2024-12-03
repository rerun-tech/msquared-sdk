// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MSquared from 'msquared';
import { Response } from 'node-fetch';

const client = new MSquared({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource objectInstances', () => {
  test('create: only required params', async () => {
    const responsePromise = client.objects.objectInstances.create('projectId', {
      name: 'name',
      source: { templateVersionId: { templateId: 'templateId', versionId: 'versionId' }, type: 'template' },
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
    const response = await client.objects.objectInstances.create('projectId', {
      name: 'name',
      source: {
        templateVersionId: { templateId: 'templateId', versionId: 'versionId', alwaysDefault: false },
        type: 'template',
      },
      id: 'id',
      description: 'description',
      enabled: true,
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.objects.objectInstances.retrieve('projectId', 'instanceId');
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
      client.objects.objectInstances.retrieve('projectId', 'instanceId', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(MSquared.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = client.objects.objectInstances.update('projectId', 'instanceId', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list', async () => {
    const responsePromise = client.objects.objectInstances.list('projectId');
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
      client.objects.objectInstances.list('projectId', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(MSquared.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.objects.objectInstances.list(
        'projectId',
        { limit: 0, offset: 0, search: 'search' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(MSquared.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.objects.objectInstances.delete('projectId', 'instanceId');
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
      client.objects.objectInstances.delete('projectId', 'instanceId', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(MSquared.NotFoundError);
  });

  test('logAccess', async () => {
    const responsePromise = client.objects.objectInstances.logAccess('projectId', 'instanceId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('logAccess: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.objects.objectInstances.logAccess('projectId', 'instanceId', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(MSquared.NotFoundError);
  });

  test('usage: only required params', async () => {
    const responsePromise = client.objects.objectInstances.usage('projectId', 'instanceId', {
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

  test('usage: required and optional params', async () => {
    const response = await client.objects.objectInstances.usage('projectId', 'instanceId', {
      endTime: '2019-12-27T18:11:19.117Z',
      interval: 'P1D',
      startTime: '2019-12-27T18:11:19.117Z',
    });
  });
});
