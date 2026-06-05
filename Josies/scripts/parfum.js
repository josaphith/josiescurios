//const express = require("express");
//const cors = require("cors");

//const app = express();
//app.use(cors({
//    origin: localhost;
//}));

const productList = [
    {
        "brand": "212",
        "size": "set",
        "name": "Set 212 Men 90ml + Shower Gel",
        "id": "set-212-men-shower",
        "category": "woody",
        "price": 1500.0,
        "img": "../pictures/p_img/set-212-men.png",
        "sex": "men"
    },
    {
        "brand": "Afnan",
        "size": "bottle",
        "name": "Afnan Supremacy",
        "id": "afnan-supremacy",
        "category": "fruity",
        "price": 750,
        "img": "../pictures/p_img/afnan-pourhomme.png",
        "sex": "men"
    },
    {
        "brand": "Archives 69",
        "size": "botte",
        "name": "Archives 69",
        "id": "archive-69",
        "category": "powdery",
        "price": 1620,
        "img": "../pictures/p_img/archive-69.png",
        "sex": "unisex"
    },
    {
        "brand": "Armaf",
        "size": "bottle",
        "name": "Club de nuit Precieux",
        "id": "club-de-nuit-precieux",
        "category": "woody",
        "price": 1250,
        "img": "../pictures/p_img/club-de-nuit.png",
        "sex": "men"
    },
    {
        "brand": "Barakkat",
        "size": "bottle",
        "name": "Barakkat Rouge 540",
        "id": "barakkat-rouge",
        "category": "foral",
        "price": 570,
        "img": "../pictures/p_img/barakkat-rouge.png",
        "sex": "women"
    },
    {
        "brand": "Chloe",
        "size": "bottle",
        "name": "Chloe Nomade Edp",
        "id": "chloe-nomade",
        "category": "woody",
        "price": 1520,
        "img": "../pictures/p_img/chloe-nomade.png",
        "sex": "women"
    },
    {
        "brand": "CK",
        "size": "bottle",
        "name": "CK Be",
        "id": "ck-be",
        "category": "woody",
        "price": 420,
        "img": "../pictures/p_img/ck-be.png",
        "sex": "men"
    },
    {
        "brand": "D&G",
        "size": "bottle",
        "name": "D&G Dolce Rose (Tester)",
        "id": "dg-dolce-rose",
        "category": "floral",
        "price": 920,
        "img": "../pictures/p_img/dg-dolce-rose.png",
        "sex": "women"
    },
    {
        "brand": "D&G",
        "size": "bottle",
        "name": "D&G Light Blue Summer Vibes ",
        "id": "dg-summer-vibes",
        "category": "powdery",
        "price": 1040,
        "img": "../pictures/p_img/dg-summer-vibes-women.png",
        "sex": "women"
    },
    {
        "brand": "D&G",
        "size": "bottle",
        "name": "D&G The One Pour Homme",
        "id": "dg-the-one-homme",
        "category": "spicy",
        "price": 1500,
        "img": "../pictures/p_img/dg-the-one.png",
        "sex": "men"
    },
    {
        "brand": "Dior",
        "size": "set",
        "name": "Set Dior Sauvage 3x10ml",
        "id": "set-dior-sauvage",
        "category": "citrus",
        "price": 900,
        "img": "../pictures/p_img/dior-sauvage-mini-gift-set.png",
        "sex": "men"
    },
    {
        "brand": "Dior",
        "size": "bottle",
        "name": "Dior J'adore",
        "id": "dior-jadore",
        "category": "floral",
        "price": 3100,
        "img": "../pictures/p_img/dior-j-adore.png",
        "sex": "women"
    },
    {
        "brand": "Dior",
        "size": "mini",
        "name": "Dior Sauvage Elixir 7,5ml",
        "id": "dior-elixir",
        "category": "citrus",
        "price": 510,
        "img": "../pictures/p_img/dior-sauvage-elixir.png",
        "sex": "men"
    },
    {
        "brand": "Dior",
        "size": "mini",
        "name": "Miss Dior 30ml",
        "id": "miss-dior-30ml",
        "category": "floral",
        "price": 1080,
        "img": "../pictures/p_img/miss-dior.png",
        "sex": "women"
    },
    {
        "brand": "DKNY",
        "size": "bottle",
        "name": "DKNY Be Delicious",
        "id": "dkny-be-delicious",
        "category": "fruity",
        "price": 840.0,
        "img": "../pictures/p_img/dkny-be-delicious.png",
        "sex": "women"
    },
    {
        "brand": "Elie Saab",
        "size": "bottle",
        "name": "Elie Saab Nuit Noor",
        "id": "elie-saab-nuit-noor",
        "category": "floral",
        "price": 1270,
        "img": "../pictures/p_img/elie-saab-noir.png",
        "sex": "women"
    },
    {
        "brand": "H24",
        "size": "bottle",
        "name": "H24 Edt (Tester)",
        "id": "h24-tester",
        "category": "aqua",
        "price": 1440,
        "img": "../pictures/p_img/h24.png",
        "sex": "men"
    },
    {
        "brand": "Hermes",
        "size": "bottle",
        "name": "Un Jardin A Cythere (Tester)",
        "id": "un-jardin-a-cythere",
        "category": "gourmand",
        "price": 1350,
        "img": "../pictures/p_img/cythere.png",
        "sex": "unisex"
    },
    {
        "brand": "Hermes",
        "size": "bottle",
        "name": "Un Jardin Sur Le Toit Tester",
        "id": "un-jardin-sur-le-toit",
        "category": "fruity",
        "price": 1410,
        "img": "../pictures/p_img/sur-le-toit.png",
        "sex": "women"
    },
    {
        "brand": "Hermes",
        "size": "bottle",
        "name": "Un Jardin Sur La Lagune Tester",
        "id": "un-jardin-sur-la-lagune",
        "category": "floral",
        "price": 1410,
        "img": "../pictures/p_img/sur-la-lagune.png",
        "sex": "unisex"
    },
    {
        "brand": "Hermes",
        "size": "bottle",
        "name": "Le Jardin De Monsieur Li",
        "id": "le-jardin-de-monsieur",
        "category": "citrus",
        "price": 1740,
        "img": "../pictures/p_img/de-monsieur-li.png",
        "sex": "unisex"
    },
    {
        "brand": "Hermes",
        "size": "mini",
        "name": "L'ombre De Merveilles 7,5ml",
        "id": "lom-de-merveilles",
        "category": "woody",
        "price": 280,
        "img": "../pictures/p_img/lombre-de-merveilles.png",
        "sex": "women"
    },
    {
        "brand": "Hermes",
        "size": "bottle",
        "name": "Twilly d'Hermes",
        "id": "hermes-twilly",
        "category": "floral",
        "price": 1770,
        "img": "../pictures/p_img/twilly-dhermes.png",
        "sex": "women"
    },
    {
        "brand": "Hermes",
        "size": "bottle",
        "name": "Twilly d'Hermes Tutti",
        "id": "hermes-twilly-tutti",
        "category": "spicy",
        "price": 1650,
        "img": "../pictures/p_img/twilly-dhermes-tutti.png",
        "sex": "women"
    },
    {
        "brand": "Hermes",
        "size": "bottle",
        "name": "Twilly d'Hermes Eau Poivree",
        "id": "hermes-twilly-poivree",
        "category": "powdery",
        "price": 1670,
        "img": "../pictures/p_img/twilly-dhermes-poivree.png",
        "sex": "women"
    },
    {
        "brand": "Hermes",
        "size": "bottle",
        "name": "Kelly Caleche",
        "id": "kelly-caleche",
        "category": "woody",
        "price": 1910,
        "img": "../pictures/p_img/kelly-caleche.png",
        "sex": "women"
    },
    {
        "brand": "Hugo",
        "size": "bottle",
        "name": "Boss Edt",
        "id": "boss-edt",
        "category": "fruity",
        "price": 710,
        "img": "../pictures/p_img/hugo-boss-edt.png",
        "sex": "men"
    },
    {
        "brand": "Hugo",
        "size": "bottle",
        "name": "Hugo XX ",
        "id": "hugo-xx",
        "category": "gourmand",
        "price": 830,
        "img": "../pictures/p_img/hugo-xx.png",
        "sex": "women"
    },
    {
        "brand": "Hugo",
        "size": "bottle",
        "name": "Hugo XY",
        "id": "hugo-xy",
        "category": "woody",
        "price": 830,
        "img": "../pictures/p_img/hugo-xy.png",
        "sex": "women"
    },
    {
        "brand": "Hugo",
        "size": "bottle",
        "name": "Hugo Boss Bottle Night",
        "id": "hugo-boss-night",
        "category": "woody",
        "price": 1070,
        "img": "../pictures/p_img/hugo-boss-night.png",
        "sex": "men"
    },
    {
        "brand": "Issey Miyake",
        "size": "bottle",
        "name": "Issey Miyake Intense",
        "id": "issey-miyake-intense",
        "category": "citrus",
        "price": 970,
        "img": "../pictures/p_img/issey-miyake-intense.png",
        "sex": "unisex"
    },
    {
        "brand": "Lacoste",
        "size": "bottle",
        "name": "Lacoste L.12.12 Eau Intense",
        "id": "lacoste-l1212-intense",
        "category": "spicy",
        "price": 1060,
        "img": "../pictures/p_img/lacoste-intense.png",
        "sex": "men"
    },
    {
        "brand": "Lacoste",
        "size": "bottle",
        "name": "Lacoste L.12.12 Blanc Edt",
        "id": "lacoste-l1212-edt",
        "category": "woody",
        "price": 1130,
        "img": "../pictures/p_img/lacoste-blanc.png",
        "sex": "men"

    },
    {
        "brand": "Lacoste",
        "size": "bottle",
        "name": "Lacoste L.12.12 Noir",
        "id": "lacoste-l1212-noir",
        "category": "gourmand",
        "price": 890,
        "img": "../pictures/p_img/lacoste-noir.png",
        "sex": "men"
    },
    {
        "brand": "Lancome",
        "size": "bottle",
        "name": "Lancome Idole Nectar",
        "id": "lancome-idole-nectar",
        "category": "sweet",
        "price": 2250,
        "img": "../pictures/p_img/lancome-idole-nectar.png",
        "sex": "women"
    },
    {
        "brand": "Lancome",
        "size": "bottle",
        "name": "Lancome Idole Aura",
        "id": "lancome-idole-aura",
        "category": "gourmand",
        "price": 1600.0,
        "img": "../pictures/p_img/lancome-idole-aura.png",
        "sex": "women"
    },
    {
        "brand": "Lancome",
        "size": "bottle",
        "name": "Lancome Tresor Edp",
        "id": "lancome-tresor-edp",
        "category": "floral",
        "price": 1660,
        "img": "../pictures/p_img/lancome-tresor.png",
        "sex": "women"
    },
    {
        "brand": "Lancome",
        "size": "bottle",
        "name": "Lancome Tresor La Nuit Edp",
        "id": "lancome-tresor-lanuit",
        "category": "fruity",
        "price": 2290,
        "img": "../pictures/p_img/lancome-tresor-lanuit.png",
        "sex": "women"
    },
    {
        "brand": "Lauder",
        "size": "bottle",
        "name": "Lauder Pleasures For Men (Spray)",
        "id": "lauder-pleasures-for-men",
        "category": "citrus",
        "price": 830,
        "img": "../pictures/p_img/lauder-pleasures-for-men.png",
        "sex": "men"
    },
    {
        "brand": "Lauder",
        "size": "bottle",
        "name": "Estee Lauder Pleasures",
        "id": "estee-lauder-pleasures",
        "category": "citrus",
        "price": 1260,
        "img": "../pictures/p_img/estee-lauder.png",
        "sex": "women"
    },
    {
        "brand": "Lolita",
        "size": "bottle",
        "name": "Lolita Lempika Edp 30ml",
        "id": "lolita-30ml",
        "category": "gourmand",
        "price": 640,
        "img": "../pictures/p_img/lolita-lempika.png",
        "sex": "women"
    },
    {
        "brand": "Marc Jacobs",
        "size": "bottle",
        "name": "Marc Jacobs Honey",
        "id": "marc-jacobs-honey",
        "category": "floral",
        "price": 1070,
        "img": "../pictures/p_img/marc-jacobs-honey.png",
        "sex": "women"
    },
    {
        "brand": "Marc Jacobs",
        "size": "bottle",
        "name": "Marc Jacobs Dot",
        "id": "marc-jacobs-dot",
        "category": "floral",
        "price": 1070,
        "img": "../pictures/p_img/marc-jacobs-dot.png",
        "sex": "women"
    },
    {
        "brand": "MCM",
        "size": "bottle",
        "name": "MCM ",
        "id": "mcm",
        "category": "woody",
        "price": 1250,
        "img": "../pictures/p_img/mcm.png",
        "sex": "women"
    },
    {
        "brand": "Montblanc",
        "size": "bottle",
        "name": "Montblanc Explorer",
        "id": "montblanc-explorer",
        "category": "citrus",
        "price": 1270,
        "img": "../pictures/p_img/montblanc-explorer.png",
        "sex": "men"
    },
    {
        "brand": "Montblanc",
        "size": "bottle",
        "name": "Montblanc Signature Absolue 30ml",
        "id": "montblanc-signature-absolue-30ml",
        "category": "floral",
        "price": 670,
        "img": "../pictures/p_img/montblanc-signature.png",
        "sex": "unisex"
    },
    {
        "brand": "Montblanc",
        "size": "set",
        "name": "Set Montblanc Show Gel",
        "id": "montblanc-set",
        "category": "citrus",
        "price": 1200,
        "img": "../pictures/p_img/set-montblanc-explorer.png",
        "sex": "men"
    },
    {
        "brand": "Moschino",
        "size": "bottle",
        "name": "Moschino Toy 2",
        "id": "moschino-toy-2",
        "category": "fruity",
        "price": 950,
        "img": "../pictures/p_img/moschino-toy-2.png",
        "sex": "women"
    },
    {
        "brand": "Narciso",
        "size": "bottle",
        "name": "Narciso Poudree Edp",
        "id": "narciso-poudree",
        "category": "powdery",
        "price": 1610,
        "img": "../pictures/p_img/narciso-poudree.png",
        "sex": "women"
    },
    {
        "brand": "Narciso",
        "size": "bottle",
        "name": "Narciso Ambree Edp",
        "id": "narciso-ambree",
        "category": "gourmand",
        "price": 1610,
        "img": "../pictures/p_img/narciso-ambree.png",
        "sex": "women"
    },
    {
        "brand": "Narciso",
        "size": "set",
        "name": "Set Narciso Poudree + Ambree + Rouge",
        "id": "set-narciso-par",
        "category": "powdery",
        "price": 1030,
        "img": "../pictures/p_img/set-narciso-par.png",
        "sex": "women"
    },
    {
        "brand": "Narciso",
        "size": "set",
        "name": "Set Narciso for Her",
        "id": "set-narciso-for-her",
        "category": "floral",
        "price": 1030,
        "img": "../pictures/p_img/set-narciso-for-her.png",
        "sex": "women"
    },
    {
        "brand": "Paco Rabanne",
        "size": "bottle",
        "name": "Pure XS",
        "id": "pure-xs",
        "category": "spicy",
        "price": 1280,
        "img": "../pictures/p_img/pure-xs.png",
        "sex": "men"
    },
    {
        "brand": "Prada",
        "size": "bottle",
        "name": "Prada Paradoxe",
        "id": "prada-paradoxe",
        "category": "floral",
        "price": 2300,
        "img": "../pictures/p_img/prada-paradoxe.png",
        "sex": "women"
    },
    {
        "brand": "Thomas Kosmala",
        "size": "bottle",
        "name": "No.4 Apres l'Amour",
        "id": "apres-lamour",
        "category": "woody",
        "price": 1910,
        "img": "../pictures/p_img/thomas-kosmala.png",
        "sex": "unisex"
    },
    {
        "brand": "Tomford",
        "size": "mini",
        "name": "Tomford Black Orchid 4ml",
        "id": "tomford-black-orchid",
        "category": "gourmand",
        "price": 320,
        "img": "../pictures/p_img/tomford-black-orchid-4ml.png",
        "sex": "unisex"
    },
    {
        "brand": "Tommy",
        "size": "bottle",
        "name": "Tommy Edt",
        "id": "tommy-edt",
        "category": "floral",
        "price": 920,
        "img": "../pictures/p_img/tommy-edt.png",
        "sex": "men"
    },
    {
        "brand": "Valentino",
        "size": "bottle",
        "name": "Valentino Oumo",
        "id": "valentino-oumo",
        "category": "gourmand",
        "price": 1600,
        "img": "../pictures/p_img/valentino-oumo.png",
        "sex": "men"
    },
    {
        "brand": "Versace",
        "size": "bottle",
        "name": "Versace Eros",
        "id": "versace-eros",
        "category": "woody",
        "price": 1230,
        "img": "../pictures/p_img/versace-eros.png",
        "sex": "men"
    },
    {
        "brand": "Versace",
        "size": "bottle",
        "name": "Versace Eros Energy",
        "id": "versace-eros-energy",
        "category": "citrus",
        "price": 1230,
        "img": "../pictures/p_img/versace-eros-energy.png",
        "sex": "men"
    },
    {
        "brand": "Versace",
        "size": "bottle",
        "name": "Versace Bright Crystal Tester",
        "id": "versace-bright-crystal-tester",
        "category": "floral",
        "price": 1210,
        "img": "../pictures/p_img/versace-bright-crystal.png",
        "sex": "women"
    },
    {
        "brand": "Versace",
        "size": "bottle",
        "name": "Versace Crystal Noir Tester",
        "id": "versace-crystal-noir-tester",
        "category": "fruity",
        "price": 1230,
        "img": "../pictures/p_img/versace-crystal-noir.png",
        "sex": "women"
    }
]





