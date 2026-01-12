export type Quest = {
    gameVariableId: number;
    icon?: number;
    title: string;
    paragraphs: { content: string }[];
    steps: {
        title: string;
        paragraphs: { content: string }[];
    }[];
};
