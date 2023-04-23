"use strict";
(() => {
var exports = {};
exports.id = 906;
exports.ids = [906];
exports.modules = {

/***/ 1537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Skills),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/Aside/index.js + 2 modules
var Aside = __webpack_require__(4127);
// EXTERNAL MODULE: ./src/components/HeadLinks/index.js
var HeadLinks = __webpack_require__(380);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/Title/index.js
var Title = __webpack_require__(3668);
;// CONCATENATED MODULE: ./src/components/Education/Course/index.js


const Course = ({ name , institution , year  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
        className: "my-2 text-center md:text-left",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "font-bold text-xl",
                children: name
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex justify-center md:justify-start",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "text-base mr-1",
                        children: [
                            year,
                            " |"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "text-base ml-1",
                        children: [
                            " ",
                            institution
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Education_Course = (Course);

// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
;// CONCATENATED MODULE: ./src/components/Education/Courses/index.js




const Courses = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)("education");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
        className: "list-outside mb-12",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Education_Course, {
                name: t("backend"),
                year: "En curso",
                institution: "CoderHouse"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Education_Course, {
                name: t("testing"),
                year: "2022",
                institution: "CoderHouse"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Education_Course, {
                name: t("python"),
                year: "2022",
                institution: "Codo A Codo"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Education_Course, {
                name: t("wordpress"),
                year: "2022",
                institution: "CoderHouse"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Education_Course, {
                name: t("frontend"),
                year: "2021",
                institution: "Codo A Codo"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Education_Course, {
                name: t("lawyer"),
                year: "2013 - 2018",
                institution: "Universidad de Buenos Aires"
            })
        ]
    });
};
/* harmony default export */ const Education_Courses = (Courses);

;// CONCATENATED MODULE: ./src/components/Education/index.js





const Education = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Title/* default */.Z, {
                caption: t("education")
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "my-4",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Education_Courses, {})
            })
        ]
    });
};
/* harmony default export */ const components_Education = (Education);

// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(5460);
// EXTERNAL MODULE: ./next-i18next.config.js
var next_i18next_config = __webpack_require__(3479);
var next_i18next_config_default = /*#__PURE__*/__webpack_require__.n(next_i18next_config);
;// CONCATENATED MODULE: ./src/pages/education.js






function Skills() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "max-w-4xl flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Aside/* default */.Z, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(HeadLinks/* default */.Z, {}),
                /*#__PURE__*/ jsx_runtime_.jsx("main", {
                    className: "flex-auto mt-6 md:mt-0 flex flex-col px-2 md:px-0",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
                        className: "text-gray-400 pl-0 md:pl-12",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_Education, {})
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
                "education",
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
var __webpack_exports__ = __webpack_require__.X(0, [636,61,440], () => (__webpack_exec__(1537)));
module.exports = __webpack_exports__;

})();