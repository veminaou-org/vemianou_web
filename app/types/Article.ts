export interface Article {
    id: number;
    documentId: string;
    title: string;
    description: string;
    author: string;
    slug: string;
    cover: {
        url: string;
    }
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}
