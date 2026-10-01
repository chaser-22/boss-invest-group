import './style.css';

const PHONE_PRIMARY = '381668869760';
const PHONE_DISPLAY = '066 88 69 760';
const PHONE_SECONDARY = '065 80 69 760';
const IG = 'https://www.instagram.com/bossinvestgroup/';

const arrow = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6"/></svg>`;

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <div class="noise" aria-hidden="true"></div>
  <header class="nav" data-nav>
    <a class="brand" href="#top" aria-label="Boss Invest Group početna">
      <span class="brand-mark"><i></i><b>B</b></span>
      <span class="brand-type"><strong>BOSS</strong><small>INVEST GROUP</small></span>
    </a>
    <nav class="nav-links" aria-label="Glavna navigacija">
      <a href="#o-nama">O nama</a><a href="#usluge">Usluge</a><a href="#projekti">Projekti</a><a href="#proces">Proces</a><a href="#kontakt">Kontakt</a>
    </nav>
    <a class="nav-cta" href="#kontakt">Zatražite ponudu ${arrow}</a>
    <button class="menu" aria-label="Otvori meni" data-menu><span></span><span></span></button>
  </header>

  <div class="mobile-panel" data-mobile-panel>
    <a href="#o-nama">O nama</a><a href="#usluge">Usluge</a><a href="#projekti">Projekti</a><a href="#proces">Proces</a><a href="#kontakt">Kontakt</a>
    <a class="mobile-call" href="tel:+${PHONE_PRIMARY}">Pozovite ${PHONE_DISPLAY}</a>
  </div>

  <main>
    <section class="hero" id="top">
      <div class="hero-media sprite s1" role="img" aria-label="Boss Invest Group gradilište i silos za mašinski malter"></div>
      <div class="hero-shade"></div>
      <div class="hero-grid"></div>
      <div class="hero-content">
        <p class="eyebrow reveal">BOSS INVEST GROUP · NOVI SAD</p>
        <h1 class="reveal"><span>PRECIZNO</span><span class="accent">MALTERISANJE.</span><span>POUZDAN REZULTAT.</span></h1>
        <p class="hero-copy reveal">Profesionalno mašinsko malterisanje i cementne košuljice. Dogovor koji važi, organizovan rad i rezultat iza kog možemo da stanemo.</p>
        <div class="hero-actions reveal">
          <a class="btn primary" href="#kontakt">Zatražite ponudu ${arrow}</a>
          <a class="btn ghost" href="#projekti">Pogledajte radove</a>
        </div>
      </div>
      <div class="hero-meta"><span>100+ velikih projekata</span><span>Srbija · Inostranstvo</span><span>Mašinsko malterisanje</span></div>
      <div class="scroll">SCROLL <i></i></div>
    </section>

    <section class="stats section-dark">
      <div class="stats-item reveal"><strong>100+</strong><span>završenih velikih projekata</span></div>
      <div class="stats-item reveal"><strong>800.000 m²</strong><span>urađenih projekata</span></div>
      <div class="stats-item reveal"><strong>SRB + INT</strong><span>iskustvo širom Srbije i inostranstva</span></div>
    </section>

    <section class="about section-light" id="o-nama">
      <div class="section-label reveal"><span>01</span> O NAMA</div>
      <div class="about-grid">
        <div class="about-title reveal"><h2>DOGOVOR<br><em>JE DOGOVOR.</em></h2></div>
        <div class="about-copy reveal">
          <p class="lead">Dobar majstor nije samo onaj koji zna da radi. Dobar majstor zna i da poštuje dogovor.</p>
          <p>Boss Invest Group je specijalizovan za mašinsko malterisanje, uz iskustvo na objektima širom Srbije i inostranstva. Nama posao nije završen kada ekipa ode sa gradilišta, već kada iza nas ostane uredno izveden posao.</p>
          <div class="values"><span>Pouzdanost</span><span>Preciznost</span><span>Organizacija</span><span>Odgovornost</span></div>
        </div>
      </div>
      <div class="about-photo reveal"><div class="sprite s2" role="img" aria-label="Završeno mašinsko malterisanje enterijera"></div><div><b>ZAVRŠNA OBRADA</b><span>Čista forma. Ravne površine. Spremno za narednu fazu.</span></div></div>
    </section>

    <section class="services section-dark" id="usluge">
      <div class="section-label reveal"><span>02</span> USLUGE</div>
      <div class="services-head reveal"><h2>ŠTA RADIMO.</h2><p>Tri ključne usluge, jedna ista filozofija: priprema, tačnost i kontrola svakog koraka.</p></div>
      <div class="service-stack">
        <article class="service-card reveal">
          <div class="service-media sprite s3" role="img" aria-label="Mašinsko malterisanje"></div>
          <div class="service-body"><span>01</span><h3>MAŠINSKO<br>MALTERISANJE</h3><p>Brža i ujednačenija obrada velikih površina, uz profesionalnu opremu i ekipu koja zna ritam gradilišta.</p><ul><li>Ravnomerna obrada</li><li>Brži tempo radova</li><li>Kontrolisan kvalitet</li></ul><a href="#kontakt">Zatražite procenu ${arrow}</a></div>
        </article>
        <article class="service-card reverse reveal">
          <div class="service-media sprite s4" role="img" aria-label="Izrada cementne košuljice"></div>
          <div class="service-body"><span>02</span><h3>CEMENTNA<br>KOŠULJICA</h3><p>Priprema i izrada cementne košuljice za stabilnu, ravnu i spremnu podlogu narednih završnih slojeva.</p><ul><li>Precizne visine</li><li>Organizovan rad</li><li>Spremno za završne podove</li></ul><a href="#kontakt">Dogovorite radove ${arrow}</a></div>
        </article>
        <article class="service-card reveal">
          <div class="service-media sprite s5" role="img" aria-label="Gradilište i rasuti građevinski materijali"></div>
          <div class="service-body"><span>03</span><h3>RASUTI<br>MATERIJALI</h3><p>Logistika i materijali za gradilište, uz fokus na pouzdanu isporuku i kontinuitet rada na objektu.</p><ul><li>Gradilišna logistika</li><li>Materijal kada je potreban</li><li>Jednostavnija organizacija</li></ul><a href="#kontakt">Pošaljite upit ${arrow}</a></div>
        </article>
      </div>
    </section>

    <section class="why section-red">
      <div class="why-copy reveal"><p>ZAŠTO BOSS</p><h2>NE ŽELIMO SAMO<br>DA ZAVRŠIMO POSAO.</h2><h3>Želimo da klijent bude zadovoljan rezultatom — i da nas preporuči dalje.</h3></div>
      <div class="why-list reveal"><div><b>01</b><span>DOGOVOR</span><p>Ono što dogovorimo na početku, toga se držimo do kraja.</p></div><div><b>02</b><span>OPREMA</span><p>Profesionalna oprema i proces prilagođen većim i zahtevnijim objektima.</p></div><div><b>03</b><span>EKIPA</span><p>Ljudi sa iskustvom koji znaju da se uklope u dinamiku gradilišta.</p></div></div>
    </section>

    <section class="projects section-light" id="projekti">
      <div class="section-label reveal"><span>03</span> PROJEKTI</div>
      <div class="projects-head reveal"><h2>RADOVI<br><em>GOVORE NAJVIŠE.</em></h2><p>Stvarni kadrovi sa gradilišta — priprema, izvođenje, mašine i završene površine.</p></div>
      <div class="gallery">
        <figure class="wide reveal"><div class="gallery-media sprite s5" role="img" aria-label="Boss Invest Group projekat"></div><figcaption><span>01</span><b>Veliki stambeni objekti</b></figcaption></figure>
        <figure class="tall reveal"><div class="gallery-media sprite s3" role="img" aria-label="Mašinsko malterisanje zida"></div><figcaption><span>02</span><b>Izvođenje na objektu</b></figcaption></figure>
        <figure class="reveal"><div class="gallery-media sprite s3" role="img" aria-label="Detalj mašinskog malterisanja"></div><figcaption><span>03</span><b>Kontrola površine</b></figcaption></figure>
        <figure class="reveal"><div class="gallery-media sprite s1" role="img" aria-label="Materijali na gradilištu"></div><figcaption><span>04</span><b>Organizacija gradilišta</b></figcaption></figure>
        <figure class="wide reveal"><div class="gallery-media sprite s5" role="img" aria-label="Veliki objekat u izgradnji"></div><figcaption><span>05</span><b>Rad na većim projektima</b></figcaption></figure>
        <figure class="reveal"><div class="gallery-media sprite s6" role="img" aria-label="Boss Invest Group ekipa"></div><figcaption><span>06</span><b>Ljudi iza posla</b></figcaption></figure>
      </div>
    </section>

    <section class="process section-dark" id="proces">
      <div class="section-label reveal"><span>04</span> PROCES</div>
      <div class="process-layout"><h2 class="reveal">OD PRVOG POZIVA<br><em>DO ČISTOG REZULTATA.</em></h2><div class="steps">
        <article class="reveal"><span>01</span><h3>Kontakt i procena</h3><p>Pošaljite osnovne informacije o objektu i obimu radova.</p></article>
        <article class="reveal"><span>02</span><h3>Dogovor i priprema</h3><p>Definišemo uslove, termin, pripremu i organizaciju gradilišta.</p></article>
        <article class="reveal"><span>03</span><h3>Izvođenje radova</h3><p>Ekipa i oprema ulaze u posao po dogovorenom planu.</p></article>
        <article class="reveal"><span>04</span><h3>Kontrola i završetak</h3><p>Proveravamo izvedeno i ostavljamo objekat spreman za sledeću fazu.</p></article>
      </div></div>
    </section>

    <section class="contact" id="kontakt">
      <div class="contact-bg sprite s5" role="img" aria-label="Boss Invest Group gradilište"></div>
      <div class="contact-shade"></div>
      <div class="contact-content reveal">
        <p>PLANIRATE MALTERISANJE?</p>
        <h2>URADITE GA KAKO TREBA —<br><em>OD SAMOG POČETKA.</em></h2>
        <div class="contact-actions"><a class="btn primary" href="tel:+${PHONE_PRIMARY}">Pozovite ${PHONE_DISPLAY} ${arrow}</a><a class="btn ghost light" href="https://wa.me/${PHONE_PRIMARY}?text=Pozdrav%20Boss%20Invest%20Group%2C%20želim%20ponudu%20za%20radove." target="_blank" rel="noreferrer">Pošaljite WhatsApp</a></div>
      </div>
      <form class="quote-form reveal" data-form>
        <div class="field"><label for="name">Ime i prezime</label><input id="name" name="name" autocomplete="name" required /></div>
        <div class="field"><label for="phone">Telefon</label><input id="phone" name="phone" autocomplete="tel" required /></div>
        <div class="field"><label for="type">Vrsta projekta</label><select id="type" name="type"><option>Mašinsko malterisanje</option><option>Cementna košuljica</option><option>Rasuti materijali</option><option>Drugo</option></select></div>
        <div class="field"><label for="message">Poruka</label><textarea id="message" name="message" rows="4" placeholder="Lokacija, kvadratura, planirani termin..."></textarea></div>
        <button class="btn primary submit" type="submit">Pošaljite upit ${arrow}</button>
        <small>Forma otvara WhatsApp sa pripremljenom porukom.</small>
      </form>
    </section>
  </main>

  <footer>
    <div class="footer-brand"><span class="brand-mark"><i></i><b>B</b></span><div><strong>BOSS INVEST GROUP</strong><p>Mašinsko malterisanje · Cementne košuljice · Rasuti materijali</p></div></div>
    <div class="footer-contact"><p>Novi Sad, Srbija</p><a href="tel:+${PHONE_PRIMARY}">${PHONE_DISPLAY}</a><a href="tel:+381658069760">${PHONE_SECONDARY}</a><a href="${IG}" target="_blank" rel="noreferrer">Instagram ↗</a></div>
    <div class="footer-bottom"><span>© ${new Date().getFullYear()} Boss Invest Group</span><a href="#top">Nazad na vrh ↑</a></div>
  </footer>
