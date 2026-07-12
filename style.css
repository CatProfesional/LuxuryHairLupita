:root {
    --black: #111111;
    --black-soft: #1b1b1b;
    --gold: #c9a54b;
    --gold-dark: #a88431;
    --cream: #f8f5ef;
    --cream-deep: #eee7da;
    --white: #ffffff;
    --text: #202020;
    --muted: #6c6a66;
    --border: rgba(17, 17, 17, 0.1);
    --shadow: 0 24px 70px rgba(17, 17, 17, 0.1);
    --radius-lg: 28px;
    --radius-md: 18px;
    --container: min(1200px, calc(100% - 40px));
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: smooth;
    scroll-padding-top: 92px;
}

body {
    min-height: 100vh;
    overflow-x: hidden;
    background: var(--white);
    color: var(--text);
    font-family: "Poppins", sans-serif;
    line-height: 1.65;
}

body.modal-open {
    overflow: hidden;
}

button,
input,
a {
    font: inherit;
}

button,
a {
    -webkit-tap-highlight-color: transparent;
}

img {
    display: block;
    max-width: 100%;
}

a {
    color: inherit;
}

.container {
    width: var(--container);
    margin-inline: auto;
}

.skip-link {
    position: fixed;
    left: 16px;
    top: -60px;
    z-index: 99999;
    padding: 12px 18px;
    border-radius: 12px;
    background: var(--black);
    color: var(--white);
    text-decoration: none;
    transition: top 0.2s ease;
}

.skip-link:focus {
    top: 16px;
}

.eyebrow {
    display: inline-block;
    margin-bottom: 14px;
    color: var(--gold-dark);
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
}

.btn {
    display: inline-flex;
    min-height: 50px;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 13px 24px;
    border: 1px solid transparent;
    border-radius: 999px;
    cursor: pointer;
    font-weight: 600;
    text-decoration: none;
    transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease, color 0.25s ease;
}

.btn:hover {
    transform: translateY(-2px);
}

.btn-dark {
    background: var(--black);
    color: var(--white);
    box-shadow: 0 16px 30px rgba(17, 17, 17, 0.18);
}

.btn-dark:hover {
    background: var(--gold);
    color: var(--black);
}

.btn-light {
    border-color: var(--border);
    background: rgba(255, 255, 255, 0.8);
    color: var(--black);
}

.btn-light:hover {
    background: var(--white);
    box-shadow: 0 14px 30px rgba(17, 17, 17, 0.08);
}

.btn-gold {
    background: var(--gold);
    color: var(--black);
    box-shadow: 0 16px 32px rgba(201, 165, 75, 0.25);
}

.btn-gold:hover {
    background: #d6b75e;
}

/* Header */

.site-header {
    position: fixed;
    inset: 0 0 auto;
    z-index: 1000;
    border-bottom: 1px solid transparent;
    background: rgba(255, 255, 255, 0.82);
    backdrop-filter: blur(18px);
    transition: box-shadow 0.25s ease, border-color 0.25s ease, background 0.25s ease;
}

.site-header.scrolled {
    border-color: var(--border);
    background: rgba(255, 255, 255, 0.96);
    box-shadow: 0 12px 35px rgba(17, 17, 17, 0.07);
}

.header-inner {
    display: grid;
    min-height: 82px;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 28px;
}

.logo {
    font-family: "Playfair Display", serif;
    font-size: clamp(1.55rem, 2vw, 2rem);
    font-weight: 700;
    line-height: 1;
    text-decoration: none;
    white-space: nowrap;
}

.logo span {
    color: var(--gold-dark);
    font-style: italic;
}

.main-nav {
    display: flex;
    justify-content: center;
    gap: clamp(18px, 2.4vw, 34px);
}

.main-nav a,
.footer-links a {
    position: relative;
    color: var(--text);
    font-size: 0.9rem;
    font-weight: 500;
    text-decoration: none;
}

.main-nav a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 0;
    height: 2px;
    background: var(--gold);
    transition: width 0.25s ease;
}

