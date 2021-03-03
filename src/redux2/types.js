const types = {
  UI__TOGGLE_MENU: "UI__TOGGLE_MENU",
  UI__GUEST_USER_INFO_MODAL_STATUS: "UI__GUEST_USER_INFO_MODAL_STATUS",
  UI__START_LOADER: "UI__START_LOADER",
  UI__STOP_LOADER: "UI__STOP_LOADER",
  // ======================================================================
  // Products types
  // ======================================================================
  PRODUCTS__ERROR_RESET: "PRODUCTS__ERROR_RESET",
  PRODUCTS__SET_SELECTED_PRODUCT: "PRODUCTS__SET_SELECTED_PRODUCT",
  PRODUCTS__UPDATE_SELECTED_PRODUCT: "PRODUCTS__UPDATE_SELECTED_PRODUCT",
  PRODUCTS__CLEAR_SELECTED_PRODUCT: "PRODUCTS__CLEAR_SELECTED_PRODUCT",

  PRODUCTS__FETCH_CATEGORIES_START: "PRODUCTS__FETCH_CATEGORIES_START",
  PRODUCTS__FETCH_CATEGORIES_SUCCESS: "PRODUCTS__FETCH_CATEGORIES_SUCCESS",
  PRODUCTS__FETCH_CATEGORIES_FAIL: "PRODUCTS__FETCH_CATEGORIES_FAIL",

  PRODUCTS__FETCH_PRODUCTS_BY_CATEGORY_START:
    "PRODUCTS__FETCH_PRODUCTS_BY_CATEGORY_START",
  PRODUCTS__FETCH_PRODUCTS_BY_CATEGORY_SUCCESS:
    "PRODUCTS__FETCH_PRODUCTS_BY_CATEGORY_SUCCESS",
  PRODUCTS__FETCH_PRODUCTS_BY_CATEGORY_FAIL:
    "PRODUCTS__FETCH_PRODUCTS_BY_CATEGORY_FAIL",
  // ======================================================================
  // ShoppingCart types
  // ======================================================================
  CART__ADD_PRODUCT: "CART__ADD_PRODUCT",
  CART__UPDATE_PRODUCT: "CART__UPDATE_PRODUCT",
  CART__REMOVE_PRODUCT: "CART__REMOVE_PRODUCT",
  CART__RESET_CART_START: "CART__RESET_CART_START",
  CART__RESET_CART_PROCESS: "CART__RESET_CART_PROCESS",
  CART__START_FINISH_ORDER: "CART__START_FINISH_ORDER",
  CART__PROCESS_FINISH_ORDER: "CART__PROCESS_FINISH_ORDER",
  CART__MOVE_USER_INFO_TO_CART: "CART__MOVE_USER_INFO_TO_CART",
  // ======================================================================
  // User types
  // ======================================================================
  USER__SET_INFO: "USER__SET_INFO",
  USER__RESET_INFO: "USER__RESET_INFO",
  USER__ERROR_RESET: "USER__ERROR_RESET",
  USER__START_CHECK_LOGGED_USER: "USER__START_CHECK_LOGGED_USER",

  USER__START_PASSWORD_RECOVER: "USER__START_PASSWORD_RECOVER",
  USER__SUCCESS_PASSWORD_RECOVER: "USER__SUCCESS_PASSWORD_RECOVER",
  USER__FAIL_PASSWORD_RECOVER: "USER__FAIL_PASSWORD_RECOVER",

  USER__START_CREATE_NEW_USER: "USER__START_CREATE_NEW_USER",
  USER__SUCCESS_CREATE_NEW_USER: "USER__SUCCESS_CREATE_NEW_USER",
  USER__FAIL_CREATE_NEW_USER: "USER__FAIL_CREATE_NEW_USER",

  USER__START_LOGGIN: "USER__START_LOGGIN",
  USER__SUCCESS_LOGGIN: "USER__SUCCESS_LOGGIN",
  USER__FAIL_LOGGIN: "USER__FAIL_LOGGIN",

  USER__START_FETCH_USER_INFO: "USER__START_FETCH_USER_INFO",

  // ======================================================================
  // Orders types
  // ======================================================================
  ORDERS__FETCH_INFO_START: "ORDERS__FETCH_INFO_START",
  ORDERS__FETCH_INFO_SUCCESS: "ORDERS__FETCH_INFO_SUCCESS",
  ORDERS__FETCH_INFO_FAIL: "ORDERS__FETCH_INFO_FAIL",
  ORDERS__ERROR_RESET: "ORDERS__ERROR_RESET",
};

export default types;
