/* =========================================================
   WOVENLABELSPK - MAIN JAVASCRIPT
   Categories section completely removed
========================================================= */


/* ================= PRODUCTS ================= */

const WA="923183631366";

const SOCIAL=[
 {
  n:"TikTok",
  i:"fa-tiktok",
  u:"https://www.tiktok.com/@wovenlabelspk"
 },
 {
  n:"Instagram",
  i:"fa-instagram",
  u:"https://www.instagram.com/Wovenlabelspk"
 },
 {
  n:"Facebook",
  i:"fa-facebook-f",
  u:"https://www.facebook.com/people/Wovenlabelspk/61578323198310/?rdid=LxVh7WrvlXDvh0ac&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1F14bpv5U5%2F"
 }
];


const PRODUCTS=[

{
 id:1,
 name:"Custom Woven Labels",
 category:"Woven Labels",
 price:2000,
 pack:100,
 image:"https://i.pinimg.com/736x/33/1c/f6/331cf6c9fc592ea211183833e915ad83.jpg",
 description:"Premium custom woven labels made with your logo.",
 options:{
  Size:["1 x 0.5 inch","2 x 1 inch","3 x 1.5 inch"],
  Color:["Black","White","Navy","Beige"]
 }
},

{
 id:2,
 name:"Custom Zipper Bags",
 category:"Zipper Bags",
 price:4500,
 pack:100,
 image:"https://i.pinimg.com/1200x/ba/cf/e7/bacfe7c1ea979a95b8d68b8eb07434c4.jpg",
 description:"Printed zipper bags to keep your garments fresh and branded.",
 options:{
  Size:["6 x 8 inch","8 x 10 inch","10 x 12 inch"],
  Color:["Clear","Frosted","Black"]
 }
},

{
 id:3,
 name:"Custom Hang Tags",
 category:"Hang Tags",
 price:2600,
 pack:100,
 image:"https://i.pinimg.com/1200x/39/b3/7f/39b37f1a04f8822ce72c49acd2d670d0.jpg",
 description:"Elegant hang tags with premium print and finishing.",
 options:{
  Size:["2 x 3.5 inch","2.5 x 4 inch"],
  Finish:["Matte","Glossy"]
 }
},

{
 id:4,
 name:"Custom Thank You Cards",
 category:"Thank You Cards",
 price:3000,
 pack:100,
 image:"https://i.pinimg.com/1200x/65/11/e7/6511e7b1d91d9d5e69e2bf7540420ab4.jpg",
 description:"Make every delivery memorable with branded thank you cards.",
 options:{
  Size:["3.5 x 2 inch","4 x 6 inch"],
  Finish:["Matte","Glossy"]
 }
},

{
 id:5,
 name:"Custom Business Cards",
 category:"Business Cards",
 price:2500,
 pack:100,
 image:"https://i.pinimg.com/1200x/9d/a2/ce/9da2ce106db82324974d74735fc8618b.jpg",
 description:"Sharp, professional business cards for your brand.",
 options:{
  Size:["3.5 x 2 inch"],
  Finish:["Matte","Glossy","Textured"]
 }
},

{
 id:6,
 name:"Courier Flyer Bags",
 category:"Courier Bags",
 price:4600,
 pack:100,
 image:"https://i.pinimg.com/736x/a1/3d/05/a13d055b1fbf6ca62bc3d41ed304c6d5.jpg",
 description:"Strong, tamper-proof courier flyer bags with your branding.",
 options:{
  Size:["10 x 14 inch","12 x 16 inch","14 x 18 inch"],
  Color:["White","Black","Pink"]
 }
},

{
 id:7,
 name:"Custom Carry Bags",
 category:"Carry Bags",
 price:5500,
 pack:100,
 image:"https://i.pinimg.com/736x/a7/f8/c7/a7f8c7475d23c9ea42daca9db3514f5b.jpg",
 description:"Premium carry bags that turn customers into brand ambassadors.",
 options:{
  Size:["Small","Medium","Large"],
  Color:["White","Kraft","Black"]
 }
},

{
 id:8,
 name:"Custom Round Stickers",
 category:"Stickers",
 price:2400,
 pack:100,
 image:"https://i.pinimg.com/1200x/c2/cf/9f/c2cf9f1bf2a311660e1b7a125da54eab.jpg",
 description:"Vibrant round stickers to seal and brand every package.",
 options:{
  Size:["1.5 inch","2 inch","3 inch"],
  Finish:["Matte","Glossy"]
 }
}

];


