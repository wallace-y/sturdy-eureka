import React, { useState } from "react";
import createShortId from "../utils/createShortId";

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
      <h1>URl Shortener App</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Long URL:
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
      {shortId == "" ? false : <h2>Short Id is {shortId}</h2>}
    </>
  );
}

export default Home;