.main-nav a:hover::after,
.main-nav a:focus-visible::after {
    width: 100%;
}

.header-whatsapp {
    padding: 10px 18px;
    border: 1px solid var(--black);
    border-radius: 999px;
    color: var(--black);
    font-size: 0.86rem;
    font-weight: 600;
    text-decoration: none;
    transition: background 0.25s ease, color 0.25s ease;
}

.header-whatsapp:hover {
    background: var(--black);
    color: var(--white);
}

.menu-btn {
    display: none;
    width: 46px;
    height: 46px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
    border: 0;
    border-radius: 50%;
    background: var(--black);
    cursor: pointer;
}

.menu-btn span {
    width: 19px;
    height: 2px;
    border-radius: 2px;
    background: var(--white);
    transition: transform 0.25s ease, opacity 0.25s ease;
}

.menu-btn.open span:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
}

.menu-btn.open span:nth-child(2) {
    opacity: 0;
}

.menu-btn.open span:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
}

/* Hero */

.hero {
    position: relative;
    display: flex;
    min-height: 100svh;
    align-items: center;
    overflow: hidden;
    padding: 138px 0 78px;
    background:
        linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(248, 245, 239, 0.98));
}

.hero-grid {
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-columns: minmax(0, 1.15fr) minmax(320px, 0.85fr);
    align-items: center;
    gap: clamp(50px, 8vw, 110px);
}

.hero-copy h1 {
    max-width: 760px;
    margin-bottom: 24px;
    font-family: "Playfair Display", serif;
    font-size: clamp(3.1rem, 7vw, 6.6rem);
    font-weight: 600;
    letter-spacing: -0.04em;
    line-height: 0.98;
}

.hero-copy > p {
    max-width: 680px;
    margin-bottom: 34px;
    color: var(--muted);
    font-size: clamp(1rem, 1.8vw, 1.2rem);
}

.hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
}

.hero-trust {
    display: flex;
    flex-wrap: wrap;
    gap: 12px 22px;
    margin-top: 38px;
    color: #56534e;
    font-size: 0.82rem;
    font-weight: 500;
}

.hero-trust span {
    position: relative;
    padding-left: 17px;
}

.hero-trust span::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.62em;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--gold);
}

.hero-visual {
    display: flex;
    min-height: 520px;
    align-items: center;
    justify-content: center;
}

.hero-card {
    position: relative;
    width: min(390px, 90%);
    aspect-ratio: 0.77;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    overflow: hidden;
    padding: 42px;
    border: 1px solid rgba(255, 255, 255, 0.55);
    border-radius: 42px;
    background:
        linear-gradient(145deg, rgba(17, 17, 17, 0.92), rgba(40, 35, 27, 0.88)),
        var(--black);
    color: var(--white);
    box-shadow: 0 40px 100px rgba(17, 17, 17, 0.22);
    transform: rotate(3deg);
}

.hero-card::before {
    content: "";
    position: absolute;
    top: -70px;
    right: -80px;
    width: 250px;
    height: 250px;
    border: 1px solid rgba(201, 165, 75, 0.45);
    border-radius: 50%;
}

.hero-card::after {
    content: "LH";
    position: absolute;
    top: 42px;
    left: 42px;
    color: rgba(255, 255, 255, 0.08);
    font-family: "Playfair Display", serif;
    font-size: 7rem;
    font-weight: 700;
}

.hero-card-label {
    position: relative;
    z-index: 1;
    color: var(--gold);
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
}

.hero-card strong {
    position: relative;
    z-index: 1;
    display: block;
    margin-top: 14px;
    font-family: "Playfair Display", serif;
    font-size: clamp(1.7rem, 3vw, 2.7rem);
    line-height: 1.08;
}

.hero-card-line {
    position: relative;
    z-index: 1;
    width: 56px;
    height: 2px;
    margin: 24px 0 14px;
    background: var(--gold);
}

.hero-card small {
    position: relative;
    z-index: 1;
    color: rgba(255, 255, 255, 0.65);
}