const FILTERS=[
"All",
"Woven Labels",
"Hang Tags",
"Zipper Bags",
"Carry Bags",
"Cards",
"Stickers",
"Courier Bags"
];


const FAQ=[

[
"How do I place a custom order?",
"Choose your product, add it to the cart and tap “Order on WhatsApp”. Send us your logo and we'll confirm the quotation."
],

[
"Can I use my own logo?",
"Yes. Every product is made with your own logo, colors and design. Share it with us on WhatsApp."
],

[
"What is the minimum order quantity?",
"Each product shows its starting pack, for example 50 pcs for woven labels or 100 pcs for hang tags."
],

[
"How do I pay?",
"Payment details are shared on WhatsApp once your design and quotation are approved."
],

[
"Do you deliver across Pakistan?",
"Yes, we deliver nationwide through trusted courier partners."
],

[
"How long does production take?",
"Timing depends on the product and quantity. We confirm the exact timeline with your quotation."
],

[
"Can I request a custom size?",
"Absolutely. Message us your required size and we'll quote it."
]

];


/* ================= HELPERS ================= */

const $=(s,r=document)=>r.querySelector(s);

const $$=(s,r=document)=>[...r.querySelectorAll(s)];

const money=n=>"Rs. "+Number(n).toLocaleString("en-US");

const byId=id=>PRODUCTS.find(p=>p.id===id);

const packTxt=p=>p.pack.toLocaleString("en-US")+" pcs";


const PH="data:image/svg+xml,"+
encodeURIComponent(
'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">'+
'<rect width="800" height="600" fill="#ece4d6"/>'+
'<text x="400" y="310" text-anchor="middle" font-family="sans-serif" font-size="30" fill="#a89b86">Wovenlabelspk</text>'+
'</svg>'
);


/* IMAGE FALLBACK */

document.addEventListener("error",e=>{

const t=e.target;

if(t.tagName!=="IMG"||t.dataset.f)return;

t.dataset.f=1;

if(t.classList.contains("lg")){
t.style.display="none";
}else{
t.src=PH;
}

},true);


/* TOAST */

const toast=m=>{

const t=$("#ts2");

t.textContent=m;

t.classList.add("on");

clearTimeout(toast.t);

toast.t=setTimeout(
()=>t.classList.remove("on"),
2200
);

};


/* WHATSAPP */

const waLink=t=>
`https://wa.me/${WA}?text=${encodeURIComponent(t)}`;


/* LOCOMOTIVE */

let loco=null;


const lockUI=()=>{

const l=!!$(".dr.on,.mo.on,nav.open");

document.body.classList.toggle("lock",l);

if(loco){

l?
loco.stop():
loco.start();

}

};


const goTo=el=>
loco?
loco.scrollTo(el,{offset:0,duration:900}):
el.scrollIntoView({behavior:"smooth"});


/* REVEAL */

const io=new IntersectionObserver(
es=>es.forEach(e=>{

if(e.isIntersecting){

e.target.classList.add("in");

io.unobserve(e.target);

}

}),
{threshold:.12}
);


const reveal=()=>
$$(".fade:not(.in)").forEach(el=>io.observe(el));


/* ================= CART ================= */

const Cart={

items:(()=>{

try{

return(
JSON.parse(localStorage.getItem("wl_cart"))||[]
).filter(x=>byId(x.id));

}catch(e){

return[];

}

})(),

save(){

try{

localStorage.setItem(
"wl_cart",
JSON.stringify(this.items)
);

}catch(e){}

renderCart();

},

add(id,opts,qty=1){

const k=JSON.stringify(opts);

const i=this.items.find(
x=>x.id===id&&
JSON.stringify(x.opts)===k
);

i?
i.qty+=qty:
this.items.push({
 id,
 opts,
 qty
});

this.save();

},

change(i,d){

const it=this.items[i];

if(!it)return;

it.qty+=d;

if(it.qty<1)
this.items.splice(i,1);

this.save();

},

remove(i){

this.items.splice(i,1);

this.save();

},

clear(){

this.items=[];

this.save();

},

count(){

return this.items.reduce(
(s,x)=>s+x.qty,
0
);

},

total(){

return this.items.reduce(
(s,x)=>
s+
byId(x.id).price*x.qty,
0
);

}

};


