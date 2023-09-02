import { db } from "../../firebaseConfig";

import { doc, getDoc } from "firebase/firestore";

async function getLongId(shortId) {
  const docRef = doc(db, "url-pairs", shortId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data().longId;
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
}

export default getLongId;
