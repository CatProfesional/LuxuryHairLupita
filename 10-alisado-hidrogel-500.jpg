/*
 * CAMBIA ESTE NÚMERO POR EL WHATSAPP REAL DE LUXURY HAIR.
 * Formato: código de país + número, sin +, espacios ni guiones.
 * Ejemplo México: 5215512345678
 */
const WHATSAPP_NUMBER = "529983666675";

const FALLBACK_IMAGE = "placeholder.svg";

const products = [
    {
        id: 1,
        name: "Sérum en Spray",
        slug: "serum-en-spray",
        category: "cremas",
        categoryLabel: "Cremas y sérums",
        presentation: "125 ml",
        image: "01-serum-en-spray.jpg",
        description: "Finalizador profesional que ayuda a controlar el frizz, aportar brillo y proteger la fibra capilar.",
        prices: [
            { label: "Precio normal", value: "$280" },
            { label: "Mayoreo (4+ piezas)", value: "$200" }
        ],
        benefits: [
            "Finaliza tratamientos químicos",
            "Ayuda a controlar el frizz",
            "Aporta brillo inmediato",
            "Sella la cutícula",
            "Facilita el peinado"
        ],
        ideal: [
            "Cabello con alaciados, tintes, decoloraciones o permanentes",
            "Uso diario en casa o salón"
        ],
        badge: "Popular"
    },
    {
        id: 2,
        name: "Crema de Peinar",
        slug: "crema-de-peinar",
        category: "cremas",
        categoryLabel: "Cremas y sérums",
        presentation: "300 ml",
        image: "02-crema-peinar.jpg",
        description: "Crema de uso diario para hidratar, facilitar el peinado y ayudar a reducir el frizz.",
        prices: [
            { label: "Precio normal", value: "$280" },
            { label: "Media docena", value: "$600" },
            { label: "Docena", value: "$1,100" }
        ],
        benefits: [
            "Mantiene hidratado el cabello",
            "Facilita el peinado",
            "Ayuda a reducir el frizz",
            "Protege del calor de secadora y plancha",
            "Ayuda a conservar el brillo"
        ],
        ideal: [
            "Uso diario",
            "Cabello con procesos químicos",
            "Todo tipo de cabello",
            "Aplicación en cabello limpio y húmedo"
        ],
        note: "Aromas disponibles: Uva, Fresa, Chocolate, Durazno, Sandía perfumada, Plátano, Bebé, La Vida Es Bella, Paris Hilton y Katy Perry.",
        variantLabel: "Elige el aroma",
        variantMessageLabel: "aroma",
        variantSummary: "11 aromas disponibles",
        variants: [
                    { label: "Uva", presentation: "300 ml · Aroma Uva", image: "02-crema-peinar.jpg" },
                    { label: "Fresa", presentation: "300 ml · Aroma Fresa", image: "02-crema-peinar.jpg" },
                    { label: "Chocolate", presentation: "300 ml · Aroma Chocolate", image: "02-crema-peinar.jpg" },
                    { label: "Durazno", presentation: "300 ml · Aroma Durazno", image: "02-crema-peinar.jpg" },
                    { label: "Sandía", presentation: "300 ml · Aroma Sandía", image: "02-crema-peinar.jpg" },
                    { label: "Plátano", presentation: "300 ml · Aroma Plátano", image: "02-crema-peinar.jpg" },
                    { label: "Bebé", presentation: "300 ml · Aroma Bebé", image: "02-crema-peinar.jpg" },
                    { label: "La Vida es Bella", presentation: "300 ml · Aroma La Vida es Bella", image: "02-crema-peinar.jpg" },
                    { label: "Paris Hilton", presentation: "300 ml · Aroma Paris Hilton", image: "02-crema-peinar.jpg" },
                    { label: "Katy Perry", presentation: "300 ml · Aroma Katy Perry", image: "02-crema-peinar.jpg" },
                    { label: "Mora", presentation: "300 ml · Aroma Mora", image: "02-crema-peinar.jpg" }
        ]
    },
    {
        id: 3,
        name: "Kit de Crecimiento",
        slug: "kit-de-crecimiento",
        category: "kits",
        categoryLabel: "Kits profesionales",
        presentation: "Shampoo + tónico",
        image: "03-kit-crecimiento.jpg",
        description: "Rutina de shampoo y tónico para fortalecer el cabello y cuidar el cuero cabelludo.",
        prices: [
            { label: "Precio normal", value: "$680" },
            { label: "Mayoreo (4+ kits)", value: "$380" }
        ],
        benefits: [
            "Ayuda a estimular el crecimiento",
            "Fortalece el folículo",
            "Ayuda a reducir la caída",
            "Nutre el cuero cabelludo",
            "Aporta hidratación"
        ],
        ideal: [
            "Cabello débil",
            "Personas con caída del cabello",
            "Crecimiento lento"
        ],
        badge: "Más vendido"
    },
    {
        id: 4,
        name: "Kit Post Alisado",
        slug: "kit-post-alisado",
        category: "kits",
        categoryLabel: "Kits profesionales",
        presentation: "Mantenimiento",
        image: "04-kit-post-alisado.jpg",
        description: "Rutina de mantenimiento para ayudar a prolongar los resultados de un alisado.",
        prices: [
            { label: "Precio normal", value: "$550" },
            { label: "3 kits", value: "$310 c/u" },
            { label: "5 kits", value: "$280 c/u" }
        ],
        benefits: [
            "Ayuda a mantener el alaciado",
            "Restablece el pH",
            "Hidrata",
            "Ayuda a prolongar el tratamiento",
            "Protege del calor"
        ],
        ideal: [
            "Cabello con alaciado progresivo"
        ]
    },
    {
        id: 5,
        name: "Kit Rizos Perfectos",
        slug: "kit-para-rizos",
        category: "kits",
        categoryLabel: "Kits profesionales",
        presentation: "Shampoo + acondicionador",
        image: "05-kit-rizos.jpg",
        description: "Rutina para hidratar, definir y mantener el patrón natural del cabello rizado u ondulado.",
        prices: [
            { label: "Precio normal", value: "$550" },
            { label: "3 kits", value: "$310 c/u" },
            { label: "5 kits", value: "$280 c/u" }
        ],
        benefits: [
            "Ayuda a definir los rizos",
            "Hidrata profundamente",
            "Controla el frizz",
            "Devuelve elasticidad",
            "Nutre el cabello"
        ],
        ideal: [
            "Cabello rizado",
            "Cabello ondulado"
        ]
    },
    {
        id: 6,
        name: "Kit de Muestra",
        slug: "kit-de-muestra",
        category: "kits",
        categoryLabel: "Kits profesionales",
        presentation: "Línea alisante completa",
        image: "20-kit-muestra.jpg",
        description: "Presentación pensada para conocer y probar una línea alisante profesional completa.",
        prices: [
            { label: "Kit completo", value: "$1,850" }
        ],
        benefits: [
            "Línea alisante completa",
            "Presentación de prueba profesional",
            "Permite conocer distintos productos de la línea"
        ],
        ideal: [
            "Estilistas que desean probar la línea"
        ]
    },
    {
        id: 7,
        name: "Hiperlux 6",
        slug: "hiperlux-6",
        category: "alisados",
        categoryLabel: "Alisados profesionales",
        presentation: "Alisado en espuma · 1 L",
        image: "07-hiperlux-6.jpg",
        description: "Alisado progresivo en espuma para reducir volumen y frizz con acabado brillante.",
        prices: [
            { label: "Precio", value: "$2,800" }
        ],
        benefits: [
            "Alisa progresivamente",
            "Reduce el frizz",
            "Aporta brillo intenso",
            "Ayuda a reparar e hidratar",
            "Puede dejar el cabello lacio hasta un 99%"
        ],
        ideal: [
            "Uso profesional",
            "Personas que buscan alaciado progresivo"
        ],
        note: "Duración indicada de 5 a 7 meses. Libre de formol y con lavado inmediato, según la información proporcionada.",
        badge: "Profesional"
    },
    {
        id: 8,
        name: "Afroliss",
        slug: "afroliss",
        category: "alisados",
        categoryLabel: "Alisados profesionales",
        presentation: "Alisado progresivo · 1 L",
        image: "08-afroliss.jpg",
        description: "Tratamiento progresivo orientado a cabello afro, grueso o muy resistente.",
        prices: [
            { label: "Precio", value: "$2,300" }
        ],
        benefits: [
            "Alisa cabello afro o muy resistente",
            "Ayuda a controlar el volumen",
            "Reduce el frizz",
            "Nutre e hidrata"
        ],
        ideal: [
            "Cabello grueso",
            "Cabello afro",
            "Cabello muy rebelde"
        ],
        note: "Puede lograr un lacio de hasta 99% y una duración de hasta 8 meses, según la información proporcionada."
    },
    {
        id: 9,
        name: "Alisado Permanente + Neutralizante",
        slug: "alaciado-permanente",
        category: "alisados",
        categoryLabel: "Alisados profesionales",
        presentation: "Kit profesional",
        image: "09-alaciado-permanente.jpg",
        description: "Sistema profesional que modifica la estructura del cabello para lograr un alaciado permanente.",
        prices: [
            { label: "Precio", value: "$1,850" }
        ],
        benefits: [
            "Alaciado permanente",
            "Acabado lacio",
            "Aporta brillo",
            "Aporta suavidad"
        ],
        ideal: [
            "Cabello virgen",
            "Cabello resistente"
        ],
        note: "No recomendado para cabello decolorado o con procesos químicos previos. Requiere aplicación profesional."
    },
    {
        id: 10,
        name: "Alisado Hidrogel",
        slug: "alisado-hidrogel",
        category: "alisados",
        categoryLabel: "Alisados profesionales",
        presentation: "1 L / 500 ml",
        image: "10-alisado-hidrogel.jpg",
        description: "Alisado profesional para reducir el frizz y dejar el cabello suave y brillante.",
        prices: [
            { label: "1 litro", value: "$2,300" },
            { label: "500 ml", value: "$1,500" }
        ],
        benefits: [
            "Alisado indicado de 90 a 95%",
            "Reduce el frizz",
            "Aporta brillo intenso",
            "Deja el cabello suave y sedoso",
            "Lavado inmediato después de la aplicación"
        ],
        ideal: [
            "Cabello resistente"
        ],
        variantLabel: "Elige la presentación",
        variantMessageLabel: "presentación",
        variantSummary: "2 presentaciones disponibles",
        variants: [
                    { label: "1 litro", presentation: "1 litro", image: "10-alisado-hidrogel.jpg", price: "$2,300" },
                    { label: "500 ml", presentation: "500 ml", image: "10-alisado-hidrogel-500.jpg", price: "$1,500" }
        ]
    },
    {
        id: 11,
        name: "Keratina Japonesa",
        slug: "keratina-japonesa",
        category: "keratinas",
        categoryLabel: "Keratinas premium",
        presentation: "1 L / 500 ml",
        image: "11-keratina-japonesa.jpg",
        description: "Keratina profesional para alisar, hidratar y reducir el frizz con movimiento natural.",
        prices: [
            { label: "1 litro", value: "$2,300" },
            { label: "500 ml", value: "$1,500" }
        ],
        benefits: [
            "Alisado indicado de 90 a 95%",
            "Hidrata profundamente",
            "Reduce el frizz",
            "Aporta brillo y movimiento natural",
            "Protege la fibra capilar con inhibidor"
        ],
        ideal: [
            "Todo tipo de cabello resistente"
        ],
        variantLabel: "Elige la presentación",
        variantMessageLabel: "presentación",
        variantSummary: "2 presentaciones disponibles",
        variants: [
                    { label: "1 litro", presentation: "1 litro", image: "11-keratina-japonesa.jpg", price: "$2,300" },
                    { label: "500 ml", presentation: "500 ml", image: "11-keratina-japonesa.jpg", price: "$1,500" }
        ]
    },
    {
        id: 12,
        name: "Keratina Brasileña",
        slug: "keratina-brasilena",
        category: "keratinas",
        categoryLabel: "Keratinas premium",
        presentation: "1 L / 500 ml",
        image: "12-keratina-brasilena.jpg",
        description: "Keratina para disminuir el frizz y mantener un acabado suave en cabello procesado.",
        prices: [
            { label: "1 litro", value: "$2,500" },
            { label: "500 ml", value: "$1,500" }
        ],
        benefits: [
            "Alisado indicado de 80 a 90%",
            "Disminuye el frizz",
            "Ayuda a mantener el pH equilibrado",
            "Lavado inmediato",
            "No contiene formol, según la información proporcionada"
        ],
        ideal: [
            "Cabello decolorado",
            "Cabello con mechas",
            "Cabello tinturado"
        ],
        variantLabel: "Elige la presentación",
        variantMessageLabel: "presentación",
        variantSummary: "2 presentaciones disponibles",
        variants: [
                    { label: "1 litro", presentation: "1 litro", image: "12-keratina-brasilena.jpg", price: "$2,500" },
                    { label: "500 ml", presentation: "500 ml", image: "12-keratina-brasilena.jpg", price: "$1,500" }
        ]
    },
    {
        id: 13,
        name: "Keratina Marroquí Ultra",
        slug: "keratina-marroqui-ultra",
        category: "keratinas",
        categoryLabel: "Keratinas premium",
        presentation: "1 L / 500 ml",
        image: "14-keratina-marroqui.jpg",
        description: "Keratina de alto desempeño para cabello ondulado o rizado resistente.",
        prices: [
            { label: "1 litro", value: "$2,300" },
            { label: "500 ml", value: "$1,500" }
        ],
        benefits: [
            "Alisado indicado de 95 a 98%",
            "Reduce el frizz",
            "Aporta brillo intenso",
            "Hidrata",
            "Lavado inmediato"
        ],
        ideal: [
            "Cabello ondulado resistente",
            "Cabello rizado resistente"
        ],
        note: "Duración aproximada indicada de 5 a 6 meses.",
        badge: "Premium",
        variantLabel: "Elige la presentación",
        variantMessageLabel: "presentación",
        variantSummary: "2 presentaciones disponibles",
        variants: [
                    { label: "1 litro", presentation: "1 litro · Ultra", image: "14-keratina-marroqui.jpg", price: "$2,300", displayName: "Keratina Marroquí Ultra" },
                    { label: "500 ml", presentation: "500 ml", image: "14-keratina-marroqui-500.jpg", price: "$1,500", displayName: "Keratina Marroquí" }
        ]
    },
    {
        id: 14,
        name: "Encerado Capilar",
        slug: "encerado-capilar",
        category: "tratamientos",
        categoryLabel: "Tratamientos especializados",
        presentation: "1 L / 500 ml",
        image: "06-encerado-capilar.jpg",
        description: "Tratamiento nutritivo para cabello seco, maltratado o procesado químicamente.",
        prices: [
            { label: "1 litro", value: "$1,500" },
            { label: "500 ml", value: "$1,000" }
        ],
        benefits: [
            "Hidrata profundamente",
            "Ayuda a reponer lípidos",
            "Nutre el cabello",
            "Devuelve brillo",
            "Mejora la suavidad"
        ],
        ideal: [
            "Cabello seco",
            "Cabello maltratado",
            "Cabello con procesos químicos"
        ],
        note: "Este producto no alisa.",
        variantLabel: "Elige la presentación",
        variantMessageLabel: "presentación",
        variantSummary: "2 presentaciones disponibles",
        variants: [
                    { label: "1 litro", presentation: "1 litro", image: "06-encerado-capilar.jpg", price: "$1,500" },
                    { label: "500 ml", presentation: "500 ml", image: "06-encerado-capilar.jpg", price: "$1,000" }
        ]
    },
    {
        id: 15,
        name: "Mascarilla Cierre Técnico",
        slug: "mascarilla-cierre-tecnico",
        category: "tratamientos",
        categoryLabel: "Tratamientos especializados",
        presentation: "1 litro",
        image: "13-mascarilla-cierre.jpg",
        description: "Mascarilla para finalizar procesos químicos y ayudar a restablecer el equilibrio del cabello.",
        prices: [
            { label: "Precio", value: "$550" }
        ],
        benefits: [
            "Ayuda a cerrar la cutícula",
            "Ayuda a restaurar el pH",
            "Hidrata",
            "Reduce el frizz",
            "Aumenta el brillo",
            "Ayuda a prolongar resultados"
        ],
        ideal: [
            "Después de procesos químicos",
            "Mantenimiento de tratamientos capilares"
        ]
    },
    {
        id: 16,
        name: "Cirugía Capilar",
        slug: "cirugia-capilar",
        category: "tratamientos",
        categoryLabel: "Tratamientos especializados",
        presentation: "1 L / 500 ml",
        image: "17-cirugia-capilar.jpg",
        description: "Tratamiento de reparación e hidratación profunda para cabello dañado o procesado.",
        prices: [
            { label: "1 litro", value: "$1,500" },
            { label: "500 ml", value: "$1,000" }
        ],
        benefits: [
            "Ayuda a reparar la fibra capilar",
            "Hidrata profundamente",
            "Devuelve elasticidad",
            "Fortalece el cabello",
            "Reduce el frizz"
        ],
        ideal: [
            "Cabello dañado",
            "Cabello procesado químicamente",
            "Todo tipo de cabello"
        ],
        variantLabel: "Elige la presentación",
        variantMessageLabel: "presentación",
        variantSummary: "2 presentaciones disponibles",
        variants: [
                    { label: "1 litro", presentation: "1 litro", image: "17-cirugia-capilar.jpg", price: "$1,500" },
                    { label: "500 ml", presentation: "500 ml", image: "17-cirugia-capilar.jpg", price: "$1,000" }
        ]
    },
    {
        id: 17,
        name: "Botox Curly",
        slug: "botox-curly",
        category: "tratamientos",
        categoryLabel: "Tratamientos especializados",
        presentation: "1 L / 500 ml",
        image: "16-botox-curly.jpg",
        description: "Tratamiento reparador e hidratante para conservar y definir el patrón natural del rizo.",
        prices: [
            { label: "1 litro", value: "$2,200" },
            { label: "500 ml", value: "$1,500" }
        ],
        benefits: [
            "Ayuda a reparar el cabello rizado",
            "Hidrata profundamente",
            "Define los rizos",
            "Controla el frizz",
            "Aporta brillo y elasticidad",
            "Fortalece la fibra capilar"
        ],
        ideal: [
            "Rizos tipo 3, 3B y 3C",
            "Cabello afro"
        ],
        note: "No alisa; conserva el patrón natural del rizo.",
        variantLabel: "Elige la presentación",
        variantMessageLabel: "presentación",
        variantSummary: "2 presentaciones disponibles",
        variants: [
                    { label: "1 litro", presentation: "1 litro", image: "16-botox-curly.jpg", price: "$2,200" },
                    { label: "500 ml", presentation: "500 ml", image: "16-botox-curly.jpg", price: "$1,500" }
        ]
    },
    {
        id: 18,
        name: "Shampoo Limpieza Profunda",
        slug: "shampoo-limpieza-profunda",
        category: "tratamientos",
        categoryLabel: "Tratamientos especializados",
        presentation: "1 litro",
        image: "15-shampoo-limpieza.jpg",
        description: "Shampoo preparador para retirar residuos antes de tratamientos profesionales.",
        prices: [
            { label: "Precio", value: "$280" }
        ],
        benefits: [
            "Elimina residuos de productos",
            "Ayuda a retirar aceites, siliconas e impurezas",
            "Abre ligeramente la cutícula",
            "Prepara para alisados y reconstrucciones",
            "Mejora la penetración de tratamientos"
        ],
        ideal: [
            "Preparación previa a procesos profesionales"
        ]
    },
    {
        id: 19,
        name: "Nanoplastia Molecular",
        slug: "nanoplastia-molecular",
        category: "tratamientos",
        categoryLabel: "Tratamientos especializados",
        presentation: "500 ml",
        image: "18-nanoplastia-molecular.jpg",
        description: "Tratamiento molecular orientado a mejorar la apariencia, suavidad y brillo del cabello.",
        prices: [
            { label: "Precio", value: "$580" }
        ],
        benefits: [
            "Reparación capilar",
            "Brillo intenso",
            "Suavidad excepcional"
        ],
        ideal: [
            "Cabello que necesita mejorar suavidad y apariencia"
        ]
    },
    {
        id: 20,
        name: "Plancha Moonstyle",
        slug: "plancha-moonstyle",
        category: "herramientas",
        categoryLabel: "Herramientas profesionales",
        presentation: "Herramienta profesional",
        image: "19-plancha-moonstyle.jpg",
        description: "Plancha profesional para apoyar procesos de estilizado y acabados de salón.",
        prices: [
            { label: "Precio", value: "$2,500" }
        ],
        benefits: [
            "Herramienta profesional",
            "Acabado premium",
            "Tecnología avanzada"
        ],
        ideal: [
            "Estilistas",
            "Uso profesional"
        ],
        badge: "Herramienta"
    }
];

