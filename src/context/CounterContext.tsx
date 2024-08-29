import { createContext, useContext, useState, ReactNode, } from "react"

//! 1. Context oluşturma
interface CounterContextProps {
    countShop: number;
    countWhis:number;
    incrementShop: () => void;
    incrementWhislist: () => void;
}

const CountContext =  createContext<CounterContextProps | undefined>(undefined)

//! 2. Provider bileşeni
export const CountProvider = ({children}:{children:ReactNode}) => {
    const [countShop, setCountShop] = useState<number>(0)
    const [countWhis, setCountWhis] = useState<number>(0)

    const incrementShop = () => setCountShop(countShop + 1)
    const incrementWhislist = () => setCountWhis(countWhis + 1)

        return (
            <CountContext.Provider value={{countShop, incrementShop, countWhis, incrementWhislist}}>
                {children}
            </CountContext.Provider>
        )
}



//! 3. Custom hook (Kolay kullanım için)
export const useCount = () =>{
    const context = useContext(CountContext);
    if (!context) {
        throw new Error("useCount bir CountProvider içinde kullanılmalıdır")
        
    }
    return context;
} 
