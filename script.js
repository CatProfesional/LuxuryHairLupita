
const WHATSAPP_NUMBER = "529983666675";
const FALLBACK_IMAGE = "placeholder.svg";
const products = [
    {
        "id": 1,
        "name": "Sérum en Spray",
        "slug": "serum-en-spray",
        "category": "cremas",
        "categoryLabel": "Cremas y sérums",
        "presentation": "125 ml",
        "image": "01-serum-en-spray.jpg",
        "description": "Finalizador profesional que ayuda a controlar el frizz, aportar brillo y proteger la fibra capilar.",
        "prices": [
            {
                "label": "Precio normal",
                "value": "$280"
            },
            {
                "label": "Mayoreo (4+ piezas)",
                "value": "$200"
            }
        ],
        "benefits": [
            "Finaliza tratamientos químicos",
            "Ayuda a controlar el frizz",
            "Aporta brillo inmediato",
            "Sella la cutícula",
            "Facilita el peinado"
        ],
        "ideal": [
            "Cabello con alaciados, tintes, decoloraciones o permanentes",
            "Uso diario en casa o salón"
        ],
        "badge": "Popular"
    },
    {
        "id": 2,
        "name": "Crema Artesanal de Keratina",
        "slug": "crema-artesanal-de-keratina",
        "category": "cremas",
        "categoryLabel": "Cremas y sérums",
        "presentation": "300 ml",
        "image": "02-crema-peinar.jpg",
        "description": "Crema de uso diario para hidratar, facilitar el peinado y ayudar a reducir el frizz, con aromas variados.",
        "prices": [
            {
                "label": "Precio normal",
                "value": "$280"
            },
            {
                "label": "Media docena",
                "value": "$600"
            },
            {
                "label": "Docena",
                "value": "$1,100"
            }
        ],
        "benefits": [
            "Mantiene hidratado el cabello",
            "Facilita el peinado",
            "Ayuda a reducir el frizz",
            "Protege del calor de secadora y plancha",
            "Ayuda a conservar el brillo"
        ],
        "ideal": [
            "Uso diario",
            "Cabello con procesos químicos",
            "Todo tipo de cabello",
            "Aplicación en cabello limpio y húmedo"
        ],
        "note": "Aromas oficiales disponibles: Katy Perry, La Vida es Bella, Plátano, Cereza, Fresa, Coco, Chocolate, Durazno, Paris Hilton, Uva, Sandía perfumada, Bebé y Selena Gómez.",
        "variantLabel": "Elige el aroma",
        "variantMessageLabel": "aroma",
        "variantSummary": "13 aromas disponibles",
        "variants": [
            {
                "label": "Katy Perry",
                "presentation": "300 ml · Aroma Katy Perry",
                "image": "02-crema-peinar.jpg"
            },
            {
                "label": "La Vida es Bella",
                "presentation": "300 ml · Aroma La Vida es Bella",
                "image": "02-crema-peinar.jpg"
            },
            {
                "label": "Plátano",
                "presentation": "300 ml · Aroma Plátano",
                "image": "02-crema-peinar.jpg"
            },
            {
                "label": "Cereza",
                "presentation": "300 ml · Aroma Cereza",
                "image": "02-crema-peinar.jpg"
            },
            {
                "label": "Fresa",
                "presentation": "300 ml · Aroma Fresa",
                "image": "02-crema-peinar.jpg"
            },
            {
                "label": "Coco",
                "presentation": "300 ml · Aroma Coco",
                "image": "02-crema-peinar.jpg"
            },
            {
                "label": "Chocolate",
                "presentation": "300 ml · Aroma Chocolate",
                "image": "02-crema-peinar.jpg"
            },
            {
                "label": "Durazno",
                "presentation": "300 ml · Aroma Durazno",
                "image": "02-crema-peinar.jpg"
            },
            {
                "label": "Paris Hilton",
                "presentation": "300 ml · Aroma Paris Hilton",
                "image": "02-crema-peinar.jpg"
            },
            {
                "label": "Uva",
                "presentation": "300 ml · Aroma Uva",
                "image": "02-crema-peinar.jpg"
            },
            {
                "label": "Sandía perfumada",
                "presentation": "300 ml · Aroma Sandía perfumada",
                "image": "02-crema-peinar.jpg"
            },
            {
                "label": "Bebé",
                "presentation": "300 ml · Aroma Bebé",
                "image": "02-crema-peinar.jpg"
            },
            {
                "label": "Selena Gómez",
                "presentation": "300 ml · Aroma Selena Gómez",
                "image": "02-crema-peinar.jpg"
            }
        ]
    },
    {
        "id": 24,
        "name": "Crema para Rizos",
        "slug": "crema-para-rizos",
        "category": "cremas",
        "categoryLabel": "Cremas y sérums",
        "presentation": "300 ml",
        "image": "24-crema-para-rizos.png",
        "description": "Crema perfumada para definir, activar e hidratar rizos con control de frizz y termoprotección.",
        "prices": [
            {
                "label": "1 crema",
                "value": "$280"
            },
            {
                "label": "Media docena",
                "value": "$700"
            },
            {
                "label": "1 docena",
                "value": "$1,200"
            }
        ],
        "benefits": [
            "Define y activa rizos",
            "Hidratación profunda",
            "Control frizz",
            "Termoprotector",
            "Definición profesional"
        ],
        "ideal": [
            "Cabello rizado",
            "Cabello ondulado",
            "Uso diario"
        ]
    },
    {
        "id": 3,
        "name": "Kit de Crecimiento",
        "slug": "kit-de-crecimiento",
        "category": "kits",
        "categoryLabel": "Kits profesionales",
        "presentation": "Shampoo + tónico",
        "image": "03-kit-crecimiento.jpg",
        "description": "Rutina de shampoo y tónico para fortalecer el cabello y cuidar el cuero cabelludo.",
        "prices": [
            {
                "label": "Precio normal",
                "value": "$680"
            },
            {
                "label": "Mayoreo (4+ kits)",
                "value": "$380"
            }
        ],
        "benefits": [
            "Ayuda a estimular el crecimiento",
            "Fortalece el folículo",
            "Ayuda a reducir la caída",
            "Nutre el cuero cabelludo",
            "Aporta hidratación"
        ],
        "ideal": [
            "Cabello débil",
            "Personas con caída del cabello",
            "Crecimiento lento"
        ],
        "badge": "Más vendido"
    },
    {
        "id": 25,
        "name": "Kit Detox Capilar",
        "slug": "kit-detox-capilar",
        "category": "kits",
        "categoryLabel": "Kits profesionales",
        "presentation": "Shampoo anticaspa + tónico",
        "image": "22-kit-detox-capilar.png",
        "description": "Kit detox con shampoo anticaspa y tónico para ayudar a limpiar el cuero cabelludo y apoyar el control de caspa y psoriasis.",
        "prices": [
            {
                "label": "Precio normal",
                "value": "$680"
            },
            {
                "label": "Mayoreo (4+ kits)",
                "value": "$380"
            }
        ],
        "benefits": [
            "Ayuda a eliminar caspa",
            "Apoya la limpieza profunda del cuero cabelludo",
            "Rutina detox capilar",
            "Cabello limpio y saludable",
            "Ideal para cuero cabelludo con descamación"
        ],
        "ideal": [
            "Caspa",
            "Psoriasis",
            "Cuero cabelludo con acumulación de residuos"
        ],
        "badge": "Nuevo"
    },
    {
        "id": 4,
        "name": "Kit Post Alisado",
        "slug": "kit-post-alisado",
        "category": "kits",
        "categoryLabel": "Kits profesionales",
        "presentation": "Mantenimiento",
        "image": "04-kit-post-alisado.jpg",
        "description": "Rutina de mantenimiento para ayudar a prolongar los resultados de un alisado.",
        "prices": [
            {
                "label": "Precio normal",
                "value": "$550"
            },
            {
                "label": "3 kits",
                "value": "$310 c/u"
            },
            {
                "label": "5 kits",
                "value": "$280 c/u"
            }
        ],
        "benefits": [
            "Ayuda a mantener el alaciado",
            "Restablece el pH",
            "Hidrata",
            "Ayuda a prolongar el tratamiento",
            "Protege del calor"
        ],
        "ideal": [
            "Cabello con alaciado progresivo"
        ],
        "note": "Aromas disponibles: Fresa, Uva y Chocolate.",
        "variantLabel": "Elige el aroma",
        "variantMessageLabel": "aroma",
        "variantSummary": "3 aromas disponibles",
        "variants": [
            {
                "label": "Fresa",
                "presentation": "Kit de mantenimiento · Aroma Fresa",
                "image": "04-kit-post-alisado.jpg"
            },
            {
                "label": "Uva",
                "presentation": "Kit de mantenimiento · Aroma Uva",
                "image": "04-kit-post-alisado.jpg"
            },
            {
                "label": "Chocolate",
                "presentation": "Kit de mantenimiento · Aroma Chocolate",
                "image": "04-kit-post-alisado.jpg"
            }
        ]
    },
    {
        "id": 5,
        "name": "Kit Rizos Perfectos",
        "slug": "kit-para-rizos",
        "category": "kits",
        "categoryLabel": "Kits profesionales",
        "presentation": "Shampoo + acondicionador",
        "image": "05-kit-rizos.jpg",
        "description": "Rutina para hidratar, definir y mantener el patrón natural del cabello rizado u ondulado.",
        "prices": [
            {
                "label": "Precio normal",
                "value": "$550"
            },
            {
                "label": "3 kits",
                "value": "$310 c/u"
            },
            {
                "label": "5 kits",
                "value": "$280 c/u"
            }
        ],
        "benefits": [
            "Ayuda a definir los rizos",
            "Hidrata profundamente",
            "Controla el frizz",
            "Devuelve elasticidad",
            "Nutre el cabello"
        ],
        "ideal": [
            "Cabello rizado",
            "Cabello ondulado"
        ]
    },
    {
        "id": 6,
        "name": "Kit de Muestra",
        "slug": "kit-de-muestra",
        "category": "kits",
        "categoryLabel": "Kits profesionales",
        "presentation": "Línea alisante completa",
        "image": "20-kit-muestra.jpg",
        "description": "Presentación pensada para conocer y probar una línea alisante profesional completa, ahora con shampoo de limpieza profunda incluido en la imagen del kit.",
        "prices": [
            {
                "label": "Kit completo",
                "value": "$1,850"
            }
        ],
        "benefits": [
            "Línea alisante completa",
            "Presentación de prueba profesional",
            "Permite conocer distintos productos de la línea"
        ],
        "ideal": [
            "Estilistas que desean probar la línea"
        ]
    },
    {
        "id": 7,
        "name": "Hiperlux 6",
        "slug": "hiperlux-6",
        "category": "progresivos",
        "categoryLabel": "Alisado progresivo",
        "presentation": "Alisado en espuma · 1 L",
        "image": "07-hiperlux-6-nueva.png",
        "description": "Alisado progresivo en espuma con brillo espejo deslumbrante y acabado profesional.",
        "prices": [
            {
                "label": "Precio",
                "value": "$2,800"
            }
        ],
        "benefits": [
            "Alisa progresivamente",
            "Reduce el frizz",
            "Aporta brillo espejo",
            "Ayuda a hidratar el cabello",
            "Presentación principal de 1 litro"
        ],
        "ideal": [
            "Uso profesional",
            "Cabello que busca alisado progresivo"
        ],
        "note": "Imagen actualizada del producto. Puede dejar el cabello lacio hasta un 99%, según la información proporcionada.",
        "badge": "Profesional"
    },
    {
        "id": 8,
        "name": "Afroliss",
        "slug": "afroliss",
        "category": "progresivos",
        "categoryLabel": "Alisado progresivo",
        "presentation": "1 L",
        "image": "08-afroliss.jpg",
        "description": "Tratamiento progresivo orientado a cabello afro, grueso o muy resistente.",
        "prices": [
            {
                "label": "Precio",
                "value": "$2,300"
            }
        ],
        "benefits": [
            "Alisa cabello afro o muy resistente",
            "Ayuda a controlar el volumen",
            "Reduce el frizz",
            "Nutre e hidrata"
        ],
        "ideal": [
            "Cabello grueso",
            "Cabello afro",
            "Cabello muy rebelde"
        ],
        "note": "Puede lograr un lacio de hasta 99% y una duración de hasta 8 meses, según la información proporcionada."
    },
    {
        "id": 10,
        "name": "Alisado Hidrogel",
        "slug": "alisado-hidrogel",
        "category": "progresivos",
        "categoryLabel": "Alisado progresivo",
        "presentation": "1 L / 500 ml",
        "image": "10-alisado-hidrogel.jpg",
        "description": "Alisado profesional para reducir el frizz y dejar el cabello suave y brillante.",
        "prices": [
            {
                "label": "1 litro",
                "value": "$2,300"
            },
            {
                "label": "500 ml",
                "value": "$1,500"
            }
        ],
        "benefits": [
            "Alisado indicado de 90 a 95%",
            "Reduce el frizz",
            "Aporta brillo intenso",
            "Deja el cabello suave y sedoso",
            "Lavado inmediato después de la aplicación"
        ],
        "ideal": [
            "Cabello resistente"
        ],
        "variantLabel": "Elige la presentación",
        "variantMessageLabel": "presentación",
        "variantSummary": "2 presentaciones disponibles",
        "variants": [
            {
                "label": "1 litro",
                "presentation": "1 litro",
                "image": "10-alisado-hidrogel.jpg",
                "price": "$2,300"
            },
            {
                "label": "500 ml",
                "presentation": "500 ml",
                "image": "10-alisado-hidrogel-500-actualizada.jpg",
                "price": "$1,500"
            }
        ]
    },
    {
        "id": 11,
        "name": "Keratina Japonesa",
        "slug": "keratina-japonesa",
        "category": "progresivos",
        "categoryLabel": "Alisado progresivo",
        "presentation": "1 L / 500 ml",
        "image": "11-keratina-japonesa.jpg",
        "description": "Keratina profesional para alisar, hidratar y reducir el frizz con movimiento natural.",
        "prices": [
            {
                "label": "1 litro",
                "value": "$2,300"
            },
            {
                "label": "500 ml",
                "value": "$1,500"
            }
        ],
        "benefits": [
            "Alisado indicado de 90 a 95%",
            "Hidrata profundamente",
            "Reduce el frizz",
            "Aporta brillo y movimiento natural",
            "Protege la fibra capilar con inhibidor"
        ],
        "ideal": [
            "Todo tipo de cabello resistente"
        ],
        "variantLabel": "Elige la presentación",
        "variantMessageLabel": "presentación",
        "variantSummary": "2 presentaciones disponibles",
        "variants": [
            {
                "label": "1 litro",
                "presentation": "1 litro",
                "image": "11-keratina-japonesa.jpg",
                "price": "$2,300"
            },
            {
                "label": "500 ml",
                "presentation": "500 ml",
                "image": "11-keratina-japonesa.jpg",
                "price": "$1,500"
            }
        ]
    },
    {
        "id": 12,
        "name": "Keratina Brasileña",
        "slug": "keratina-brasilena",
        "category": "progresivos",
        "categoryLabel": "Alisado progresivo",
        "presentation": "1 L / 500 ml",
        "image": "12-keratina-brasilena.jpg",
        "description": "Keratina para disminuir el frizz y mantener un acabado suave en cabello procesado.",
        "prices": [
            {
                "label": "1 litro",
                "value": "$2,500"
            },
            {
                "label": "500 ml",
                "value": "$1,500"
            }
        ],
        "benefits": [
            "Alisado indicado de 80 a 90%",
            "Disminuye el frizz",
            "Ayuda a mantener el pH equilibrado",
            "Lavado inmediato",
            "No contiene formol, según la información proporcionada"
        ],
        "ideal": [
            "Cabello decolorado",
            "Cabello con mechas",
            "Cabello tinturado"
        ],
        "variantLabel": "Elige la presentación",
        "variantMessageLabel": "presentación",
        "variantSummary": "2 presentaciones disponibles",
        "variants": [
            {
                "label": "1 litro",
                "presentation": "1 litro",
                "image": "12-keratina-brasilena.jpg",
                "price": "$2,500"
            },
            {
                "label": "500 ml",
                "presentation": "500 ml",
                "image": "12-keratina-brasilena.jpg",
                "price": "$1,500"
            }
        ]
    },
    {
        "id": 13,
        "name": "Keratina Marroquí Ultra",
        "slug": "keratina-marroqui-ultra",
        "category": "progresivos",
        "categoryLabel": "Alisado progresivo",
        "presentation": "1 L / 500 ml",
        "image": "14-keratina-marroqui.jpg",
        "description": "Keratina de alto desempeño para cabello ondulado o rizado resistente.",
        "prices": [
            {
                "label": "1 litro",
                "value": "$2,300"
            },
            {
                "label": "500 ml",
                "value": "$1,500"
            }
        ],
        "benefits": [
            "Alisado indicado de 95 a 98%",
            "Reduce el frizz",
            "Aporta brillo intenso",
            "Hidrata",
            "Lavado inmediato"
        ],
        "ideal": [
            "Cabello ondulado resistente",
            "Cabello rizado resistente"
        ],
        "note": "Duración aproximada indicada de 5 a 6 meses.",
        "badge": "Premium",
        "variantLabel": "Elige la presentación",
        "variantMessageLabel": "presentación",
        "variantSummary": "2 presentaciones disponibles",
        "variants": [
            {
                "label": "1 litro",
                "presentation": "1 litro · Ultra",
                "image": "14-keratina-marroqui.jpg",
                "price": "$2,300",
                "displayName": "Keratina Marroquí Ultra"
            },
            {
                "label": "500 ml",
                "presentation": "500 ml",
                "image": "14-keratina-marroqui-500.jpg",
                "price": "$1,500",
                "displayName": "Keratina Marroquí"
            }
        ]
    },
    {
        "id": 19,
        "name": "Nanoplastia Molecular",
        "slug": "nanoplastia-molecular",
        "category": "progresivos",
        "categoryLabel": "Alisado progresivo",
        "presentation": "500 ml",
        "image": "18-nanoplastia-molecular.jpg",
        "description": "Keratina de nanoplastia molecular orientada a alisar progresivamente y mejorar la suavidad, el brillo y la apariencia del cabello.",
        "prices": [
            {
                "label": "Precio",
                "value": "$580"
            }
        ],
        "benefits": [
            "Alisado progresivo",
            "Ayuda a reducir el frizz",
            "Aporta brillo intenso",
            "Mejora la suavidad del cabello",
            "Ayuda a renovar la apariencia de la fibra capilar"
        ],
        "ideal": [
            "Cabello que busca alisado progresivo",
            "Cabello con frizz o falta de brillo"
        ]
    },
    {
        "id": 9,
        "name": "Alisado Permanente + Neutralizante",
        "slug": "alaciado-permanente",
        "category": "permanente",
        "categoryLabel": "Alaciado permanente",
        "presentation": "Kit profesional de 2 pasos",
        "image": "09-alaciado-permanente.jpg",
        "description": "Sistema profesional de 2 pasos que modifica la estructura del cabello para lograr un alaciado permanente.",
        "prices": [
            {
                "label": "Precio",
                "value": "$1,850"
            }
        ],
        "benefits": [
            "Alaciado permanente",
            "Acabado lacio",
            "Aporta brillo",
            "Aporta suavidad"
        ],
        "ideal": [
            "Cabello virgen",
            "Cabello resistente"
        ],
        "note": "No recomendado para cabello decolorado o con procesos químicos previos. Requiere aplicación profesional."
    },
    {
        "id": 14,
        "name": "Encerado Capilar",
        "slug": "encerado-capilar",
        "category": "reparadores",
        "categoryLabel": "Reparadores",
        "presentation": "1 L / 500 ml",
        "image": "06-encerado-capilar.jpg",
        "description": "Tratamiento nutritivo para cabello seco, maltratado o procesado químicamente.",
        "prices": [
            {
                "label": "1 litro",
                "value": "$1,500"
            },
            {
                "label": "500 ml",
                "value": "$1,000"
            }
        ],
        "benefits": [
            "Hidrata profundamente",
            "Ayuda a reponer lípidos",
            "Nutre el cabello",
            "Devuelve brillo",
            "Mejora la suavidad"
        ],
        "ideal": [
            "Cabello seco",
            "Cabello maltratado",
            "Cabello con procesos químicos"
        ],
        "note": "Este producto no alisa.",
        "variantLabel": "Elige la presentación",
        "variantMessageLabel": "presentación",
        "variantSummary": "2 presentaciones disponibles",
        "variants": [
            {
                "label": "1 litro",
                "presentation": "1 litro",
                "image": "06-encerado-capilar.jpg",
                "price": "$1,500"
            },
            {
                "label": "500 ml",
                "presentation": "500 ml",
                "image": "06-encerado-capilar.jpg",
                "price": "$1,000"
            }
        ]
    },
    {
        "id": 16,
        "name": "Cirugía Capilar",
        "slug": "cirugia-capilar",
        "category": "reparadores",
        "categoryLabel": "Reparadores",
        "presentation": "1 L / 500 ml",
        "image": "17-cirugia-capilar.jpg",
        "description": "Tratamiento de reparación e hidratación profunda para cabello dañado o procesado.",
        "prices": [
            {
                "label": "1 litro",
                "value": "$1,500"
            },
            {
                "label": "500 ml",
                "value": "$1,000"
            }
        ],
        "benefits": [
            "Ayuda a reparar la fibra capilar",
            "Hidrata profundamente",
            "Devuelve elasticidad",
            "Fortalece el cabello",
            "Reduce el frizz"
        ],
        "ideal": [
            "Cabello dañado",
            "Cabello procesado químicamente",
            "Todo tipo de cabello"
        ],
        "variantLabel": "Elige la presentación",
        "variantMessageLabel": "presentación",
        "variantSummary": "2 presentaciones disponibles",
        "variants": [
            {
                "label": "1 litro",
                "presentation": "1 litro",
                "image": "17-cirugia-capilar.jpg",
                "price": "$1,500"
            },
            {
                "label": "500 ml",
                "presentation": "500 ml",
                "image": "17-cirugia-capilar.jpg",
                "price": "$1,000"
            }
        ]
    },
    {
        "id": 17,
        "name": "Botox Curly",
        "slug": "botox-curly",
        "category": "reparadores",
        "categoryLabel": "Reparadores",
        "presentation": "1 L / 500 ml",
        "image": "16-botox-curly.jpg",
        "description": "Tratamiento reparador e hidratante para conservar y definir el patrón natural del rizo.",
        "prices": [
            {
                "label": "1 litro",
                "value": "$2,200"
            },
            {
                "label": "500 ml",
                "value": "$1,500"
            }
        ],
        "benefits": [
            "Ayuda a reparar el cabello rizado",
            "Hidrata profundamente",
            "Define los rizos",
            "Controla el frizz",
            "Aporta brillo y elasticidad",
            "Fortalece la fibra capilar"
        ],
        "ideal": [
            "Rizos tipo 3, 3B y 3C",
            "Cabello afro"
        ],
        "note": "No alisa; conserva el patrón natural del rizo.",
        "variantLabel": "Elige la presentación",
        "variantMessageLabel": "presentación",
        "variantSummary": "2 presentaciones disponibles",
        "variants": [
            {
                "label": "1 litro",
                "presentation": "1 litro",
                "image": "16-botox-curly.jpg",
                "price": "$2,200"
            },
            {
                "label": "500 ml",
                "presentation": "500 ml",
                "image": "16-botox-curly.jpg",
                "price": "$1,500"
            }
        ]
    },
    {
        "id": 21,
        "name": "Bruma Molecular",
        "slug": "bruma-molecular",
        "category": "complementos",
        "categoryLabel": "Complementos",
        "presentation": "1 litro",
        "image": "21-bruma-molecular.jpg",
        "description": "Tratamiento de preparación y reparación capilar que repone proteínas, fortalece la fibra y aporta brillo instantáneo.",
        "prices": [
            {
                "label": "1 litro",
                "value": "$800"
            }
        ],
        "benefits": [
            "Prepara el cabello antes de procesos de reconstrucción capilar",
            "Realiza reposición de proteínas",
            "Fortalece la fibra capilar desde el interior",
            "Aporta brillo instantáneo",
            "Ayuda a dejar el cabello más suave y sano"
        ],
        "ideal": [
            "Cabello que necesita reparación y fortalecimiento",
            "Preparación previa a procesos de reconstrucción capilar"
        ],
        "badge": "Nuevo"
    },
    {
        "id": 18,
        "name": "Shampoo Limpieza Profunda",
        "slug": "shampoo-limpieza-profunda",
        "category": "complementos",
        "categoryLabel": "Complementos",
        "presentation": "1 litro",
        "image": "15-shampoo-limpieza.jpg",
        "description": "Shampoo preparador para retirar residuos antes de tratamientos profesionales.",
        "prices": [
            {
                "label": "Precio",
                "value": "$280"
            }
        ],
        "benefits": [
            "Elimina residuos de productos",
            "Ayuda a retirar aceites, siliconas e impurezas",
            "Abre ligeramente la cutícula",
            "Prepara para alisados y reconstrucciones",
            "Mejora la penetración de tratamientos"
        ],
        "ideal": [
            "Preparación previa a procesos profesionales"
        ]
    },
    {
        "id": 15,
        "name": "Mascarilla Cierre Técnico",
        "slug": "mascarilla-cierre-tecnico",
        "category": "complementos",
        "categoryLabel": "Complementos",
        "presentation": "1 litro · pH 4.5",
        "image": "13-mascarilla-cierre-actualizada.jpg",
        "description": "Mascarilla ácida de cierre técnico formulada para equilibrar y sellar la fibra capilar después de procesos químicos.",
        "prices": [
            {
                "label": "Precio",
                "value": "$550"
            }
        ],
        "benefits": [
            "Sella y cierra la cutícula",
            "Ayuda a restablecer el pH natural del cabello",
            "Aporta hidratación y suavidad",
            "Reduce el frizz y mejora el brillo",
            "Protege y prolonga los resultados de los tratamientos"
        ],
        "ideal": [
            "Después de alisados, decoloraciones o tintes",
            "Después de procesos de reconstrucción capilar",
            "Mantenimiento de tratamientos químicos"
        ],
        "note": "pH ácido 4.5. Ingredientes destacados: ácido hialurónico, ácido láctico, aceite de macadamia y proteína de trigo."
    },
    {
        "id": 26,
        "name": "Removedor para Hiperqueratosis Plantar",
        "slug": "removedor-hiperqueratosis-plantar",
        "category": "complementos",
        "categoryLabel": "Complementos",
        "presentation": "1 litro / medio litro",
        "image": "23-removedor-callos.png",
        "description": "Producto para pies orientado a ayudar a retirar callos e hiperqueratosis plantar de uso profesional.",
        "prices": [
            {
                "label": "Litro",
                "value": "$550"
            },
            {
                "label": "Medio litro",
                "value": "$280"
            }
        ],
        "benefits": [
            "Ayuda a retirar callos",
            "Uso profesional para pies",
            "Solución libre de fenol",
            "Ideal para hiperqueratosis plantar",
            "Disponible en dos presentaciones"
        ],
        "ideal": [
            "Pedicure profesional",
            "Tratamiento de callosidades"
        ],
        "variantLabel": "Elige la presentación",
        "variantMessageLabel": "presentación",
        "variantSummary": "2 presentaciones disponibles",
        "variants": [
            {
                "label": "1 litro",
                "presentation": "1 litro / 1000 ml",
                "image": "23-removedor-callos.png",
                "price": "$550"
            },
            {
                "label": "Medio litro",
                "presentation": "500 ml",
                "image": "23-removedor-callos.png",
                "price": "$280"
            }
        ]
    },
    {
        "id": 27,
        "name": "Pulverizador + Bruma Molecular",
        "slug": "pulverizador-bruma-molecular",
        "category": "herramientas",
        "categoryLabel": "Herramientas",
        "presentation": "Bruma 1 litro + pulverizador",
        "image": "21-bruma-molecular-pulverizador.png",
        "description": "Combo de bruma molecular con pulverizador para aplicación práctica y profesional.",
        "prices": [
            {
                "label": "Precio",
                "value": "$1,100"
            }
        ],
        "benefits": [
            "Incluye bruma molecular de 1 litro",
            "Incluye pulverizador",
            "Aplicación más práctica y uniforme",
            "Ideal para salón",
            "Apoya la preparación y reparación capilar"
        ],
        "ideal": [
            "Uso profesional",
            "Salones de belleza"
        ],
        "badge": "Herramienta"
    },
    {
        "id": 20,
        "name": "Plancha Moonstyle",
        "slug": "plancha-moonstyle",
        "category": "herramientas",
        "categoryLabel": "Herramientas",
        "presentation": "Placas de titanio negro · 1.25 pulgadas",
        "image": "19-plancha-moonstyle.jpg",
        "description": "Plancha profesional con placas de titanio negro para un alisado uniforme, brillante y protegido.",
        "prices": [
            {
                "label": "Precio",
                "value": "$2,500"
            }
        ],
        "benefits": [
            "Nano titanio negro con mayor resistencia a la corrosión y mejor sellado del alisado",
            "Placas flotantes que se adaptan al mechón para un alisado uniforme sin tirones",
            "Acabado brillante con deslizamiento suave",
            "Calentamiento rápido, lista para usar en segundos",
            "Voltaje universal 100–240 V, 50/60 Hz",
            "Protección contra sobrecalentamiento"
        ],
        "ideal": [
            "Estilistas",
            "Uso profesional",
            "Cabello que busca alisado perfecto y protegido"
        ],
        "note": "Grado quirúrgico, diseño ergonómico de 1.25 pulgadas y calidad profesional diseñada para durar.",
        "badge": "Herramienta"
    }
];