const state = {
    search: "",
    category: "todos"
};

const elements = {
    grid: document.getElementById("productsGrid"),
    search: document.getElementById("buscar"),
    filterButtons: document.getElementById("filterButtons"),
    counter: document.getElementById("productCounter"),
    emptyState: document.getElementById("emptyState"),
    modal: document.getElementById("productModal"),
    modalImage: document.getElementById("modalImage"),
    modalBadge: document.getElementById("modalBadge"),
    modalCategory: document.getElementById("modalCategory"),
    modalTitle: document.getElementById("modalTitle"),
    modalPresentation: document.getElementById("modalPresentation"),
    modalDescription: document.getElementById("modalDescription"),
    modalPrices: document.getElementById("modalPrices"),
    modalBenefits: document.getElementById("modalBenefits"),
    modalIdealSection: document.getElementById("modalIdealSection"),
    modalIdeal: document.getElementById("modalIdeal"),
    modalNote: document.getElementById("modalNote"),
    modalWhatsapp: document.getElementById("modalWhatsapp"),
    menu: document.getElementById("menu"),
    menuBtn: document.getElementById("menuBtn"),
    header: document.getElementById("header"),
    backToTop: document.getElementById("backToTop")
};

function normalizeText(value) {
    return value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();
}

function whatsappUrl(message) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function setGlobalWhatsappLinks() {
    const generalMessage = "Hola Luxury Hair, me gustaría recibir información sobre sus productos.";
    const wholesaleMessage = "Hola Luxury Hair, me interesa conocer los precios de mayoreo y armar un pedido.";

    document.querySelectorAll("[data-whatsapp-general]").forEach(link => {
        link.href = whatsappUrl(generalMessage);
    });

    document.querySelectorAll("[data-whatsapp-wholesale]").forEach(link => {
        link.href = whatsappUrl(wholesaleMessage);
    });
}