.hero-glow {
    position: absolute;
    border-radius: 50%;
    filter: blur(20px);
    pointer-events: none;
}

.hero-glow-one {
    top: -180px;
    right: -130px;
    width: 520px;
    height: 520px;
    background: rgba(201, 165, 75, 0.16);
}

.hero-glow-two {
    bottom: -250px;
    left: -160px;
    width: 600px;
    height: 600px;
    background: rgba(17, 17, 17, 0.05);
}

/* Stats */

.stats-section {
    position: relative;
    z-index: 3;
    margin-top: -34px;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    overflow: hidden;
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: rgba(255, 255, 255, 0.96);
    box-shadow: var(--shadow);
}

.stats-grid article {
    display: flex;
    min-height: 145px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 28px 20px;
    text-align: center;
}

.stats-grid article + article {
    border-left: 1px solid var(--border);
}

.stats-grid strong {
    color: var(--gold-dark);
    font-family: "Playfair Display", serif;
    font-size: 2.15rem;
}

.stats-grid span {
    margin-top: 4px;
    color: var(--muted);
    font-size: 0.86rem;
}

/* Shared sections */

.catalog-section,
.about-section,
.faq-section {
    padding: 120px 0;
}

.section-heading {
    max-width: 760px;
    margin: 0 auto 48px;
    text-align: center;
}

.section-heading h2,
.wholesale-copy h2,
.about-copy h2,
.contact-card h2 {
    font-family: "Playfair Display", serif;
    font-size: clamp(2.3rem, 5vw, 4.2rem);
    font-weight: 600;
    letter-spacing: -0.03em;
    line-height: 1.05;
}

.section-heading p,
.wholesale-copy > p,
.about-copy p,
.contact-card p {
    margin-top: 18px;
    color: var(--muted);
}

.catalog-section {
    background: var(--white);
}

.catalog-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 24px;
}

.search-box {
    display: flex;
    width: min(520px, 100%);
    min-height: 54px;
    align-items: center;
    gap: 12px;
    padding: 0 20px;
    border: 1px solid var(--border);
    border-radius: 999px;
    background: var(--cream);
    transition: border-color 0.25s ease, box-shadow 0.25s ease;
}

.search-box:focus-within {
    border-color: rgba(201, 165, 75, 0.8);
    box-shadow: 0 0 0 4px rgba(201, 165, 75, 0.12);
}

.search-box span {
    color: var(--gold-dark);
    font-size: 1.5rem;
}

.search-box input {
    width: 100%;
    border: 0;
    outline: 0;
    background: transparent;
    color: var(--text);
}

.product-counter {
    color: var(--muted);
    font-size: 0.9rem;
    white-space: nowrap;
}

.filter-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 42px;
}

.filter-btn {
    padding: 10px 17px;
    border: 1px solid var(--border);
    border-radius: 999px;
    background: var(--white);
    color: var(--text);
    cursor: pointer;
    font-size: 0.85rem;
    font-weight: 600;
    transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
}

.filter-btn:hover {
    transform: translateY(-2px);
    border-color: var(--gold);
}

.filter-btn.active {
    border-color: var(--black);
    background: var(--black);
    color: var(--white);
}

.products-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 28px;
}

.product-card {
    position: relative;
    display: flex;
    min-width: 0;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid var(--border);
    border-radius: 24px;
    background: var(--white);
    box-shadow: 0 12px 40px rgba(17, 17, 17, 0.06);
    transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
}

.product-card:hover {
    transform: translateY(-8px);
    border-color: rgba(201, 165, 75, 0.5);
    box-shadow: 0 25px 65px rgba(17, 17, 17, 0.12);
}

.product-image {
    position: relative;
    overflow: hidden;
    aspect-ratio: 1.08;
    background:
        radial-gradient(circle at 30% 25%, rgba(255, 255, 255, 0.95), transparent 28%),
        linear-gradient(145deg, var(--cream), var(--cream-deep));
}

.product-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.45s ease;
}

