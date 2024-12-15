import React from 'react';
import ProductosCard from '../components/ProductosCard';
import useFetchProductos from '../hooks/useFetchProductos';

const Home: React.FC = () => {
  const { productos, loading } = useFetchProductos();

  const addToFavorites = (productos: any) => {
    const storedFavorites = localStorage.getItem('favorites');
    const favorites = storedFavorites ? JSON.parse(storedFavorites) : [];

    // Verificar si la tenis ya está en favoritos
    if (!favorites.some((fav: any) => fav._id === productos._id)) {
      favorites.push(productos);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      alert('Productos agregada a favoritos');
    } else {
      alert('Estos productos ya están en tus favoritos');
    }
  };

  if (loading) return <p>Cargando Productos...</p>;

  return (
    <div className="home">
      {productos.map((productos) => (
        <ProductosCard key={productos._id} productos={productos} onAddToFavorites={addToFavorites} />
      ))}
    </div>
  );
};

export default Home;