const state = { search: "", category: "todos" };

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
    modalVariantSection: document.getElementById("modalVariantSection"),
    modalVariantLabel: document.getElementById("modalVariantLabel"),
    modalVariants: document.getElementById("modalVariants"),
    menu: document.getElementById("menu"),
    menuBtn: document.getElementById("menuBtn"),
    header: document.getElementById("header"),
    backToTop: document.getElementById("backToTop")
};

function normalizeText(value) {
    return (value || "")
        .toString()
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "")
        .toLowerCase()
        .trim();
}

function whatsappUrl(message) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function setGlobalWhatsappLinks() {
    const generalMessage = "Hola Luxury Hair, me gustaría recibir información sobre sus productos.";
    const wholesaleMessage = "Hola Luxury Hair, me interesa conocer los precios de mayoreo y armar un pedido.";
    document.querySelectorAll("[data-whatsapp-general]").forEach(link => link.href = whatsappUrl(generalMessage));
    document.querySelectorAll("[data-whatsapp-wholesale]").forEach(link => link.href = whatsappUrl(wholesaleMessage));
}

function productWhatsappMessage(product, variant = null) {
    const option = variant ? `, ${product.variantMessageLabel || "opción"}: ${variant.label}` : "";
    const presentation = variant?.presentation || product.presentation;
    const displayName = variant?.displayName || product.name;
    return `Hola Luxury Hair, me interesa ${displayName}${option} (${presentation}). ¿Me puedes dar más información y confirmar disponibilidad?`;
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
                <img src="${product.image}" alt="${product.name}" loading="lazy" width="1200" height="1200" onerror="this.onerror=null;this.src='${FALLBACK_IMAGE}'">
            </div>
            <div class="product-content">
                <span class="product-category">${product.categoryLabel}</span>
                <h3>${product.name}</h3>
                <p class="product-presentation">${product.presentation}</p>
                <p class="product-description">${product.description}</p>
                ${variantSummaryTemplate(product)}
                <div class="price-list">${priceLinesTemplate(product.prices)}</div>
                <div class="product-actions">
                    <button class="info-button" type="button" data-open-product="${product.id}">Ver información</button>
                    ${hasVariants ? `
                        <button class="buy-button" type="button" data-open-product="${product.id}">Elegir opción</button>
                    ` : `
                        <a class="buy-button" href="${whatsappUrl(productWhatsappMessage(product))}" target="_blank" rel="noopener noreferrer">Comprar</a>
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
            ...(product.benefits || []),
            ...(product.ideal || []),
            ...(product.note ? [product.note] : []),
            ...variantsText
        ].join(" "));
        return matchesCategory && searchableText.includes(search);
    });
}

let revealObserver;
function observeRevealElements() {
    if (!("IntersectionObserver" in window)) {
        document.querySelectorAll(".reveal").forEach(el => el.classList.add("visible"));
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
        }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    }
    document.querySelectorAll(".reveal:not(.visible)").forEach(el => revealObserver.observe(el));
}

function renderProducts() {
    const filteredProducts = getFilteredProducts();
    elements.grid.innerHTML = filteredProducts.map(productCardTemplate).join("");
    elements.counter.textContent = `${filteredProducts.length} ${filteredProducts.length === 1 ? "producto" : "productos"}`;
    elements.emptyState.hidden = filteredProducts.length > 0;
    document.querySelectorAll("[data-open-product]").forEach(button => {
        button.addEventListener("click", () => openProductModal(Number(button.dataset.openProduct)));
    });
    observeRevealElements();
}

function setActiveFilter(category) {
    document.querySelectorAll(".filter-btn").forEach(button => {
        button.classList.toggle("active", button.dataset.category === category);
    });
}

function modalPricesFor(product, variant) {
    if (variant?.price) return [{ label: variant.presentation || variant.label, value: variant.price }];
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
    elements.modalVariants.querySelectorAll(".variant-option").forEach((button, buttonIndex) => {
        const active = buttonIndex === index;
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));
    });
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
        <button class="variant-option ${index === 0 ? "active" : ""}" type="button" data-variant-index="${index}" aria-pressed="${index === 0 ? "true" : "false"}">
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
    elements.modalBenefits.innerHTML = (product.benefits || []).map(item => `<li>${item}</li>`).join("");
    if (product.ideal?.length) {
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
    requestAnimationFrame(() => elements.modal.querySelector(".modal-close").focus());
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
elements.menu.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMobileMenu));
document.querySelectorAll("[data-close-modal]").forEach(el => el.addEventListener("click", closeProductModal));
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

elements.backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
window.addEventListener("scroll", () => {
    const isScrolled = window.scrollY > 18;
    elements.header.classList.toggle("scrolled", isScrolled);
    elements.backToTop.classList.toggle("visible", window.scrollY > 650);
}, { passive: true });
window.addEventListener("resize", () => { if (window.innerWidth > 980) closeMobileMenu(); });
document.getElementById("currentYear").textContent = new Date().getFullYear();
setGlobalWhatsappLinks();
renderProducts();
observeRevealElements();
