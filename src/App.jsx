
// import React, { useState } from "react";
// import Search from "./component/Search";
// import axios from "axios";

// export default function App() {
// const [searchs,setSearch]=useState('')
// const [results,setResults]=useState([])



// const clickHandeler = (e) => {
  

//   axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=15f49003&s=${searchs}`)
// .then(res => setSearch(res.data.Search) )
// .catch(eroor=> console.log(eroor) )
// }



//   return (
//     <div className="min-h-screen  text-white">
//       <header className="bg-gray-800 px-6 py-5 ">
//         <h1 className="text-center text-3xl font-bold">
//           Movie App
//         </h1>

//         <Search 
//         searchs={searchs} 
//         setSearch={setSearch}
//          clickHandeler={clickHandeler}/>
//       </header>
//     </div>
//   );
// }







// import React, { useState } from "react";
// import Search from "./component/Search";
// import axios from "axios";
// import Resualt from "./component/Resualt";
// import './App.css'
// import Detail from "./component/Detail";
// export default function App() {
//   // 1. searchs باید رشته باشد (متنی که کاربر تایپ می‌کند)
//   const [searchs, setSearchs] = useState(""); 
  
//   // 2. results باید آرایه باشد (لیست فیلم‌هایی که از API می‌آیند)
//   const [results, setResults] = useState([]);
//   const [selected, setSelected] = useState({});

//   const clickHandeler = (e) => {
//     // جلوگیری از رفرش شدن صفحه (اگر داخل فرم است)
//     if (e) e.preventDefault();

//     // اگر کاربر چیزی تایپ نکرده بود، درخواست نفرست
//     if (!searchs.trim()) return;

//     // اصلاح URL: حذف i= و استفاده از s= و encode کردن متن برای کاراکترهای خاص
//     axios.get(`:https://www.omdbapi.com/?apikey=15f49003&s=${encodeURIComponent(searchs)}`)
//       .then(res => {
//         if (res.data.Response === "True") {
//           // نتایج را در استیت results ذخیره می‌کنیم
//           setResults(res.data.Search);
//         } else {
//           // اگر فیلمی پیدا نشد، لیست را خالی می‌کنیم
//           setResults([]);
//           alert(res.data.Error); // نمایش پیام خطا از سمت API
//         }
//       })
//       .catch(error => {
//         console.error("خطا در دریافت داده‌ها:", error);
//       });
//   };

//   const openDetails=(id)=>{
//     axios.get(`http://www.omdbapi.com/?i=${id}&apikey=15f49003`)
//     .then(data =>setSelected(data))
// .catch(eroor => console.log(eroor))
//   }

// const closed=()=>{
//   setSelected({})
// }
//   return (
//     <div className="w-100 main-wrapper flex items-center min-vh-100">
//       {typeof 
//         selected.Title != 'undefined' ? <Detail selected={selected} closed={closed}/> :

//             <header className="w-100 text-center mt-5 ">
//         <h1 className="text-center text-3xl font-bold">
//           Movie App
//         </h1>

//         <Search 
//           searchs={searchs}       // متن تایپ شده
//           setSearchs={setSearchs} // تابع تغییر متن
//           clickHandeler={clickHandeler} // تابع جستجو
//         />

//         <div className="container mt-5">
//           <div className="row">
      
//               {
//                 results.map(move =>(
//                      <div className="col-12 col-sm-6 col-md-3 col-lg-3 my-2">
//                       <Resualt
                  
//                        move={move}
//                        openDetails={openDetails}/>
                   
                       
//                       </div>
//                 ))
//               }
            
//           </div>
//         </div>
//       </header>
        
//       }
  

 
//     </div>
//   );
// }















// import React, { useState } from "react";
// import axios from "axios";
// import Search from "./component/Search";
// import Resualt from "./component/Resualt";
// import Detail from "./component/Detail";
// import './App.css';

// export default function App() {

//   const [searchs, setSearchs] = useState(""); 
  

//   const [results, setResults] = useState([]);
  
