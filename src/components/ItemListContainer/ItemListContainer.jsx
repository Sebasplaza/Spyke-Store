import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemLista from "./ItemLista";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import Loading from "../Loading";
export default function ItemListContainer(props) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const queryDb = getFirestore();

    const queryCollection = collection(queryDb, "productos");

    getDocs(queryCollection).then(
      (res) =>
        setProductos(
          res.docs.map((producto) => ({ id: producto.id, ...producto.data() }))
        ),
      setLoading(true)
    );
  }, []);

  return (
    <>
      {loading ? (
        <div className="container d-flex m-4">
          <ItemLista productos={productos} />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