function productWhatsappMessage(product) {
    return `Hola Luxury Hair, me interesa ${product.name} (${product.presentation}). ¿Me puedes dar más información y confirmar disponibilidad?`;
}

function priceLinesTemplate(prices, modal = false) {
    const className = modal ? "modal-price-line" : "price-line";

    return prices.map(price => `
        <div class="${className}">
            <span>${price.label}</span>
            <strong>${price.value}</strong>
        </div>
    `).join("");
}

function productCardTemplate(product) {
    return `
        <article class="product-card reveal" data-product-id="${product.id}">
            <div class="product-image">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ""}
                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                    width="640"
                    height="590"
                    onerror="this.onerror=null;this.src='${FALLBACK_IMAGE}'"
                >
            </div>

            <div class="product-content">
                <span class="product-category">${product.categoryLabel}</span>
                <h3>${product.name}</h3>
                <p class="product-presentation">${product.presentation}</p>
                <p class="product-description">${product.description}</p>

                <div class="price-list">
                    ${priceLinesTemplate(product.prices)}
                </div>

                <div class="product-actions">
                    <button class="info-button" type="button" data-open-product="${product.id}">
                        Ver información
                    </button>

                    <a
                        class="buy-button"
                        href="${whatsappUrl(productWhatsappMessage(product))}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Comprar
                    </a>
                </div>
            </div>
        </article>
    `;
}

