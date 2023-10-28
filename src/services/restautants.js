// import axios from "axios";


// const apiURL = import.meta.env.VITE_API_URL;

class Restaurant {
    constructor(id, name, latitude, longitude, adress, tags) {
        this.id = id;
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.address = adress;
        this.tags = tags
    }
}

export const getRestaurants = async () => {
    await timeout(2000);
    return restaurantsMock.map((restaurant) =>
            new Restaurant(
                restaurant.id,
                restaurant.name,
                restaurant.latitude,
                restaurant.longitude,
                `${restaurant.address.number}, ${restaurant.address.street}, ${restaurant.address.city}, ${restaurant.address.state} `,
                restaurant.tags 
            ))
}

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const getSearch = async (tag) => {
    await timeout(0);
    return restaurantsMock.filter((restaurant) => restaurant.tags.includes(tag))
}



// export const getRestaurants = async () => {

//     const { data } = await axios.get(`${apiURL}/restaurant`)

//     return data.data.restaurants.map((restaurant) =>
//         new Restaurant(
//             restaurant.id,
//             restaurant.name,
//             restaurant.latitude,
//             restaurant.longitude,
//             `${restaurant.number}, ${restaurant.street}, ${restaurant.city}, ${restaurant.state} ` 
//         ))

// }


const restaurantsMock = [
    {
        id: 1,
        name: "Restaurant 1",
        latitude: 40.7128,
        longitude: -74.0060,
        address: {
            street: "Main St",
            number: "1234",
            city: "City",
            state: "State"
        },
        tags: ["indian", "japanese"]
    },
    {
        id: 2,
        name: "Restaurant 2",
        latitude: 40.7218,
        longitude: -74.0059,
        address: {
            street: "Main St",
            number: "1234",
            city: "City",
            state: "State"
        },
        tags: ["chinese", "japanese"]
    },
];