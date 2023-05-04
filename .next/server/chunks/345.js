"use strict";
exports.id = 345;
exports.ids = [345];
exports.modules = {

/***/ 3479:
/***/ ((module) => {


module.exports = {
    i18n: {
        defaultLocale: "en",
        locales: [
            "en",
            "es"
        ]
    },
    fallbackLng: "en"
};


/***/ }),

/***/ 4829:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Aside)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/Aside/NavLink/index.js


const NavLink = ({ link , children , className  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
        className: "activeNav",
        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: link,
            className: `${className ?? "text-violet hover:text-gray-400 hover:bg-white active:bg-gray-100 p-2 rounded-xl transition duration-500 text-base uppercase text-center mx-auto w-full justify-center"} font-link `,
            "aria-label": "Ir a la secci\xf3n",
            children: children
        })
    });
};
/* harmony default export */ const Aside_NavLink = (NavLink);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/Translations/Translations.js


function Translations() {
    const router = (0,router_.useRouter)();
    const changeLang = (locale)=>{
        router.replace(router.pathname, router.pathname, {
            locale
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "mx-auto md:my-8 flex justify-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: `mx-1 px-1 font-bold text-gray-400 ${router.locale === "es" ? "bold" : "font-thin"}`,
                onClick: ()=>changeLang("es"),
                children: "ES"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: " text-violet",
                children: " / "
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: `mx-1 px-1 font-bold text-gray-400 ${router.locale === "en" ? "bold" : "font-thin"}`,
                onClick: ()=>changeLang("en"),
                children: "EN"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Resume/ContactLinks/index.js

const ContactLinks = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: "text-gray-400 text-center mt-8 md:text-left flex justify-center mb-2",
        children: children
    });
};
/* harmony default export */ const Resume_ContactLinks = (ContactLinks);

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

;// CONCATENATED MODULE: ./src/components/Aside/index.js








const Aside = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)("common");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("aside", {
        className: "bg-gray-100 md:w-[220px] h-full md:h-screen md:flex-shrink-0 md:mx-0 md:px-0 text-center rounded-xl p-8",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Translations, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                href: "/",
                className: "text-center text-violet hover:text-neutral-400 transition duration-500 md:text-base text-xs uppercase my-auto",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "/icons/logoviolet.png",
                        alt: "logo",
                        height: 50,
                        width: 50,
                        className: "items-center align-middle mx-auto"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "bg-violet uppercase p-2 mt-2 text-white rounded shadow-lg hover:bg-gray-400 hover:text-white border border-transparent hover:shadow-lg transition duration-500",
                        children: "Julieta Dirzieh"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                className: "flex flex-row md:flex-col items-center relative px-4 md:px-0 pb-0 fade md:overflow-auto md:relative",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: "flex flex-row md:flex-col flex-wrap items-center justify-center gap-5 mx-auto pt-8 md:p-8",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Aside_NavLink, {
                            link: "/education",
                            children: t("education")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Aside_NavLink, {
                            link: "/skills",
                            children: t("skills")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Aside_NavLink, {
                            link: "/2023",
                            children: "2023"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Aside_NavLink, {
                            link: "/2022",
                            children: "2022"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Aside_NavLink, {
                            link: "/2021",
                            children: "2021"
                        })
                    ]
                })
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
                        src: "/icons/whatsapp.svg"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Aside = (Aside);


/***/ }),

/***/ 380:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);


const HeadLinks = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: "Portfolio | Julieta Dirzieh"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "description",
                content: "Desarrolladora Web Front-end."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "keywords",
                content: "Desarrolladora Web, frontend, front-end, desarrollo web, programaci\xf3n, programador web, p\xe1gina web, sitio web, desarrollo de sitio web"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "icon",
                href: "/icons/logoviolet.png"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeadLinks);


/***/ }),

/***/ 3668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Title = ({ caption  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        className: "text-violet font-bold text-3xl uppercase tracking-wider text-center md:text-left",
        children: caption
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);


/***/ })

};
;