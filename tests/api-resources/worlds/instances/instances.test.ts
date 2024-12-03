// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MSquared from 'msquared';
import { Response } from 'node-fetch';

const client = new MSquared({
  authToken: 'My Auth Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource instances', () => {
  test('create: only required params', async () => {
    const responsePromise = client.worlds.instances.create('projectId', { name: 'name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.worlds.instances.create('projectId', {
      name: 'name',
      id: 'id',
      authConfiguration: {
        allowAnonymous: true,
        authProviders: {
          discord: { allowedUsers: ['string'] },
          google: { allowedOrganizations: ['string'], allowedUsers: ['string'] },
          webhook: { webhookUrl: 'webhookUrl' },
        },
        password: 'password',
      },
      avatarConfiguration: {
        allowCustomAvatars: true,
        availableAvatars: [
          {
            meshFileUrl: 'meshFileUrl',
            isDefaultAvatar: true,
            mmlCharacterString: null,
            mmlCharacterUrl: null,
            name: 'name',
            thumbnailUrl: 'thumbnailUrl',
          },
        ],
        customAvatarWebhookUrl: 'customAvatarWebhookUrl',
      },
      chatConfiguration: { enabled: true },
      description: 'description',
      enableTweakPane: true,
      environmentConfiguration: {
        ambientLight: { intensity: 0 },
        envMap: { intensity: 0 },
        groundPlane: true,
        postProcessing: { bloomIntensity: 0 },
        skybox: { azimuthalAngle: 0, blurriness: 0, intensity: 0, polarAngle: 0 },
        sun: { azimuthalAngle: 0, intensity: 0, polarAngle: 0 },
      },
      generalConfiguration: { maxUserConnections: 0 },
      mmlDocumentsConfiguration: {
        mmlDocuments: {
          foo: {
            url: 'url',
            position: { x: 0, y: 0, z: 0 },
            rotation: { x: 0, y: 0, z: 0 },
            scale: { x: 0, y: 0, z: 0 },
          },
        },
      },
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.worlds.instances.retrieve('projectId', 'worldId');
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
      client.worlds.instances.retrieve('projectId', 'worldId', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(MSquared.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = client.worlds.instances.update('projectId', 'worldId', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list', async () => {
    const responsePromise = client.worlds.instances.list('projectId');
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
      client.worlds.instances.list('projectId', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(MSquared.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.worlds.instances.list(
        'projectId',
        { limit: 0, offset: 0, search: 'search' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(MSquared.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.worlds.instances.delete('projectId', 'worldId');
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
      client.worlds.instances.delete('projectId', 'worldId', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(MSquared.NotFoundError);
  });
});
