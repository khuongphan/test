import { CartState } from "../components/features/Cart/cartSlice";
import { Cart } from "./types";

export function CalculateTotalCost(cart: Cart) {
    var total = cart.items?.reduce((prev, current) => { return { totalCost : prev.totalCost + current.totalCost } },{totalCost : 0.0}).totalCost || 0.0;
    return total;
}
