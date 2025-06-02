import React from 'react';
export function PromoBar() {
  return <div className="bg-green-800 text-white py-2 px-4 text-center">
      <p className="text-sm md:text-base">
        Get 10% off on your first purchase. Use code:{' '}
        <span className="font-bold">FIRST10</span>
      </p>
    </div>;
}