`;

const menu = document.querySelector<HTMLButtonElement>('[data-menu]')!;
const panel = document.querySelector<HTMLElement>('[data-mobile-panel]')!;
menu.addEventListener('click', () => {
  const open = panel.classList.toggle('open');
  menu.classList.toggle('open', open);
  document.body.classList.toggle('menu-open', open);
});
panel.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  panel.classList.remove('open'); menu.classList.remove('open'); document.body.classList.remove('menu-open');
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

window.addEventListener('scroll', () => {
  document.querySelector('[data-nav]')?.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

const form = document.querySelector<HTMLFormElement>('[data-form]')!;
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const fd = new FormData(form);
  const text = `Pozdrav Boss Invest Group, želim ponudu.%0A%0AIme: ${encodeURIComponent(String(fd.get('name') || ''))}%0ATelefon: ${encodeURIComponent(String(fd.get('phone') || ''))}%0AVrsta projekta: ${encodeURIComponent(String(fd.get('type') || ''))}%0APoruka: ${encodeURIComponent(String(fd.get('message') || ''))}`;
  window.open(`https://wa.me/${PHONE_PRIMARY}?text=${text}`, '_blank', 'noopener,noreferrer');
});

const schema = {
  '@context': 'https://schema.org', '@type': 'HomeAndConstructionBusiness',
  name: 'Boss Invest Group', areaServed: 'Serbia', address: { '@type': 'PostalAddress', addressLocality: 'Novi Sad', addressCountry: 'RS' },
  telephone: '+381668869760', sameAs: [IG],
  description: 'Mašinsko malterisanje, cementne košuljice i rasuti materijali.'
};
const script = document.createElement('script'); script.type = 'application/ld+json'; script.text = JSON.stringify(schema); document.head.appendChild(script);
