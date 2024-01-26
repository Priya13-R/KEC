
// import {BrowserRouter,Routes,Route} from "react-router-dom"
// import Home from "./Pages/Home"
// import Layout from "./Layout"
// import Contact from "./Pages/Contact"
// import About from "./Pages/About"
// import Service from "./Pages/Service"
// export default function App(){
//   return(
//     <BrowserRouter>
//     <Routes>
//       <Route  path="/" element ={<Layout/>}>
//         <Route index element ={<Home/>}/>
//           <Route path="about" element={<About/>}/>
//           <Route path="contact" element={<Contact/>}/>
//           <Route path="service"element={<Service/>}/>
//       </Route>
//     </Routes>
//     </BrowserRouter>
//   )
// }



// // // import React from 'react'
// // // import Basic from './Event/Basic'
// // // export default function App() {
// // //   return (
// // //     <div><Basic/></div>
// // //   )
// // // }

// // import React from 'react'
// // import Counter from './Counter'
// // export default function App() {
// //   return (
// //     <div><Counter/></div>
// //   )
// // }


import React from 'react'
import Effect from "./Effect"
import Reset from "./Reset"
import Reducer from "./Reducer"
import Callbacks from "./Callbacks"
export default function App() {
  return (
    <div><Effect/><Reset/><Reducer/><Callbacks/></div>
  );
};
