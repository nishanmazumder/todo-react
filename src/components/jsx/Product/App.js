import { useState } from "react";

const PRODUCTS = [
   { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
   { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
   { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
   { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
   { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
   { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];


function ProductCat({ category }) {
   return (
      <tr>
         <th>{category}</th>
      </tr>
   )
}

function ProductSearch({ searchProduct, productStock }) {
   return (
      <div className="searchbar">
         <input type="text" placeholder="Search..." onChange={(e) => searchProduct(e.target.value)} />
         <label>
            <input type="checkbox" onChange={(e) => productStock(e.target.checked)} /> Show Stock Product only
         </label>
      </div>
   )
}

function Product({ product }) {
   return (
      <tr>
         <td>{product.name}</td>
         <td>{product.price}</td>
      </tr>
   )
}


function ProductTable({ searchProduct, productStock }) {

   const productRows = [];
   let lastCategory = null;

   PRODUCTS.map((product) => {

      if (product.name.toLowerCase().indexOf(searchProduct.toLowerCase()) === -1) {
         return
      }

      if (product.category !== lastCategory) {
         productRows.push(
            <ProductCat key={product.category} category={product.category} />
         )
      }

      // product stock check
      if (productStock && !product.stocked) {
         return
      }

      productRows.push(
         <Product key={product.name} product={product} />
      )



      lastCategory = product.category
   })

   return (
      <div>
         <table>
            <thead>
               <tr>
                  <th>Name</th>
                  <th>Price</th>
               </tr>
            </thead>
            <tbody>
               {productRows}
            </tbody>
         </table>

      </div>
   )
}

export default function FilterProductTable() {

   const [isStock, setIsStock] = useState('');
   const [fileterTxt, setFileterTxt] = useState('');

   return (
      <>
         <ProductSearch productStock={setIsStock} searchProduct={setFileterTxt} />
         <ProductTable productStock={isStock} searchProduct={fileterTxt} />
      </>
   )
}
