
let burger = document.getElementById("burger");

burger.addEventListener("mouseenter", function() {
    yas.classList.add("visible");
});
yas.addEventListener("mouseleave", function() {
    yas.classList.remove("visible");
});

// menu burger

let whitemode = document.getElementById("whitemode")
let barre = document.getElementById("barre")
let outil = document.getElementById("outil")
let rechercher = document.getElementById("rechercher")
let connecter = document.getElementById("connecter")
let haut = document.getElementById("haut")
let autre = document.getElementById("autre")
let titre = document.getElementById("titre")
let ecriture = document.getElementById("ecriture")
let nouvelle = document.getElementById("nouvelle")
let barreclair = document.getElementById("barreclair")
let barre2 = document.getElementById("barre2")
let barresuite = document.getElementById("barresuite")
let barred = document.getElementById("barred")
let logo2 = document.getElementById("logo2")
let inc = document.getElementById("inc")
let youtube = document.getElementById("youtube")
let xx = document.getElementById("xx")
let facebook = document.getElementById("facebook")
let insta = document.getElementById("insta")
let discord = document.getElementById("discord")
let ou = document.getElementById("ou")
let co = document.getElementById("co")
let ec = document.getElementById("ec")
let ca = document.getElementById("ca")
let ap = document.getElementById("ap")
let ai = document.getElementById("ai")
let et = document.getElementById("et")
let su = document.getElementById("su")
let si = document.getElementById("si")
let te = document.getElementById("te")
let x= document.getElementById("yas")

// variables //

let bleu = [barre,autre,titre,ecriture,barre2,barresuite,barred]
let blanc = [outil,rechercher,connecter,]
let bleuclair = [barreclair,x]
let noir = [inc]
let logoclair = [youtube,xx,facebook,insta,discord]
let fond1 = [haut]
let fond2 = [nouvelle]
let nvlogo = [logo2]
let contour = [ou,co,ec,ca]
let contourinverse = [ap,ai,et,su,si,te]

// classes //

whitemode.addEventListener("click", function(){
        this.classList.toggle("lune")
            bleu.forEach(function (a) {
                a.classList.toggle("bleu")
            })
            blanc.forEach(function (b) {
                b.classList.toggle("blanc")
            })
            bleuclair.forEach(function (c) {
                c.classList.toggle("bleuclair")
            })
            noir.forEach(function (d) {
                d.classList.toggle("noir")
            })
            logoclair.forEach(function (e) {
                e.classList.toggle("logoclair")
            })
            fond1.forEach(function (f) {
                f.classList.toggle("new1")
            })            
            fond2.forEach(function (g) {
                g.classList.toggle("new2")
            })
            nvlogo.forEach(function (h) {
                h.classList.toggle("logojv")
            })  
            contour.forEach(function (i) {
                i.classList.toggle("contour")
            })  
            contourinverse.forEach(function (j) {
                j.classList.toggle("contourinverse")
            }) 
        })

// fonction //


