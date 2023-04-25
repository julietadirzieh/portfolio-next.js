"use strict";
(() => {
var exports = {};
exports.id = 81;
exports.ids = [81];
exports.modules = {

/***/ 873:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ skills_Skills),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/Aside/index.js + 2 modules
var Aside = __webpack_require__(4127);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/DevSkills/Skill/index.js



const Skill = ({ img , name  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "text-center items-center justify-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: img,
                className: "max-w-150px aspect-square object-cover rounded-full mx-auto",
                alt: "lenguaje",
                width: 80,
                height: 80
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "font-bold text-lg",
                children: name
            })
        ]
    });
};
/* harmony default export */ const DevSkills_Skill = (Skill);

;// CONCATENATED MODULE: ./src/components/DevSkills/Skills/skills.js
const skills = [
    {
        src: "/icons/html.png",
        name: "HTML5"
    },
    {
        src: "/icons/css.png",
        name: "CSS"
    },
    {
        src: "/icons/js.png",
        name: "Javascript"
    },
    {
        src: "/icons/react.png",
        name: "React JS"
    },
    {
        src: "/icons/python.png",
        name: "Python"
    },
    {
        src: "/icons/react.png",
        name: "React Native"
    }
];
/* harmony default export */ const Skills_skills = (skills);

;// CONCATENATED MODULE: ./src/components/DevSkills/Skills/index.js




const Skills = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "w-full pb-6 grid grid-cols-3 gap-6 my-4",
        children: Skills_skills.map((card, index)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx(DevSkills_Skill, {
                img: card.src,
                name: card.name
            }, index);
        })
    });
};
/* harmony default export */ const DevSkills_Skills = (Skills);

// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./src/components/Title/index.js
var Title = __webpack_require__(3668);
;// CONCATENATED MODULE: ./src/components/DevSkills/index.js





const DevSkills = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Title/* default */.Z, {
                caption: t("skills")
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mt-8",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(DevSkills_Skills, {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mt-2 md:mt-6 grid grid-cols-1 md:grid-cols-2 gap-6",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "text-center md:text-left font-bold text-lg p-2",
                                children: "\xb7 Git"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "text-center md:text-left font-bold text-lg p-2",
                                children: "\xb7 Tailwind CSS y Bootstrap"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "text-center md:text-left font-bold text-lg p-2",
                                children: "\xb7 Redux Toolkit"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "text-center md:text-left font-bold text-lg p-2",
                                children: "\xb7 MySQL, MongoDB y FireBase"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_DevSkills = (DevSkills);

// EXTERNAL MODULE: ./src/components/HeadLinks/index.js
var HeadLinks = __webpack_require__(380);
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(5460);
// EXTERNAL MODULE: ./next-i18next.config.js
var next_i18next_config = __webpack_require__(3479);
var next_i18next_config_default = /*#__PURE__*/__webpack_require__.n(next_i18next_config);
;// CONCATENATED MODULE: ./src/pages/skills.js






function skills_Skills() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "max-w-full flex flex-col md:flex-row mx-4 lg:mx-auto",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Aside/* default */.Z, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(HeadLinks/* default */.Z, {}),
                /*#__PURE__*/ jsx_runtime_.jsx("main", {
                    className: "flex-auto mt-6 md:mt-0 flex flex-col px-2 pt-6",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
                        className: "text-gray-400 pl-0 md:pl-12",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_DevSkills, {})
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
var __webpack_exports__ = __webpack_require__.X(0, [636,61,440], () => (__webpack_exec__(873)));
module.exports = __webpack_exports__;

})();