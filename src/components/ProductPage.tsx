import React from 'react';
import { StarIcon } from 'lucide-react';
interface ProductPageProps {
  title: string;
  subtitle: string;
  price: string;
  rating?: number;
  reviews?: number;
  image: string;
  features: string[];
  description: string;
  ingredients?: string[];
  instructions?: string[];
  benefits?: string[];
  availability?: string;
}
export function ProductPage({
  title,
  subtitle,
  price,
  rating,
  reviews,
  image,
  features,
  description,
  ingredients,
  instructions,
  benefits,
  availability = "Currently unavailable. We don't know when or if this item will be back in stock."
}: ProductPageProps) {
  return <div className="w-full bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative">
            <img src={image} alt={title} className="w-full rounded-lg shadow-lg" />
          </div>
          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{title}</h1>
            <p className="text-xl text-gray-600 mb-4">{subtitle}</p>
            {rating && <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} size={20} className={`${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill={i < Math.floor(rating) ? 'currentColor' : 'none'} />)}
                </div>
                <span className="ml-2 text-gray-600">
                  {rating} ({reviews} reviews)
                </span>
              </div>}
            <div className="text-2xl font-bold text-gray-800 mb-6">
              From {price}
            </div>
            <div className="mb-6">
              <p className="text-red-600">{availability}</p>
            </div>
            <button className="w-full md:w-auto bg-green-700 text-white px-8 py-3 rounded-md hover:bg-green-800 transition-colors mb-6" disabled>
              Currently Unavailable
            </button>
            {/* Features */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                About this item
              </h2>
              <ul className="space-y-3">
                {features.map((feature, index) => <li key={index} className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-2 bg-green-700 rounded-full flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>)}
              </ul>
            </div>
            {/* Description */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Product Description
              </h2>
              <p className="text-gray-600 whitespace-pre-line">{description}</p>
            </div>
            {/* Ingredients if available */}
            {ingredients && ingredients.length > 0 && <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Ingredients
                </h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
                </ul>
              </div>}
            {/* Instructions if available */}
            {instructions && instructions.length > 0 && <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  How to Use
                </h2>
                <ul className="list-decimal list-inside text-gray-600 space-y-2">
                  {instructions.map((instruction, index) => <li key={index}>{instruction}</li>)}
                </ul>
              </div>}
            {/* Benefits if available */}
            {benefits && benefits.length > 0 && <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Benefits
                </h2>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => <li key={index} className="flex items-start">
                      <span className="w-2 h-2 mt-2 mr-2 bg-green-700 rounded-full flex-shrink-0" />
                      <span className="text-gray-600">{benefit}</span>
                    </li>)}
                </ul>
              </div>}
          </div>
        </div>
      </div>
    </div>;
}