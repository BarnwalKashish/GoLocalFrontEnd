import React from "react";
import { Provider } from "../../types/customerDashboard.types";
import { Heart, MessageCircle, Star } from "lucide-react";

interface FavoriteListProps {
  favorites: Provider[];
  onViewAll: () => void; // 
}

const FavoriteList: React.FC<FavoriteListProps> = ({ favorites, onViewAll }) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">
          Favorite Service Providers
        </h3>
        <button
          onClick={onViewAll}
          className="text-blue-600 hover:text-blue-700 text-sm font-medium"
        >
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favorites.map((provider) => (
          <div
            key={provider.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6"
          >
            <div className="relative mb-4">
              <img
                src={provider.image}
                alt={provider.name}
                className="w-full h-32 object-cover rounded-lg"
              />
              <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                <Heart className="h-4 w-4 text-red-500 fill-current" />
              </button>
            </div>

            <h4 className="font-semibold text-gray-900 mb-1">
              {provider.name}
            </h4>
            <p className="text-gray-600 mb-2">{provider.service}</p>

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-sm font-medium">{provider.rating}</span>
                <span className="text-sm text-gray-500">
                  ({provider.reviews})
                </span>
              </div>
              <span className="font-semibold text-blue-600">
                {provider.price}
              </span>
            </div>

            <div className="flex space-x-2">
              <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                Book Now
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <MessageCircle className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteList;
