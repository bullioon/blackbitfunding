import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const firebaseAdminJson = process.env.FIREBASE_ADMIN_JSON;

if (!firebaseAdminJson) {
  throw new Error("Missing FIREBASE_ADMIN_JSON");
}

const serviceAccount = JSON.parse(firebaseAdminJson);

const app =
  getApps().length > 0
    ? getApps()[0]
    : initializeApp({
        credential: cert({
          projectId: serviceAccount.project_id,
          clientEmail: serviceAccount.client_email,
          privateKey: serviceAccount.private_key,
        }),
      });

const db = getFirestore(app);

export { db };