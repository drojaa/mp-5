"use client";
import createNewPost from "@/lib/createNewPost";
import getPostByAlias from "@/lib/getPostByAlias"
import Input from "../components/input"


export default function DisplayAllPosts(){
    // used to check if you're allowed to add alias to db, just checks to see if alias exist or not
    async function checkNewPost(alias: string){
        const p = await getPostByAlias(alias);
        if (p === null) {
          return false;
        }
        return true;
    }
  // if first function is true, then it adds to database
    async function addNewPost(alias: string, url: string) {
        const aliasDoesExist = await checkNewPost(alias);
        
        if (aliasDoesExist) {
            return false;
        }
        const p = await createNewPost(alias, url); 
        if (p === null) {
          return false;
        }
    
        return true;
        
      }

  return (
    <div className="flex flex-col items-center">
      <Input createFunc={addNewPost} /> 
    </div>
  );
}