function optLine(o){

return Object.entries(o)
.map(([k,v])=>`${k}: ${v}`)
.join(", ");

}


function renderCart(){

const n=Cart.count();

$("#cc").textContent=n;

$("#cbtn").setAttribute(
"aria-label",
`Open cart, ${n} items`
);


$("#dl").innerHTML=
Cart.items.length?

Cart.items.map((x,i)=>{

const p=byId(x.id);

return `

<div class="ci2">

<img
src="${p.image}"
alt="${p.name}"
width="70"
height="70"
>

<div>

<h4>${p.name}</h4>

<small>
${optLine(x.opts)}
</small>

<small>
${(x.qty*p.pack).toLocaleString("en-US")}
pcs &middot;
${money(p.price*x.qty)}
</small>

<div class="qt">

<button
data-dec="${i}"
aria-label="Decrease quantity"
>
<i class="fa-solid fa-minus"></i>
</button>

<span>${x.qty}</span>

<button
data-inc="${i}"
aria-label="Increase quantity"
>
<i class="fa-solid fa-plus"></i>
</button>

</div>

</div>

<button
class="ib"
data-rm="${i}"
aria-label="Remove ${p.name}"
>

<i class="fa-solid fa-trash-can"></i>

</button>

</div>

`;

}).join("")

:

`
<div class="emp">

<i
class="fa-solid fa-bag-shopping"
style="font-size:2.4rem;margin-bottom:12px"
></i>

<p>Your cart is empty.</p>

</div>
`;


$("#df").style.display=
Cart.items.length?
"grid":
"none";


$("#tq").textContent=n;

$("#ts").textContent=
$("#tt").textContent=
money(Cart.total());

}


function orderMsg(){

const nm=$("#on").value.trim();

const note=$("#om").value.trim();

let m=
"Assalamualaikum Wovenlabelspk, I would like to place an order:\n";


if(nm)
m+=`Customer: ${nm}\n`;


Cart.items.forEach((x,i)=>{

const p=byId(x.id);

m+=`
${i+1}) Product: ${p.name}
Quantity: ${(x.qty*p.pack).toLocaleString("en-US")} pcs (${x.qty} x ${packTxt(p)})
`;

Object.entries(x.opts).forEach(
([k,v])=>
m+=`${k}: ${v}\n`
);

m+=`Price: ${money(p.price*x.qty)}\n`;

});


m+=`
Subtotal: ${money(Cart.total())}
Total: ${money(Cart.total())}
`;


if(note)
m+=`Message: ${note}\n`;


return m+
"Please confirm availability and final quotation.";

}


/* ================= SEARCH + FILTER ================= */

const state={
f:"All",
q:""
};


const matches=p=>{

const f=state.f;

const ok=
f==="All"||
p.category===f||
(f==="Cards"&&/Cards$/.test(p.category));


const q=
state.q.trim().toLowerCase();


return ok&&
(
!q||
(
p.name+
" "+
p.category+
" "+
p.description
)
.toLowerCase()
.includes(q)
);

};


const card=p=>`

<article class="pc fade">

<div class="pi">

<img
src="${p.image}"
alt="${p.name}"
width="600"
height="600"
loading="lazy"
>

<span class="tag">
${p.category}
</span>

</div>

<div class="pb">

<h3>${p.name}</h3>

<p>${p.description}</p>

<div class="pr">
Starting from
<b>${money(p.price)}</b>
/
${packTxt(p)}
</div>

<div class="ab">

<button
class="btn"
data-add="${p.id}"
>

<i class="fa-solid fa-cart-plus"></i>
Add to Cart

</button>

<button
class="btn o"
data-view="${p.id}"
>
View Details
</button>

</div>

</div>

</article>

`;


function renderProducts(){

const list=PRODUCTS.filter(matches);

$("#pg").innerHTML=
list.length?
list.map(card).join(""):
`<p class="none">No products found</p>`;


$$(
"#flt button"
).forEach(b=>{

const on=
b.dataset.f===state.f;

b.classList.toggle("on",on);

b.setAttribute(
"aria-pressed",
on
);

});


reveal();

}


