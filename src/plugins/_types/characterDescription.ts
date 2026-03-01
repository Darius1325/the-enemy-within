export type CharacterDescription = {
    id: number;
    title: string;
    paragraphs: {
        content?: string,
        image?: string
    }[]
};
