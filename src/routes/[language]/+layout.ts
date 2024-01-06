import {loadTranslations} from "$lib/translation/translations";
import type {LayoutLoad, LayoutParams} from "../../../.svelte-kit/types/src/routes/[language]/$types";

export const load:LayoutLoad = async ({params})=>{
    const {language} = params as LayoutParams
    await loadTranslations(language,'/')
    return{}
}