.product-card:hover .product-image img {
    transform: scale(1.045);
}

.product-badge {
    position: absolute;
    top: 16px;
    left: 16px;
    z-index: 2;
    padding: 7px 12px;
    border-radius: 999px;
    background: var(--black);
    color: var(--white);
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
}

.product-content {
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 24px;
}

.product-category {
    color: var(--gold-dark);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
}

.product-content h3 {
    margin-top: 8px;
    font-family: "Playfair Display", serif;
    font-size: 1.55rem;
    line-height: 1.18;
}

.product-presentation {
    margin-top: 6px;
    color: var(--muted);
    font-size: 0.84rem;
}

.product-description {
    margin-top: 14px;
    color: var(--muted);
    font-size: 0.9rem;
}

.price-list {
    display: grid;
    gap: 8px;
    margin: 22px 0;
}

.price-line {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 16px;
    padding-bottom: 8px;
    border-bottom: 1px solid var(--border);
    color: var(--muted);
    font-size: 0.82rem;
}

.price-line:last-child {
    border-bottom: 0;
}

.price-line strong {
    color: var(--gold-dark);
    font-size: 0.94rem;
    white-space: nowrap;
}

.product-actions {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-top: auto;
}

.product-actions button,
.product-actions a {
    display: inline-flex;
    min-height: 45px;
    align-items: center;
    justify-content: center;
    padding: 10px 12px;
    border-radius: 12px;
    cursor: pointer;
    font-size: 0.78rem;
    font-weight: 700;
    text-decoration: none;
    transition: transform 0.25s ease, background 0.25s ease, color 0.25s ease;
}

.product-actions button:hover,
.product-actions a:hover {
    transform: translateY(-2px);
}

.info-button {
    border: 1px solid var(--border);
    background: var(--white);
    color: var(--black);
}

.info-button:hover {
    border-color: var(--black);
}

.buy-button {
    border: 1px solid var(--black);
    background: var(--black);
    color: var(--white);
}

.buy-button:hover {
    border-color: var(--gold);
    background: var(--gold);
    color: var(--black);
}

.empty-state {
    padding: 60px 20px;
    border: 1px dashed rgba(17, 17, 17, 0.18);
    border-radius: var(--radius-lg);
    background: var(--cream);
    text-align: center;
}

.empty-state h3 {
    font-family: "Playfair Display", serif;
    font-size: 1.8rem;
}

.empty-state p {
    margin-top: 8px;
    color: var(--muted);
}

/* Wholesale */

.wholesale-section {
    padding: 120px 0;
    background: var(--black);
    color: var(--white);
}

.wholesale-grid {
    display: grid;
    grid-template-columns: 1.05fr 0.95fr;
    align-items: center;
    gap: clamp(40px, 8vw, 100px);
}

.wholesale-copy > p {
    color: rgba(255, 255, 255, 0.68);
}

.check-list {
    display: grid;
    gap: 13px;
    margin: 28px 0 32px;
}

.check-list span {
    position: relative;
    padding-left: 28px;
    color: rgba(255, 255, 255, 0.86);
}

.check-list span::before {
    content: "✓";
    position: absolute;
    left: 0;
    color: var(--gold);
    font-weight: 700;
}

.wholesale-panel {
    padding: clamp(28px, 5vw, 50px);
    border: 1px solid rgba(255, 255, 255, 0.13);
    border-radius: var(--radius-lg);
    background: linear-gradient(145deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03));
}

.panel-kicker {
    color: var(--gold);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
}

.wholesale-panel h3 {
    margin-top: 12px;
    font-family: "Playfair Display", serif;
    font-size: clamp(2rem, 4vw, 3rem);
    line-height: 1.08;
}

.wholesale-panel > p {
    margin-top: 18px;
    color: rgba(255, 255, 255, 0.68);
}

.panel-note {
    margin-top: 24px;
    padding: 15px 17px;
    border-left: 3px solid var(--gold);
    background: rgba(255, 255, 255, 0.05);
    color: rgba(255, 255, 255, 0.74);
    font-size: 0.8rem;
}

