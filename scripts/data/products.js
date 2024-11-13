import { formatCurrency } from "../utils/money.js";

export function getProduct(productId) {
  let matchingProduct;
    // Loop through all products and compare id with the id in the cart item to get a matching project
    products.forEach((product) => {

      if (product.id === productId) {
        matchingProduct = product;
      }
    });

    return matchingProduct;
}


// Define the product class
class Product {
  id;
  image;
  name;
  rating;
  priceCents;

  // Constructor runs the set up code whenever a new object is created
  constructor(productDetails) {
    this.id = productDetails.id;
    this.image = productDetails.image;
    this.name = productDetails.name;
    this.rating = productDetails.rating;
    this.priceCents = productDetails.priceCents;
  }

  getStarsUrl() {
    return `images/ratings/rating-${this.rating.stars * 10}.png`;
  }

  getPrice() {
    return this.priceCents;
    // return `${formatCurrency(this.priceCents)}`;
  }

  extraInfoHTML() {
    return '';
  }
}

// Define 'Clothing' - a child class of Product
class Clothing extends Product {
  sizeChartLink;

  constructor(productDetails) {
    super(productDetails); // super calls the constructor from the parent class
    this.sizeChartLink = productDetails.sizeChartLink;
  }

  // A method defined in the child class with the same name overrides the one defined in the parent class
  extraInfoHTML() {
    return `
      <a href="${this.sizeChartLink}" target="_blank">Size chart</a>
    `;
  }
}

/*
export let products = [];

// Use fetch() to get data from the API
export function loadProductsFetch() {
  const promise = fetch('https://supersimplebackend.dev/products')
    .then((response)=> {
      return response.json();

    }).then((productsData) => {
      products = productsData.map((productDetails) => {
        if(productDetails.type === "clothing") {
          return new Clothing(productDetails);
        }
        return new Product(productDetails);
      });
      
      // Use catch() to handle errors
    }).catch((error) => {
      console.log('Unexpected error. Please try again');
    });
  
  return promise;
}
*/

/*
// Using XMLHttpRequest to do the same as fetch()
export function loadProducts(fun) { // 'fun' is a callback - a function to run in the future
  const xhr = new XMLHttpRequest;

  xhr.addEventListener('load', () => {
    products = JSON.parse(xhr.response()).map((productDetails) => {
      if(productDetails.type === "clothing") {
        return new Clothing(productDetails);
      }
      return new Product(productDetails);
    });
  });

  fun(); // callback

  // For callbacks, add a seperate event listener to handle errors
  xhr.addEventListener('error', () => {
    console.log('Unexpected error. Please try again');
  });

  xhr.open('GET', 'https://supersimplebackend.dev/products');
  xhr.send();
}
*/



