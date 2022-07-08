"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Advert_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Advert/Index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Advert/Index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Index",
  data: function data() {
    return {
      advertData: [],
      url: '',
      pagination: {
        meta: {
          to: 1,
          from: 1
        }
      },
      offset: 4,
      currentPage: 1,
      perPage: 10,
      columns: [['title', 'Заголовок'], ['photos', 'Фото'], ['price', 'Цена'], ['created_at', 'Дата']],
      columnsForSort: ['price', 'created_at'],
      sortedColumn: 'price',
      order: 'asc'
    };
  },
  mounted: function mounted() {
    this.fetchData();
  },
  computed: {
    pagesNumber: function pagesNumber() {
      if (!this.pagination.meta.to) {
        return [];
      }

      var from = this.pagination.meta.current_page - this.offset;

      if (from < 1) {
        from = 1;
      }

      var to = from + this.offset * 2;

      if (to >= this.pagination.meta.last_page) {
        to = this.pagination.meta.last_page;
      }

      var pagesArray = [];

      for (var page = from; page <= to; page++) {
        pagesArray.push(page);
      }

      return pagesArray;
    },
    totalData: function totalData() {
      return this.pagination.meta.to - this.pagination.meta.from + 1;
    }
  },
  methods: {
    fetchData: function fetchData() {
      var _this = this;

      var dataFetchUrl = "/api/advert?page=".concat(this.currentPage, "&column=").concat(this.sortedColumn, "&order=").concat(this.order, "&per_page=").concat(this.perPage);
      axios.get(dataFetchUrl).then(function (_ref) {
        var data = _ref.data;
        //console.log(data)
        _this.pagination = data;
        _this.advertData = data.data;
      })["catch"](function (error) {
        return _this.advertData = [];
      });
    },
    changePage: function changePage(pageNumber) {
      this.currentPage = pageNumber;
      this.fetchData();
    },
    sortByColumn: function sortByColumn(column) {
      if (column === this.sortedColumn) {
        this.order = this.order === 'asc' ? 'desc' : 'asc';
      } else {
        this.sortedColumn = column;
        this.order = 'asc';
      }

      this.fetchData();
    },
    photoSingle: function photoSingle(value) {
      if (value.length !== 0) {
        if (value) {
          value = value[0]['photo_path'];
          return value;
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Advert/Index.vue?vue&type=template&id=383b7f22&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Advert/Index.vue?vue&type=template&id=383b7f22&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_c("table", {
    staticClass: "table"
  }, [_c("thead", [_c("tr", _vm._l(_vm.columns, function (column, idx) {
    return _c("th", {
      key: idx,
      staticStyle: {
        cursor: "pointer"
      },
      on: {
        click: function click($event) {
          _vm.columnsForSort.includes(column[0]) ? _vm.sortByColumn(column[0]) : "";
        }
      }
    }, [_vm._v("\n                  " + _vm._s(column[1]) + "\n                  "), column === _vm.sortedColumn ? _c("span", [_vm.order === "asc" ? _c("i", [_vm._v("↑")]) : _c("i", [_vm._v("↓")])]) : _vm._e()]);
  }), 0)]), _vm._v(" "), _c("tbody", [_vm.advertData.length === 0 ? _c("tr", {}, [_c("td", {
    staticClass: "lead text-center",
    attrs: {
      colspan: _vm.columns.length + 1
    }
  }, [_vm._v("Объявлений нет")])]) : _vm._l(_vm.advertData, function (advert) {
    return _c("tr", {
      key: advert.id
    }, [_c("td", [_c("router-link", {
      attrs: {
        to: {
          name: "advert.show",
          params: {
            id: advert.id
          }
        }
      }
    }, [_vm._v(_vm._s(advert.title))])], 1), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.photoSingle(advert.photos)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(advert.price))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(advert.created_at))])]);
  })], 2)]), _vm._v(" "), _vm.pagination && _vm.advertData.length > 0 ? _c("nav", [_c("ul", {
    staticClass: "pagination"
  }, [_c("li", {
    staticClass: "page-item",
    "class": {
      disabled: _vm.currentPage === 1
    }
  }, [_c("a", {
    staticClass: "page-link",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.changePage(_vm.currentPage - 1);
      }
    }
  }, [_vm._v("Пред.")])]), _vm._v(" "), _vm._l(_vm.pagesNumber, function (page) {
    return _c("li", {
      staticClass: "page-item",
      "class": {
        active: page == _vm.pagination.meta.current_page
      }
    }, [_c("a", {
      staticClass: "page-link",
      attrs: {
        href: "javascript:void(0)"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.changePage(page);
        }
      }
    }, [_vm._v(_vm._s(page))])]);
  }), _vm._v(" "), _c("li", {
    staticClass: "page-item",
    "class": {
      disabled: _vm.currentPage === _vm.pagination.meta.last_page
    }
  }, [_c("a", {
    staticClass: "page-link",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.changePage(_vm.currentPage + 1);
      }
    }
  }, [_vm._v("След.")])])], 2)]) : _vm._e()]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/Advert/Index.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/Advert/Index.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_383b7f22_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=383b7f22&scoped=true& */ "./resources/js/components/Advert/Index.vue?vue&type=template&id=383b7f22&scoped=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/components/Advert/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_383b7f22_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_383b7f22_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "383b7f22",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Advert/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Advert/Index.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Advert/Index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Advert/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Advert/Index.vue?vue&type=template&id=383b7f22&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/Advert/Index.vue?vue&type=template&id=383b7f22&scoped=true& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_383b7f22_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_383b7f22_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_383b7f22_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=383b7f22&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Advert/Index.vue?vue&type=template&id=383b7f22&scoped=true&");


/***/ })

}]);