import { db } from "./firebase.ts";
import { collection, getDocs } from "firebase/firestore";

export default async function fetchProducts() {
  const querySnapshot = await getDocs(collection(db, "products"));
  const products = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return products as {
    id: string;
    name: string;
    description: string;
    category: string;
    texture: string;
    image: string;
    price?: number;
  }[];
}