document.addEventListener("DOMContentLoaded", () => {
    renderProducts(productList);

    document.getElementById("filter-category")
        .addEventListener("change", applyFilters);

    document.getElementById("sort-by")
        .addEventListener("change", applyFilters);

    document.getElementById("sort-men").addEventListener("click", e => {
        

        let sorted = [...productList].filter(a=>a.sex==="men");

        renderProducts(sorted);
    });

    document.getElementById("sort-women").addEventListener("click", e => {
        

        let sorted = [...productList].filter(a => a.sex === "women");

        renderProducts(sorted);
    });

    document.getElementById("sort-unisex").addEventListener("click", e => {
        e.preventDefault();

        let sorted = [...productList].filter(a => a.sex === "unisex");

        renderProducts(sorted);
    });
});


function renderProducts(list) {
    const container = document.querySelector(".product-grid");

    container.innerHTML = "";

    list.forEach((p, index) => {
        container.innerHTML += `
        <div class="product-card scroll-animation"
             data-category="${p.category}"
             id="${p.id}">
            <img src="${p.img}" class="product-image" alt="Product ${index + 1}">
            <div class="product-info">
                <h1 class="product-title">${p.name}</h1>
                <p class="p-cat">${p.category}</p>
            </div>
        </div>`;
    });
}

