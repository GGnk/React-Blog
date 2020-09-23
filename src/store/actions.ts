import { AnyAction } from "redux";
import { Article } from "./types"

export enum constants {
    ADD_ARTICLE = "ADD_ARTICLE",
}

export const addArticle = (article: Article): AnyAction => {
    return {
        type: constants.ADD_ARTICLE,
        payload: {
            ...article,
        },
    };
}