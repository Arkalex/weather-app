import { apiKey, citiesId} from  './../utils/data';

export function getWeather() {
    const query = citiesId.join(',');
    return fetch(`https://api.openweathermap.org/data/2.5/group?id=${query}&appid=${apiKey}&units=metric`)
        .then(data => data.json());
}