/* About */

.about-section {
    background: var(--cream);
}

.about-grid {
    display: grid;
    grid-template-columns: 0.8fr 1.2fr;
    align-items: center;
    gap: clamp(50px, 10vw, 130px);
}

.about-visual {
    position: relative;
    display: grid;
    aspect-ratio: 1;
    place-items: center;
}

.about-orbit {
    position: absolute;
    inset: 8%;
    border: 1px solid rgba(201, 165, 75, 0.35);
    border-radius: 50%;
}

.about-orbit::before,
.about-orbit::after {
    content: "";
    position: absolute;
    border-radius: 50%;
}

.about-orbit::before {
    inset: 14%;
    border: 1px solid rgba(17, 17, 17, 0.12);
}

.about-orbit::after {
    top: 8%;
    right: 14%;
    width: 18px;
    height: 18px;
    background: var(--gold);
    box-shadow: -190px 240px 0 -4px var(--black);
}

.about-mark {
    display: grid;
    width: 47%;
    aspect-ratio: 1;
    place-items: center;
    border-radius: 50%;
    background: var(--black);
    color: var(--gold);
    font-family: "Playfair Display", serif;
    font-size: clamp(3rem, 8vw, 6rem);
    font-weight: 700;
    box-shadow: 0 30px 70px rgba(17, 17, 17, 0.22);
}

.about-copy p + p {
    margin-top: 16px;
}

/* FAQ */

.faq-section {
    background: var(--white);
}

.faq-container {
    max-width: 920px;
}

.faq-list {
    border-top: 1px solid var(--border);
}

.faq-item {
    border-bottom: 1px solid var(--border);
}

.faq-question {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 25px 0;
    border: 0;
    background: transparent;
    color: var(--text);
    cursor: pointer;
    text-align: left;
    font-weight: 600;
}

.faq-question span {
    color: var(--gold-dark);
    font-size: 1.6rem;
    font-weight: 300;
    transition: transform 0.25s ease;
}

.faq-question[aria-expanded="true"] span {
    transform: rotate(45deg);
}

.faq-answer {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.3s ease;
}

.faq-answer p {
    min-height: 0;
    overflow: hidden;
    color: var(--muted);
}

.faq-item.open .faq-answer {
    grid-template-rows: 1fr;
}

.faq-item.open .faq-answer p {
    padding-bottom: 25px;
}

/* Contact and footer */

.contact-section {
    padding: 0 0 120px;
    background: var(--white);
}

.contact-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    padding: clamp(32px, 6vw, 70px);
    border-radius: var(--radius-lg);
    background: var(--cream);
}

.contact-card > div {
    max-width: 720px;
}

.site-footer {
    padding: 70px 0 30px;
    background: var(--black);
    color: var(--white);
}

.footer-grid {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 30px;
}

.footer-logo {
    display: inline-block;
    color: var(--white);
}

.footer-grid p {
    margin-top: 13px;
    color: rgba(255, 255, 255, 0.55);
}

.footer-links {
    display: flex;
    flex-wrap: wrap;
    gap: 18px 28px;
}

.footer-links a {
    color: rgba(255, 255, 255, 0.72);
}

.footer-links a:hover {
    color: var(--gold);
}

.footer-bottom {
    display: flex;
    justify-content: space-between;
    gap: 25px;
    margin-top: 50px;
    padding-top: 24px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.48);
    font-size: 0.78rem;
}

/* Modal */

.modal {
    position: fixed;
    inset: 0;
    z-index: 5000;
    display: grid;
    visibility: hidden;
    place-items: center;
    padding: 24px;
    opacity: 0;
    transition: visibility 0.25s ease, opacity 0.25s ease;
}

.modal.open {
    visibility: visible;
    opacity: 1;
}

.modal-backdrop {
    position: absolute;
    inset: 0;
    background: rgba(10, 10, 10, 0.74);
    backdrop-filter: blur(7px);
}

