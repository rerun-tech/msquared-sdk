// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as SubresourcesAPI from './subresources';
import { Subresources, WorldQuota } from './subresources';
import * as WebWorldInstancesQuotaAPI from './web-world-instances-quota';
import { WebWorldInstancesQuota, WebWorldInstancesQuotaListResponse } from './web-world-instances-quota';
import * as WebWorldInstancesUsageAPI from './web-world-instances-usage';
import {
  WebWorldInstancesUsage,
  WebWorldInstancesUsageListParams,
  WebWorldInstancesUsageListResponse,
} from './web-world-instances-usage';
import * as InstancesAPI from './instances/instances';
import {
  InstanceCreateParams,
  InstanceListParams,
  InstanceListResponse,
  InstanceUpdateParams,
  Instances,
} from './instances/instances';

export class Worlds extends APIResource {
  instances: InstancesAPI.Instances = new InstancesAPI.Instances(this._client);
  webWorldInstancesQuota: WebWorldInstancesQuotaAPI.WebWorldInstancesQuota =
    new WebWorldInstancesQuotaAPI.WebWorldInstancesQuota(this._client);
  webWorldInstancesUsage: WebWorldInstancesUsageAPI.WebWorldInstancesUsage =
    new WebWorldInstancesUsageAPI.WebWorldInstancesUsage(this._client);
  subresources: SubresourcesAPI.Subresources = new SubresourcesAPI.Subresources(this._client);
}

export interface World {
  id: string;

  authConfiguration: World.AuthConfiguration;

  avatarConfiguration: World.AvatarConfiguration;

  chatConfiguration: World.ChatConfiguration;

  createdAt: string;

  createdBy: World.UserID | World.APIKeyID;

  environmentConfiguration: World.EnvironmentConfiguration;

  mmlDocumentsConfiguration: World.MMLDocumentsConfiguration;

  name: string;

  url: string;

  description?: string;

  enableTweakPane?: boolean;

  generalConfiguration?: World.GeneralConfiguration;
}

export namespace World {
  export interface AuthConfiguration {
    allowAnonymous: boolean;

    authProviders?: AuthConfiguration.AuthProviders;

    password?: string;
  }

  export namespace AuthConfiguration {
    export interface AuthProviders {
      discord?: AuthProviders.Discord;

      google?: AuthProviders.Google;

      webhook?: AuthProviders.Webhook;
    }

    export namespace AuthProviders {
      export interface Discord {
        allowedUsers?: Array<string>;
      }

      export interface Google {
        allowedOrganizations?: Array<string>;

        allowedUsers?: Array<string>;
      }

      export interface Webhook {
        webhookUrl: string;
      }
    }
  }

  export interface AvatarConfiguration {
    allowCustomAvatars?: boolean;

    availableAvatars?: Array<
      AvatarConfiguration.UnionMember0 | AvatarConfiguration.UnionMember1 | AvatarConfiguration.UnionMember2
    >;

    customAvatarWebhookUrl?: string;
  }

  export namespace AvatarConfiguration {
    export interface UnionMember0 {
      meshFileUrl: string;

      isDefaultAvatar?: boolean;

      mmlCharacterString?: null;

      mmlCharacterUrl?: null;

      name?: string;

      thumbnailUrl?: string;
    }

    export interface UnionMember1 {
      mmlCharacterString: string;

      isDefaultAvatar?: boolean;

      meshFileUrl?: null;

      mmlCharacterUrl?: null;

      name?: string;

      thumbnailUrl?: string;
    }

    export interface UnionMember2 {
      mmlCharacterUrl: string;

      isDefaultAvatar?: boolean;

      meshFileUrl?: null;

      mmlCharacterString?: null;

      name?: string;

      thumbnailUrl?: string;
    }
  }

  export interface ChatConfiguration {
    enabled: boolean;
  }

  export interface UserID {
    type: 'user';

    userId: string;
  }

  export interface APIKeyID {
    apiKeyId: string;

    type: 'apiKey';
  }

  export interface EnvironmentConfiguration {
    ambientLight?: EnvironmentConfiguration.AmbientLight;

    envMap?: EnvironmentConfiguration.EnvMap;

    groundPlane?: boolean;

    postProcessing?: EnvironmentConfiguration.PostProcessing;

    skybox?: EnvironmentConfiguration.Skybox;

    sun?: EnvironmentConfiguration.Sun;
  }

  export namespace EnvironmentConfiguration {
    export interface AmbientLight {
      intensity?: number;
    }

    export interface EnvMap {
      intensity?: number;
    }

    export interface PostProcessing {
      bloomIntensity?: number;
    }

    export interface Skybox {
      azimuthalAngle?: number;

      blurriness?: number;

      intensity?: number;

      polarAngle?: number;
    }

    export interface Sun {
      azimuthalAngle?: number;

      intensity?: number;

      polarAngle?: number;
    }
  }

  export interface MMLDocumentsConfiguration {
    mmlDocuments: Record<string, MMLDocumentsConfiguration.MMLDocuments>;
  }

  export namespace MMLDocumentsConfiguration {
    export interface MMLDocuments {
      url: string;

      position?: MMLDocuments.Position;

      rotation?: MMLDocuments.Rotation;

      scale?: MMLDocuments.Scale;
    }

    export namespace MMLDocuments {
      export interface Position {
        x: number;

        y: number;

        z: number;
      }

      export interface Rotation {
        x: number;

        y: number;

        z: number;
      }

      export interface Scale {
        x: number;

        y: number;

        z: number;
      }
    }
  }

  export interface GeneralConfiguration {
    maxUserConnections?: number;
  }
}

Worlds.Instances = Instances;
Worlds.WebWorldInstancesQuota = WebWorldInstancesQuota;
Worlds.WebWorldInstancesUsage = WebWorldInstancesUsage;
Worlds.Subresources = Subresources;

export declare namespace Worlds {
  export { type World as World };

  export {
    Instances as Instances,
    type InstanceListResponse as InstanceListResponse,
    type InstanceCreateParams as InstanceCreateParams,
    type InstanceUpdateParams as InstanceUpdateParams,
    type InstanceListParams as InstanceListParams,
  };

  export {
    WebWorldInstancesQuota as WebWorldInstancesQuota,
    type WebWorldInstancesQuotaListResponse as WebWorldInstancesQuotaListResponse,
  };

  export {
    WebWorldInstancesUsage as WebWorldInstancesUsage,
    type WebWorldInstancesUsageListResponse as WebWorldInstancesUsageListResponse,
    type WebWorldInstancesUsageListParams as WebWorldInstancesUsageListParams,
  };

  export { Subresources as Subresources, type WorldQuota as WorldQuota };
}
