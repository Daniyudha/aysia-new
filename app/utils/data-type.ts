import type { $Fetch, NitroFetchRequest } from "nitropack";

export type FetchType<T> = $Fetch<T, NitroFetchRequest>;

export type PaginationResponse<T> = {
  data: T;
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

export type PaginationParams = {
  page?: number;
  limit?: number;
  orderByField?: string;
  orderBy?: "asc" | "desc";
};

export type GalleryCategoryPayload = {
  name: string;
};

export type GalleryCategoryResponse = {
  id: string;
  name: string;
  status: string;
  created_at: string;
  updated_at: string;
};

export type AuthLoginResponse = {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
    role: string;
  };
};

export type AuthLoginPayload = {
  email: string;
  password: string;
};

export type AuthRegisterPayload = {
  email: string;
  password: string;
  name: string;
};

export type AuthRegisterResponse = {
  id: string;
  email: string;
  name: string;
  role: string;
  isActive: boolean;
  isVerified: boolean;
  createdAt: string;
};

export type PageAboutPayload = {
  title: string;
  description: string;
  thumbnail?: File;
};

export type PageAboutResponse = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
};

export type SocialMediaPayload = {
  facebook: {
    title: string;
    link: string;
  };
  instagram1: {
    title: string;
    link: string;
  };
  instagram2: {
    title: string;
    link: string;
  };
  instagram3: {
    title: string;
    link: string;
  };
  tiktok: {
    title: string;
    link: string;
  };
  twitter: {
    title: string;
    link: string;
  };
  youtube: {
    title: string;
    link: string;
  };
  whatsapp: {
    title: string;
    link: string;
  };
};

export type SocialMediaResponse = {
  facebook: {
    title: string;
    link: string;
  };
  instagram: {
    title: string;
    link: string;
  };
  instagram1: {
    title: string;
    link: string;
  };
  instagram2: {
    title: string;
    link: string;
  };
  instagram3: {
    title: string;
    link: string;
  };
  tiktok: {
    title: string;
    link: string;
  };
  twitter: {
    title: string;
    link: string;
  };
  youtube: {
    title: string;
    link: string;
  };
  whatsapp: {
    title: string;
    link: string;
  };
};

export type JourneyPayload = {
  title: string;
  description: string;
  tag?: string;
  thumbnail?: File;
  music?: File;
  gallery_category_id?: string;
};

export type BlogPayload = {
  title: string;
  description: string;
  tag?: string;
  thumbnail?: File;
};

export type JourneyResponse = {
  id: string;
  title: string;
  description: string;
  tag: string;
  thumbnail: string;
  music_url?: string;
  music_name?: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  gallery_category_id?: string;
  gallery_category_name?: string;
};

export type BlogResponse = {
  id: string;
  title: string;
  description: string;
  tag: string;
  thumbnail: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
};

export type BlogDetailResponse = {
  id: string;
  blog_id: string;
  title: string;
  description: string;
  thumbnail_url: string | null;
  is_video: boolean;
  video_url: string | null;
  content: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
};

export type BlogDetailPayload = {
  blog_id: string;
  title: string;
  description: string;
  thumbnail?: File;
  is_video: boolean;
  video_url: string | null;
  content: string;
};

export type JourneyDetailsPayload = {
  journey_id: string;
  title: string;
  tagline: string;
  description: string;
  content: string;
  thumbnail?: File;
  is_video: boolean;
  video_url: string | null;
};

export type JourneyDetailsResponse = {
  id: string;
  journey_id: string;
  title: string;
  tagline: string;
  description: string;
  thumbnail_url: string | null;
  content: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  is_video: boolean;
  video_url: string | null;
};

export type ConfirmDialogOptions = {
  title?: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => Promise<any> | void | Promise<void>;
  closeOnSuccess?: boolean;
};

export type ConfirmDialogState = {
  isOpen: boolean;
  options: ConfirmDialogOptions;
  resolve: ((value: boolean) => void) | null;
};

export type ExploreImagePayload = {
  image: File;
};

export type ExploreImageBulkPayload = {
  images: File[];
};

export type ExploreImageBulkDeletePayload = {
  ids: string[];
};

export type ExploreImageResponse = {
  id: string;
  url: string;
  name: string;
  title?: string;
  size: number;
  type: string;
  created_at: string;
  updated_at: string;
  // Optional fields from API response
  filename?: string;
  original_name?: string;
  mime_type?: string;
  thumbnail_path?: string;
  alt_text?: string | null;
  sort_order?: number;
  is_active?: boolean;
};

export type ExploreImageTitlePayload = {
  title: string;
};