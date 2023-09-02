import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import getLongId from "../utils/getLongId";

export default function Redirect() {
  const [longId, setLongId] = useState("");
  let { shortId } = useParams();

  useEffect(() => {
    try {
      getLongId(shortId).then((res) => {
        setLongId(res);
        window.location.replace(res)
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div id="redirect-page">
      <h1>Please wait whilst we redirect you</h1>
    </div>
  );
}