function getFilteredProducts() {
    const search = normalizeText(state.search);

    return products.filter(product => {
        const matchesCategory = state.category === "todos" || product.category === state.category;
        const searchableText = normalizeText([
            product.name,
            product.categoryLabel,
            product.presentation,
            product.description,
            ...product.benefits,
            ...product.ideal
        ].join(" "));

        return matchesCategory && searchableText.includes(search);
    });
}

function renderProducts() {
    const filteredProducts = getFilteredProducts();

    elements.grid.innerHTML = filteredProducts.map(productCardTemplate).join("");
    elements.counter.textContent = `${filteredProducts.length} ${filteredProducts.length === 1 ? "producto" : "productos"}`;
    elements.emptyState.hidden = filteredProducts.length > 0;

    document.querySelectorAll("[data-open-product]").forEach(button => {
        button.addEventListener("click", () => {
            openProductModal(Number(button.dataset.openProduct));
        });
    });

    observeRevealElements();
}

function setActiveFilter(category) {
    document.querySelectorAll(".filter-btn").forEach(button => {
        button.classList.toggle("active", button.dataset.category === category);
    });
}

function openProductModal(productId) {
    const product = products.find(item => item.id === productId);
    if (!product) return;

    elements.modalImage.src = product.image;
    elements.modalImage.alt = product.name;
    elements.modalImage.onerror = () => {
        elements.modalImage.onerror = null;
        elements.modalImage.src = FALLBACK_IMAGE;
    };

    if (product.badge) {
        elements.modalBadge.hidden = false;
        elements.modalBadge.textContent = product.badge;
    } else {
        elements.modalBadge.hidden = true;
        elements.modalBadge.textContent = "";
    }

    elements.modalCategory.textContent = product.categoryLabel;
    elements.modalTitle.textContent = product.name;
    elements.modalPresentation.textContent = product.presentation;
    elements.modalDescription.textContent = product.description;
    elements.modalPrices.innerHTML = priceLinesTemplate(product.prices, true);
    elements.modalBenefits.innerHTML = product.benefits.map(item => `<li>${item}</li>`).join("");

    if (product.ideal.length) {
        elements.modalIdealSection.hidden = false;
        elements.modalIdeal.innerHTML = product.ideal.map(item => `<li>${item}</li>`).join("");
    } else {
        elements.modalIdealSection.hidden = true;
        elements.modalIdeal.innerHTML = "";
    }

    if (product.note) {
        elements.modalNote.hidden = false;
        elements.modalNote.textContent = product.note;
    } else {
        elements.modalNote.hidden = true;
        elements.modalNote.textContent = "";
    }

    elements.modalWhatsapp.href = whatsappUrl(productWhatsappMessage(product));

    elements.modal.classList.add("open");
    elements.modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    requestAnimationFrame(() => {
        elements.modal.querySelector(".modal-close").focus();
    });
}

