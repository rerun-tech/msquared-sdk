// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export interface Project {
  id: string;

  createdAt: string;

  createdBy: Project.UnionMember0 | Project.UnionMember1;

  name: string;

  organizationId: string;

  description?: string;
}

export namespace Project {
  export interface UnionMember0 {
    type: 'user';

    userId: string;
  }

  export interface UnionMember1 {
    apiKeyId: string;

    type: 'apiKey';
  }
}

export interface World {
  id: string;

  authConfiguration: World.AuthConfiguration;

  avatarConfiguration: World.AvatarConfiguration;

  chatConfiguration: World.ChatConfiguration;

  createdAt: string;

  createdBy: World.UnionMember0 | World.UnionMember1;

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

  export interface UnionMember0 {
    type: 'user';

    userId: string;
  }

  export interface UnionMember1 {
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
