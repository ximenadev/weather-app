import { IconMap } from "../types";

export const getCurrentDate = (): string =>
  new Date().toLocaleDateString('en-US', {
  month: '2-digit',
  day: '2-digit',
  year: '2-digit'
});

export const getDate = (dt: number) => new Date(dt * 1000).toDateString();

//Map for getting icons from https://erikflowers.github.io/weather-icons/
export const iconMap: IconMap = {
  200: 'wi wi-thunderstorm',
  201: 'wi wi-thunderstorm',
  202: 'wi wi-thunderstorm',
  210: 'wi wi-thunderstorm',
  211: 'wi wi-thunderstorm',
  212: 'wi wi-thunderstorm',
  221: 'wi wi-thunderstorm',
  230: 'wi wi-thunderstorm',
  231: 'wi wi-thunderstorm',
  232: 'wi wi-thunderstorm',
  300: 'wi wi-showers',
  301: 'wi wi-showers',
  302: 'wi wi-showers',
  310: 'wi wi-showers',
  311: 'wi wi-showers',
  312: 'wi wi-showers',
  313: 'wi wi-showers',
  314: 'wi wi-showers',
  321: 'wi wi-showers',
  500: 'wi wi-day-rain',
  501: 'wi wi-day-rain',
  502: 'wi wi-day-rain',
  503: 'wi wi-day-rain',
  504: 'wi wi-day-rain',
  511: 'wi wi-snowflake-cold',
  520: 'wi wi-rain',
  521: 'wi wi-rain',
  522: 'wi wi-rain',
  531: 'wi wi-rain',
  600: 'wi wi-snowflake-cold',
  601: 'wi wi-snowflake-cold',
  602: 'wi wi-snowflake-cold',
  611: 'wi wi-snowflake-cold',
  612: 'wi wi-snowflake-cold',
  613: 'wi wi-snowflake-cold',
  615: 'wi wi-snowflake-cold',
  616: 'wi wi-snowflake-cold',
  620: 'wi wi-snowflake-cold',
  621: 'wi wi-snowflake-cold',
  622: 'wi wi-snowflake-cold',
  701: 'wi wi-fog',
  711: 'wi wi-smoke',
  721: 'wi wi-day-haze',
  731: 'wi wi-dust',
  741: 'wi wi-fog',
  751: 'wi wi-sandstorm',
  761: 'wi wi-dust',
  762: 'wi wi-dust',
  771: 'wi wi-windy',
  781: 'wi wi-tornado',
  800: 'wi wi-day-sunny',
  801: 'wi wi-day-cloudy',
  802: 'wi wi-cloudy',
  803: 'wi wi-cloudy',
  804: 'wi wi-cloudy',
};

export const getIconClass= (iconCode: number):string => {
  if (iconMap.hasOwnProperty(iconCode)) {
    return iconMap[iconCode];
  } else {
    return 'wi wi-cloud'; //default if the code it's not in the map
  }
}

export const getColor = (iconCode: number): string => {
  // Convert to string to extract the first character of the icon id
  const firstDigit = iconCode.toString().charAt(0);

  switch (firstDigit) {
    case '2':
      return '#54416d';
    case '3':
      return '#528ab4';
    case '5':
      return '#7bc7dd';
    case '6':
      return '#bcd3d4';
    case '7':
      return '#e3e8e4';
    default:
      return '#ffd191';
  }
};
