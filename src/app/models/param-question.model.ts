export class ParamQuestions {
    nbQuestions!: number;
    type!: null | "multiple" | "boolean";
    category!: number | null;
    difficulty!: "easy" | "medium" | "hard" | null;
}