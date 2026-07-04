export type Tutorial = {
    title: string;
    paragraphs: {
        content?: string,
        image?: string
    }[];
};

export type TutorialCategory = {
    category: string;
    subTutorials: Tutorial[];
};
