import { OPTIONS } from "../../utils/constants";
import { loadPerson,removePerson } from "../personSlice";
export {loadPerson,removePerson};
export const asyncLoadPerson= (id)=> async (dispatch,getState)=>{
try{

    const detailsData = await fetch(`https://api.themoviedb.org/3/person/${id}`,OPTIONS);
    const externalIdData = await fetch(`https://api.themoviedb.org/3/person/${id}/external_ids`,OPTIONS);
    const combinedCreditsData = await fetch(`https://api.themoviedb.org/3/person/${id}/combined_credits`,OPTIONS);
    const tvCreditsData = await fetch(`https://api.themoviedb.org/3/person/${id}/tv_credits`,OPTIONS);
    const movieCreditsData = await fetch(`https://api.themoviedb.org/3/person/${id}/movie_credits`,OPTIONS);
    const details = await detailsData.json();
    const externalId =await externalIdData.json();
    const combinedCredits =await combinedCreditsData.json();
    const tvCredits = await tvCreditsData.json();
    const movieCredits = await movieCreditsData.json();

    dispatch(loadPerson({details: details, externalId:externalId,combinedCredits:combinedCredits,tvCredits: tvCredits,movieCredits:movieCredits}));
}catch(error){
    console.log("Error:- ",error);
}
    
}