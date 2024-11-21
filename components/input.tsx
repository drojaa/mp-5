
import { Textarea } from "@mui/joy";
import { Button, TextField, Alert } from "@mui/material";
import { useState, useEffect } from "react";
import getPostByAlias  from "../lib/getPostByAlias";


export default function Input({
  createFunc,
  
}: {
  createFunc: (alias: string, url: string) => Promise<boolean>;
 
}) {
  const [alias, setAlias] = useState("");
  const [url, setUrl] = useState("");
  const [alert, setAlert] = useState(false)
  async function submitNewPost() {
    // Used to determine weather the alias already exist, if so then it will return the 
    if (await getPostByAlias(alias) === null) {
      setAlert(false)
    } else {
      setAlert(true)
    }
    if (await createFunc(alias, url)) {
      setAlias("");
      setUrl("");
    }
  }

  function changeAlert() {
    setAlert(!alert)
  }
  
  return (
    <div>
      <form
      className="w-96 rounded-xl p-4 "
      onSubmit={(e) => {
        e.preventDefault();
        submitNewPost();
      }}
    >
      <TextField
        variant="filled"
        sx={{ backgroundColor: "lightpink", width: "100%" }}
        label="alias"
        value={alias}
        onChange={(e) => setAlias(e.target.value)}
      />
      <Textarea
        sx={{
          padding: "0.5rem",
          height: "50px",
          width: "100%",
          borderRadius: 0,
        }}
        variant="soft"
        placeholder="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)} 
      />
      <div className="w-full flex justify-center">
        <Button
          sx={{ width: "80px" }}
          variant="contained"
          type="submit"
        >
          Submit
        </Button>
        { alert && (
           <Alert variant="standard" color="info" >
           Alias Already Exists
           </Alert>
        )}
       
      </div>
    </form>
    </div>
  );
}