function closeProductModal() {
    elements.modal.classList.remove("open");
    elements.modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
}

function closeMobileMenu() {
    elements.menu.classList.remove("open");
    elements.menuBtn.classList.remove("open");
    elements.menuBtn.setAttribute("aria-expanded", "false");
    elements.menuBtn.setAttribute("aria-label", "Abrir menú");
}

function toggleMobileMenu() {
    const willOpen = !elements.menu.classList.contains("open");

    elements.menu.classList.toggle("open", willOpen);
    elements.menuBtn.classList.toggle("open", willOpen);
    elements.menuBtn.setAttribute("aria-expanded", String(willOpen));
    elements.menuBtn.setAttribute("aria-label", willOpen ? "Cerrar menú" : "Abrir menú");
}

let revealObserver;

function observeRevealElements() {
    if (!("IntersectionObserver" in window)) {
        document.querySelectorAll(".reveal").forEach(element => element.classList.add("visible"));
        return;
    }

    if (!revealObserver) {
        revealObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12,
            rootMargin: "0px 0px -40px 0px"
        });
    }

    document.querySelectorAll(".reveal:not(.visible)").forEach(element => {
        revealObserver.observe(element);
    });
}

elements.search.addEventListener("input", event => {
    state.search = event.target.value;
    renderProducts();
});

