import { useContext } from "react";
import { CountContext } from "../context/CounterContext";

//! 3. Custom hook (Kolay kullanım için)
export const useCount = () =>{
    const context = useContext(CountContext);
    if (!context) {
        throw new Error("useCount bir CountProvider içinde kullanılmalıdır")
        
    }
    return context;
} 
