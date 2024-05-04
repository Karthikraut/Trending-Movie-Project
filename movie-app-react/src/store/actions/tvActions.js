import { OPTIONS } from "../../utils/constants"
import {loadTv, removeTv} from '../tvSlice'
export {loadTv,removeTv} from '../tvSlice'
export const asyncLoadTv = (id)=> async(dispatch, getState)=>{
     try{
        const detailsData = await fetch(`https://api.themoviedb.org/3/tv/${id}`,OPTIONS);
        const externalIdData = await fetch(`https://api.themoviedb.org/3/tv/${id}/external_ids`,OPTIONS);
        const recommendationsData = await fetch(`https://api.themoviedb.org/3/tv/${id}/recommendations`,OPTIONS);
        const similarData = await fetch(`https://api.themoviedb.org/3/tv/${id}/similar`,OPTIONS);
        const videosData = await fetch(`https://api.themoviedb.org/3/tv/${id}/videos`,OPTIONS);
        const watchProviderData = await fetch(`https://api.themoviedb.org/3/tv/${id}/watch/providers`,OPTIONS);
        const translationData = await fetch(`https://api.themoviedb.org/3/tv/${id}/translations`,OPTIONS);
        const details = await detailsData.json()
        const externalId = await externalIdData.json()
        const recommendations = await recommendationsData.json()
        const similar = await similarData.json()
        const videos = await videosData.json();
        // const trailer = videos.results.find((e)=>e.type == "Trailer");
        const watchProvider = await watchProviderData.json();
        const translation = await translationData.json();
        console.log("details",details)
        dispatch(loadTv({details:details,externalId:externalId,recommendations: recommendations, similar: similar,videos:videos,watchProvider:watchProvider, translation: translation}));
     }catch(error){
        console.log("Error:- ",error);
     }
}
