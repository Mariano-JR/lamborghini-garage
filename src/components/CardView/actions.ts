import { fetchGetCarDetails } from "../../api/getCars"
import { CarModel } from "./props"

export const loadCarData = async(id: number, setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>) => {
    try {
        const response = await fetchGetCarDetails(id)
        if(!response) throw new Error("Carro não encontrado")

        setCarData(response)
    } catch(err) {
        setCarData(null)
        console.error("Erro ao buscar da API", err)
    }
}

export const handlePreviousItem = async(carData: CarModel | null, setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>) => {
   try {
    if(carData && carData?.id > 1) {
        const response = await fetchGetCarDetails(carData.id - 1)
        if(!response) throw new Error("Carro não encontrado")

        setCarData(response)
    }
   } catch(err) {
    setCarData(null)
    console.error("Erro ao chamar a API", err);
   }
}

export const handleNextItem = async(carData: CarModel | null, setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>) => {
    try {
        if(carData && carData?.id < 10) {
            const response = await fetchGetCarDetails(carData.id + 1)
            if(!response) throw new Error("Carro não encontrado")
    
            setCarData(response)
        }
       } catch(err) {
        setCarData(null)
        console.error("Erro ao chamar a API", err);
       }
}