export const products = [
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "../../images/products/kim-store/qwen wireless combo.png",
    name: "Qwen Mini Wireless Keyboard & Mouse Combo",
    rating: {
      stars: 4.5,
      count: 87
    },
    priceCents: 2000,
    keywords: [
      "keyboard",
      "mouse",
      "wireless"
    ]
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image: "images/products/kim-store/wlisth men's watch.png",
    name: "Wlisth Men's Watch Fashion Stainless Steel Quartz Watch",
    rating: {
      stars: 4,
      count: 127
    },
    priceCents: 2050,
    keywords: [
      "watch",
      "men"
    ]
  },
  {
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    image: "images/products/kim-store/wlisth women's watch.png",
    name: "Wlisth Women's Stainless Steel Quartz Watch",
    rating: {
      stars: 4.5,
      count: 56
    },
    priceCents: 1650,
    keywords: [
      "watch",
      "women",
    ],
  },
  {
    id: "54e0eccd-8f36-462b-b68a-8182611d9add",
    image: "images/products/kim-store/rosy air freshener.png",
    name: "Rosy Apple & Cinnamon Air Freshener 300ml",
    rating: {
      stars: 5,
      count: 2197
    },
    priceCents: 255,
    keywords: [
      "air",
      "freshener",
    ]
  },
  {
    id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
    image: "images/products/kim-store/rashnik 2 burner gas.png",
    name: "Rashnik 2 Burner Gas Table Top Cooker",
    rating: {
      stars: 4,
      count: 37
    },
    priceCents: 1320,
    keywords: [
      "cooker",
      "gas",
      "burner"
    ]
  },
  {
    id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
    image: "images/products/kim-store/itel earbuds.png",
    name: "Itel TWS BudsAce Earbuds Earpods",
    rating: {
      stars: 4.5,
      count: 175
    },
    priceCents: 1150,
    keywords: [
      "earbuds",
      "earpods",
      "electronics"
    ]
  },
  {
    id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
    image: "images/products/kim-store/tcl 55.png",
    name: "TCL 55' 4K HDR Google TV",
    rating: {
      stars: 4.5,
      count: 317
    },
    priceCents: 54799,
    keywords: [
      "tv",
      "tcl",
      "electronics"
    ]
  },
  {
    id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
    image: "images/products/kim-store/natural glow night cream.png",
    name: "Natural Glow Night Cream",
    rating: {
      stars: 4.5,
      count: 144
    },
    priceCents: 3599,
    keywords: [
      "cream",
      "natural",
      "glow",
    ]
  },
  {
    id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
    image: "images/products/kim-store/hikers microwave.png",
    name: "Hikers Microwave 20-Litres 700W",
    rating: {
      stars: 4.5,
      count: 305
    },
    priceCents: 8360,
    keywords: [
      "microwave",
    ]
  },
  {
    id: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
    image: "images/products/kim-store/adidas kids sport shoes.png",
    name: "Adidas Sports Shoes Kids",
    rating: {
      stars: 4,
      count: 89
    },
    priceCents: 3390,
    keywords: [
      "shoes",
      "running shoes",
      "footwear",
      "kids"
    ]
  },
  {
    id: "5968897c-4d27-4872-89f6-5bcb052746d7",
    image: "images/products/kim-store/nivea lotion.png",
    name: "NIVEA Body Lotion 400ml",
    rating: {
      stars: 4.5,
      count: 235
    },
    priceCents: 749,
    keywords: [
      "lotion",
      "beauty",
    ],
  },
  {
    id: "aad29d11-ea98-41ee-9285-b916638cac4a",
    image: "images/products/kim-store/powerking extension 5.png",
    name: "Power King Extension Cable 5-way",
    rating: {
      stars: 4.5,
      count: 30
    },
    priceCents: 400,
    keywords: [
      "extension",
      "electronics",
      "cables"
    ]
  },
  {
    id: "04701903-bc79-49c6-bc11-1af7e3651358",
    image: "images/products/kim-store/skyworth 55.png",
    name: "Skyworth 55' 4K QLED Android TV",
    rating: {
      stars: 4.5,
      count: 562
    },
    priceCents: 54399,
    keywords: [
      "tv",
      "skyworth",
      "electronics",
    ]
  },
  {
    id: "901eb2ca-386d-432e-82f0-6fb1ee7bf969",
    image: "images/products/kim-store/richripple computer stand.png",
    name: "Richripple Portable Foldable Plastic Computer Stand",
    rating: {
      stars: 4.5,
      count: 232
    },
    priceCents: 350,
    keywords: [
      "stand",
    ]
  },
  {
    id: "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
    image: "images/products/kim-store/velvex dishwashing liquid.png",
    name: "Velvex Dishwashing Liquid Orange 5 Litres",
    rating: {
      stars: 4,
      count: 160
    },
    priceCents: 529,
    keywords: [
      "dishwash",
      "liquid",
    ]
  },
  {
    id: "c2a82c5e-aff4-435f-9975-517cfaba2ece",
    image: "images/products/kim-store/defacto girls backpack.png",
    name: "Defacto Girls Casual Backpack",
    rating: {
      stars: 5,
      count: 846
    },
    priceCents: 1290,
    keywords: [
      "bag",
      "backpack",
    ]
  },
  {
    id: "6b07d4e7-f540-454e-8a1e-363f25dbae7d",
    image: "images/products/kim-store/ailyons blender.png",
    name: "Ailyons Blender 1.5 L",
    rating: {
      stars: 4,
      count: 99
    },
    priceCents: 1570,
    keywords: [
      "blender",
      "grinder"
    ]
  },
  {
    id: "a82c6bac-3067-4e68-a5ba-d827ac0be010",
    image: "images/products/kim-store/nunix hair dryer.png",
    name: "Nunix Hair Red Blow Drier",
    rating: {
      stars: 4,
      count: 215
    },
    priceCents: 999,
    keywords: [
      "dryer",
      "nunix"
    ]
  },
  {
    id: "e4f64a65-1377-42bc-89a5-e572d19252e2",
    image: "images/products/kim-store/richripple phone stand.png",
    name: "Richripple Portable Foldable Phone Stand",
    rating: {
      stars: 4.5,
      count: 52
    },
    priceCents: 255,
    keywords: [
      "stand"
    ]
  },
  {
    id: "b0f17cc5-8b40-4ca5-9142-b61fe3d98c85",
    image: "images/products/kim-store/oraimo earbuds.png",
    name: "Oraimo Freepods Lite Wireless Earbuds",
    rating: {
      stars: 4.5,
      count: 2465
    },
    priceCents: 1955,
    keywords: [
      "earbuds",
      "earpods",
      "oraimo",
      "electronics",
    ],
  },
  {
    id: "a93a101d-79ef-4cf3-a6cf-6dbe532a1b4a",
    image: "images/products/bathroom-rug.jpg",
    name: "Bathroom Bath Rug Mat 20 x 31 Inch - Grey",
    rating: {
      stars: 4.5,
      count: 119
    },
    priceCents: 1250,
    keywords: [
      "bathmat",
      "bathroom",
      "home"
    ]
  },
  {
    id: "4f4fbcc2-4e72-45cc-935c-9e13d79cc57f",
    image: "images/products/women-knit-ballet-flat-black.jpg",
    name: "Women's Knit Ballet Flat",
    rating: {
      stars: 4,
      count: 326
    },
    priceCents: 2640,
    keywords: [
      "shoes",
      "flats",
      "womens",
      "footwear"
    ]
  },
  {
    id: "8b5a2ee1-6055-422a-a666-b34ba28b76d4",
    image: "images/products/men-golf-polo-t-shirt-blue.jpg",
    name: "Men's Regular-Fit Quick-Dry Golf Polo Shirt",
    rating: {
      stars: 4.5,
      count: 2556
    },
    priceCents: 1599,
    keywords: [
      "tshirts",
      "shirts",
      "apparel",
      "mens"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "b86ddc8b-3501-4b17-9889-a3bad6fb585f",
    image: "images/products/trash-can-with-foot-pedal-50-liter.jpg",
    name: "Trash Can with Foot Pedal - Brushed Stainless Steel",
    rating: {
      stars: 4.5,
      count: 2286
    },
    priceCents: 8300,
    keywords: [
      "garbage",
      "bins",
      "cans",
      "kitchen"
    ]
  },
  {
    id: "19c6a64a-5463-4d45-9af8-e41140a4100c",
    image: "images/products/duvet-cover-set-blue-twin.jpg",
    name: "Duvet Cover Set with Zipper Closure",
    rating: {
      stars: 4,
      count: 456
    },
    priceCents: 2399,
    keywords: [
      "bedroom",
      "bed sheets",
      "sheets",
      "covers",
      "home"
    ]
  },
  {
    id: "d2785924-743d-49b3-8f03-ec258e640503",
    image: "images/products/women-chunky-beanie-gray.webp",
    name: "Women's Chunky Cable Beanie - Gray",
    rating: {
      stars: 5,
      count: 83
    },
    priceCents: 1250,
    keywords: [
      "hats",
      "winter hats",
      "beanies",
      "tuques",
      "apparel",
      "womens"
    ]
  },
  {
    id: "ee1f7c56-f977-40a4-9642-12ba5072e2b0",
    image: "images/products/men-chino-pants-beige.jpg",
    name: "Men's Classic-fit Pleated Chino Pants",
    rating: {
      stars: 4.5,
      count: 9017
    },
    priceCents: 2290,
    keywords: [
      "pants",
      "apparel",
      "mens"
    ]
  },
  {
    id: "1c079479-8586-494f-ab53-219325432536",
    image: "images/products/men-athletic-shoes-green.jpg",
    name: "Men's Athletic Sneaker",
    rating: {
      stars: 4,
      count: 229
    },
    priceCents: 3890,
    keywords: [
      "shoes",
      "running shoes",
      "footwear",
      "mens"
    ]
  },
  {
    id: "4df68c27-fd59-4a6a-bbd1-e754ddb6d53c",
    image: "images/products/men-navigator-sunglasses-brown.jpg",
    name: "Men's Navigator Sunglasses Pilot",
    rating: {
      stars: 3.5,
      count: 42
    },
    priceCents: 1690,
    keywords: [
      "sunglasses",
      "glasses",
      "accessories",
      "shades"
    ]
  },
  {
    id: "4e37dd03-3b23-4bc6-9ff8-44e112a92c64",
    image: "images/products/non-stick-cooking-set-15-pieces.webp",
    name: "Non-Stick Cookware Set, Pots, Pans and Utensils - 15 Pieces",
    rating: {
      stars: 4.5,
      count: 511
    },
    priceCents: 6797,
    keywords: [
      "cooking set",
      "kitchen"
    ]
  },
  {
    id: "a434b69f-1bc1-482d-9ce7-cd7f4a66ce8d",
    image: "images/products/vanity-mirror-silver.jpg",
    name: "Vanity Mirror with Heavy Base - Chrome",
    rating: {
      stars: 4.5,
      count: 130
    },
    priceCents: 1649,
    keywords: [
      "bathroom",
      "washroom",
      "mirrors",
      "home"
    ]
  },
  {
    id: "a45cfa0a-66d6-4dc7-9475-e2b01595f7d7",
    image: "images/products/women-french-terry-fleece-jogger-camo.jpg",
    name: "Women's Fleece Jogger Sweatpant",
    rating: {
      stars: 4.5,
      count: 248
    },
    priceCents: 2400,
    keywords: [
      "pants",
      "sweatpants",
      "jogging",
      "apparel",
      "womens"
    ]
  },
  {
    id: "d339adf3-e004-4c20-a120-40e8874c66cb",
    image: "images/products/double-elongated-twist-french-wire-earrings.webp",
    name: "Double Oval Twist French Wire Earrings - Gold",
    rating: {
      stars: 4.5,
      count: 117
    },
    priceCents: 2400,
    keywords: [
      "accessories",
      "womens"
    ]
  },
  {
    id: "d37a651a-d501-483b-aae6-a9659b0757a0",
    image: "images/products/round-airtight-food-storage-containers.jpg",
    name: "Round Airtight Food Storage Containers - 5 Piece",
    rating: {
      stars: 4,
      count: 126
    },
    priceCents: 2899,
    keywords: [
      "boxes",
      "food containers",
      "kitchen"
    ]
  },
  {
    id: "02e3a47e-dd68-467e-9f71-8bf6f723fdae",
    image: "images/products/blackout-curtains-black.jpg",
    name: "Blackout Curtains Set 42 x 84-Inch - Black, 2 Panels",
    rating: {
      stars: 4.5,
      count: 363
    },
    priceCents: 3099,
    keywords: [
      "bedroom",
      "home"
    ]
  },
  {
    id: "10ed8504-57db-433c-b0a3-fc71a35c88a1",
    image: "images/products/knit-athletic-sneakers-pink.webp",
    name: "Waterproof Knit Athletic Sneakers - Pink",
    rating: {
      stars: 4,
      count: 89
    },
    priceCents: 3390,
    keywords: [
      "shoes",
      "running shoes",
      "footwear",
      "womens"
    ]
  },
  {
    id: "77a845b1-16ed-4eac-bdf9-5b591882113d",
    image: "images/products/countertop-blender-64-oz.jpg",
    name: "Countertop Blender - 64oz, 1400 Watts",
    rating: {
      stars: 4,
      count: 3
    },
    priceCents: 1747,
    keywords: [
      "food blenders",
      "kitchen",
      "appliances"
    ]
  },
  {
    id: "aaa65ef3-8d6f-4eb3-bc9b-a6ea49047d8f",
    image: "images/products/kim-store/ailyons iron box.png",
    name: "AILYONS Electric Iron Box",
    rating: {
      stars: 4.5,
      count: 1045
    },
    priceCents: 1100,
    keywords: [
      "iron box",
    ]
  },
  {
    id: "bc2847e9-5323-403f-b7cf-57fde044a955",
    image: "images/products/men-cozy-fleece-zip-up-hoodie-red.jpg",
    name: "Men's Full-Zip Hooded Fleece Sweatshirt",
    rating: {
      stars: 4.5,
      count: 3157
    },
    priceCents: 2400,
    keywords: [
      "sweaters",
      "hoodies",
      "apparel",
      "mens"
    ]
  }
].map((productDetails) => {
  if(productDetails.type === "clothing") {
    return new Clothing(productDetails);
  }
  return new Product(productDetails);
});


/*
// Date class gives us the current date and time
const date = new Date();
console.log(date);
console.log(date.toLocaleTimeString());
*/

/*
function logThis() {
  console.log(this);
}
// use .call to change 'this' to whatever you want
logThis.call('Jesse');
*/