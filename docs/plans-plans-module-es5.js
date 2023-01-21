(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["plans-plans-module"], {
    /***/
    "CaEi":
    /*!***************************************!*\
      !*** ./src/app/plans/plans.module.ts ***!
      \***************************************/

    /*! exports provided: PlansModule */

    /***/
    function CaEi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlansModule", function () {
        return PlansModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _plans_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./plans-routing.module */
      "plIv");
      /* harmony import */


      var _containers_plans_plans_questions_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./containers/plans/plans_questions.container */
      "kR4n");
      /* harmony import */


      var _components_plans_plans_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/plans/plans.component */
      "P4na");
      /* harmony import */


      var _material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../material/material.module */
      "hctd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PlansModule = function PlansModule() {
        _classCallCheck(this, PlansModule);
      };

      PlansModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: PlansModule
      });
      PlansModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        factory: function PlansModule_Factory(t) {
          return new (t || PlansModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"], _plans_routing_module__WEBPACK_IMPORTED_MODULE_1__["PlansRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](PlansModule, {
          declarations: [_containers_plans_plans_questions_container__WEBPACK_IMPORTED_MODULE_2__["PlansQuestionsContainer"], _components_plans_plans_component__WEBPACK_IMPORTED_MODULE_3__["PlansComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"], _plans_routing_module__WEBPACK_IMPORTED_MODULE_1__["PlansRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"]],
          exports: [_components_plans_plans_component__WEBPACK_IMPORTED_MODULE_3__["PlansComponent"]]
        });
      })();
      /***/

    },

    /***/
    "P4na":
    /*!***********************************************************!*\
      !*** ./src/app/plans/components/plans/plans.component.ts ***!
      \***********************************************************/

    /*! exports provided: PlansComponent */

    /***/
    function P4na(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlansComponent", function () {
        return PlansComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var PlansComponent = /*#__PURE__*/function () {
        function PlansComponent() {
          _classCallCheck(this, PlansComponent);
        }

        _createClass(PlansComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PlansComponent;
      }();

      PlansComponent.ɵfac = function PlansComponent_Factory(t) {
        return new (t || PlansComponent)();
      };

      PlansComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PlansComponent,
        selectors: [["app-plans"]],
        decls: 226,
        vars: 0,
        consts: [[1, "row"], [1, "col-xs-12", "banner"], [1, "title"], [1, "container-plans-questions"], [1, "col-xs-12", "title-plans"], [1, "col-xs-12", "col-md-4", "card-plans"], [1, "content"], [1, "level-plan", "d-flex", "j-content-center"], [1, "description-plan", "text-a-center"], [1, "price-plan", "d-flex", "j-content-center"], [1, "dollar"], [1, "number-price"], [1, "amonth", "d-flex", "a-items-center"], [1, "plan-benefits"], [1, "items-plans", "text-a-center"], [1, "col-xs-12", "col-md-4"], ["mat-raised-button", "", "color", "primary", 1, "btn-adquirir"], [1, "col-xs-12"], [1, "questions"], [1, "questions-items-container"], [1, "row", "quiestions-item", "a-items-center"], [1, "col-xs-1", "d-flex", "j-content-center"], [1, "fas", "fa-question-circle"], [1, "col-xs-10"], [1, "col-xs-1"], [1, "fas", "fa-plus"], [1, "support-text"], [1, "col-xs-6"], [1, "mat-form-field"], ["type", "text", "placeholder", "Ingresa tu nombre y apellido", "required", "", 1, "input-login-root"], ["type", "email", "placeholder", "Ingresa tu correo electr\xF3nico *", "required", "", 1, "input-login-root"], ["type", "tel", "placeholder", "Ingresa tu tel\xE9fono con WhatsApp", "required", "", 1, "input-login-root"], ["type", "tel", "placeholder", "Ingresa tu Tel\xE9fono movil o fijo", "required", "", 1, "input-login-root"], [1, "input-login-root"], [1, "col-xs-offset-10", "col-xs-2"], ["mat-raised-button", "", "color", "primary", 1, "btn-send"]],
        template: function PlansComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Planes, Preguntas frecuentes y Soporte");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Planes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "B\xE1sico");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " $ ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " 0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " AL");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "mes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Lorem ipsum dolor sit amet ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Lorem ipsum dolor sit amet ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Lorem ipsum dolor sit amet ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Lorem ipsum dolor sit amet ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Lorem ipsum dolor sit amet ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Lorem ipsum dolor sit amet ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Estandar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " $ ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " 0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " AL");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "mes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Lorem ipsum dolor sit amet ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Lorem ipsum dolor sit amet ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Lorem ipsum dolor sit amet ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Lorem ipsum dolor sit amet ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Lorem ipsum dolor sit amet ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Lorem ipsum dolor sit amet ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Premium");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " $ ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " 0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " AL");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "mes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " Lorem ipsum dolor sit amet ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " Lorem ipsum dolor sit amet ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " Lorem ipsum dolor sit amet ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " Lorem ipsum dolor sit amet ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " Lorem ipsum dolor sit amet ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " Lorem ipsum dolor sit amet ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Adquirir");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Adquirir");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Adquirir");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Preguntas frecuentes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " Lorem ipsum dolor sit amet, consetetur sadipscing ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "i", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, " Lorem ipsum dolor sit amet, consetetur sadipscing ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "i", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " Lorem ipsum dolor sit amet, consetetur sadipscing ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "i", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " Lorem ipsum dolor sit amet, consetetur sadipscing ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "i", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " Lorem ipsum dolor sit amet, consetetur sadipscing ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "i", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, " Lorem ipsum dolor sit amet, consetetur sadipscing ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "i", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, " Lorem ipsum dolor sit amet, consetetur sadipscing ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "i", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, " Lorem ipsum dolor sit amet, consetetur sadipscing ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "i", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Soporte");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](190, 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Nombre y Apellido *");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "input", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](196, 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Direcci\xF3n del correo electr\xF3nico *");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "input", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](203, 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "Tel\xE9fono con WhatsApp *");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "input", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](209, 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "Tel\xE9fono movil o fijo *");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "input", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](216, 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "Mensaje *");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "textarea", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "Enviar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"]],
        styles: ["mat-card[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 5px #00000029;\n  padding: 0;\n  border-radius: 20px;\n  overflow: hidden;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  height: 150px;\n}\n\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 10px 0px;\n}\n\nmat-card[_ngcontent-%COMP%]:hover {\n  background: #066d6f;\n}\n\nmat-card[_ngcontent-%COMP%]:hover   .dollar[_ngcontent-%COMP%], mat-card[_ngcontent-%COMP%]:hover   .number-price[_ngcontent-%COMP%] {\n  color: white;\n}\n\nmat-card[_ngcontent-%COMP%]:hover   .amonth[_ngcontent-%COMP%] {\n  color: white;\n}\n\nmat-card[_ngcontent-%COMP%]:hover   .level-plan[_ngcontent-%COMP%] {\n  color: white;\n}\n\nmat-card[_ngcontent-%COMP%]:hover   .items-plans[_ngcontent-%COMP%] {\n  background: #20b0b3;\n  color: white;\n  border-bottom: 1px solid #066d6f;\n}\n\nmat-card[_ngcontent-%COMP%]:hover   .description-plan[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.mat-form-field[_ngcontent-%COMP%], label[_ngcontent-%COMP%] {\n  font-family: \"Raleway-Medium\";\n  width: 90%;\n}\n\ninput[type=tel][_ngcontent-%COMP%]:focus, input[type=email][_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus {\n  border: 1px solid #2d2d2d;\n}\n\ninput[type=tel][_ngcontent-%COMP%], input[type=email][_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border: 1px solid #d4d4d4;\n  transition: 0.5s;\n  outline: none;\n}\n\n.banner[_ngcontent-%COMP%] {\n  height: 350px;\n  background: url('banner-soporte.png');\n  background-size: cover;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding: 40px;\n}\n\n.title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Raleway-Black\";\n  color: white;\n  font-size: 3rem;\n}\n\n.container-plans-questions[_ngcontent-%COMP%] {\n  padding: 0px 100px 0px 100px;\n}\n\n.questions[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n\n.quiestions-item[_ngcontent-%COMP%] {\n  background: #20b0b3;\n  height: 60px;\n  border-radius: 20px;\n  color: white;\n  margin-bottom: 10px;\n}\n\n.quiestions-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.title-plans[_ngcontent-%COMP%], .support-text[_ngcontent-%COMP%], .questions[_ngcontent-%COMP%] {\n  color: #43425d;\n}\n\n.level-plan[_ngcontent-%COMP%] {\n  color: #20b0b3;\n}\n\n.level-plan[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-family: \"Raleway-Bold\";\n}\n\n.price-plan[_ngcontent-%COMP%] {\n  margin: 30px 0px;\n}\n\n.dollar[_ngcontent-%COMP%], .number-price[_ngcontent-%COMP%] {\n  font-size: 5rem;\n  color: #066d6f;\n}\n\n.amonth[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  font-family: \"Raleway-Bold\";\n  color: #066d6f;\n}\n\n.description-plan[_ngcontent-%COMP%] {\n  color: #2d2d2d;\n}\n\n.items-plans[_ngcontent-%COMP%] {\n  background: #f5f6fa;\n  padding: 14px;\n  color: #43425D;\n  border-bottom: 1px solid #e4e4e4;\n}\n\n.support-text[_ngcontent-%COMP%] {\n  margin-bottom: 10%;\n}\n\n.btn-send[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 20px;\n  border-radius: 10px;\n  font-family: \"Raleway-Bold\";\n  padding: 4px;\n}\n\n.btn-adquirir[_ngcontent-%COMP%] {\n  font-family: \"Raleway-Bold\";\n  border-radius: 20px;\n  width: 90%;\n  margin: 30px 0px;\n  margin-left: 5%;\n  padding: 3%;\n}\n\n@media (min-width: 350px) {\n  .btn-adquirir[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 7.5% 0% 0% 0%;\n  }\n}\n\n@media (min-width: 992px) {\n  .title[_ngcontent-%COMP%] {\n    width: 50%;\n    margin: 7.5% 0% 0% 18%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BsYW5zLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlL3ZhcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGlDQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFFQTtFQUNJLGFBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJDakJNO0FEa0JWOztBQUFJOztFQUVJLFlBQUE7QUFFUjs7QUFBSTtFQUNFLFlBQUE7QUFFTjs7QUFBSTtFQUNJLFlBQUE7QUFFUjs7QUFBSTtFQUNJLG1CQzVCSTtFRDZCSixZQUFBO0VBQ0EsZ0NBQUE7QUFFUjs7QUFDSTtFQUNJLFlBQUE7QUFDUjs7QUFFQTtFQUNJLDZCQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUNBO0VBQ0kseUJBQUE7QUFFSjs7QUFBRTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7RUFFQSxnQkFBQTtFQUNBLGFBQUE7QUFHSjs7QUFBQTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLHNCQUFBO0FBR0Y7O0FBREE7RUFDRSxhQUFBO0FBSUY7O0FBREU7RUFDRSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBSUo7O0FBREE7RUFDRSw0QkFBQTtBQUlGOztBQUZBO0VBQ0ksbUJBQUE7QUFLSjs7QUFIQTtFQUNJLG1CQzFFUTtFRDJFUixZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFNSjs7QUFMSTtFQUNJLGVBQUE7QUFPUjs7QUFKQTtFQUNFLGNBQUE7QUFPRjs7QUFMQTtFQUNFLGNDdkZVO0FEK0ZaOztBQVBFO0VBQ0UsMkJBQUE7QUFTSjs7QUFOQTtFQUNFLGdCQUFBO0FBU0Y7O0FBUEE7O0VBRUUsZUFBQTtFQUNBLGNDbkdRO0FENkdWOztBQVJBO0VBQ0UsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLGNDeEdRO0FEbUhWOztBQVRBO0VBQ0UsY0FBQTtBQVlGOztBQVZBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0FBYUY7O0FBWEE7RUFDSSxrQkFBQTtBQWNKOztBQVpBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7QUFlSjs7QUFiQTtFQU9JLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQVVKOztBQXJCSTtFQUNFO0lBQ0UsV0FBQTtJQUNBLHFCQUFBO0VBdUJOO0FBQ0Y7O0FBYkE7RUFDRTtJQUNFLFVBQUE7SUFDQSxzQkFBQTtFQWdCRjtBQUNGIiwiZmlsZSI6InBsYW5zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zcmMvYXNzZXRzL3N0eWxlL3ZhcnMuc2Nzc1wiO1xubWF0LWNhcmQge1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4ICMwMDAwMDAyOTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbnRleHRhcmVhe1xuICAgIGhlaWdodDogMTUwcHg7XG59XG5cbmlucHV0LCB0ZXh0YXJlYXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46MTBweCAwcHg7XG59XG5cbm1hdC1jYXJkOmhvdmVye1xuICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5O1xuICAgIC5kb2xsYXIsXG4gICAgLm51bWJlci1wcmljZSB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgLmFtb250aCB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIC5sZXZlbC1wbGFuIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICAuaXRlbXMtcGxhbnMge1xuICAgICAgICBiYWNrZ3JvdW5kOiAkc2Vjb25kYXJ5O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkcHJpbWFyeTtcbiAgICAgICAgXG4gICAgfVxuICAgIC5kZXNjcmlwdGlvbi1wbGFuIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbn1cbi5tYXQtZm9ybS1maWVsZCwgbGFiZWx7XG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5LU1lZGl1bSc7XG4gICAgd2lkdGg6IDkwJTtcbn1cbmlucHV0W3R5cGU9dGVsXTpmb2N1cyxpbnB1dFt0eXBlPWVtYWlsXTpmb2N1cywgdGV4dGFyZWE6Zm9jdXMge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyZDJkMmQ7XG4gIH1cbiAgaW5wdXRbdHlwZT10ZWxdLGlucHV0W3R5cGU9ZW1haWxdLCB0ZXh0YXJlYSB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDRkNGQ0O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cztcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbiAgXG4uYmFubmVyIHtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9iYW5uZXItc29wb3J0ZS5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4uY29udGVudCB7XG4gIHBhZGRpbmc6IDQwcHg7XG59XG4udGl0bGUge1xuICBoMSB7XG4gICAgZm9udC1mYW1pbHk6IFwiUmFsZXdheS1CbGFja1wiO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDNyZW07XG4gIH1cbn1cbi5jb250YWluZXItcGxhbnMtcXVlc3Rpb25zIHtcbiAgcGFkZGluZzogMHB4IDEwMHB4IDBweCAxMDBweDtcbn1cbi5xdWVzdGlvbnMge1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG4ucXVpZXN0aW9ucy1pdGVte1xuICAgIGJhY2tncm91bmQ6ICRzZWNvbmRhcnk7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBpe1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxufVxuLnRpdGxlLXBsYW5zLC5zdXBwb3J0LXRleHQsLnF1ZXN0aW9ucyB7XG4gIGNvbG9yOiAjNDM0MjVkO1xufVxuLmxldmVsLXBsYW4ge1xuICBjb2xvcjogJHNlY29uZGFyeTtcbiAgYiB7XG4gICAgZm9udC1mYW1pbHk6IFwiUmFsZXdheS1Cb2xkXCI7XG4gIH1cbn1cbi5wcmljZS1wbGFuIHtcbiAgbWFyZ2luOiAzMHB4IDBweDtcbn1cbi5kb2xsYXIsXG4ubnVtYmVyLXByaWNlIHtcbiAgZm9udC1zaXplOiA1cmVtO1xuICBjb2xvcjogJHByaW1hcnk7XG59XG4uYW1vbnRoIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXktQm9sZFwiO1xuICBjb2xvcjogJHByaW1hcnk7XG59XG4uZGVzY3JpcHRpb24tcGxhbiB7XG4gIGNvbG9yOiAjMmQyZDJkO1xufVxuLml0ZW1zLXBsYW5zIHtcbiAgYmFja2dyb3VuZDogI2Y1ZjZmYTtcbiAgcGFkZGluZzogMTRweDtcbiAgY29sb3I6ICM0MzQyNUQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTRlNGU0O1xufVxuLnN1cHBvcnQtdGV4dHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XG59XG4uYnRuLXNlbmR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheS1Cb2xkJztcbiAgICBwYWRkaW5nOiA0cHg7XG59XG4uYnRuLWFkcXVpcmlye1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAzNTBweCkge1xuICAgICAgLnRpdGxlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogNy41JSAwJSAwJSAwJTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5LUJvbGQnO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46MzBweCAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIHBhZGRpbmc6IDMlO1xuIFxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC50aXRsZSB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW46IDcuNSUgMCUgMCUgMTglO1xuICB9XG59XG4iLCIkcHJpbWFyeTogIzA2NmQ2ZjtcbiRzZWNvbmRhcnk6ICMyMGIwYjM7XG4kYmxhY2s6IzJEMkQyRDtcbiRnb29nbGU6ICNmZjU5NTk7XG4kZmFjZWJvb2s6ICMwNDVhYWQ7XG4kYXBwbGU6ICMwMDAwMDA7XG5cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "kR4n":
    /*!*********************************************************************!*\
      !*** ./src/app/plans/containers/plans/plans_questions.container.ts ***!
      \*********************************************************************/

    /*! exports provided: PlansQuestionsContainer */

    /***/
    function kR4n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlansQuestionsContainer", function () {
        return PlansQuestionsContainer;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _components_plans_plans_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../components/plans/plans.component */
      "P4na");

      var PlansQuestionsContainer = /*#__PURE__*/function () {
        function PlansQuestionsContainer() {
          _classCallCheck(this, PlansQuestionsContainer);
        }

        _createClass(PlansQuestionsContainer, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PlansQuestionsContainer;
      }();

      PlansQuestionsContainer.ɵfac = function PlansQuestionsContainer_Factory(t) {
        return new (t || PlansQuestionsContainer)();
      };

      PlansQuestionsContainer.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PlansQuestionsContainer,
        selectors: [["app-plans-questions"]],
        decls: 1,
        vars: 0,
        template: function PlansQuestionsContainer_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-plans");
          }
        },
        directives: [_components_plans_plans_component__WEBPACK_IMPORTED_MODULE_1__["PlansComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGFuc19xdWVzdGlvbnMuY29udGFpbmVyLnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "plIv":
    /*!***********************************************!*\
      !*** ./src/app/plans/plans-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: PlansRoutingModule */

    /***/
    function plIv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlansRoutingModule", function () {
        return PlansRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../layout/layout.component */
      "uswQ");
      /* harmony import */


      var _containers_plans_plans_questions_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./containers/plans/plans_questions.container */
      "kR4n");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["LayoutComponent"],
        children: [{
          path: '',
          component: _containers_plans_plans_questions_container__WEBPACK_IMPORTED_MODULE_2__["PlansQuestionsContainer"]
        }]
      }];

      var PlansRoutingModule = function PlansRoutingModule() {
        _classCallCheck(this, PlansRoutingModule);
      };

      PlansRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: PlansRoutingModule
      });
      PlansRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function PlansRoutingModule_Factory(t) {
          return new (t || PlansRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PlansRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=plans-plans-module-es5.js.map