.modal-dialog {
    position: relative;
    z-index: 2;
    display: grid;
    width: min(920px, 100%);
    max-height: min(88vh, 820px);
    grid-template-columns: 0.9fr 1.1fr;
    overflow: auto;
    border-radius: 26px;
    background: var(--white);
    box-shadow: 0 40px 120px rgba(0, 0, 0, 0.35);
    transform: translateY(24px) scale(0.98);
    transition: transform 0.3s ease;
}

.modal.open .modal-dialog {
    transform: translateY(0) scale(1);
}

.modal-close {
    position: absolute;
    top: 14px;
    right: 14px;
    z-index: 5;
    display: grid;
    width: 42px;
    height: 42px;
    place-items: center;
    border: 0;
    border-radius: 50%;
    background: rgba(17, 17, 17, 0.86);
    color: var(--white);
    cursor: pointer;
    font-size: 1.65rem;
    line-height: 1;
}

.modal-image-wrap {
    position: relative;
    min-height: 100%;
    background: linear-gradient(145deg, var(--cream), var(--cream-deep));
}

.modal-image-wrap img {
    width: 100%;
    height: 100%;
    min-height: 560px;
    object-fit: cover;
}

.modal-badge {
    position: absolute;
    top: 18px;
    left: 18px;
    padding: 8px 13px;
    border-radius: 999px;
    background: var(--gold);
    color: var(--black);
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
}

.modal-content {
    padding: clamp(28px, 5vw, 48px);
}

.modal-category {
    color: var(--gold-dark);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
}

.modal-content h2 {
    margin-top: 6px;
    font-family: "Playfair Display", serif;
    font-size: clamp(2rem, 5vw, 3.2rem);
    line-height: 1.05;
}

.modal-presentation {
    margin-top: 7px;
    color: var(--muted);
    font-size: 0.86rem;
}

.modal-content > p:not(.modal-presentation) {
    margin-top: 16px;
    color: var(--muted);
}

.modal-section {
    margin-top: 24px;
}

.modal-section h3 {
    margin-bottom: 10px;
    font-size: 0.86rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
}

.modal-prices {
    display: grid;
    gap: 8px;
}

.modal-price-line {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 9px 0;
    border-bottom: 1px solid var(--border);
    color: var(--muted);
    font-size: 0.84rem;
}

.modal-price-line strong {
    color: var(--gold-dark);
    white-space: nowrap;
}

.modal-content ul {
    display: grid;
    gap: 8px;
    list-style: none;
}

.modal-content li {
    position: relative;
    padding-left: 21px;
    color: var(--muted);
    font-size: 0.86rem;
}

.modal-content li::before {
    content: "✓";
    position: absolute;
    left: 0;
    color: var(--gold-dark);
    font-weight: 700;
}

.modal-note {
    margin-top: 20px;
    padding: 14px 16px;
    border-left: 3px solid var(--gold);
    background: var(--cream);
    color: var(--muted);
    font-size: 0.82rem;
}

.modal-whatsapp {
    width: 100%;
    margin-top: 26px;
}

/* Floating actions */

.floating-whatsapp,
.back-to-top {
    position: fixed;
    right: 22px;
    z-index: 1100;
    display: grid;
    width: 52px;
    height: 52px;
    place-items: center;
    border: 0;
    border-radius: 50%;
    cursor: pointer;
    text-decoration: none;
    box-shadow: 0 16px 35px rgba(17, 17, 17, 0.2);
    transition: transform 0.25s ease, opacity 0.25s ease;
}

.floating-whatsapp {
    bottom: 22px;
    background: #25d366;
    color: var(--white);
    font-size: 0.72rem;
    font-weight: 800;
}

.back-to-top {
    bottom: 84px;
    background: var(--black);
    color: var(--white);
    font-size: 1.2rem;
    opacity: 0;
    pointer-events: none;
}

.back-to-top.visible {
    opacity: 1;
    pointer-events: auto;
}

.floating-whatsapp:hover,
.back-to-top:hover {
    transform: translateY(-3px);
}

