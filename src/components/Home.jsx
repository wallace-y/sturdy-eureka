import React, { useState } from "react";
import createShortId from "../utils/createShortId";
import "../css/Home.css"

function Home() {
  const [longURL, setLongURL] = useState("");
  const [shortId, setShortId] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await createShortId(longURL).then((res) => {
        setShortId(res);
      });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  console.log(shortId);

  if (loading) {
    return <h1>Loading please wait</h1>;
  }

  return (
    <>
      <h1>URl Shortener</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="longId"
            placeholder="Enter a URL here"
            aria-label="longId"
            value={longURL}
            onInput={() => setLongURL(event.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {shortId == "" ? false : <h2>Your new URL is: <a target="_blank" href={`https://url-shortener-i0yy.onrender.com/${shortId}`}>url-shortener-i0yy.onrender.com/{shortId}</a></h2>}
    </>
  );
}

export default Home;
