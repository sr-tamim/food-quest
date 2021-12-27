import { useEffect, useState } from "react";
import getCartFromDB from "../utilities/getCartFromDB";


const useCart = () => {
    const [cart, setCart] = useState({ items: [] });
    useEffect(() => getCartFromDB(setCart), []);

    return [cart, setCart];
};

export default useCart;