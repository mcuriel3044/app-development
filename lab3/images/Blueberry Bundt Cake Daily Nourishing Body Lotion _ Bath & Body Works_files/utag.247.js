//tealium universal tag - utag.247 ut4.0.202407011441, Copyright 2024 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={'view':1};u.initialized=false;u.map={};u.extend=[];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,i;u.data={};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
(function(){try{window.utag.globals=window.utag.globals||{};window.utag.globals[b.tealium_random]=window.utag.globals[b.tealium_random]||{};if(window.sessionStorage.getItem("sessionAIInit")!=="true"){window.sessionStorage.setItem("sessionAIInit","true");window.utag.globals[b.tealium_random]["sessionAIInit"]="true";}}catch(error){console.log(error);}
const z1APIKey='cloud@d6dbca8d-a028-45a6-a58d-f7fe45533aaeZ15316533866845070716';function initZ1(){enableZ1Banner();const zineOne=document.createElement('script');zineOne.src='https://cdn.zineone.com/cloud/latest/z1m.js';zineOne.addEventListener('load',()=>{ZineOne.initialize(z1APIKey);initiateZ1Events();});document.getElementsByTagName('head')[0].appendChild(zineOne);}
initZ1();function enableZ1Banner(){const Z1Widget=document.createElement('div');Z1Widget.style.display='none';Z1Widget.setAttribute('data-zineone-widget','z1_content_widget');const body=document.querySelector('body');body.appendChild(Z1Widget);}
function initiateZ1Events(){const Z1PageloadEvent=new CustomEvent('onZ1pageload',{detail:{}});window.dispatchEvent(Z1PageloadEvent);const accountSignin=window?.digitalData?.user?.attributes?.accountSignin;const accountSignup=window?.digitalData?.user?.attributes?.accountSignup;if(accountSignin||accountSignup){ZineOne.setCustomerId(window?.digitalData?.user?.profile?.profileInfo?.profileID);console.log('customer Set');}
const pageType=window?.digitalData?.pageInstanceID;const loginStatus={};if(window?.digitalData?.user?.attributes?.customer_status==='anonymous'){loginStatus.loginStatus='N'}else{loginStatus.loginStatus='Y',loginStatus.customerId=window?.digitalData?.user?.profile?.profileInfo?.profileID;}
let cartProducts;let purchasePriceAccessor;let productIdAccessor;if(pageType==='cart'||pageType==='checkout'){cartProducts=window?.digitalData?.cart?.item;purchasePriceAccessor=item=>({priceOrig:item?.attributes?.cart_product_base_price,priceSale:item?.price});productIdAccessor=item=>item?.productInfo?.productID;}else{cartProducts=JSON.parse(document.querySelector('.mini-cart-link').getAttribute('data-kibocartdata'));purchasePriceAccessor=item=>({priceSale:item?.unitPrice});productIdAccessor=item=>item?.productId;}
const cartProductsDetails={};const cartProductsArr=[];if(cartProducts){cartProducts.forEach(function(cartProduct){const cartProductsObj={sku:productIdAccessor(cartProduct),productId:productIdAccessor(cartProduct),quantity:cartProduct.quantity,...purchasePriceAccessor(cartProduct)};cartProductsArr.push(cartProductsObj);});}
cartProductsDetails.cartProducts=JSON.stringify(cartProductsArr);const oldCartItems=window?.localStorage?.z1_oldCartItems;if(oldCartItems){const oldCartItemsArr=JSON.parse(oldCartItems);updateCart(oldCartItemsArr,cartProductsArr);localStorage.removeItem('z1_oldCartItems');}
const removedItem=window?.localStorage?.z1_removedItem;if(removedItem){const returnObj={...cartProductsDetails,...loginStatus,...JSON.parse(removedItem)}
fireZineOneEvent('update_cart',returnObj);localStorage.removeItem('z1_removedItem');}
let category=window?.digitalData?.page?.pageInfo?.pageID;const categoryObj={};if(category){categoryObj.category=encodeURIComponent(category);}
const searchTerm=window?.digitalData?.page?.pageInfo?.onsiteSearchTerm;const searchTermObj={};if(searchTerm){searchTermObj.searchTerm=encodeURIComponent(searchTerm);}
const pdpProduct=window?.digitalData?.product[0];const pdpProductDetails={};if(pdpProduct){pdpProductDetails.sku=pdpProduct?.productInfo?.productID;pdpProductDetails.productId=pdpProduct?.productInfo?.productID;pdpProductDetails.priceOrig=pdpProduct?.attributes?.product_origin_price;pdpProductDetails.priceSale=pdpProduct?.attributes?.product_price;pdpProductDetails.category=encodeURIComponent(pdpProduct?.attributes?.product_sub_category);}
const transaction=window?.digitalData?.transaction;let purchaseEventPayload={};if(transaction){const purchaseItems=[];const transactionItems=transaction?.item;transactionItems.forEach(transactionItem=>{const transactionPushItem={sku:transactionItem.productInfo.productID,productId:transactionItem.productInfo.productID,quantity:transactionItem.quantity,priceOrig:transactionItem.attributes.cart_product_base_price,priceSale:Number(transactionItem.price).toFixed(2)!==Number(transactionItem.attributes.cart_product_base_price).toFixed(2)?transactionItem.price:transactionItem.attributes.cart_product_base_price,category:transactionItem.category.primaryCategory}
purchaseItems.push(transactionPushItem);})
purchaseEventPayload={revenue:transaction?.total?.transactionTotal,tax:transaction?.attributes?.order_tax_amount,products:JSON.stringify(purchaseItems),orderId:transaction?.transactionID,coupon:transaction?.total?.voucherCode,discount:transaction?.total?.voucherDiscount}}
const pageLoadEventsObj={home:{eventName:'view_home',events:{...cartProductsDetails,...loginStatus}},category:{eventName:'view_category',events:{...categoryObj,...cartProductsDetails,...loginStatus}},search:{eventName:'search',events:{...cartProductsDetails,...loginStatus,...searchTermObj}},product:{eventName:'view_product',events:{...cartProductsDetails,...loginStatus,...pdpProductDetails}},cart:{eventName:'view_cart',events:{...cartProductsDetails,...loginStatus}},shipping:{eventName:'add_shipping_info',events:{...cartProductsDetails,...loginStatus}},billing:{eventName:'add_payment_info',events:{...cartProductsDetails,...loginStatus}},confirmation:{eventName:'purchase',events:{...purchaseEventPayload,...loginStatus}}}
const strategyType=pageType==='checkout'?window?.digitalData?.page?.pageInfo?.pageID:pageType;if(pageLoadEventsObj[strategyType]){fireZineOneEvent(pageLoadEventsObj[strategyType]['eventName'],pageLoadEventsObj[strategyType]['events']);}
function fireZineOneEvent(eventName,eventPayload){ZineOne.pushEvent(eventName,eventPayload);const zineOneEvent=new CustomEvent(`z1_${eventName}`,{detail:eventPayload});window.dispatchEvent(zineOneEvent);}
const body=document.querySelector('body');body.addEventListener('mouseover',e=>{const target=e.target;if(target.classList.contains('add-to-cart')){target.removeEventListener('click',handleATBClick);target.addEventListener('click',handleATBClick);}});body.addEventListener('click',function(e){const target=e.target;let removeId;if(target.closest('.remove')&&target.closest('#mini-cart')){const removeAnchor=target.closest('.remove');removeId=removeAnchor.getAttribute('data-id');}else if(target.classList.contains('.remove')&&target.closest('#mini-cart')){removeId=target.getAttribute('data-id');}
if(removeId){removeItem(removeId);}});const gridContainer=document.querySelector('.search-result-content');if(gridContainer){gridContainer.addEventListener('mouseover',e=>{const target=e.target;if(target.classList.contains('quickview')){target.removeEventListener('click',handleQVClick);target.addEventListener('click',handleQVClick);}})}
const updateCartButton=document.querySelector('.update-cart button#update-cart');if(updateCartButton){updateCartButton.addEventListener('click',()=>{localStorage.setItem('z1_oldCartItems',cartProductsDetails.cartProducts);});}
const checkoutButtons=document.querySelectorAll('.checkout-buttons .button-fancy-large');if(checkoutButtons){checkoutButtons.forEach(checkoutButton=>{checkoutButton.addEventListener('click',()=>{beginCheckout();});});}
const payPalButtons=document.querySelectorAll('.expressbutton');if(payPalButtons){payPalButtons.forEach(payPalButton=>{payPalButton.addEventListener('click',()=>{beginCheckout();});});}
const applePayButtons=document.querySelectorAll('.checkout-buttons .dw-apple-pay-border');if(applePayButtons){applePayButtons.forEach(applePayButton=>{applePayButton.addEventListener('click',()=>{beginCheckout();});})}
const removeCartItemButtons=document.querySelectorAll('.remove-item');if(removeCartItemButtons){removeCartItemButtons.forEach(removeCartItemButton=>{removeCartItemButton.addEventListener('click',()=>{const itemDetails=JSON.parse(removeCartItemButton.getAttribute('data-tealium'));const removedItem={sku:itemDetails.id,productId:itemDetails.id,priceOrig:itemDetails.original_price,quantity:'0'}
if(itemDetails.original_price!==itemDetails.price){removedItem.priceSale=itemDetails.price;}
localStorage.setItem('z1_removedItem',JSON.stringify(removedItem));})})}
function handleQVClick(event){viewProductDetails(event.target);}
function handleATBClick(event){addToBag(event.target);}
function viewProductDetails(qvButton){const productTile=qvButton.closest('.product-tile');const addToBagButton=productTile.querySelector('button[type=submit]');const productDetails=JSON.parse(addToBagButton.getAttribute('data-tealium'));const productDetailsObj={sku:productDetails.id,productId:productDetails.id,priceOrig:productDetails.original_price,category:productDetails.category}
if(productDetails.original_price!==productDetails.price){productDetailsObj.priceSale=productDetails.price;}
const qvObject={...productDetailsObj,...loginStatus,...cartProductsDetails}
fireZineOneEvent('view_product',qvObject);}
function addToBag(addToBagButton){const productDetails=JSON.parse(addToBagButton.getAttribute('data-tealium'));const productAddToCart=addToBagButton.closest('.product-add-to-cart');const quantity=productAddToCart?productAddToCart.querySelector('.inventory .quantity .quantity-field .input-text').value:'1';const productDetailsObj={category:productDetails.category,sku:productDetails.id,productId:productDetails.id,priceOrig:productDetails.original_price,priceSale:productDetails.original_price!==productDetails.price?productDetails.price:productDetails.original_price,quantity:quantity}
const{category,...newProduct}=productDetailsObj;if(cartProductsArr.some(cartProduct=>cartProduct.productId===newProduct.productId)){const updatedLineItemIndex=cartProductsArr.map((e)=>{return e.productId}).indexOf(newProduct.productId);cartProductsArr[updatedLineItemIndex].quantity=Number(newProduct.quantity)+Number(cartProductsArr[updatedLineItemIndex].quantity);}else{cartProductsArr.push(newProduct);}
cartProductsDetails.cartProducts=JSON.stringify(cartProductsArr);const addToCartObj={...productDetailsObj,...loginStatus,...cartProductsDetails}
fireZineOneEvent('add_to_cart',addToCartObj);}
function updateCart(prevCartDetails,newCartDetails){newCartDetails.forEach(item=>{if(prevCartDetails.some(cartItem=>(cartItem.productId===item.productId&&cartItem.quantity!==item.quantity))){const returnObj={...cartProductsDetails,...loginStatus,...item}
fireZineOneEvent('update_cart',returnObj);}});}
function removeItem(itemId){const removedItem=cartProductsArr.find(item=>item.productId===itemId);const removedItemIndex=cartProductsArr.indexOf(removedItem);removedItem.quantity=0;cartProductsArr.splice(removedItemIndex,1);cartProductsDetails.cartProducts=JSON.stringify(cartProductsArr);const returnObj={...cartProductsDetails,...loginStatus,...removedItem}
fireZineOneEvent('update_cart',returnObj);}
function beginCheckout(){const checkoutObj={...cartProductsDetails,...loginStatus}
fireZineOneEvent('begin_checkout',checkoutObj);}}
window.captureZ1Analytics=(z1AnalyticsData)=>{s.tl(this,'o',z1AnalyticsData.campaign,{events:'event170',linkTrackVars:'eVar107,eVar108,eVar109,eVar140,eVar141,events',linkTrackEvents:'event170',eVar107:z1AnalyticsData.useCaseName,eVar108:z1AnalyticsData.detail.offerValue,eVar109:z1AnalyticsData.group,eVar140:z1AnalyticsData.offerType,eVar141:z1AnalyticsData.eppLabel});}
window.captureZ1_5thClick=(z1AnalyticsData)=>{s.tl(this,'o',z1AnalyticsData.campaign,{events:'event171',linkTrackVars:'eVar107,eVar141,eVar142,events',linkTrackEvents:'event171',eVar107:z1AnalyticsData.useCaseName,eVar141:z1AnalyticsData.eppLabel,eVar142:z1AnalyticsData.eppSubLabel});}})();}};utag.o[loader].loader.LOAD(id);})("247","bbw.new");}catch(error){utag.DB(error);}
