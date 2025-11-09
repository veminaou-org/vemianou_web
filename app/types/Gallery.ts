export interface GalleryImageFormat {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: string | null
  size: number
  width: number
  height: number
  sizeInBytes?: number
}

export interface GalleryAsset {
  id: number
  documentId: string
  name: string
  alternativeText: string | null
  caption: string | null
  width: number
  height: number
  formats?: {
    large?: GalleryImageFormat
    medium?: GalleryImageFormat
    small?: GalleryImageFormat
    thumbnail?: GalleryImageFormat
  }
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: string | null
  provider: string
  provider_metadata: unknown
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface Gallery {
  id: number
  documentId: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  Image: GalleryAsset[]
}

