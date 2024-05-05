import { OPTIONS } from "../../utils/constants";
import { loadPerson,removePerson } from "../personSlice";
export {loadPerson,removePerson};
export const asyncLoadPerson= (id)=> async (dispatch,getState)=>{
    const detailsData = await fetch(`https://api.themoviedb.org/3/person/${id}`,OPTIONS);
    const externalIdData = await fetch(`https://api.themoviedb.org/3/person/${id}/external_ids`,OPTIONS);
    const combinedCreditsData = await fetch(`https://api.themoviedb.org/3/person/${id}/combined_credits`,OPTIONS);
    const tvCreditsData = await fetch(`https://api.themoviedb.org/3/person/${id}/tvC_credits`,OPTIONS);
    const movieCreditsData = await fetch(`https://api.themoviedb.org/3/person/${id}/movie_credits`,OPTIONS);
    const details = await detailsData.json();
    const externalId =await externalIdData.json();
    const combinedCredits =await combinedCreditsData.json();
    const tvCredits = await tvCreditsData.json();
    const movieCredits = await movieCreditsData.json();
    console.log("DETAILS: ",details, "Externa Id:- ", externalId)
    dispatch(loadPerson({details: details, externalId:externalId,combinedCredits:combinedCredits,tvCredits: tvCredits,movieCredits:movieCredits}));
}