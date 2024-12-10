// import { useEffect, useState } from "react";
import "./App.css";
import News from "./News";

function App() {
  // let [results,setResults]=useState([])

  //   useEffect(() => {
  //     // fetch(
  //     //   "https://newsdata.io/api/1/latest?apikey=pub_56576fa2779cdfe4337d931096e619cd86db9&q=pizza"
  //     // )
  //       .then((response) => response.json())
  //       .then((news) => {
  //         setResults(news.results);
  // console.log(news.results);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, []);

  return (
    <>
      <header className="header">
        <h1>🆕S3️6🌐 </h1>
        <h1>
          News-<span>360</span>
        </h1>

        <input type="text" placeholder="Search News" />
      </header>

      <section className="news-article">
        {/* {results.map((result) => {
          return <News result={result}/>;
        })} */}

<News />
      </section>
    </>
  );
}

export default App;
