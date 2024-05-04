import { OPTIONS } from "../../utils/constants";
import { loadMovie } from "../movieSlice";
export {loadMovie,removeMovie} from "../movieSlice";

export const asyncLoadMovie =  (id)=>async (dispatch,getState)=>{
    try{
        const detailsData = await fetch(`https://api.themoviedb.org/3/movie/${id}`,OPTIONS);
        const externalIdData = await fetch(`https://api.themoviedb.org/3/movie/${id}/external_ids`,OPTIONS);
        const recommendationsData = await fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations`,OPTIONS);
        const similarData = await fetch(`https://api.themoviedb.org/3/movie/${id}/similar`,OPTIONS);
        const videosData = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`,OPTIONS);
        const watchProviderData = await fetch(`https://api.themoviedb.org/3/movie/${id}/watch/providers`,OPTIONS);
        const translationData = await fetch(`https://api.themoviedb.org/3/movie/${id}/translations`,OPTIONS);
        const details = await detailsData.json()
        const externalId = await externalIdData.json()
        const recommendations = await recommendationsData.json()
        const similar = await similarData.json()
        const videos = await videosData.json()
        const watchProvider = await watchProviderData.json();
        const translation = await translationData.json();
        console.log({details:details,externalId:externalId,recommendations: recommendations, similar: similar,videos:videos,watchProvider:watchProvider, translation: translation});
        dispatch(loadMovie({details:details,externalId:externalId,recommendations: recommendations, similar: similar,videos:videos,watchProvider:watchProvider, translation: translation}));

    } catch(error){
        console.log(" Error:- ",error);
    }
}