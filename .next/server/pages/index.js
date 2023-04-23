"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 5575:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/Aside/index.js + 2 modules
var Aside = __webpack_require__(4127);
// EXTERNAL MODULE: ./src/components/HeadLinks/index.js
var HeadLinks = __webpack_require__(380);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/Resume/DataLinks/index.js

const DataLinks = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: "text-gray-400 text-center my-3 md:my-0 md:text-left md:col-span-2",
        children: children
    });
};
/* harmony default export */ const Resume_DataLinks = (DataLinks);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/Resume/DataLinks/DataLink/index.js


const DataLink = ({ link , children , className  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: link,
            className: "text-gray-400 hover:text-violet py-2 text-base text-center md:text-left",
            "aria-label": "Ir a la p\xe1gina",
            target: "_blank",
            children: children
        })
    });
};
/* harmony default export */ const DataLinks_DataLink = (DataLink);

// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
;// CONCATENATED MODULE: ./src/components/Resume/ContactLinks/ContactLink/index.js



const ContactLink = ({ link , src  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: link,
            className: "text-gray-400 hover:text-violet px-4 text-base text-center md:text-left",
            "aria-label": "Ir a la p\xe1gina",
            target: "_blank",
            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: src,
                alt: "Picture of the author",
                height: 150,
                width: 150,
                className: "inline mt-2 mx-auto md:mx-0 w-7 h-7 "
            })
        })
    });
};
/* harmony default export */ const ContactLinks_ContactLink = (ContactLink);

;// CONCATENATED MODULE: ./src/components/Resume/ContactLinks/index.js

const ContactLinks = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: "text-gray-400 text-center my-3 md:my-0 md:text-left flex justify-center md:justify-start",
        children: children
    });
};
/* harmony default export */ const Resume_ContactLinks = (ContactLinks);

;// CONCATENATED MODULE: ./src/components/Resume/index.js








const Resume = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)("home");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "grid grid-cols-1 md:grid-cols-3 px-12 md:px-0 md:justify-center mt-2 gap-4 items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "/images/julieta.jpeg",
                        alt: "Picture of the author",
                        height: 150,
                        width: 150,
                        className: "object-cover object-top rounded-full p-1 mt-4 bg-violet mx-auto md:mx-0"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Resume_DataLinks, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(DataLinks_DataLink, {
                                link: "https://goo.gl/maps/ibUKkxXKJSpQEWXe6",
                                children: t("country")
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(DataLinks_DataLink, {
                                link: "",
                                children: t("birthdate")
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "text-xl mt-6 px-12 md:px-0 text-justify mb-12",
                children: t("bio")
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Resume_ContactLinks, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ContactLinks_ContactLink, {
                        link: "https://www.linkedin.com/in/julieta-erika-dirzieh-59b50a159/",
                        src: "/icons/linkedin.svg"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ContactLinks_ContactLink, {
                        link: "mailto:julidirzieh@gmail.com",
                        src: "/icons/mail.svg"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ContactLinks_ContactLink, {
                        link: "https://api.whatsapp.com/send?phone=5491158125574",
                        src: "/icons/telefono.svg"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Resume = (Resume);

// EXTERNAL MODULE: ./src/components/Title/index.js
var Title = __webpack_require__(3668);
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(5460);
// EXTERNAL MODULE: ./next-i18next.config.js
var next_i18next_config = __webpack_require__(3479);
var next_i18next_config_default = /*#__PURE__*/__webpack_require__.n(next_i18next_config);
;// CONCATENATED MODULE: ./src/pages/index.js







function Home() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "max-w-4xl flex flex-col md:flex-row mx-auto mt-8 md:mt-20 lg:mt-32",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Aside/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(HeadLinks/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: "flex-auto mt-6 md:mt-0 flex flex-col px-2 md:px-0",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                    className: "text-gray-400 pl-0 md:pl-12",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Title/* default */.Z, {
                            caption: "Julieta Dirzieh"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(components_Resume, {})
                    ]
                })
            })
        ]
    });
}
async function getStaticProps({ locale  }) {
    return {
        props: {
            ...await (0,serverSideTranslations_.serverSideTranslations)(locale, [
                "home",
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
var __webpack_exports__ = __webpack_require__.X(0, [636,61,440], () => (__webpack_exec__(5575)));
module.exports = __webpack_exports__;

})();