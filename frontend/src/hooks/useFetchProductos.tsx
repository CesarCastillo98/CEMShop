import { useState, useEffect } from 'react';
import apiClient from '../utils/api';


interface Productos {
  _id: string;
  nombre: string;
  categoria: string;
  precio: string[];
  descripcion: string;
  imagenUrl: string;
}

const useFetchProductos = () => {
  const [productos, setProductos] = useState<Productos[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await apiClient.get('/api/productos');
        setProductos(response.data);
      } catch (error) {
        console.error('Error fetching productos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  return { productos, loading };
};

export default useFetchProductos;