//   const [selected, setSelected] = useState({});


//   const clickHandeler = (e) => {
//     if (e) e.preventDefault();
//     if (!searchs.trim()) return;

//      axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=15f49003&s=${searchs}`)
//       .then(res => {
//         if (res.data.Response === "True") {
//           setResults(res.data.Search);
//         } else {
//           setResults([]);
//           alert(res.data.Error);
//         }
//       })
//       .catch(error => {
//         console.error("خطا در دریافت لیست فیلم‌ها:", error);
//       });
//   };

//   const openDetails = (id) => {
//     axios.get(`https://www.omdbapi.com/?i=${id}&apikey=15f49003`)
//       .then(res => {
//         if (res.data.Response === "True") {
    
//           setSelected(res.data); 
//         } else {
//           alert("جزئیات فیلم یافت نشد!");
//         }
//       })
//       .catch(error => {
//         console.error("خطا در دریافت جزئیات فیلم:", error);
//       });
//   };

  
//   const closed = () => {
//     setSelected({}); 
//   };

//   return (
//     <div className="w-100 main-wrapper flex items-center min-vh-100">
  
//       {selected && selected.Title ? (
//         <Detail selected={selected} closed={closed} />
//       ) : (
//         <header className="w-100 text-center mt-5">
//           <h1 className="text-center text-3xl font-bold mb-4">
//             Movie App
//           </h1>

//           <Search 
//             searchs={searchs}
//             setSearchs={setSearchs}
//             clickHandeler={clickHandeler}
//           />

//           <div className="container mt-5">
//             <div className="row">
//               {results.length > 0 ? (
//                 results.map((move, index) => (
//                   <div key={move.imdbID || index} className="col-12 col-sm-6 col-md-4 col-lg-3 my-2">
//                     <Resualt 
//                       move={move} 
//                       openDetails={openDetails} 
//                     />
//                   </div>
//                 ))
//               ) : (
//                 <div className="col-12 text-center text-muted">
//                   <p>No movies found. Try searching something!</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </header>
//       )}
//     </div>
//   );
// }






import React, { useState } from "react";
import axios from "axios";
import Search from "./component/Search";
import Result from "./component/Resualt"; 
import Detail from "./component/Detail";
import './App.css';


const API_KEY = "15f49003";
const BASE_URL = "https://www.omdbapi.com/";

export default function App() {
  const [searchTerm, setSearchTerm] = useState(""); 
  const [results, setResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null); 

  const handleSearch = async (e) => {
    if (e) e.preventDefault();
    if (!searchTerm.trim()) return;

    try {
      const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&s=${searchTerm}`);
      
      if (response.data.Response === "True") {
        setResults(response.data.Search);
      } else {
        setResults([]);
        alert(response.data.Error);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const openDetails = async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}?i=${id}&apikey=${API_KEY}`);
      if (response.data.Response === "True") {
        setSelectedMovie(response.data); 
      } else {
        alert("Movie details not found!");
      }
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  const closeDetails = () => {
    setSelectedMovie(null); 
  };

  return (


  <div className="container-fluid main-wrapper min-vh-100 d-flex flex-column justify-content-center align-items-center">
    
    {selectedMovie ? (
      <Detail selected={selectedMovie} closed={closeDetails} />
    ) : (
      <div className="w-100">
        <header className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-4">Movie App</h1>

       
          <div className="d-flex justify-content-center">
            <Search 
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              handleSearch={handleSearch}
            />
          </div>
        </header>

        <div className="container">
          <div className="row justify-content-center"> 
            {results.length > 0 ? (
              results.map((movie) => (
                <div key={movie.imdbID} className="col-12 col-sm-6 col-md-4 col-lg-3 my-2">
                  <Result 
                    movie={movie} 
                    openDetails={openDetails} 
                  />
                </div>
              ))
            ) : (
              <div className="col-12 text-center text-muted">
                <p>No movies found. Try searching something!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )}
  </div>
);




}
