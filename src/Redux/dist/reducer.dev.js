"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reduxPersist = require("redux-persist");

var _types = _interopRequireDefault(require("./types"));

var _storage = _interopRequireDefault(require("redux-persist/lib/storage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var persistConfig = {
  key: 'root',
  storage: _storage["default"],
  whitelist: ['']
};
var INITIAL_STATE = {
  userInfo: {
    userToken: "",
    userId: "",
    department: null,
    userName: ""
  },
  allTasks: null,
  snackbar: {
    isOpen: false,
    isError: false,
    message: ""
  }
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types["default"].SET_USER_TOKEN:
      return _objectSpread({}, state, {
        userInfo: {
          userToken: action.payload.token,
          userId: action.payload.id,
          department: action.payload.department,
          userName: action.payload.name
        }
      });

    case _types["default"].SET_ALL_TASKS:
      return _objectSpread({}, state, {
        allTasks: action.payload
      });

    case _types["default"].ACTIVATE_SNACKBAR:
      return _objectSpread({}, state, {
        snackbar: {
          isOpen: true,
          isError: action.payload.isError,
          message: action.payload.message
        }
      });

    case _types["default"].DEACIVATE_SNACKBAR:
      return _objectSpread({}, state, {
        snackbar: {
          isOpen: false,
          isError: false,
          title: "",
          message: ""
        }
      });

    default:
      return state;
  }
};

var _default = (0, _reduxPersist.persistReducer)(persistConfig, reducer);

exports["default"] = _default;