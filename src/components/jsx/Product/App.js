const PRODUCTS = [
   { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
   { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
   { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
   { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
   { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
   { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];


export default function ProductTable() {
   return (
      <div>
         <div className="searchbar">
            <input type="text" placeholder="Search..." />
         </div>
         <label>
            <input type="checkbox" />
            Show Stock Product only
         </label>
         <ul>
            {
               PRODUCTS.map((product, i) => (
                  <li key={i}>{product.name}</li>
               ))
            }
         </ul>
      </div>
   )
}
