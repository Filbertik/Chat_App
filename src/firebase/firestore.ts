import { getFirestore } from "firebase/firestore";

import { firebaseApp } from "./config";

export const db = getFirestore(firebaseApp);

// import { getFirestore } from "firebase/firestore";

// import { app } from "./config";

// export const db = getFirestore(app);
