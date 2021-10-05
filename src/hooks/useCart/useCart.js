import { useEffect, useState } from "react";
import getCartFromDB from "../getCartFromDB";


const useCart = () => {
    const [cart, setCart] = useState({ cart: [] });
    useEffect(() => getCartFromDB(setCart), []);

    return [cart, setCart];
};

export default useCart;