elements.filterButtons.addEventListener("click", event => {
    const button = event.target.closest(".filter-btn");
    if (!button) return;

    state.category = button.dataset.category;
    setActiveFilter(state.category);
    renderProducts();
});

elements.menuBtn.addEventListener("click", toggleMobileMenu);

elements.menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMobileMenu);
});

document.querySelectorAll("[data-close-modal]").forEach(element => {
    element.addEventListener("click", closeProductModal);
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeProductModal();
        closeMobileMenu();
    }
});

document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
        const item = button.closest(".faq-item");
        const isOpen = item.classList.toggle("open");
        button.setAttribute("aria-expanded", String(isOpen));
    });
});

elements.backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
    const isScrolled = window.scrollY > 18;
    elements.header.classList.toggle("scrolled", isScrolled);
    elements.backToTop.classList.toggle("visible", window.scrollY > 650);
}, { passive: true });

window.addEventListener("resize", () => {
    if (window.innerWidth > 980) {
        closeMobileMenu();
    }
});

document.getElementById("currentYear").textContent = new Date().getFullYear();

setGlobalWhatsappLinks();
renderProducts();
observeRevealElements();


/* =========================================================
   ACTUALIZACIÓN 2026: LOGO, IMÁGENES UNIFORMES Y VARIANTES
   ========================================================= */

