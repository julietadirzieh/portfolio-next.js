"use strict";
(() => {
var exports = {};
exports.id = 800;
exports.ids = [800];
exports.modules = {

/***/ 5497:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Projects),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/Aside/index.js + 4 modules
var Aside = __webpack_require__(4829);
// EXTERNAL MODULE: ./src/components/HeadLinks/index.js
var HeadLinks = __webpack_require__(380);
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(5460);
// EXTERNAL MODULE: ./src/components/DevProjects/index.js
var DevProjects = __webpack_require__(5111);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/DevProjects/Project/index.js
var Project = __webpack_require__(4581);
;// CONCATENATED MODULE: ./src/components/DevProjects/Projects2023/listProjects2023.js
const listProjects2023 = [
    {
        src: "/videos/delucas.gif",
        name: "Mago Bryan De Lucas",
        link: "https://bryandelucas.com/",
        description: "React JS, Vite y Tailwind CSS"
    },
    {
        src: "/videos/hometoshow.gif",
        name: "Home to Show",
        link: "https://hometoshow.com.ar/",
        description: "HTML5, CSS y Javascript"
    },
    {
        src: "/videos/eitis.gif",
        name: "Eitis Magia",
        link: "https://eitismagia.com/",
        description: "React JS y Tailwind CSS"
    },
    {
        src: "/videos/1981textil.gif",
        name: "1981 Textil",
        link: "https://1981textil.com/",
        description: "Tienda Online Wordpress"
    },
    {
        src: "/videos/camilagalante.gif",
        name: "Camila Galante",
        link: "https://psicamilagalante.com/",
        description: "Wordpress"
    }
];
/* harmony default export */ const Projects2023_listProjects2023 = (listProjects2023);

;// CONCATENATED MODULE: ./src/components/DevProjects/Projects2023/index.js




const ProjectsDev2023 = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "w-full pb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
        children: Projects2023_listProjects2023.map((data, index)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx(Project/* default */.Z, {
                data: data
            }, index);
        })
    });
};
/* harmony default export */ const Projects2023 = (ProjectsDev2023);

// EXTERNAL MODULE: ./next-i18next.config.js
var next_i18next_config = __webpack_require__(3479);
var next_i18next_config_default = /*#__PURE__*/__webpack_require__.n(next_i18next_config);
;// CONCATENATED MODULE: ./src/pages/2023.js







function Projects() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "max-w-full items-center flex flex-col md:flex-row mx-4 lg:mx-auto",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Aside/* default */.Z, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(HeadLinks/* default */.Z, {}),
                /*#__PURE__*/ jsx_runtime_.jsx("main", {
                    className: "flex-auto mt-6 md:mt-0 flex flex-col px-2 pt-6",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
                        className: "text-gray-400 px-0 md:px-12",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(DevProjects/* default */.Z, {
                            year: "2023",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Projects2023, {})
                        })
                    })
                })
            ]
        })
    });
}
async function getStaticProps({ locale  }) {
    return {
        props: {
            ...await (0,serverSideTranslations_.serverSideTranslations)(locale, [
                "common"
            ], (next_i18next_config_default()))
        }
    };
}


/***/ }),

/***/ 1377:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 5460:
/***/ ((module) => {

module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,61,345,471], () => (__webpack_exec__(5497)));
module.exports = __webpack_exports__;

})();