.reveal {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.7s ease, transform 0.7s ease;
}

.reveal.visible {
    opacity: 1;
    transform: translateY(0);
}

.noscript-message {
    position: fixed;
    inset: auto 20px 20px;
    z-index: 9999;
    padding: 16px;
    border-radius: 12px;
    background: #b42318;
    color: var(--white);
    text-align: center;
}

/* Responsive */

@media (max-width: 980px) {
    .header-inner {
        grid-template-columns: auto 1fr auto;
    }

    .header-whatsapp {
        display: none;
    }

    .menu-btn {
        display: flex;
        justify-self: end;
    }

    .main-nav {
        position: fixed;
        top: 82px;
        left: 20px;
        right: 20px;
        display: grid;
        visibility: hidden;
        gap: 0;
        overflow: hidden;
        padding: 10px;
        border: 1px solid var(--border);
        border-radius: 20px;
        background: rgba(255, 255, 255, 0.98);
        box-shadow: var(--shadow);
        opacity: 0;
        transform: translateY(-12px);
        transition: visibility 0.25s ease, opacity 0.25s ease, transform 0.25s ease;
    }

    .main-nav.open {
        visibility: visible;
        opacity: 1;
        transform: translateY(0);
    }

    .main-nav a {
        padding: 13px 14px;
        border-radius: 12px;
    }

    .main-nav a:hover {
        background: var(--cream);
    }

    .main-nav a::after {
        display: none;
    }

    .hero-grid,
    .wholesale-grid,
    .about-grid {
        grid-template-columns: 1fr;
    }

    .hero-copy {
        text-align: center;
    }

    .hero-copy > p {
        margin-inline: auto;
    }

    .hero-actions,
    .hero-trust {
        justify-content: center;
    }

    .hero-visual {
        min-height: 430px;
    }

    .hero-card {
        width: min(360px, 82%);
    }

    .products-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .about-visual {
        width: min(520px, 100%);
        margin-inline: auto;
    }

    .about-copy {
        text-align: center;
    }

    .modal-dialog {
        grid-template-columns: 1fr;
    }

    .modal-image-wrap img {
        min-height: 330px;
        max-height: 380px;
    }
}

@media (max-width: 680px) {
    :root {
        --container: min(100% - 28px, 1200px);
    }

    html {
        scroll-padding-top: 78px;
    }

    .header-inner {
        min-height: 72px;
    }

    .main-nav {
        top: 72px;
        left: 14px;
        right: 14px;
    }

    .hero {
        min-height: auto;
        padding: 122px 0 68px;
    }

    .hero-copy h1 {
        font-size: clamp(2.8rem, 14vw, 4.5rem);
    }

    .hero-actions {
        display: grid;
    }

    .hero-actions .btn {
        width: 100%;
    }

    .hero-trust {
        display: grid;
        justify-content: start;
        width: fit-content;
        margin-inline: auto;
        text-align: left;
    }

    .hero-visual {
        min-height: 360px;
    }

    .hero-card {
        width: min(310px, 88%);
        padding: 30px;
        border-radius: 32px;
    }

    .stats-section {
        margin-top: 0;
        padding: 0 0 30px;
        background: var(--cream);
    }

    .stats-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .stats-grid article {
        min-height: 120px;
    }

    .stats-grid article + article {
        border-left: 0;
    }

    .stats-grid article:nth-child(even) {
        border-left: 1px solid var(--border);
    }

    .stats-grid article:nth-child(n + 3) {
        border-top: 1px solid var(--border);
    }

    .catalog-section,
    .about-section,
    .faq-section,
    .wholesale-section {
        padding: 88px 0;
    }

    .section-heading {
        margin-bottom: 36px;
    }

    .catalog-toolbar {
        align-items: stretch;
        flex-direction: column;
    }

    .product-counter {
        text-align: center;
    }

    .filter-buttons {
        flex-wrap: nowrap;
        overflow-x: auto;
        padding-bottom: 8px;
        scrollbar-width: thin;
    }

    .filter-btn {
        flex: 0 0 auto;
    }

    .products-grid {
        grid-template-columns: 1fr;
    }

    .product-image {
        aspect-ratio: 1.2;
    }

    .contact-section {
        padding-bottom: 88px;
    }

    .contact-card {
        align-items: stretch;
        flex-direction: column;
        text-align: center;
    }

    .footer-grid,
    .footer-bottom {
        align-items: flex-start;
        flex-direction: column;
    }

    .footer-links {
        flex-direction: column;
        gap: 10px;
    }

    .modal {
        padding: 12px;
    }

    .modal-dialog {
        max-height: 92vh;
        border-radius: 20px;
    }

    .modal-image-wrap img {
        min-height: 250px;
        max-height: 280px;
    }

    .modal-content {
        padding: 25px 20px 28px;
    }

    .floating-whatsapp,
    .back-to-top {
        right: 15px;
    }
}