elements.modalVariantSection = document.getElementById("modalVariantSection");
elements.modalVariantLabel = document.getElementById("modalVariantLabel");
elements.modalVariants = document.getElementById("modalVariants");

function productWhatsappMessage(product, variant = null) {
    const option = variant
        ? `, ${product.variantMessageLabel || "opción"}: ${variant.label}`
        : "";
    const presentation = variant?.presentation || product.presentation;
    const displayName = variant?.displayName || product.name;

    return `Hola Luxury Hair, me interesa ${displayName}${option} (${presentation}). ¿Me puedes dar más información y confirmar disponibilidad?`;
}

function variantSummaryTemplate(product) {
    if (!product.variants?.length) return "";

    return `
        <button class="product-variant-summary" type="button" data-open-product="${product.id}">
            <span>${product.variantSummary || `${product.variants.length} opciones disponibles`}</span>
            <strong>Elegir</strong>
        </button>
    `;
}

function productCardTemplate(product) {
    const hasVariants = Boolean(product.variants?.length);

    return `
        <article class="product-card reveal" data-product-id="${product.id}">
            <div class="product-image">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ""}
                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                    width="1200"
                    height="1200"
                    onerror="this.onerror=null;this.src='${FALLBACK_IMAGE}'"
                >
            </div>

            <div class="product-content">
                <span class="product-category">${product.categoryLabel}</span>
                <h3>${product.name}</h3>
                <p class="product-presentation">${product.presentation}</p>
                <p class="product-description">${product.description}</p>

                ${variantSummaryTemplate(product)}

                <div class="price-list">
                    ${priceLinesTemplate(product.prices)}
                </div>

                <div class="product-actions">
                    <button class="info-button" type="button" data-open-product="${product.id}">
                        Ver información
                    </button>

                    ${hasVariants ? `
                        <button class="buy-button" type="button" data-open-product="${product.id}">
                            Elegir opción
                        </button>
                    ` : `
                        <a
                            class="buy-button"
                            href="${whatsappUrl(productWhatsappMessage(product))}"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Comprar
                        </a>
                    `}
                </div>
            </div>
        </article>
    `;
}

