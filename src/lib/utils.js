// Utility functions for the portfolio
export const startingYear = 2024;
export const currentYear = new Date().getFullYear();
export const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/Elegion1',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
        <path d="M9 18c-4.51 2-5-2-7-2"></path>
      </svg>
    )
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/giovanni-sugamiele-webdev/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect width="4" height="12" x="2" y="9"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    )
  },
  {
    name: 'Email',
    href: 'mailto:ggsugamiele@gmail.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
      </svg>
    )
  }
];

export const navigationItems = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Progetti' },
  { href: '#contact', label: 'Contatti' }
];

export const projects = [
  {
    date: '11/2025',
    title: 'GSM Sistemi',
    description: 'Sito web aziendale sviluppato per presentare in modo chiaro e professionale i servizi di GSM Sistemi nel settore degli impianti e delle soluzioni tecnologiche. Il progetto è stato realizzato con particolare attenzione alla struttura dei contenuti, alla velocità di caricamento e all\'ottimizzazione SEO, per migliorare la visibilità online e facilitare il contatto con i clienti.',
    technologies: [
      'Figma',
      'Next.js',
      'HTML',
      'CSS',
      'JavaScript',
      'Bootstrap',
      'Ottimizzazione SEO'
    ],
    image: '/gsm-sistemi.png',
    link: 'https://gsm-sistemi.it'
  },
  {
    date: '10/2025',
    title: 'Zeus Viaggi',
    description: 'Sito web realizzato per un\'agenzia di viaggi con l\'obiettivo di valorizzare le destinazioni e rendere immediata la consultazione delle proposte. L\'interfaccia è stata progettata per essere intuitiva e responsive, con una struttura pensata per accompagnare l\'utente nella scoperta dei viaggi e migliorare il posizionamento sui motori di ricerca.',
    technologies: [
      'Figma',
      'Next.js',
      'HTML',
      'CSS',
      'JavaScript',
      'Bootstrap',
      'Ottimizzazione SEO'
    ],
    image: '/zeusviaggi.png',
    link: 'https://zeusviaggi.it'
  },
  {
    date: '06/2024',
    title: 'Tranchida Transfer',
    description: 'Tranchida Transfer è una piattaforma completa per la gestione delle prenotazioni di transfer, escursioni e noleggio auto. Il progetto include la creazione di un dashboard amministrativo personalizzato con funzionalità avanzate come la gestione dei clienti, delle disponibilità, dei pagamenti e delle statistiche. L\'interfaccia è stata progettata per essere intuitiva e responsive, garantendo un\'esperienza utente ottimale su desktop e dispositivi mobili. Il backend è sviluppato in PHP con Laravel e Livewire, mentre frontend e interattività sono gestiti con HTML, CSS e JavaScript, integrando anche le Google API per calcoli di distanza e localizzazione. Particolare attenzione è stata posta all\'ottimizzazione SEO per migliorare la visibilità online.',
    technologies: [
      'PHP',
      'Laravel',
      'MySQL',
      'Livewire',
      'HTML',
      'CSS',
      'JavaScript',
      'Bootstrap',
      'Google API',
      'Ottimizzazione SEO'
    ],
    image: '/tranchidatransfer.png',
    link: 'https://tranchidatransfer.it'
  },
  {
    date: '02/2025',
    title: 'Favignana Transfer',
    description: 'Favignana Transfer è un sistema avanzato per la gestione dei servizi di transfer sull\'isola, con possibilità di pagamento online tramite PayPal. Il backend, sviluppato in Laravel, comunica tramite API REST con il frontend Next.js/React, garantendo un\'interazione fluida e tempi di risposta rapidi. Il progetto è stato pensato per supportare la gestione simultanea di più prenotazioni, con interfaccia chiara e intuitiva sia per gli utenti che per gli amministratori. La piattaforma è stata ottimizzata per SEO e performance, utilizzando Bootstrap per il layout responsive e garantendo compatibilità su tutti i dispositivi. Inoltre, è stata implementata la gestione dei dati in sicurezza e un sistema di notifiche per aggiornamenti delle prenotazioni.',
    technologies: [
      'React',
      'Next.js',
      'Bootstrap',
      'HTML',
      'CSS',
      'JavaScript',
      'Laravel',
      'REST API',
      'Ottimizzazione SEO'
    ],
    image: '/favignana-transfer.png',
    link: 'https://favignana-transfer.it'
  },
  {
    date: '08/2025',
    title: 'Base Ecommerce in costruzione',
    description: 'Questo progetto rappresenta la base di un e-commerce completamente scalabile e personalizzabile, sviluppato con Next.js per il frontend e Bootstrap per la parte visiva e responsive. L\'architettura prevede componenti modulari riutilizzabili per la gestione di prodotti, categorie, carrello e ordini, permettendo una facile espansione futura. Particolare attenzione è stata data alle performance e all\'accessibilità, per garantire un\'esperienza utente ottimale su ogni dispositivo. Il backend previsto è in Laravel, che consentirà la gestione completa dei dati, l\'integrazione con sistemi di pagamento e la creazione di un pannello amministrativo per il controllo del catalogo, delle offerte e delle statistiche. Il progetto è pensato per essere facilmente estendibile e pronto per future funzionalità avanzate come filtri dinamici, ricerca full-text e gestione multi-lingua.',
    technologies: [
      'Backend Laravel',
      'MySQL',
      'Frontend Next.js',
      'HTML',
      'CSS',
      'JavaScript',
      'Bootstrap',
      'REST API'
    ],
    image: '/ecommerce.png',
    link: ''
  },
  {
    date: '02/2024',
    title: 'Tech Talk',
    description: 'Mockup di un blog di tecnologia sviluppato interamente in HTML, CSS e JavaScript puro. Il progetto riproduce la struttura e lo stile di un blog moderno, con una homepage per gli articoli, una sezione dedicata alle categorie e un layout responsive ottimizzato per diversi dispositivi. Ideale come esercizio di design statico e gestione semantica dei contenuti.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: '/techtalk.png',
    link: 'https://elegion1.github.io/tech-talk/index.html'
  },
  {
    date: '03/2024',
    title: 'RED',
    description: 'Mockup di un sito web realizzato a partire da un design statico, trasformato in un layout HTML e CSS completamente responsive. Il progetto si concentra sulla precisione del markup e sulla fedeltà visiva al design originale, includendo transizioni fluide e una tipografia curata per ottenere un risultato elegante e coerente.',
    technologies: ['HTML', 'CSS'],
    image: '/red.png',
    link: 'https://elegion1.github.io/Red-Giovanni-Sugamiele/'
  },
  {
    date: '05/2024',
    title: 'Thrift Shop',
    description: 'Mockup di un e-commerce per la vendita di articoli usati, sviluppato con Laravel e Livewire su database MySQL. Il progetto include una gestione completa dei prodotti, con pagine dinamiche, componenti reattivi e un\'attenzione particolare all\'esperienza utente. È presente una funzione di revisione dei prodotti da parte degli amministratori per garantire la qualità dei contenuti, insieme a un sistema automatico di gestione delle immagini. Inoltre, è stata integrata l\'API di Google per la rilevazione e censura automatica dei volti nelle foto caricate, assicurando la conformità alle normative sulla privacy. Il progetto è ideato come base scalabile e facilmente estendibile con funzionalità reali di checkout e autenticazione.',
    technologies: [
      'Laravel',
      'MySQL',
      'Livewire',
      'HTML',
      'CSS',
      'JavaScript'
    ],
    image: '/thriftshop.png',
    link: 'https://github.com/Elegion1/Thrift-Shop-Giovanni-Sugamiele'
  },
  {
    date: '04/2024',
    title: 'Echo',
    description: 'Mockup di un social network ispirato a Twitter, sviluppato in Laravel e Livewire con database MySQL. Il progetto simula un flusso di post, un sistema di profili e un\'interfaccia reattiva in tempo reale. È stato pensato come esercizio di architettura MVC e interazione dinamica lato frontend, con l\'obiettivo di avvicinarsi al comportamento di una vera piattaforma social.',
    technologies: [
      'Laravel',
      'PHP',
      'MySQL',
      'Livewire',
      'HTML',
      'CSS',
      'JavaScript'
    ],
    image: '/echo.png',
    link: 'https://github.com/Elegion1/echo_Giovanni_Sugamiele'
  }
];

