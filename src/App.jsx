// import React, { useEffect } from "react";

import { Route, Routes } from "react-router-dom";

// import { useEffect, useState } from "react"

// import { useState } from "react";

// function Api() {
// const [data,setData]=useState([])
//   const Apifetch=async ()=>{
//     try {
//       const res=await fetch("https://dummyjson.com/products")
//       const apidata =await res.json()
//       // console.log(data.products);

//      let filterdata= apidata.products.filter((items)=> items.price > 10)
// setData(filterdata)

//     } catch (error) {
//       console.log(error);

//     }
//   }

//   useEffect(()=>{
//     Apifetch();
//   },[Apifetch])

//   return(
// <>

// {data.map((item)=>
// <>
//   <p>{item.title}</p>
//   <img src={item.thumbnail} alt="" />
//   <h3>{item.price}</h3>
//   </>
// )}
// <h1>hello</h1> 




// </>

//   )


// }

// export default Api




// import { useState } from "react";


// const MyForm = () => {
//   //js start
//   const [firstname, setfirstname] = useState('');
//  const  Handleform = (e) => {
//     e.preventDefault();
//     console.log(firstname)
//     setfirstname("")
//     setlastname("")
//   }

//   //js end
//   return (
//     //html start
//     <>
//       <form onSubmit={Handleform}>
//         <input type="text" name="firstname" placeholder="first name" value={firstname} onChange={(e) => setfirstname(e.target.value)} />
//  <input type="text" name="lastname" placeholder="last name" value={lastname} onChange={(e) => setlastname(e.target.value)} />

//       </form>
//       <button onClick={Handleform}>ok</button>
//       <h1>
//         {firstname} 
//       </h1>
//     </>
//     //html end
//   )

// }


// export default MyForm;








// import { useState } from "react";


// const MyForm = () => {
//   //js start

//   const [data, setData] = useState({
//     firstname: (""),
//     lastname: ("")
//   })


//   const handleOnChange = (e) => {
//     const { value, name } = e.target;
//     setData((prev) => ({
//       ...prev,   
//       [name]: value
//     }))

//   }
//   const Handleform = (e) => {
//     e.preventDefault();

//     console.log(data.firstname, data.lastname, "check")
//   }

//   //js end
//   return (
//     //html start
//     <>
//       <form onSubmit={Handleform}>
//         <input type="text" name="firstname" placeholder="first name" value={data.firstname} onChange={handleOnChange} />
//         <input type="text" name="lastname" placeholder="last name" value={data.lastname} onChange={handleOnChange} />

//       </form>
//       <button onClick={Handleform}>ok</button>
//       {/* <h1>
//         {data.firstname}
//         {data.lastname}
//       </h1> */}
//     </>
//     //html end
//   )

// }


// export default MyForm;




// api post

// import React from "react";
// import { useState, useEffect } from "react";



// function Formhandle() {
//   const [data, setData] = useState({
//     firstname: "",
//     lastname: "",
//     age: ""
//   })

//   let Handleform = (e) => {
//     const { name, value } = e.target
//     console.log(`${name} : ${value}`);
//     setData((pre) => ({
//       ...pre,
//       [name]: value
//     }))

//   }


//   const handleSumbit = async (e) => {
//     e.preventDefault()
//     console.log(data.firstname, data.lastname, data.age);



//     try {
//       const res = await fetch("http://192.168.1.30:3000/test", {


//         method: "POST",

//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       })
//       console.log(res);

//     } catch (error) {
//       console.log(error);

//     }


//     setData({
//       firstname: "",
//       lastname: "",
//       age: ""
//     })

//   }

//   return (
//     <>
//       <form onSubmit={handleSumbit}>
//         <input type="text" name="firstname" id="firstname" value={data.firstname} onChange={Handleform} />
//         <input type="text" name="lastname" id="lastname" value={data.lastname} onChange={Handleform} />
//         <input type="number" name="age" id="age" value={data.age} onChange={Handleform} />
//         <button type="sumbit">ok</button>
//       </form>
//       <h1>hello</h1>

//     </>
//   )

// }

//  


// import Api from "./Componants/Apicom"

// function App() {
//   let a = "khaat"
//   return (
//     <>
//       <Api data={a} />
//     </>

//   )

// }

// export default App;








// import Api from "./Componants/Apicom"

// function App(){
//   let a="lion";
//   return(
//     <>
//     <Api data={a}/>
//  </>
//   )
// }

// export default App












// function Loading() {
//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h2>Loading...</h2>
//     </div>
//   );
// }


// function App() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true); 
//   const [error, setError] = useState(null);     

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const result = await response.json();
//         setData(result);
//       } catch (err) {
//         console.error('Error fetching data:', err);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);


//   if (loading) {
//     return <Loading/>;
//   }


//   if (error) {
//     return (
//       <div style={{ color: 'red', textAlign: 'center', marginTop: '50px' }}>
//         <h3>Error: {error}</h3>
//       </div>
//     );
//   }


//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>User List</h1>
//       <ul>
//         {data.map((user) => (
//           <li key={user.id}>
//             <strong>{user.name}</strong> - {user.email}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;






// import { useState } from "react";

// function myform() {
//   const [data, setData] = useState({
//     firstname: ("")
//   })

//   function handleonchange(e){
//     const {value, name}= e.target;
//      setData((prev) => ({
//       ...prev,   
//       [name]: value
//     }))





//   }

//   function submit(e){
//     e.preventDefault();
//     console.log(data.firstname);
    
//   }
//   return (
//     <>
//     <form onSubmit={submit}>
//         <input type="text" name="firstname" value={firstname} placeholder="enter the name" onChange={handleonchange} />
//     </form>
//     </>
//   )
// }

// export default myform;








// import React, { useState } from "react";

// function App() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: ""
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     alert("Form submitted successfully!");
//     setFormData({ name: "", email: "", message: "" }); // Reset form
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="max-w-md w-full p-6 bg-white rounded-xl shadow-lg">
//         <h2 className="text-2xl font-bold text-center mb-4">Contact Form</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full border border-gray-300 px-3 py-2 rounded-md"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full border border-gray-300 px-3 py-2 rounded-md"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium">Message</label>
//             <textarea
//               name="message"
//               rows="4"
//               value={formData.message}
//               onChange={handleChange}
//               required
//               className="w-full border border-gray-300 px-3 py-2 rounded-md"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default App;



import Home from "./Componants/Home";
import About from "./Componants/About";
import ProductDetails from "./Componants/ProductDetails";
function App(){
   return(
    <>
    <Routes>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/product/:id" element={<ProductDetails/>}></Route>
    </Routes>
    </>
   ) 
}

export default App;