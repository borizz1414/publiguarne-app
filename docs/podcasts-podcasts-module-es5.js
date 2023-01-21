(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["podcasts-podcasts-module"], {
    /***/
    "GGaP":
    /*!********************************************************************!*\
      !*** ./src/app/podcasts/containers/podcasts/podcasts.container.ts ***!
      \********************************************************************/

    /*! exports provided: PodcastsContainer */

    /***/
    function GGaP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PodcastsContainer", function () {
        return PodcastsContainer;
      });
      /* harmony import */


      var src_app_shared_navigations_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/navigations/navigation */
      "H8oF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _shared_components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../shared/components/sidenav/sidenav.component */
      "TgYD");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "znSr");
      /* harmony import */


      var _components_cards_podcasts_cards_podcasts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../components/cards-podcasts/cards-podcasts.component */
      "NdGK");

      var PodcastsContainer = /*#__PURE__*/function () {
        function PodcastsContainer() {
          _classCallCheck(this, PodcastsContainer);

          this.navigation = src_app_shared_navigations_navigation__WEBPACK_IMPORTED_MODULE_0__["navigationPodcasts"];
        }

        _createClass(PodcastsContainer, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PodcastsContainer;
      }();

      PodcastsContainer.ɵfac = function PodcastsContainer_Factory(t) {
        return new (t || PodcastsContainer)();
      };

      PodcastsContainer.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: PodcastsContainer,
        selectors: [["app-podcasts"]],
        decls: 5,
        vars: 1,
        consts: [["fxLayout", "row"], ["fxFlex.gt-md", "25"], ["fxHide.lt-sm", "", 3, "navigation"], ["fxFlex.gt-lg", "75", "fxFlex.lt-lg", "100", "fxFlex.lt-sm", "100", "fxFlexOffset", "10px"]],
        template: function PodcastsContainer_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-sidenav", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-cards-podcasts");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("navigation", ctx.navigation);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _shared_components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__["SidenavComponent"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__["DefaultShowHideDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexOffsetDirective"], _components_cards_podcasts_cards_podcasts_component__WEBPACK_IMPORTED_MODULE_5__["CardsPodcastsComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb2RjYXN0cy5jb250YWluZXIuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    "J2JA":
    /*!*****************************************************!*\
      !*** ./src/app/podcasts/podcasts-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: PodcastsRoutingModule */

    /***/
    function J2JA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PodcastsRoutingModule", function () {
        return PodcastsRoutingModule;
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


      var _containers_podcasts_podcasts_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./containers/podcasts/podcasts.container */
      "GGaP");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["LayoutComponent"],
        children: [{
          path: '',
          component: _containers_podcasts_podcasts_container__WEBPACK_IMPORTED_MODULE_2__["PodcastsContainer"]
        }]
      }];

      var PodcastsRoutingModule = function PodcastsRoutingModule() {
        _classCallCheck(this, PodcastsRoutingModule);
      };

      PodcastsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: PodcastsRoutingModule
      });
      PodcastsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function PodcastsRoutingModule_Factory(t) {
          return new (t || PodcastsRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PodcastsRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "NdGK":
    /*!********************************************************************************!*\
      !*** ./src/app/podcasts/components/cards-podcasts/cards-podcasts.component.ts ***!
      \********************************************************************************/

    /*! exports provided: CardsPodcastsComponent */

    /***/
    function NdGK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardsPodcastsComponent", function () {
        return CardsPodcastsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");

      var CardsPodcastsComponent = /*#__PURE__*/function () {
        function CardsPodcastsComponent() {
          _classCallCheck(this, CardsPodcastsComponent);
        }

        _createClass(CardsPodcastsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CardsPodcastsComponent;
      }();

      CardsPodcastsComponent.ɵfac = function CardsPodcastsComponent_Factory(t) {
        return new (t || CardsPodcastsComponent)();
      };

      CardsPodcastsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CardsPodcastsComponent,
        selectors: [["app-cards-podcasts"]],
        decls: 53,
        vars: 0,
        consts: [[1, "row"], [1, "col-xs-12"], ["fxLayout", "row", "fxLayoutAlign", "space-around start", 1, "container-cards-podcasts"], ["fxFlex", "30", 1, "card-podcasts"], ["width", "100%", "src", "assets/img/eventos.png", "alt", ""], [1, "title-card-podcasts"], [1, "description-podcasts"]],
        template: function CardsPodcastsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Podcasts disponibles");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Trabajo en cuarentena");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Trabajo en cuarentena");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Trabajo en cuarentena");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Trabajo en cuarentena");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Trabajo en cuarentena");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Trabajo en cuarentena");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"]],
        styles: [".title-card-podcasts[_ngcontent-%COMP%] {\n  font-family: \"Raleway-Bold\";\n}\n\n.description-podcasts[_ngcontent-%COMP%] {\n  font-family: \"Raleway-Light\";\n}\n\n.card-podcasts[_ngcontent-%COMP%] {\n  color: white;\n  width: 26%;\n  text-align: center;\n  background: #066d6f;\n  margin-bottom: 20px;\n  padding: 18px;\n  border-radius: 20px;\n  min-width: 300px;\n}\n\n.container-cards-podcasts[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NhcmRzLXBvZGNhc3RzLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlL3ZhcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLDJCQUFBO0FBQUo7O0FBRUE7RUFDSSw0QkFBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQ1hNO0VEWU4sbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUFBO0VBQ0ksZUFBQTtBQUdKIiwiZmlsZSI6ImNhcmRzLXBvZGNhc3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zcmMvYXNzZXRzL3N0eWxlL3ZhcnMuc2Nzc1wiO1xuLnRpdGxlLWNhcmQtcG9kY2FzdHN7XG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5LUJvbGQnO1xufVxuLmRlc2NyaXB0aW9uLXBvZGNhc3Rze1xuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheS1MaWdodCc7XG59XG4uY2FyZC1wb2RjYXN0c3tcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6MjYlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHBhZGRpbmc6IDE4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xufVxuLmNvbnRhaW5lci1jYXJkcy1wb2RjYXN0c3tcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59IiwiJHByaW1hcnk6ICMwNjZkNmY7XG4kc2Vjb25kYXJ5OiAjMjBiMGIzO1xuJGJsYWNrOiMyRDJEMkQ7XG4kZ29vZ2xlOiAjZmY1OTU5O1xuJGZhY2Vib29rOiAjMDQ1YWFkO1xuJGFwcGxlOiAjMDAwMDAwO1xuXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "oBGg":
    /*!*********************************************!*\
      !*** ./src/app/podcasts/podcasts.module.ts ***!
      \*********************************************/

    /*! exports provided: PodcastsModule */

    /***/
    function oBGg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PodcastsModule", function () {
        return PodcastsModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _podcasts_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./podcasts-routing.module */
      "J2JA");
      /* harmony import */


      var _containers_podcasts_podcasts_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./containers/podcasts/podcasts.container */
      "GGaP");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _components_cards_podcasts_cards_podcasts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/cards-podcasts/cards-podcasts.component */
      "NdGK");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PodcastsModule = function PodcastsModule() {
        _classCallCheck(this, PodcastsModule);
      };

      PodcastsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: PodcastsModule
      });
      PodcastsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        factory: function PodcastsModule_Factory(t) {
          return new (t || PodcastsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _podcasts_routing_module__WEBPACK_IMPORTED_MODULE_1__["PodcastsRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](PodcastsModule, {
          declarations: [_containers_podcasts_podcasts_container__WEBPACK_IMPORTED_MODULE_2__["PodcastsContainer"], _components_cards_podcasts_cards_podcasts_component__WEBPACK_IMPORTED_MODULE_4__["CardsPodcastsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _podcasts_routing_module__WEBPACK_IMPORTED_MODULE_1__["PodcastsRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=podcasts-podcasts-module-es5.js.map