function setFilter(f,scroll){

state.f=f;

state.q="";

$("#q").value="";

renderProducts();

if(scroll)
goTo($("#shop"));

}


/* ================= PRODUCT MODAL ================= */

function openDetails(id){

const p=byId(id);


$("#md").innerHTML=`

<button
class="ib mx"
id="mx"
aria-label="Close details"
>
<i class="fa-solid fa-xmark"></i>
</button>

<img
src="${p.image}"
alt="${p.name}"
width="600"
height="600"
>

<div class="mi">

<span class="eyebrow">
${p.category}
</span>

<h2>${p.name}</h2>

<p style="color:var(--mut);font-size:.9rem">
${p.description}
</p>

<div class="pr">
Starting from
<b>${money(p.price)}</b>
/
${packTxt(p)}
</div>

${
Object.entries(p.options)
.map(
([k,v])=>

`
<div>

<label for="o-${k}">
${k}
</label>

<select
id="o-${k}"
data-opt="${k}"
>

${
v.map(
o=>`<option>${o}</option>`
).join("")
}

</select>

</div>
`

)
.join("")
}

<div>

<label>
Quantity (packs of ${packTxt(p)})
</label>

<div class="qt">

<button
id="mq-"
aria-label="Decrease quantity"
>
<i class="fa-solid fa-minus"></i>
</button>

<span id="mqv">1</span>

<button
id="mq+"
aria-label="Increase quantity"
>
<i class="fa-solid fa-plus"></i>
</button>

</div>

</div>

<div class="mp" id="mpr">
${money(p.price)}

<small
style="font-size:.75rem;font-weight:400;color:var(--mut)"
>
(${packTxt(p)})
</small>

</div>

<button class="btn" id="madd">

<i class="fa-solid fa-cart-plus"></i>
Add to Cart

</button>

<button class="btn wa" id="mwa">

<i class="fa-brands fa-whatsapp"></i>
Order on WhatsApp

</button>

</div>

`;


let q=1;


const upd=()=>{

$("#mqv").textContent=q;

$("#mpr").innerHTML=
`
${money(p.price*q)}

<small
style="font-size:.75rem;font-weight:400;color:var(--mut)"
>
(${(q*p.pack).toLocaleString("en-US")} pcs)
</small>
`;

};


const opts=()=>
Object.fromEntries(
$$("[data-opt]","#md")
.map(s=>[
s.dataset.opt,
s.value
])
);


$("#mq-").onclick=()=>{

if(q>1){

q--;

upd();

}

};


$("#mq+").onclick=()=>{

q++;

upd();

};


$("#mx").onclick=closeModal;


$("#madd").onclick=()=>{

Cart.add(
id,
opts(),
q
);

closeModal();

toast(
`${p.name} added to cart`
);

};


$("#mwa").onclick=()=>{

let m=
`Assalamualaikum Wovenlabelspk, I would like to place an order:
Product: ${p.name}
Quantity: ${(q*p.pack).toLocaleString("en-US")} pcs
`;

Object.entries(opts()).forEach(
([k,v])=>
m+=`${k}: ${v}\n`
);

m+=
`Total: ${money(p.price*q)}
Please confirm availability and final quotation.`;

window.open(
waLink(m),
"_blank",
"noopener"
);

};


$("#mo").classList.add("on");

$("#ov").classList.add("on");

lockUI();

$("#mx").focus();

}


function closeModal(){

$("#mo").classList.remove("on");

if(!$(".dr.on"))
$("#ov").classList.remove("on");

lockUI();

}


function openCart(o){

$("#dr").classList.toggle("on",o);

$("#dr").setAttribute(
"aria-hidden",
!o
);

$("#ov").classList.toggle("on",o);

lockUI();

if(o)
$("#dx").focus();

}


/* ================= INIT ================= */

