import React, { useState, useEffect } from 'react';
import ProductosCard from '../components/ProductosCard';


interface Productos {
  _id: string;
  nombre: string;
  categoria: string;
  precio: string[];
  descripcion: string;
  imagenUrl: string;
}

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<Productos[]>([]);

  useEffect(() => {
    // Cargar tenis favoritas desde el almacenamiento local
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const removeFromFavorites = (id: string) => {
    const updatedFavorites = favorites.filter((productos) => productos._id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  // Función de marcador de posición para onAddToFavorites
  const placeholderAddToFavorites = () => {
    // Esta función no hace nada, solo está para cumplir con la prop requerida
    console.log('Add to favorites no implementado en Favorites');
  };

  return (
    <div className="favorites">
      <h1 style={{ color: 'white' }}>Mis Productos Favoritos</h1>
      {favorites.length > 0 ? (
        <div className="favorites-list">
          {favorites.map((productos) => (
            <div key={productos._id} className="favorite-item">
              <ProductosCard 
                productos={productos} 
                onAddToFavorites={placeholderAddToFavorites} 
              />
              <button
                onClick={() => removeFromFavorites(productos._id)}
                className="btn btn-remove-favorites">
                Eliminar
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>Aún no hay Productos favoritos. ¡Empieza a agregar algunos!</p>
      )}
    </div>
  );
};

export default Favorites;