function applyFilters() {
    let category = document.getElementById("filter-category").value;
    let sortBy = document.getElementById("sort-by").value;

    let filtered = [...productList].filter(p => !category || p.category === category);

    if (category === "all") {
        filtered = [...productList];
    }

    if (sortBy === "default") {
        filtered = [...productList].filter(
            p => !category || p.category === category
        );
    }
    if (sortBy === "price-asc") filtered.sort((a, b) => Number(a.price) - Number(b.price));
    if (sortBy === "price-desc") filtered.sort((a, b) => Number(b.price) - Number(a.price));
    if (sortBy === "name") filtered.sort((a, b) => a.name.localeCompare(b.name));
    if (sortBy === "under-1") filtered = filtered.filter((a) => Number(a.price) <= 1000);
    if (sortBy === "under-2") filtered = filtered.filter((a) => Number(a.price) >= 1000 && Number(a.price) < 2000);
    if (sortBy === "under-3") filtered = filtered.filter((a) => Number(a.price) >= 2000 && Number(a.price) < 3000);
    renderProducts(filtered);
}

const searchBar = document.getElementById("searchInput");

searchBar.addEventListener("input", () => {
    const searchInput = document.getElementById('searchInput');
    const productCards = document.querySelectorAll('.product-card');
    const noResultsMessage = document.getElementById('noResults');

    searchInput.addEventListener('input', function () {
        const filterValue = searchInput.value.toLowerCase().trim();
        let hasMatches = false;

        productCards.forEach(card => {
            // Get the product name from the h1 tag inside the card
            const productName = card.querySelector('h1').textContent.toLowerCase();

            // Check if the product name contains the search string
            if (productName.includes(filterValue)) {
                card.style.display = ""; // Show the card (restores default grid/block display)
                hasMatches = true;
            } else {
                card.style.display = "none"; // Hide the card
            }
        });

        // Show or hide the "No results" message based on matches found
        if (hasMatches || filterValue === "") {
            noResultsMessage.style.display = "none";
        } else {
            noResultsMessage.style.display = "block";
        }
    });
});