function init(){

/* marquee */

const txt=
"Custom Branding • Woven Labels • Hang Tags • Zipper Bags • Carry Bags • Stickers • Cards • Nationwide Delivery • Custom Orders • ";


$("#mt").innerHTML=
`<span>${txt}${txt}</span>`.repeat(2);


/* filters */

$("#flt").innerHTML=
FILTERS
.map(
f=>`<button data-f="${f}">${f}</button>`
)
.join("");


/* FAQ */

$("#fq").innerHTML=
FAQ
.map(
(f,i)=>
`
<div class="q fade">

<button
aria-expanded="false"
aria-controls="a${i}"
>
${f[0]}
<i class="fa-solid fa-chevron-down"></i>
</button>

<div
class="qa"
id="a${i}"
>

<div>

<p>
${f[1]}
</p>

</div>

</div>

</div>
`
)
.join("");


/* footer products */

$("#fp").innerHTML=
FILTERS
.slice(1)
.map(
f=>
`
<li>
<a href="#shop" data-f="${f}">
${f}
</a>
</li>
`
)
.join("");


/* social */

$$("[data-soc]").forEach(
el=>
el.innerHTML=
SOCIAL
.map(
s=>
`
<a
href="${s.u}"
target="_blank"
rel="noopener"
aria-label="${s.n}"
>
<i class="fa-brands ${s.i}"></i>
</a>
`
)
.join("")
);


renderProducts();

renderCart();

reveal();

}


init();


$$("nav li")
.forEach(
(l,i)=>
l.style.setProperty(
"--i",
i+2
)
);


/* ================= LOCOMOTIVE ================= */

if(
window.LocomotiveScroll&&
innerWidth>1024&&
!matchMedia(
"(prefers-reduced-motion:reduce)"
).matches
){

try{

loco=
new LocomotiveScroll({

el:$("#sc"),

smooth:true,

lerp:.09,

smartphone:{
smooth:false
},

tablet:{
smooth:false
}

});


loco.on(
"scroll",
a=>
$("#hd")
.classList.toggle(
"sc",
a.scroll.y>10
)
);


new ResizeObserver(
()=>
loco&&loco.update()
)
.observe($("#sc"));


addEventListener(
"load",
()=>loco&&loco.update()
);

}catch(e){

loco=null;

}

}


/* ================= HERO SLIDER ================= */

(()=>{

const sl=$$(".sl");

const dots=$("#dots");

let i=0;

let t;


sl.forEach((_,k)=>{

const b=
document.createElement("button");

b.setAttribute(
"aria-label",
"Go to slide "+(k+1)
);

b.onclick=()=>go(k);

dots.append(b);

});


const go=n=>{

i=
(n+sl.length)%sl.length;

sl.forEach(
(s,k)=>
s.classList.toggle(
"on",
k===i
)
);


$$("button",dots)
.forEach(
(d,k)=>
d.classList.toggle(
"on",
k===i
)
);


clearInterval(t);

t=
setInterval(
()=>go(i+1),
5500
);

};


$("#hp").onclick=()=>go(i-1);

$("#hn").onclick=()=>go(i+1);

go(0);

})();


/* ================= GLOBAL CLICK ================= */

document.addEventListener(
"click",
e=>{

const g=s=>
e.target.closest(s);

let el;


/* filters */

if(
el=g("[data-f]")
){

if(
el.tagName==="A"||
el.closest("nav")||
el.closest("#flt")
){

if(el.tagName==="A")
e.preventDefault();

setFilter(
el.dataset.f,
el.tagName==="A"
);

$("#nav").classList.remove("open");

$("#bg").setAttribute(
"aria-expanded",
"false"
);

lockUI();

}

}


/* add cart */

if(
el=g("[data-add]")
){

const p=
byId(+el.dataset.add);

Cart.add(
p.id,
Object.fromEntries(
Object.entries(p.options)
.map(
([k,v])=>[
k,
v[0]
]
)
),
1
);

toast(
`${p.name} added to cart`
);

}


/* product details */

if(
el=g("[data-view]")
)
openDetails(
+el.dataset.view
);


/* cart quantity */

if(
el=g("[data-inc]")
)
Cart.change(
+el.dataset.inc,
1
);


if(
el=g("[data-dec]")
)
Cart.change(
+el.dataset.dec,
-1
);


if(
el=g("[data-rm]")
)
Cart.remove(
+el.dataset.rm
);


/* normal anchors */

if(
(el=g('a[href^="#"]'))&&
!el.dataset.f&&
!el.hasAttribute("data-cart")
){

const t=
el.getAttribute("href").length>1&&
$(el.getAttribute("href"));

if(t){

e.preventDefault();

goTo(t);

}

}


/* cart */

if(
g("[data-cart]")
){

e.preventDefault();

openCart(true);

}


/* FAQ */

if(
el=g(".q>button")
){

const q=
el.parentElement;

const o=
!q.classList.contains("open");


$$(".q.open").forEach(x=>{

x.classList.remove("open");

x.firstElementChild
.setAttribute(
"aria-expanded",
"false"
);

});


if(o){

q.classList.add("open");

el.setAttribute(
"aria-expanded",
"true"
);

}

}


/* mobile nav */

if(
g("nav a:not([data-f])")
){

$("#nav")
.classList.remove("open");

$("#bg")
.setAttribute(
"aria-expanded",
"false"
);

lockUI();

}

}
);


