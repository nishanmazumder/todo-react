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
function Product({ product }) {
   return (
      <tr>
         <td>{product.name}</td>
         <td>{product.price}</td>
      </tr>
   )
}


export default function ProductTable() {

   const productRows = [];
   let lastCategory = null;

   PRODUCTS.map((product) => {
      if (product.category !== lastCategory) {
         productRows.push(
            <ProductCat key={product.category} category={product.category} />
         )
      }

      productRows.push(
         <Product key={product.name} product={product} />
      )

      lastCategory = product.category
   })

   return (
      <div>
         <div className="searchbar">
            <input type="text" placeholder="Search..." />
         </div>
         <label>
            <input type="checkbox" />
            Show Stock Product only
         </label>
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
