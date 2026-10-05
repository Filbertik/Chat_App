import { doc, serverTimestamp, setDoc } from "firebase/firestore";

import { db } from "@/firebase/firestore";

interface CreateUserData {
  uid: string;
  email: string;
}

export const createUserDocument = async ({
  uid,
  email,
}: CreateUserData): Promise<void> => {
  const userRef = doc(db, "users", uid);

  await setDoc(userRef, {
    uid,
    email,
    createdAt: serverTimestamp(),
  });
};
