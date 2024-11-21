"use client";
import createNewPost from "@/lib/createNewPost";
import getPostByAlias from "@/lib/getPostByAlias"
import { PostProps } from "@/types";
import { useState } from "react";
import Input from "../components/input"


export default function DisplayAllPosts(){

    async function checkNewPost(alias: string){
        const p = await getPostByAlias(alias);
        if (p === null) {
            console.log("Alias does not exist, ready to create new post.");
          return false;
        }
        console.log("Alias already exists, cannot create new post.");
        return true;
    }

    async function addNewPost(alias: string, url: string) {
        const aliasDoesExist = await checkNewPost(alias);
        
        if (aliasDoesExist) {
            console.log("Post with this alias already exists.");
            return false;
        }
        const p = await createNewPost(alias, url); // Create the new post
        if (p === null) {
          console.log("Failed to create new post.");
          return false;
        }
    
        console.log("New post created successfully.");
        return true;
        
      }

  return (
    <div className="flex flex-col items-center">
      <Input createFunc={addNewPost} /> 
    </div>
  );
}
