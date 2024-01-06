import type {ServerLoad} from "@sveltejs/kit";
import {redirect} from "@sveltejs/kit";

export const load:ServerLoad = async (data)=>{
    const language = data.request.headers.get("accept-language")?.split(",")?.[0]?.split("-")?.[0]
    if(language === "th") return redirect(302,"/th")
    else return redirect(302,"/en")
}