/* ================= CART EVENTS ================= */

$("#cbtn").onclick=
()=>openCart(true);


$("#dx").onclick=
$("#cs").onclick=
()=>openCart(false);


$("#cl").onclick=()=>{

if(
Cart.items.length&&
confirm(
"Clear all items from your cart?"
)
){

Cart.clear();

toast("Cart cleared");

}

};


$("#ow").onclick=()=>{

if(!Cart.items.length)
return toast("Your cart is empty");

window.open(
waLink(orderMsg()),
"_blank",
"noopener"
);

};


$("#ov").onclick=()=>{

closeModal();

openCart(false);

};


$("#mo").onclick=e=>{

if(e.target.id==="mo")
closeModal();

};


/* ESC */

document.addEventListener(
"keydown",
e=>{

if(e.key==="Escape"){

closeModal();

openCart(false);

$("#nav").classList.remove("open");

lockUI();

}

}
);


/* ================= MOBILE MENU ================= */

$("#bg").onclick=()=>{

const o=
$("#nav").classList.toggle("open");

$("#bg").setAttribute(
"aria-expanded",
o
);

$("#bg").innerHTML=
`
<i class="fa-solid ${o?"fa-xmark":"fa-bars"}"></i>
`;

lockUI();

};


/* ================= SEARCH ================= */

const sb=$("#sb");


$("#sbtn").onclick=()=>{

const o=
sb.classList.toggle("open");

$("#sbtn").setAttribute(
"aria-expanded",
o
);

if(o)
setTimeout(
()=>$("#q").focus(),
200
);

};


$("#sx").onclick=()=>{

sb.classList.remove("open");

$("#sbtn").setAttribute(
"aria-expanded",
"false"
);

state.q="";

$("#q").value="";

renderProducts();

};


$("#sf").onsubmit=e=>{

e.preventDefault();

goTo($("#shop"));

};


let scrolled=false;


$("#q").addEventListener(
"input",
e=>{

state.q=
e.target.value;

if(
state.q&&
state.f!=="All"
)
state.f="All";

renderProducts();

if(
state.q&&
!scrolled
){

scrolled=true;

goTo($("#shop"));

}

if(!state.q)
scrolled=false;

}
);


/* HEADER SHADOW */

addEventListener(
"scroll",
()=>
$("#hd")
.classList.toggle(
"sc",
scrollY>10
),
{passive:true}
);


/* ================= CONTACT FORM ================= */

$("#cf").addEventListener(
"submit",
e=>{

e.preventDefault();


const v={

n:$("#cn"),

p:$("#cp"),

e:$("#ce"),

m:$("#cm")

};


const er=(el,m)=>{

el.nextElementSibling.textContent=m;

return !m;

};


const r=[

er(
v.n,
v.n.value.trim().length<2?
"Please enter your name":
""
),

er(
v.p,
/^[+\d][\d\s-]{9,15}$/.test(
v.p.value.trim()
)?
"":
"Enter a valid phone number"
),

er(
v.e,
/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
v.e.value.trim()
)?
"":
"Enter a valid email"
),

er(
v.m,
v.m.value.trim().length<5?
"Please write a short message":
""
)

];


if(
r.includes(false)
)
return;


window.open(
waLink(
`Assalamualaikum Wovenlabelspk,
Name: ${v.n.value}
Phone: ${v.p.value}
Email: ${v.e.value}
Message: ${v.m.value}`
),
"_blank",
"noopener"
);


$("#cok").textContent=
"Thank you! Opening WhatsApp to send your message.";

e.target.reset();

});