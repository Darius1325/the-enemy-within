export type JournalDocument = {
    id: number;
    title: string;
    image: string;
    paragraphs: {
        content: string
    }[]
};