function getFilteredProducts() {
    const search = normalizeText(state.search);

    return products.filter(product => {
        const matchesCategory = state.category === "todos" || product.category === state.category;
        const variantsText = product.variants?.map(variant => [variant.label, variant.presentation, variant.displayName].filter(Boolean).join(" ")) || [];
        const searchableText = normalizeText([
            product.name,
            product.categoryLabel,
            product.presentation,
            product.description,
            ...product.benefits,
            ...product.ideal,
            ...variantsText
        ].join(" "));

        return matchesCategory && searchableText.includes(search);
    });
}

function renderProducts() {
    const filteredProducts = getFilteredProducts();

    elements.grid.innerHTML = filteredProducts.map(productCardTemplate).join("");
    elements.counter.textContent = `${filteredProducts.length} ${filteredProducts.length === 1 ? "producto" : "productos"}`;
    elements.emptyState.hidden = filteredProducts.length > 0;

    document.querySelectorAll("[data-open-product]").forEach(button => {
        button.addEventListener("click", () => {
            openProductModal(Number(button.dataset.openProduct));
        });
    });

    observeRevealElements();
}

function modalPricesFor(product, variant) {
    if (variant?.price) {
        return [{ label: variant.presentation || variant.label, value: variant.price }];
    }
    return product.prices;
}

function applyVariantToModal(product, variant, index = 0) {
    const image = variant?.image || product.image;
    const displayName = variant?.displayName || product.name;
    const presentation = variant?.presentation || product.presentation;

    elements.modalImage.src = image;
    elements.modalImage.alt = variant ? `${displayName} - ${variant.label}` : displayName;
    elements.modalImage.onerror = () => {
        elements.modalImage.onerror = null;
        elements.modalImage.src = FALLBACK_IMAGE;
    };

    elements.modalTitle.textContent = displayName;
    elements.modalPresentation.textContent = presentation;
    elements.modalPrices.innerHTML = priceLinesTemplate(modalPricesFor(product, variant), true);
    elements.modalWhatsapp.href = whatsappUrl(productWhatsappMessage(product, variant));

    if (elements.modalVariants) {
        elements.modalVariants.querySelectorAll(".variant-option").forEach((button, buttonIndex) => {
            const active = buttonIndex === index;
            button.classList.toggle("active", active);
            button.setAttribute("aria-pressed", String(active));
        });
    }
}

function renderVariantSelector(product) {
    const variants = product.variants || [];

    if (!variants.length) {
        elements.modalVariantSection.hidden = true;
        elements.modalVariants.innerHTML = "";
        applyVariantToModal(product, null);
        return;
    }

    elements.modalVariantSection.hidden = false;
    elements.modalVariantLabel.textContent = product.variantLabel || "Elige una opción";
    elements.modalVariants.innerHTML = variants.map((variant, index) => `
        <button
            class="variant-option ${index === 0 ? "active" : ""}"
            type="button"
            data-variant-index="${index}"
            aria-pressed="${index === 0 ? "true" : "false"}"
        >
            ${variant.label}
        </button>
    `).join("");

    elements.modalVariants.querySelectorAll("[data-variant-index]").forEach(button => {
        button.addEventListener("click", () => {
            const index = Number(button.dataset.variantIndex);
            applyVariantToModal(product, variants[index], index);
        });
    });

    applyVariantToModal(product, variants[0], 0);
}

function openProductModal(productId) {
    const product = products.find(item => item.id === productId);
    if (!product) return;

    if (product.badge) {
        elements.modalBadge.hidden = false;
        elements.modalBadge.textContent = product.badge;
    } else {
        elements.modalBadge.hidden = true;
        elements.modalBadge.textContent = "";
    }

    elements.modalCategory.textContent = product.categoryLabel;
    elements.modalDescription.textContent = product.description;
    elements.modalBenefits.innerHTML = product.benefits.map(item => `<li>${item}</li>`).join("");

    if (product.ideal.length) {
        elements.modalIdealSection.hidden = false;
        elements.modalIdeal.innerHTML = product.ideal.map(item => `<li>${item}</li>`).join("");
    } else {
        elements.modalIdealSection.hidden = true;
        elements.modalIdeal.innerHTML = "";
    }

    if (product.note) {
        elements.modalNote.hidden = false;
        elements.modalNote.textContent = product.note;
    } else {
        elements.modalNote.hidden = true;
        elements.modalNote.textContent = "";
    }

    renderVariantSelector(product);

    elements.modal.classList.add("open");
    elements.modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    requestAnimationFrame(() => {
        elements.modal.querySelector(".modal-close").focus();
    });
}
