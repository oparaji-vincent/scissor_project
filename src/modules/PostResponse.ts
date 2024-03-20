type PostResponse = {
    status: boolean,
    url: {
        id: number;
        Title: string;
        ActualUrl: string;
        UniqueIdentifier: string;
        ShortUrl: string;
        created_at: string;
        clicks: number;
    }
};

export default PostResponse;