@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        scroll-behavior: auto !important;
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }

    .reveal {
        opacity: 1;
        transform: none;
    }
}


/* =========================================================
   ACTUALIZACIÓN VISUAL 2026
   ========================================================= */

.brand-link {
    display: inline-flex;
    align-items: center;
    text-decoration: none;
}

.brand-link img {
    width: 132px;
    height: 66px;
    object-fit: contain;
}

.footer-logo img {
    width: 168px;
    height: auto;
}

.hero-card::after {
    content: "";
}

.hero-card-logo {
    position: absolute;
    top: 28px;
    left: 50%;
    z-index: 1;
    width: min(210px, 64%);
    max-height: 190px;
    object-fit: contain;
    transform: translateX(-50%);
}

.product-image {
    aspect-ratio: 1 / 1;
    background: #f3e7d7;
}

.product-image img {
    object-fit: contain;
}

.product-variant-summary {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
    margin-top: 16px;
    padding: 11px 13px;
    border: 1px solid rgba(201, 165, 75, 0.35);
    border-radius: 12px;
    background: #fbf7ef;
    color: var(--muted);
    cursor: pointer;
    font-size: 0.78rem;
    text-align: left;
}

.product-variant-summary strong {
    color: var(--gold-dark);
    white-space: nowrap;
}

.buy-button {
    font: inherit;
}

.modal-image-wrap {
    display: grid;
    place-items: center;
    padding: 18px;
}

.modal-image-wrap img {
    min-height: 0;
    max-height: min(78vh, 680px);
    object-fit: contain;
    border-radius: 18px;
}

.variant-options {
    display: flex;
    flex-wrap: wrap;
    gap: 9px;
}

.variant-option {
    min-height: 40px;
    padding: 9px 14px;
    border: 1px solid var(--border);
    border-radius: 999px;
    background: var(--white);
    color: var(--text);
    cursor: pointer;
    font-size: 0.78rem;
    font-weight: 600;
    transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease, color 0.2s ease;
}

.variant-option:hover {
    transform: translateY(-1px);
    border-color: var(--gold);
}

.variant-option.active {
    border-color: var(--black);
    background: var(--black);
    color: var(--white);
}

@media (max-width: 680px) {
    .brand-link img {
        width: 106px;
        height: 56px;
    }

    .product-image {
        aspect-ratio: 1 / 1;
    }

    .modal-image-wrap {
        padding: 10px;
    }

    .modal-image-wrap img {
        min-height: 0;
        max-height: 320px;
    }

    .variant-option {
        flex: 1 1 calc(50% - 9px);
        text-align: center;
    }
}


/* Ajustes para el logo oficial */
.brand-link img {
    width: 190px;
    height: 58px;
    padding: 4px 8px;
    border-radius: 12px;
    background: #ffffff;
}
.footer-logo img {
    width: 220px;
    height: 66px;
    padding: 6px 10px;
}
.hero-card-logo {
    padding: 10px;
    border-radius: 22px;
    background: rgba(255,255,255,0.98);
}
@media (max-width: 680px) {
    .brand-link img { width: 145px; height: 50px; }
}
