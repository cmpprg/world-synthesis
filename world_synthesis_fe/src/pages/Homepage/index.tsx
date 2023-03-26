import spinningGlobe from "assets/spinning_globe_earth_regular.gif";

const Homepage = () => {
  return (
    <div>
      <img src={spinningGlobe} className="spinning globe" alt="spinning globe earth" />
      <h1>World Synthesis</h1>
      <h2>Synthesizing a better world through collaboration</h2>
    </div>
  )
}

export default Homepage;