import { createContext, useContext } from "react";

const ProductContext = createContext();

const dummyProducts = [
  {
    "id": 1,
    "name": "Hearts All Over Bracelet",
    "category": "Bracelet",
    "price": 2229,
    "image": "https://palmonas.com/cdn/shop/files/01_e869a853-ae2b-4543-8f22-61455b80f6a6.webp?v=1744528231&width=900",
    "rating": 4.5,
    "availableSizes": ["S", "M", "L"]
  },
  {
    "id": 2,
    "name": "Pearl Drop Earrings",
    "category": "Earrings",
    "price": 3949,
    "image": "https://palmonas.com/cdn/shop/files/PM-EARRINGS-032_3_0040.jpg?v=1744528692&width=500",
    "rating": 4.2,
    "availableSizes": []
  },
  {
    "id": 3,
    "name": "Crystal Love Bangle Bracelet",
    "category": "Ring",
    "price": 2099,
    "image": "https://palmonas.com/cdn/shop/files/Artboard9_4.jpg?v=1744526847&width=500",
    "rating": 4.0,
    "availableSizes": ["6", "7", "8"]
  },
  {
    "id": 4,
    "name": "Oxidized Bracelet",
    "category": "Bracelet",
    "price": 3499,
    "image": "https://palmonas.com/cdn/shop/files/Artboard14_2.jpg?v=1744526375&width=500",
    "rating": 4.3,
    "availableSizes": ["Free"]
  },
  {
    "id": 5,
    "name": "Kundan Choker Set",
    "category": "Necklace",
    "price": 1999,
    "image": "https://palmonas.com/cdn/shop/files/BR064-G_d8bc3041-29da-4361-9aff-63d35387819f.jpg?v=1744527093&width=500",
    "rating": 4.8,
    "availableSizes": ["M", "L"]
  },
  {
    "id": 6,
    "name": "Temple Design Earrings",
    "category": "Earrings",
    "price": 1499,
    "image": "https://palmonas.com/cdn/shop/files/NK484_3_88bbcc99-8a1e-415c-9e14-44e6a3123557.jpg?v=1744524486&width=500",
    "rating": 4.6,
    "availableSizes": []
  },
  {
    "id": 7,
    "name": "Gold Bangles",
    "category": "Bangles",
    "price": 2749,
    "image": "https://palmonas.com/cdn/shop/files/NK-40_1_0040.jpg?v=1744524127&width=500",
    "rating": 4.1,
    "availableSizes": ["2.4", "2.6", "2.8"]
  },
  {
    "id": 8,
    "name": "Charm Bracelet",
    "category": "Bracelet",
    "price": 2599,
    "image": "https://palmonas.com/cdn/shop/files/BR093-G_11a024a8-c8be-47b9-bf92-ed8236ac4522.jpg?v=1744526386&width=500",
    "rating": 4.0,
    "availableSizes": ["Free"]
  },
  {
    "id": 9,
    "name": "Minimalist Pendant Chain",
    "category": "Necklace",
    "price": 1699,
    "image": "https://palmonas.com/cdn/shop/files/PMW01JS006-02-01.jpg?v=1746868136&width=500",
    "rating": 4.3,
    "availableSizes": ["S", "M"]
  },
  {
    "id": 10,
    "name": "Antique Nose Ring",
    "category": "Nose Ring",
    "price": 1999,
    "image": "https://palmonas.com/cdn/shop/files/PM-NECKLACE-170_1.jpg?v=1744528483&width=500",
    "rating": 4.1,
    "availableSizes": []
  },
  {
    "id": 11,
    "name": "Studded Ear Cuff",
    "category": "Earrings",
    "price": 3049,
    "image": "https://palmonas.com/cdn/shop/files/NK486_1.jpg?v=1744524169&width=500",
    "rating": 3.9,
    "availableSizes": []
  },
  {
    "id": 12,
    "name": "Adjustable Toe Rings",
    "category": "Toe Ring",
    "price": 1499,
    "image": "https://palmonas.com/cdn/shop/files/PM-NECKLACE-044_2.jpg?v=1744529085&width=500",
    "rating": 4.0,
    "availableSizes": ["Free"]
  },
  {
    "id": 13,
    "name": "Diamond Stud Earrings",
    "category": "Earrings",
    "price": 1299,
    "image": "https://palmonas.com/cdn/shop/files/PM-BRACELETS-027.jpg?v=1745909284&width=500",
    "rating": 4.7,
    "availableSizes": []
  },
  {
    "id": 14,
    "name": "Rajasthani Maang Tikka",
    "category": "Head",
    "price": 3999,
    "image": "https://palmonas.com/cdn/shop/files/PM-EARRINGS-037_1_0040.jpg?v=1744528665&width=500",
    "rating": 4.2,
    "availableSizes": ["Free"]
  },
  {
    "id": 15,
    "name": "Anklet with Bells",
    "category": "Anklet",
    "price": 2999,
    "image": "https://palmonas.com/cdn/shop/files/BR082-G.jpg?v=1744526804&width=500",
    "rating": 4.4,
    "availableSizes": ["Free"]
  },
  {
    "id": 16,
    "name": "Rose Gold Bracelet",
    "category": "Bracelet",
    "price": 6449,
    "image": "https://palmonas.com/cdn/shop/files/DSC08245.jpg?v=1748329878&width=400",
    "rating": 4.1,
    "availableSizes": ["S", "M"]
  },
  {
    "id": 17,
    "name": "Stone Studded Ring",
    "category": "Ring",
    "price": 4999,
    "image": "https://palmonas.com/cdn/shop/files/NK346_c66afb20-7267-4bba-9de8-890e73bf463b.jpg?v=1744526702&width=400",
    "rating": 4.5,
    "availableSizes": ["7", "8"]
  },
  {
    "id": 18,
    "name": "Shell Pendant Necklace",
    "category": "Necklace",
    "price": 5049,
    "image": "https://palmonas.com/cdn/shop/files/PM-BRACELETS-029_0040.jpg?v=1749545827&width=400",
    "rating": 3.8,
    "availableSizes": ["M"]
  },
  {
    "id": 19,
    "name": "Floral Armlet",
    "category": "Armlet",
    "price": 4599,
    "image": "https://palmonas.com/cdn/shop/files/RG151_49b40051-551f-4f17-9d8c-2b5014e41fde.jpg?v=1744527078&width=400",
    "rating": 4.0,
    "availableSizes": ["Free"]
  },
  {
    "id": 20,
    "name": "Crystal Hoop Earrings",
    "category": "Earrings",
    "price": 5549,
    "image": "https://palmonas.com/cdn/shop/files/PM-NECKLACE-166_0040.jpg?v=1749546622&width=400",
    "rating": 4.3,
    "availableSizes": []
  }
]


export const ProductProvider = ({ children }) => {
  return (
    <ProductContext.Provider value={{ products: dummyProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
