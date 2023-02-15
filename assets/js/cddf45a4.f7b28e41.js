"use strict";(self.webpackChunkfusion_doc=self.webpackChunkfusion_doc||[]).push([[571],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(a),c=r,k=d["".concat(p,".").concat(c)]||d[c]||u[c]||i;return a?n.createElement(k,l(l({ref:t},m),{},{components:a})):n.createElement(k,l({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1004:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:6},l="Appendix",o={unversionedId:"appendix",id:"appendix",title:"Appendix",description:"Glossary of terms",source:"@site/docs/appendix.md",sourceDirName:".",slug:"/appendix",permalink:"/fusion/docs/appendix",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Production",permalink:"/fusion/docs/production"}},p={},s=[{value:"Glossary of terms",id:"glossary-of-terms",level:2},{value:"Cloud API - Migrating ProtocolVersion 3.1 to 3.1-dmg",id:"cloud-api---migrating-protocolversion-31-to-31-dmg",level:2},{value:"Satellite API - Migrating to new API",id:"satellite-api---migrating-to-new-api",level:2},{value:"Intent Request",id:"intent-request",level:3},{value:"Intent Response",id:"intent-response",level:3},{value:"Terminal configuration",id:"terminal-configuration",level:2},{value:"PAX terminals",id:"pax-terminals",level:3},{value:"Enable access to the home screen",id:"enable-access-to-the-home-screen",level:4},{value:"Configure terminal environment",id:"configure-terminal-environment",level:4},{value:"Connect to Wi-Fi",id:"connect-to-wi-fi",level:4},{value:"Update settings",id:"update-settings",level:4},{value:"Update software",id:"update-software",level:4},{value:"Checking Wi-Fi connection",id:"checking-wi-fi-connection",level:4},{value:"Loading a custom APK",id:"loading-a-custom-apk",level:4}],m={toc:s},d="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"appendix"},"Appendix"),(0,r.kt)("h2",{id:"glossary-of-terms"},"Glossary of terms"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"API")," - application programming interface."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Card holder")," - the owner of a credit or debit card."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cashier")," - operator of the Sale System."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"CHD")," - cardholder data. Personally identifiable information associated with a person who has a credit or debit card."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"JSON")," - JavaScript object notation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"MAC")," - message authentication code."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Merchant")," - a business entity which can accept payments."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payment")," - a request sent from a ",(0,r.kt)("inlineCode",{parentName:"li"},"Sale System")," to a ",(0,r.kt)("inlineCode",{parentName:"li"},"POI System")," to perform an operation on a ",(0,r.kt)("inlineCode",{parentName:"li"},"Card holders")," card."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payment receipt")," - receipt generated by the ",(0,r.kt)("inlineCode",{parentName:"li"},"POI Terminal")," which contains information about the payment"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"PIN")," - personal identification number."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"POI")," - point of interaction."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"POI System")," - system which co-ordinates communication between a Sale System and POI Terminal. i.e. DataMesh Unify."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"POI Terminal")," - the physical PIN entry device which processes the card payment. i.e. DataMesh Satellite."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"POS")," - point of sale."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Sale")," - a sale, created by a ",(0,r.kt)("inlineCode",{parentName:"li"},"Cashier")," on a ",(0,r.kt)("inlineCode",{parentName:"li"},"Sale System"),", with associated ",(0,r.kt)("inlineCode",{parentName:"li"},"Sale Items"),". A Sale may be paid with one or more ",(0,r.kt)("inlineCode",{parentName:"li"},"Payments"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Sale item")," - a item sold to a card holder as a part of a sale."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Sale receipt")," - the receipt generated by the ",(0,r.kt)("inlineCode",{parentName:"li"},"Sale System")," which contains all sale information. The ",(0,r.kt)("inlineCode",{parentName:"li"},"Payment receipt")," may be embedded into the ",(0,r.kt)("inlineCode",{parentName:"li"},"Sale receipt")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Sale system")," - the system used to process merchant sales. The POS."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Satellite app")," - the DataMesh payment application "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Unify")," - the DataMesh payment switch"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"UUID")," - universally unique identifier.")),(0,r.kt)("h2",{id:"cloud-api---migrating-protocolversion-31-to-31-dmg"},"Cloud API - Migrating ProtocolVersion 3.1 to 3.1-dmg"),(0,r.kt)("p",null,"The DataMesh API supports two versions. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'"3.1" is based on the Nexo 3.1 standard'),(0,r.kt)("li",{parentName:"ul"},'"3.1-dmg" is "3.1" with additional fields added by DataMesh which are outside the Nexo standard (e.g. surcharge)')),(0,r.kt)("p",null,'Breaking changes when moving from "3.1" to "3.1-dmg"'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./data-dictionary#protocolversion"},"MessageHeader.ProtocolVersion"),' should be set to "3.1-dmg"'),(0,r.kt)("li",{parentName:"ul"},"Tip amount is now present in ",(0,r.kt)("a",{parentName:"li",href:"#tipamount"},"PaymentResponse.PaymentResult.AmountsResp.TipAmount"),"."),(0,r.kt)("li",{parentName:"ul"},"Surchage amount is now present in ",(0,r.kt)("a",{parentName:"li",href:"#surchargeamount"},"PaymentResponse.PaymentResult.AmountsResp.SurchargeAmount"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PaymentResponse.PaymentResult.PaymentReceipt"),' is now an array of receipts. This was a single object in "3.1"'),(0,r.kt)("li",{parentName:"ul"},"For a successful payment, the acquirer STAN is returned in ",(0,r.kt)("inlineCode",{parentName:"li"},"PaymentResponse.PaymentResult.PaymentAcquirerData.STAN"),". "),(0,r.kt)("li",{parentName:"ul"},"For a successful payment, the acquirer RRN is returned in ",(0,r.kt)("inlineCode",{parentName:"li"},"PaymentResponse.PaymentResult.PaymentAcquirerData.RRN"),". "),(0,r.kt)("li",{parentName:"ul"},'POS should support the "3.1-dmg" ',(0,r.kt)("inlineCode",{parentName:"li"},"mandatory features checklist"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Support for ",(0,r.kt)("a",{parentName:"li",href:"./APIs/cloud-api-reference#perform-a-purchase"},"purchase")," and ",(0,r.kt)("a",{parentName:"li",href:"./APIs/cloud-api-reference#perform-a-refund"},"refund")," payment types"),(0,r.kt)("li",{parentName:"ul"},"Include ",(0,r.kt)("a",{parentName:"li",href:"./APIs/cloud-api-reference#product-data"},"product data")," in each payment request"),(0,r.kt)("li",{parentName:"ul"},"Additional fields will be added to the message specification over time. To ensure forwards compatibility the Sale System must ignore when extra objects and fields are present in response messages. This includes valid MAC handling in the SecurityTrailer."),(0,r.kt)("li",{parentName:"ul"},"Support for TLS and other ",(0,r.kt)("a",{parentName:"li",href:"./APIs/cloud-api-reference#security-requirements"},"security requirements")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#settings-user-interface"},"Settings user interface")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#payment-user-interface"},"Payments user interface")," which handles the ",(0,r.kt)("inlineCode",{parentName:"li"},"Initial UI"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Final UI"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"cancelling a sale in progress")),(0,r.kt)("li",{parentName:"ul"},"Handle error scenarios as outlined in ",(0,r.kt)("a",{parentName:"li",href:"./APIs/cloud-api-reference#error-handling"},"error handling")),(0,r.kt)("li",{parentName:"ul"},"Ensure Sale System provides a unique ",(0,r.kt)("a",{parentName:"li",href:"#payment-identification"},"payment identification"))))),(0,r.kt)("h2",{id:"satellite-api---migrating-to-new-api"},"Satellite API - Migrating to new API"),(0,r.kt)("p",null,"The previous Satellite API has been updated so that both the Fusion Satellite API and Fusion Cloud API share a common data model."),(0,r.kt)("p",null,"The following is a guide for updating a previous integration to the new data model. "),(0,r.kt)("h3",{id:"intent-request"},"Intent Request"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Old Field"),(0,r.kt)("th",{parentName:"tr",align:null},"New Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TransType"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"./data-dictionary#paymenttype"},"PaymentData.PaymentType")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Amount"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"./data-dictionary#requestedamount"},"PaymentTransaction.AmountsReq.RequestedAmount")),(0,r.kt)("td",{parentName:"tr",align:null},"Amount was represented as an integer 'cents' in the previous API, where the new API ",(0,r.kt)("inlineCode",{parentName:"td"},"RequestedAmount")," is represented as decimal dollar and cents")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CashOut"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"./data-dictionary#cashbackamount"},"PaymentTransaction.AmountsReq.CashBackAmount")),(0,r.kt)("td",{parentName:"tr",align:null},"CashOut was represented as an integer 'cents' in the previous API, where the new API ",(0,r.kt)("inlineCode",{parentName:"td"},"CashBackAmount")," is represented as decimal dollar and cents")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"POS"),(0,r.kt)("td",{parentName:"tr",align:null},"ApplicationName"),(0,r.kt)("td",{parentName:"tr",align:null},"Set as extra data in the intent, not part of the ",(0,r.kt)("inlineCode",{parentName:"td"},"Request")," json object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Source"),(0,r.kt)("td",{parentName:"tr",align:null},"SoftwareVersion"),(0,r.kt)("td",{parentName:"tr",align:null},"Only include the software version, not the POS name. Set as extra data in the intent, not part of the ",(0,r.kt)("inlineCode",{parentName:"td"},"Request")," json object")))),(0,r.kt)("h3",{id:"intent-response"},"Intent Response"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Old Field"),(0,r.kt)("th",{parentName:"tr",align:null},"New Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TransState"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"./data-dictionary#result"},"Response.Result")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TransID"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"./data-dictionary#poitransactionid"},"POIData.POITransactionID.TransactionID")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TerminalID"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"./data-dictionary#acquirerpoiid"},"PaymentResult.PaymentAcquirerData.AcquirerPOIID")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PAN"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"./data-dictionary#maskedpan"},"PaymentResult.PaymentInstrumentData.CardData.MaskedPAN")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Totalamount"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"./data-dictionary#authorizedamount"},"PaymentResult.AmountsResp.AuthorizedAmount")),(0,r.kt)("td",{parentName:"tr",align:null},"Totalamount was represented as an integer 'cents' in the previous API, where the new API ",(0,r.kt)("inlineCode",{parentName:"td"},"AuthorizedAmount")," is represented as decimal dollar and cents. Note the may not match ",(0,r.kt)("a",{parentName:"td",href:"./data-dictionary#authorizedamount"},"AuthorizedAmount")," may not match the ",(0,r.kt)("a",{parentName:"td",href:"./data-dictionary#requestedamount"},"RequestedAmount"),". If implementing tipping or surcharge, the POS should also check for ",(0,r.kt)("a",{parentName:"td",href:"./data-dictionary#tipamount"},"TipAmount")," and ",(0,r.kt)("a",{parentName:"td",href:"./data-dictionary#surchargeamount"},"SurchargeAmount"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"STAN"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"./data-dictionary#stan"},"PaymentResult.PaymentAcquirerData.STAN")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AcqRRN"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"./data-dictionary#rrn"},"PaymentResult.PaymentAcquirerData.RRN")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TransDateTime"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"./data-dictionary#poitransactionid"},"POIData.POITransactionID.TimeStamp")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EntryMode"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"./data-dictionary#entrymode"},"PaymentResult.PaymentInstrumentData.CardData.EntryMode")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MerchantID"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"./data-dictionary#merchantid"},"PaymentResult.PaymentAcquirerData.MerchantID")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HostErrorCode"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"./data-dictionary#responsecode"},"PaymentResult.PaymentAcquirerData.ResponseCode")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TokenValue"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"./data-dictionary#tokenvalue"},"PaymentResult.PaymentInstrumentData.PaymentToken.TokenValue")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"terminal-configuration"},"Terminal configuration"),(0,r.kt)("h3",{id:"pax-terminals"},"PAX terminals"),(0,r.kt)("h4",{id:"enable-access-to-the-home-screen"},"Enable access to the home screen"),(0,r.kt)("p",null,"In a production environment a terminal will typically be locked to the payment application, however in development and test it is useful to enable access to the home screen. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In the Satellite payment app, tap the settings icon (\u2699)")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(1779).Z,width:"270",height:"480"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Enter ",(0,r.kt)("inlineCode",{parentName:"li"},"0000")," as the merchant password and ensure the following are ticked",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Navigation bar"),(0,r.kt)("li",{parentName:"ul"},"Status Bar")))),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(4446).Z,width:"270",height:"480"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tap the back icon (\u2b05) "),(0,r.kt)("li",{parentName:"ul"},'Hit the "home" button on the terminal to view the home page')),(0,r.kt)("h4",{id:"configure-terminal-environment"},"Configure terminal environment"),(0,r.kt)("p",null,"Your development terminal will be conncted to the UAT environment, which is the correct environemnt for testing. "),(0,r.kt)("p",null,"To confirm or change the environemnt:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Launch the Satellite payment app"),(0,r.kt)("li",{parentName:"ul"},"Tap the settings icon (\u2699)"),(0,r.kt)("li",{parentName:"ul"},"Enter 8801 as the merchant password"),(0,r.kt)("li",{parentName:"ul"},'You\'ll be presented with a "Change Host URL" dialog'),(0,r.kt)("li",{parentName:"ul"},"Ensure the URL is ",(0,r.kt)("inlineCode",{parentName:"li"},"wss://test.datameshgroup.com.au/peduat1")," and tap Enter")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(6329).Z,width:"270",height:"480"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Restart the Satellite payment app ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Tap the task switcher button"),(0,r.kt)("li",{parentName:"ul"},"Close the Satellite payment app"),(0,r.kt)("li",{parentName:"ul"},"Launch the Satellite payment app again ")))),(0,r.kt)("h4",{id:"connect-to-wi-fi"},"Connect to Wi-Fi"),(0,r.kt)("p",null,"The terminal can be connected to Wi-Fi where cellular access isn't avaiable. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Press the Home button "),(0,r.kt)("li",{parentName:"ul"},'Launch the "Settings" app (\u2699icon)')),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(9114).Z,width:"270",height:"480"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If it asks for a password, enter ",(0,r.kt)("inlineCode",{parentName:"li"},"pax9876@@")),(0,r.kt)("li",{parentName:"ul"},"Select Wi-Fi open, choose your Wi-Fi network and enter the password"),(0,r.kt)("li",{parentName:"ul"},'You should see your Wi-Fi network with a "Connected" status underneath ')),(0,r.kt)("h4",{id:"update-settings"},"Update settings"),(0,r.kt)("p",null,"The terminal will periodically connect to the host and download updated settings."),(0,r.kt)("p",null,"To force a settings update:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Launch the Satellite payment app"),(0,r.kt)("li",{parentName:"ul"},'Tap the "info" icon (\u24d8) at the top of the screen'),(0,r.kt)("li",{parentName:"ul"},"The terminal will update settings from the host"),(0,r.kt)("li",{parentName:"ul"},"Then current software version, terminal ID, and merchant ID will be displayed on screen")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(8364).Z,width:"270",height:"480"})),(0,r.kt)("h4",{id:"update-software"},"Update software"),(0,r.kt)("p",null,"The terminal will periodically connect to the host and update to the configured software version. "),(0,r.kt)("p",null,"To force a software update:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Launch the Satellite payment app"),(0,r.kt)("li",{parentName:"ul"},"Tap the settings icon (\u2699) at the top of the screen"),(0,r.kt)("li",{parentName:"ul"},"Enter ",(0,r.kt)("inlineCode",{parentName:"li"},"0000")," as the merchant password"),(0,r.kt)("li",{parentName:"ul"},"Select the ",(0,r.kt)("inlineCode",{parentName:"li"},"SOFTWARE UPGRADE")," option and select ",(0,r.kt)("inlineCode",{parentName:"li"},"YES")," on the confirmation dialog"),(0,r.kt)("li",{parentName:"ul"},"The software will be downloaded, and Satellite will restart")),(0,r.kt)("h4",{id:"checking-wi-fi-connection"},"Checking Wi-Fi connection"),(0,r.kt)("p",null,"To check Wi-FI connection status at any time:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Swipe down from the top of the screen to open the notification shade"),(0,r.kt)("li",{parentName:"ul"},"Swipe down again to expand the notification shade"),(0,r.kt)("li",{parentName:"ul"},"Top left icon will be your Wi-Fi status and connected access point")),(0,r.kt)("h4",{id:"loading-a-custom-apk"},"Loading a custom APK"),(0,r.kt)("p",null,"For Fusion Satellite integrations, the DataMesh debug development POI terminals are configured to allow loading of custom APK's."),(0,r.kt)("p",null,"There are two methods for completing this process: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Connect the terminal to Android Development Studio")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Connect the USB port on the side of the POI Terminal to your PC"),(0,r.kt)("li",{parentName:"ul"},"The terminal will appear in the list of connected devices in Android Development Studio"),(0,r.kt)("li",{parentName:"ul"},"You can choose to either deploy or debug your custom APK on the terminal")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Copy the APK to the terminal")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Connect the USB port on the side of the POI Terminal to your PC"),(0,r.kt)("li",{parentName:"ul"},'The terminal will appear as "MTP USB Device" in the PC file manager'),(0,r.kt)("li",{parentName:"ul"},'Navigate to "MTP USB Device", and copy your APK to the terminal "download" directory'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("img",{src:a(1496).Z,width:"270",height:"168"}),"  "),(0,r.kt)("li",{parentName:"ul"},'On the terminal, launch "File Manager" and navigate to the "download" directory.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("img",{src:a(551).Z,width:"270",height:"224"}),"  "),(0,r.kt)("li",{parentName:"ul"},"Tap your APK version and accept the install."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("img",{src:a(114).Z,width:"270",height:"482"}))))}u.isMDXComponent=!0},1496:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/load-apk-01-42811b12150dfcc0af6f3a625838a830.png"},551:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/load-apk-02-1bb15a4c19263d37826331659ed3c7ce.png"},114:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/load-apk-03-ded4c2d8026e57c1f7f5a70507f5ef2f.png"},6329:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pinpad-host-url-270x480-004fc25049323931fb3c9fdb5c703c03.png"},8364:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pinpad-info-270x480-e6a82f0eb9f5f53f7860c894a24b403d.png"},9114:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pinpad-launch-settings-270x480-573092641a5392e310b7d2acd85f031c.png"},1779:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pinpad-merchant-password-270x480-7e3f9abee9ffec0a29bcacf1162a6661.png"},4446:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pinpad-settings-270x480-af40322c7bcb8134b95dd7eb5b4f6fb9.png"}}]);