"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Advert_Create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Advert/Create.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Advert/Create.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Create",
  data: function data() {
    return {
      title: '',
      description: '',
      price: '',
      photos: [],
      errors: []
    };
  },
  methods: {
    checkForm: function checkForm(e) {
      var _this = this;

      e.preventDefault();
      this.errors = [];

      if (!this.title) {
        this.errors.push('Укажите заголовок объявления');
      } else {
        if (!(this.title.length < 200 && this.title.length > 10)) {
          this.errors.push('Заголовок объявления должен содержать не менее 10 и не более 200 символов');
        }
      }

      if (!this.description) {
        this.errors.push('Укажите текст объявления');
      } else {
        if (!(this.description.length < 1000 && this.description.length > 20)) {
          this.errors.push('Текст объявления должен содержать не менее 20 и не более 1000 символов');
        }
      }

      if (this.errors.length === 0) {
        axios.post('/api/advert', {
          title: this.title,
          description: this.description,
          price: this.price,
          photos: this.photos
        }).then(function (res) {
          _this.title = '';
          _this.description = '';
          _this.price = '';
          _this.photos = '';
        })["catch"](function (err) {
          if (err.response) {
            //console.log(err.response.data.errors)
            _this.errors.push(err.response.data.errors);
          }
        });
      }
    },
    addInput: function addInput() {
      if (this.photos.length < 3) {
        this.photos.push('');
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Advert/Create.vue?vue&type=template&id=122ea048&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Advert/Create.vue?vue&type=template&id=122ea048&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "w-100"
  }, [_c("form", {
    on: {
      submit: _vm.checkForm
    }
  }, [_vm._l(_vm.errors, function (error) {
    return _c("span", [_c("span", [_vm._v(_vm._s(error))]), _c("br")]);
  }), _vm._v(" "), _c("div", {
    staticClass: "mb-3 mt-3"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.title,
      expression: "title"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Заголовок объявления"
    },
    domProps: {
      value: _vm.title
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.title = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "mb-3"
  }, [_c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.description,
      expression: "description"
    }],
    staticClass: "form-control",
    attrs: {
      placeholder: "Текст объявления"
    },
    domProps: {
      value: _vm.description
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.description = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "mb-3"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.price,
      expression: "price"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "Цена"
    },
    domProps: {
      value: _vm.price
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.price = $event.target.value;
      }
    }
  })]), _vm._v(" "), _vm._l(_vm.photos, function (photo, index) {
    return _c("label", {
      attrs: {
        "for": "text"
      }
    }, [_vm._v("Ссылка на фото " + _vm._s(index + 1) + ":  "), _c("br"), _vm._v(" "), _c("div", {
      staticClass: "mb-3"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.photos[index],
        expression: "photos[index]"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        placeholder: "Ссылка на фото"
      },
      domProps: {
        value: _vm.photos[index]
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;

          _vm.$set(_vm.photos, index, $event.target.value);
        }
      }
    })])]);
  }), _c("p", [_c("span", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: _vm.addInput
    }
  }, [_vm._v("Добавить ссылку на фото")])]), _vm._v(" "), _vm._m(0)], 2)]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "mb-3"
  }, [_c("input", {
    staticClass: "btn btn-success",
    attrs: {
      type: "submit",
      value: "Добавить"
    }
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/Advert/Create.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/Advert/Create.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Create_vue_vue_type_template_id_122ea048_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=122ea048&scoped=true& */ "./resources/js/components/Advert/Create.vue?vue&type=template&id=122ea048&scoped=true&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/components/Advert/Create.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_122ea048_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Create_vue_vue_type_template_id_122ea048_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "122ea048",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Advert/Create.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Advert/Create.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Advert/Create.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Advert/Create.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Advert/Create.vue?vue&type=template&id=122ea048&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Advert/Create.vue?vue&type=template&id=122ea048&scoped=true& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_122ea048_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_122ea048_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_122ea048_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=template&id=122ea048&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Advert/Create.vue?vue&type=template&id=122ea048&scoped=true&");


/***/ })

}]);