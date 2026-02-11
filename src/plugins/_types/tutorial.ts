export type Tutorial = {
    id: number;
    title: string;
    paragraphs: {
        content?: string,
        image?: string
    }[]
};
