import '../App.css';
import { IoIosSunny } from "react-icons/io";
import { MdWbTwilight } from "react-icons/md";
import { FaWater } from "react-icons/fa6";
import { MdNightlight } from "react-icons/md";



// Dummy data and watering times function (unchanged for brevity)
const dummyWeatherData = {
  current: {
    temp: 22.5,
    humidity: 65,
    weather: [{ description: "partly cloudy" }],
  },
  hourly: [
    { dt: 1697080800, temp: 24.0, weather: [{ description: "partly cloudy" }] },
    { dt: 1697116800, temp: 27.5, weather: [{ description: "partly cloudy" }] },
    { dt: 1697131200, temp: 20.0, weather: [{ description: "clear" }] },
  ],
};

const getWateringTimes = (hourlyData) => [
  { label: "Early Morning", time: "06:00 AM", temp: 20.0 },
  { label: "Late Afternoon", time: "05:00 PM", temp: 25.0 },
  { label: "Evening", time: "08:00 PM", temp: 21.5 },
];

function HomePage() {
  const wateringTimes = getWateringTimes(dummyWeatherData.hourly);

  return (
    <div className="min-h-screen bg-gradient-to-br  from-[#D3FFF3] via-[#B8E6D8] to-[#A8E6CF] flex flex-col mt-0 items-center  font-cool ">
      {/* Header */}
      {/* <h1 className="text-5xl font-extrabold text-[#2D6A4F] mb-12 tracking-tight drop-shadow-md">
        Weather Dashboard
      </h1> */}

      {/* Main Grid Container */}
      <div className="grid grid-cols-1 mt-32 md:grid-cols-2 gap-6 w-full max-w-5xl">
        {/* Weather Data Card */}
        <div className="bg-[#74C69D] bg-opacity-95 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
          <div className="flex items-center mb-6">
            <IoIosSunny className="material-icons text-white text-3xl mr-3 " />
            <h2 className="text-3xl font-semibold text-white">Current Weather</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 text-[#1B4332]">
            <div className="flex items-center p-3 bg-[#F1FAEE] rounded-lg">
              <span className="material-icons text-[#74C69D] mr-3">thermostat</span>
              <p className="text-lg">
                <strong>Temp:</strong> <span className="ml-2">{dummyWeatherData.current.temp}°C</span>
              </p>
            </div>
            <div className="flex items-center p-3 bg-[#F1FAEE] rounded-lg">
              <span className="material-icons text-[#74C69D] mr-3">cloud</span>
              <p className="text-lg">
                <strong>Condition:</strong> <span className="ml-2 capitalize">{dummyWeatherData.current.weather[0].description}</span>
              </p>
            </div>
            <div className="flex items-center p-3 bg-[#F1FAEE] rounded-lg">
              <span className="material-icons text-[#74C69D] mr-3">water_drop</span>
              <p className="text-lg">
                <strong>Humidity:</strong> <span className="ml-2">{dummyWeatherData.current.humidity}%</span>
              </p>
            </div>
          </div>
        </div>

        {/* Watering Suggestions Card */}
        <div className="bg-white bg-opacity-95 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
          <div className="flex items-center mb-6">
            <FaWater  className="material-icons text-[#74C69D] text-3xl mr-3"/>
            <h2 className="text-3xl font-semibold text-[#40916C]">Watering Suggestions</h2>
          </div>
          <p className="text-[#52796F] mb-6 text-sm italic">
            Optimal times to water your plants based on today’s forecast:
          </p>
          <div className="grid grid-cols-1 gap-4">
            {wateringTimes.map((time, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-[#F1FAEE] rounded-lg hover:bg-[#E6F4E2] transition-colors duration-200"
              >
                <span className="material-icons text-[#74C69D] mr-4 text-2xl">{getIconForTime(time.label)}</span>
                <div>
                  <p className="text-lg font-medium text-[#2D6A4F]">{time.label}</p>
                  <p className="text-sm text-[#52796F]">
                    {time.time} • {time.temp}°C
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function getIconForTime(label) {
  switch (label) {
    case "Early Morning":
      return <MdWbTwilight className='mb-7' />;
    case "Late Afternoon":
      return <IoIosSunny className='mb-7'/>;
    case "Evening":
      return <MdNightlight />
      ;
    default:
      return "schedule";
  }
}

export default HomePage;