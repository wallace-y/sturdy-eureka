import { nanoid } from "nanoid";
import { db } from "../../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

async function createShortId(longId) {
  // Add a new document with a generated id.

  const shortId = nanoid(10);

  await setDoc(doc(db, "url-pairs", shortId), { longId });

  return shortId;
}

export default createShortId;
