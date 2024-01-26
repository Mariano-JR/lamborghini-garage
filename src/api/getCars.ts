import axios from "axios"

import { CarModel } from "../components/CardView/props"
import { CAR_API_BASE_URL } from "../constants/car"

interface ApiResponse{
    cars: CarModel[]
}

export const fetchGetCarDetails = async(id: number) => {
    try {
        const response = await axios.get<ApiResponse>(CAR_API_BASE_URL)
        const carData = response.data.cars.find(car => car.id === id) || null

        return carData
    } catch(err) {
        console.error("Erro ao buscar dados da api", err)
    }
}