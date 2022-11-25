import axios from 'axios'

const headerConfig = {
    headers: { 'x-access-token': localStorage.getItem('token') }
}

export const getBookList = () => {
    let res = axios.get("https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book", headerConfig)
    return res;
}

export const AddToCart = (id) => {
    let res = axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_cart_item/${id}`, id, headerConfig)
    return res;
}

export const GetCartItems = () => {
    let res = axios.get(`https://bookstore.incubation.bridgelabz.com/bookstore_user/get_cart_items`, headerConfig)
    return res;
}

export const cartItemQuantity = (countObj) => {
    let response = axios.put(`https://bookstore.incubation.bridgelabz.com/bookstore_user/cart_item_quantity/${countObj.cartItem_id}`, countObj, headerConfig)
    return response
}

export const DeleteCartItem = (id) => {
    let res = axios.delete(`https://bookstore.incubation.bridgelabz.com/bookstore_user/remove_cart_item/${id}`, headerConfig)
    return res;
}

export const AddToWishList = (id) => {
    let res = axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_wish_list/${id}`, id, headerConfig)
    return res;
}

export const GetWishList = () => {
    let res = axios.get("https://bookstore.incubation.bridgelabz.com/bookstore_user/get_wishlist_items", headerConfig)
    return res;
}

export const DeleteWishListItem = (id) => {
    let res = axios.delete(`https://bookstore.incubation.bridgelabz.com/bookstore_user/remove_wishlist_item/${id}`, headerConfig)
    return res;
}

export const AddOrder = (orderObj) => {
    let response = axios.post('https://bookstore.incubation.bridgelabz.com/bookstore_user/add/order', orderObj, headerConfig)
     return response
}

export const EditUser = (customerObj) => {
    let response = axios.put('https://bookstore.incubation.bridgelabz.com/bookstore_user/edit_user', customerObj, headerConfig)
      return response
}