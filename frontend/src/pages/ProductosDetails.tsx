import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface Productos {
  _id: string;
  nombre: string;
  categoria: string;
  precio: string[];
  descripcion: string;
  imagenUrl: string; // Asegúrate de que este nombre coincida con el JSON
}

const ProductosDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [productos, setproductos] = useState<Productos | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/productos/${id}`);
        setproductos(response.data);
      } catch (err) {
        console.error(err); // Para depuración
        setError('Error fetching the tenis. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, [id]);

  if (loading) {
    return <p>Loading Tenis details...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  console.log(productos); // Para verificar que los datos se están estableciendo correctamente

  return (
    <div className="tenis-details">
      {productos ? (
        <>
          <h1>{productos.nombre}</h1>
          <p><strong>Categoria:</strong> {productos.categoria}</p>
          {productos.imagenUrl && <img src={productos.imagenUrl} alt={productos.nombre} />}
          <h3>Precio:</h3>
          <ul>
            {productos.precio.map((precio, index) => (
              <li key={index}>{precio}</li>
            ))}
          </ul>
          <h3>Descripcion:</h3>
          <p>{productos.descripcion}</p>
        </>
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
};

export default ProductosDetails;