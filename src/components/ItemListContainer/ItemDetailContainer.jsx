import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore";
export default function ItemDetailContainer({ productos }) {
  const { id } = useParams();

  const [manga, setmanga] = useState([]);

  useEffect(() => {
    const queryDb = getFirestore();

    const queryDoc = doc(queryDb, "productos", id);

    getDoc(queryDoc).then((res) => setmanga({ id: res.id, ...res.data() }));
  }, [id]);

  return (
    <>
      <ItemDetail key={manga.id} manga={manga} />
    </>
  );
}
