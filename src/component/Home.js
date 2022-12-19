import car from "./car.jpg"
function HomeComponent() {

  return (
    <>
    <img src={car} alt={"car battery"} className='batteryImage' height={"200px"} width={"200px"}/>
    
    </>
  );
}

export default HomeComponent;