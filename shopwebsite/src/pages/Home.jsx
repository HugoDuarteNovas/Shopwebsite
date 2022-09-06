import middle from "../image/middle.jpg";
export default function Home() {
  //nur javascript, ab return darf man html

  return (
    <div>
      <h1 className="title"> Welcome to Vuarte </h1>
      <p></p>
      <h2 className="gotoshop">New collection out now!</h2>
      <p></p>
      <img src={middle} alt="wait until the page loads" />
      <p></p>
      <button type="button">Go to shop</button>
    </div>
  );
}
