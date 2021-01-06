webpackHotUpdate_N_E("pages/campaigns/requests",{

/***/ "./pages/campaigns/requests/index.js":
/*!*******************************************!*\
  !*** ./pages/campaigns/requests/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../ethereum/campaign */ "./ethereum/campaign.js");
/* harmony import */ var _components_RequestRow__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/RequestRow */ "./components/RequestRow.js");










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var RequestIndex = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RequestIndex, _Component);

  var _super = _createSuper(RequestIndex);

  function RequestIndex() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, RequestIndex);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(RequestIndex, [{
    key: "renderRows",
    value: function renderRows() {
      var _this = this;

      return this.props.requests.map(function (request, index) {
        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_RequestRow__WEBPACK_IMPORTED_MODULE_13__["default"], {
          id: index,
          request: request,
          address: _this.props.address,
          approversCount: _this.props.approversCount
        }, index);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var Header = semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"].Header,
          Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"].Row,
          HeaderCell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"].HeaderCell,
          Body = semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"].Body;
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_components_Layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])("h3", {
          children: "Request List"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_routes__WEBPACK_IMPORTED_MODULE_10__["Link"], {
          route: "/campaigns/".concat(this.props.address, "/requests/new"),
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])("a", {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
              primary: true,
              floated: "right",
              style: {
                marginBottom: 10
              },
              children: "Add Request"
            })
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"], {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(Header, {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(Row, {
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(HeaderCell, {
                children: "ID"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(HeaderCell, {
                children: "Description"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(HeaderCell, {
                children: "Amount"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(HeaderCell, {
                children: "Recipient"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(HeaderCell, {
                children: "Approval"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(HeaderCell, {
                children: "Approve"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(HeaderCell, {
                children: "Finalize"
              })]
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(Body, {
            children: this.renderRows()
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])("div", {
          children: ["Found ", this.props.requestCount, " requests."]
        })]
      });
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(props) {
        var address, campaign, requestCount, approversCount, requests;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                address = props.query.address;
                campaign = Object(_ethereum_campaign__WEBPACK_IMPORTED_MODULE_12__["default"])(address);
                _context.next = 4;
                return campaign.methods.getRequestsCount().call();

              case 4:
                requestCount = _context.sent;
                _context.next = 7;
                return campaign.methods.approversCount().call();

              case 7:
                approversCount = _context.sent;
                _context.next = 10;
                return Promise.all(Array(parseInt(requestCount)).fill().map(function (element, index) {
                  return campaign.methods.requests(index).call();
                }));

              case 10:
                requests = _context.sent;
                return _context.abrupt("return", {
                  address: address,
                  requests: requests,
                  requestCount: requestCount,
                  approversCount: approversCount
                });

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return RequestIndex;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (RequestIndex);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlcXVlc3RJbmRleCIsInByb3BzIiwicmVxdWVzdHMiLCJtYXAiLCJyZXF1ZXN0IiwiaW5kZXgiLCJhZGRyZXNzIiwiYXBwcm92ZXJzQ291bnQiLCJIZWFkZXIiLCJUYWJsZSIsIlJvdyIsIkhlYWRlckNlbGwiLCJCb2R5IiwibWFyZ2luQm90dG9tIiwicmVuZGVyUm93cyIsInJlcXVlc3RDb3VudCIsInF1ZXJ5IiwiY2FtcGFpZ24iLCJDYW1wYWlnbiIsIm1ldGhvZHMiLCJnZXRSZXF1ZXN0c0NvdW50IiwiY2FsbCIsIlByb21pc2UiLCJhbGwiLCJBcnJheSIsInBhcnNlSW50IiwiZmlsbCIsImVsZW1lbnQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBR01BLFk7Ozs7Ozs7Ozs7Ozs7aUNBaUJVO0FBQUE7O0FBQ1osYUFBTyxLQUFLQyxLQUFMLENBQVdDLFFBQVgsQ0FBb0JDLEdBQXBCLENBQXdCLFVBQUNDLE9BQUQsRUFBVUMsS0FBVixFQUFvQjtBQUNqRCw0QkFDRSw4REFBQywrREFBRDtBQUVFLFlBQUUsRUFBRUEsS0FGTjtBQUdFLGlCQUFPLEVBQUVELE9BSFg7QUFJRSxpQkFBTyxFQUFFLEtBQUksQ0FBQ0gsS0FBTCxDQUFXSyxPQUp0QjtBQUtFLHdCQUFjLEVBQUUsS0FBSSxDQUFDTCxLQUFMLENBQVdNO0FBTDdCLFdBQ09GLEtBRFAsQ0FERjtBQVNELE9BVk0sQ0FBUDtBQVdEOzs7NkJBR1M7QUFBQSxVQUVBRyxNQUZBLEdBRWtDQyx1REFGbEMsQ0FFQUQsTUFGQTtBQUFBLFVBRVFFLEdBRlIsR0FFa0NELHVEQUZsQyxDQUVRQyxHQUZSO0FBQUEsVUFFYUMsVUFGYixHQUVrQ0YsdURBRmxDLENBRWFFLFVBRmI7QUFBQSxVQUV5QkMsSUFGekIsR0FFa0NILHVEQUZsQyxDQUV5QkcsSUFGekI7QUFJUiwwQkFDRSwrREFBQywyREFBRDtBQUFBLGdDQUNFO0FBQUE7QUFBQSxVQURGLGVBRUUsOERBQUMsNkNBQUQ7QUFBTSxlQUFLLHVCQUFnQixLQUFLWCxLQUFMLENBQVdLLE9BQTNCLGtCQUFYO0FBQUEsaUNBQ0U7QUFBQSxtQ0FDRSw4REFBQyx3REFBRDtBQUFRLHFCQUFPLE1BQWY7QUFBZ0IscUJBQU8sRUFBQyxPQUF4QjtBQUFnQyxtQkFBSyxFQUFFO0FBQUVPLDRCQUFZLEVBQUU7QUFBaEIsZUFBdkM7QUFBQTtBQUFBO0FBREY7QUFERixVQUZGLGVBT0UsK0RBQUMsdURBQUQ7QUFBQSxrQ0FFRSw4REFBQyxNQUFEO0FBQUEsbUNBQ0UsK0RBQUMsR0FBRDtBQUFBLHNDQUNFLDhEQUFDLFVBQUQ7QUFBQTtBQUFBLGdCQURGLGVBRUUsOERBQUMsVUFBRDtBQUFBO0FBQUEsZ0JBRkYsZUFHRSw4REFBQyxVQUFEO0FBQUE7QUFBQSxnQkFIRixlQUlFLDhEQUFDLFVBQUQ7QUFBQTtBQUFBLGdCQUpGLGVBS0UsOERBQUMsVUFBRDtBQUFBO0FBQUEsZ0JBTEYsZUFNRSw4REFBQyxVQUFEO0FBQUE7QUFBQSxnQkFORixlQU9FLDhEQUFDLFVBQUQ7QUFBQTtBQUFBLGdCQVBGO0FBQUE7QUFERixZQUZGLGVBY0UsOERBQUMsSUFBRDtBQUFBLHNCQUFPLEtBQUtDLFVBQUw7QUFBUCxZQWRGO0FBQUEsVUFQRixlQXdCRTtBQUFBLCtCQUFZLEtBQUtiLEtBQUwsQ0FBV2MsWUFBdkI7QUFBQSxVQXhCRjtBQUFBLFFBREY7QUE0QkQ7Ozs7K05BL0Q0QmQsSzs7Ozs7O0FBQ25CSyx1QixHQUFZTCxLQUFLLENBQUNlLEssQ0FBbEJWLE87QUFDRlcsd0IsR0FBV0MsbUVBQVEsQ0FBQ1osT0FBRCxDOzt1QkFDRVcsUUFBUSxDQUFDRSxPQUFULENBQWlCQyxnQkFBakIsR0FBb0NDLElBQXBDLEU7OztBQUFyQk4sNEI7O3VCQUN1QkUsUUFBUSxDQUFDRSxPQUFULENBQWlCWixjQUFqQixHQUFrQ2MsSUFBbEMsRTs7O0FBQXZCZCw4Qjs7dUJBRWlCZSxPQUFPLENBQUNDLEdBQVIsQ0FDckJDLEtBQUssQ0FBQ0MsUUFBUSxDQUFDVixZQUFELENBQVQsQ0FBTCxDQUNHVyxJQURILEdBRUd2QixHQUZILENBRU8sVUFBQ3dCLE9BQUQsRUFBVXRCLEtBQVYsRUFBb0I7QUFDdkIseUJBQU9ZLFFBQVEsQ0FBQ0UsT0FBVCxDQUFpQmpCLFFBQWpCLENBQTBCRyxLQUExQixFQUFpQ2dCLElBQWpDLEVBQVA7QUFDRCxpQkFKSCxDQURxQixDOzs7QUFBakJuQix3QjtpREFPQztBQUFFSSx5QkFBTyxFQUFQQSxPQUFGO0FBQVdKLDBCQUFRLEVBQVJBLFFBQVg7QUFBcUJhLDhCQUFZLEVBQVpBLFlBQXJCO0FBQW1DUixnQ0FBYyxFQUFkQTtBQUFuQyxpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWRnQnFCLCtDOztBQW1FWjVCLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy5jOTRlMDNlMzJlOTUwMWFhNWU0OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnV0dG9uLCBUYWJsZSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uLy4uLy4uL3JvdXRlcyc7XHJcbmltcG9ydCAgTGF5b3V0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IENhbXBhaWduIGZyb20gJy4uLy4uLy4uL2V0aGVyZXVtL2NhbXBhaWduJztcclxuaW1wb3J0IFJlcXVlc3RSb3cgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9SZXF1ZXN0Um93JztcclxuXHJcblxyXG5jbGFzcyBSZXF1ZXN0SW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpIHtcclxuICAgIGNvbnN0IHsgYWRkcmVzcyB9ID0gcHJvcHMucXVlcnk7XHJcbiAgICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKGFkZHJlc3MpO1xyXG4gICAgY29uc3QgcmVxdWVzdENvdW50ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5nZXRSZXF1ZXN0c0NvdW50KCkuY2FsbCgpO1xyXG4gICAgY29uc3QgYXBwcm92ZXJzQ291bnQgPSBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmFwcHJvdmVyc0NvdW50KCkuY2FsbCgpO1xyXG5cclxuICAgIGNvbnN0IHJlcXVlc3RzID0gYXdhaXQgUHJvbWlzZS5hbGwoXHJcbiAgICAgIEFycmF5KHBhcnNlSW50KHJlcXVlc3RDb3VudCkpXHJcbiAgICAgICAgLmZpbGwoKVxyXG4gICAgICAgIC5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gY2FtcGFpZ24ubWV0aG9kcy5yZXF1ZXN0cyhpbmRleCkuY2FsbCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHsgYWRkcmVzcywgcmVxdWVzdHMsIHJlcXVlc3RDb3VudCwgYXBwcm92ZXJzQ291bnQgfTtcclxuICB9XHJcblxyXG4gIHJlbmRlclJvd3MgKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvcHMucmVxdWVzdHMubWFwKChyZXF1ZXN0LCBpbmRleCkgPT4ge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZXF1ZXN0Um93XHJcbiAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgaWQ9e2luZGV4fVxyXG4gICAgICAgICAgcmVxdWVzdD17cmVxdWVzdH1cclxuICAgICAgICAgIGFkZHJlc3M9e3RoaXMucHJvcHMuYWRkcmVzc31cclxuICAgICAgICAgIGFwcHJvdmVyc0NvdW50PXt0aGlzLnByb3BzLmFwcHJvdmVyc0NvdW50fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIClcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIHJlbmRlciAoKSB7XHJcblxyXG4gICAgY29uc3QgeyBIZWFkZXIsIFJvdywgSGVhZGVyQ2VsbCwgQm9keSB9ID0gVGFibGU7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8aDM+UmVxdWVzdCBMaXN0PC9oMz5cclxuICAgICAgICA8TGluayByb3V0ZT17YC9jYW1wYWlnbnMvJHt0aGlzLnByb3BzLmFkZHJlc3N9L3JlcXVlc3RzL25ld2B9PlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeSBmbG9hdGVkPVwicmlnaHRcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDEwfX0+QWRkIFJlcXVlc3Q8L0J1dHRvbj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPFRhYmxlPlxyXG5cclxuICAgICAgICAgIDxIZWFkZXI+XHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgPEhlYWRlckNlbGw+SUQ8L0hlYWRlckNlbGw+XHJcbiAgICAgICAgICAgICAgPEhlYWRlckNlbGw+RGVzY3JpcHRpb248L0hlYWRlckNlbGw+XHJcbiAgICAgICAgICAgICAgPEhlYWRlckNlbGw+QW1vdW50PC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICAgIDxIZWFkZXJDZWxsPlJlY2lwaWVudDwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5BcHByb3ZhbDwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5BcHByb3ZlPC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICAgIDxIZWFkZXJDZWxsPkZpbmFsaXplPC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDwvSGVhZGVyPlxyXG5cclxuICAgICAgICAgIDxCb2R5Pnt0aGlzLnJlbmRlclJvd3MoKX08L0JvZHk+XHJcblxyXG4gICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgPGRpdj5Gb3VuZCB7dGhpcy5wcm9wcy5yZXF1ZXN0Q291bnR9IHJlcXVlc3RzLjwvZGl2PlxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0SW5kZXg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=