export const skills = [
  {
    level: 'expert',
    items: [
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'JavaScript' },
      { name: 'PHP' },
      { name: 'Laravel' },
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'MySQL' },
      { name: 'Tailwind' }
    ]
  },
  {
    level: 'in-progress',
    items: [
      { name: 'TypeScript' },
      { name: 'Node.js' },
      { name: 'JAVA' },
      { name: 'Python' }
    ]
  }
];

export const skillTags = [
  'HTML', 'CSS', 'JavaScript', 'PHP', 'Laravel', 'React', 'Next.js', 'MySQL', 'Tailwind',
  'TypeScript', 'Node.js', 'JAVA', 'Python', 'Figma', 'Bootstrap', 'Livewire', 'Google API',
  'REST API', 'Ottimizzazione SEO'
];

export const stats = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code-xml">
        <path d="m18 16 4-4-4-4"></path>
        <path d="m6 8-4 4 4 4"></path>
        <path d="m14.5 4-5 16"></path>
      </svg>
    ),
    value: `${currentYear - startingYear}+ anni`,
    label: 'di esperienza nello sviluppo web professionale'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rocket">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
      </svg>
    ),
    value: '5+ progetti',
    label: 'completati per clienti di ogni settore'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    value: '100%',
    label: 'clienti soddisfatti e collaborazioni durature'
  }
];