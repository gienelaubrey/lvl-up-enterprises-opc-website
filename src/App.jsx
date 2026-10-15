import { useState } from 'react'
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Boxes,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Handshake,
  Mail,
  MapPin,
  Menu,
  PackageCheck,
  Phone,
  Send,
  ShieldCheck,
  Truck,
  Warehouse,
  X,
  ChartNoAxesCombined,
} from 'lucide-react'

const COMPANY = {
  name: 'LVL UP Enterprises OPC',
  email: 'lvlupenterprisesopc@gmail.com',
  phoneDisplay: '+63 919 364 6203',
  phoneLink: '+639193646203',
  address: 'East Forbes Mansions, Cainta, Rizal',
}

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Services', href: '#services' },
  { label: 'Partners & Accounts', href: '#partners' },
  { label: 'Contact', href: '#contact' },
]

const services = [
  {
    number: '01',
    title: 'Sales & Merchandising',
    description:
      'Sales execution and merchandising activities that support product visibility and retail presence.',
    icon: ChartNoAxesCombined,
  },
  {
    number: '02',
    title: 'Key Account Management',
    description:
      'Business coordination and relationship management for key accounts and retail partners.',
    icon: Handshake,
  },
  {
    number: '03',
    title: 'Warehousing',
    description:
      'Warehouse operations that support inventory handling and the distribution process.',
    icon: Warehouse,
  },
  {
    number: '04',
    title: 'Distribution & Logistics',
    description:
      'Coordinating product movement and delivery as part of an integrated distribution operation.',
    icon: Truck,
  },
]

const partners = [
  {
    name: 'Pinakamasarap Corporation',
    brand: 'Marca Pina',
    category: 'Consumer goods',
  },
  {
    name: 'Pasciolco International Inc. / Pasciolco Agri Ventures',
    brand: "Quezon's Best",
    category: 'Food products',
  },
  {
    name: 'Universal Canning, Inc.',
    brand: "Master & Family's Brand Sardines",
    category: 'Canned goods',
  },
  {
    name: 'Projekt: 410, Inc.',
    brand: 'Michiko',
    category: 'Consumer products',
  },
  {
    name: 'Bettlane Marketing Corporation',
    brand: 'Choco Filipino',
    category: 'Food products',
  },
  {
    name: 'Cosmetics Fraiche Naturale Corp.',
    brand: 'CFN',
    category: 'Personal care',
  },
]

const accounts = [
  'Mercury Drug Corporation',
  'Supervalue Inc. (SM Supermarket)',
  'Super Shopping Market, Inc. (SM Hypermarket)',
  'Sanford Marketing (Savemore)',
  'Landmark',
  'Unimart (Greenhills)',
  'UM Superfoods (Pasig)',
  'Makati Supermart (Alabang)',
  'Cash & Carry',
  'Fishermall',
  'Landers Superstore',
  'Heyday Well Retail Corporation',
]

const processSteps = [
  {
    number: '01',
    title: 'Brand Partnership',
    description:
      'Coordinate with product principals to understand their products and distribution needs.',
    icon: Handshake,
  },
  {
    number: '02',
    title: 'Sales & Account Coordination',
    description:
      'Support sales execution, merchandising, and coordination with retail accounts.',
    icon: ChartNoAxesCombined,
  },
  {
    number: '03',
    title: 'Warehouse Operations',
    description:
      'Coordinate inventory handling and preparation for distribution.',
    icon: Boxes,
  },
  {
    number: '04',
    title: 'Distribution',
    description:
      'Coordinate product movement and delivery to support retail availability.',
    icon: PackageCheck,
  },
]


function SectionHeading({
  eyebrow="How We Work",
  title="From Brand Partnership to Retail Availability.",
  description="An overview of the activities that support LVL UP's sales and distribution business.",
  centered = false,
  dark,
}) {
  return (
    <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <span className={`section-kicker ${centered ? 'justify-center' : ''}`}>
        {eyebrow}
      </span>
      <h2
        className={`mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[42px] ${
          dark ? 'text-white' : 'text-brand-navy'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base leading-7 sm:text-lg ${
            dark ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}



function ButtonLink({ href, children, secondary = false, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      style={{
        color: secondary ? '#142A3A' : '#FFFFFF',
      }}
      className={
        secondary
          ? 'inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#F1A05B] px-5 py-3 text-sm font-bold transition hover:bg-[#E58A3D]'
          : 'inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#A70F16] px-5 py-3 text-sm font-bold shadow-sm transition hover:bg-[#850B11]'
      }
    >
      {children}
    </a>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md">
      <div className="container-site flex min-h-[78px] items-center justify-between gap-5">
        <a
          href="#home"
          className="flex shrink-0 items-center"
          aria-label="LVL UP Enterprises OPC home"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src="/lvl-up-logo.png"
            alt="LVL UP Enterprises OPC"
            className="h-auto w-[148px] object-contain sm:w-[178px]"
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-gray-600 transition hover:text-brand-red"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            style={{ color: '#FFFFFF' }}
            className="inline-flex items-center gap-2 rounded-md bg-brand-red px-4 py-3 text-sm font-bold transition hover:bg-brand-red-dark"
          >
           Partner With Us <ArrowUpRight size={16} />
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-md border border-gray-200 text-brand-navy lg:hidden"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <nav
          className="border-t border-gray-100 bg-white px-5 py-4 shadow-lg lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="container-site flex flex-col">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-gray-100 py-4 text-sm font-semibold text-brand-navy"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-brand-red px-4 py-3 text-sm font-bold text-white"
            >
              Partner With Us <ArrowUpRight size={16} />
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-brand-navy">
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=85')",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/55" />
      <div className="absolute -right-28 -top-28 -z-10 size-96 rounded-full border border-white/10" />
      <div className="absolute -right-12 -top-12 -z-10 size-64 rounded-full border border-white/10" />

      <div className="container-site grid min-h-[600px] items-center gap-12 py-20 lg:grid-cols-[1.1fr_.9fr] lg:py-24">
        <div className="max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[.16em] text-white">
            <span className="size-2 rounded-full bg-brand-orange" />
            Sales · Distribution · Logistics
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[62px]">
            Connecting Brands to the{' '}
            <span className="text-[#F1A05B]">Markets That Matter.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-gray-200 sm:text-lg">
            LVL UP Enterprises OPC supports consumer goods brands through sales
            execution, key account management, warehousing, and distribution.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#contact">
              Partner With Us <ArrowRight size={17} />
            </ButtonLink>
            <ButtonLink href="#services" secondary>
              Explore Our Services <ArrowDown size={17} />
            </ButtonLink>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/20 pt-6 text-sm text-gray-200">
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 size={17} className="text-[#F1A05B]" />
              Consumer goods distribution
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 size={17} className="text-[#F1A05B]" />
              Retail account coordination
            </span>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute -left-6 -top-6 size-24 border-l-4 border-t-4 border-brand-orange" />
          <img
            src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=1000&q=85"
            alt="Goods organized for warehouse and distribution operations"
            className="relative h-[420px] w-full rounded-sm object-cover shadow-2xl"
          />
          <div className="absolute -bottom-7 -left-7 max-w-[280px] border-l-4 border-brand-orange bg-white p-5 shadow-xl">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-red">
              Our focus
            </p>
            <p className="mt-2 font-heading text-lg font-bold leading-snug text-brand-navy">
              Sales execution. Strong partnerships. Distribution support.
            </p>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/70 transition hover:text-white md:flex"
      >
        Discover LVL UP <ChevronDown size={16} />
      </a>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section-space bg-white">
      <div className="container-site grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1100&q=85"
            alt="Warehouse shelving and organized goods"
            loading="lazy"
            className="h-[330px] w-full object-cover sm:h-[450px]"
          />
          <div className="absolute -bottom-6 right-0 max-w-[270px] border-t-4 border-brand-red bg-brand-gray p-5 sm:-right-5">
            <p className="font-heading text-lg font-bold text-brand-navy">
              Moving products toward the markets they serve.
            </p>
          </div>
          <div className="absolute -left-3 -top-3 -z-10 h-full w-full border border-brand-blue/30 sm:-left-5 sm:-top-5" />
        </div>

        <div className="pt-4 lg:pt-0">
          <SectionHeading
            eyebrow="About LVL UP"
            title="A Distribution Partner Focused on Market Reach."
            description="LVL UP Enterprises OPC is a consumer goods sales and distribution company focused on food, beverage, household, and health products for key accounts and secondary accounts nationwide."
          />

          <p className="mt-5 leading-8 text-gray-600">
            The company works with brand partners to support market penetration,
            sales growth, and distribution coverage. Its business model combines
            sales execution, territory management, warehousing, logistics,
            merchandising, and key account management.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="border-l-2 border-brand-red pl-4">
              <h3 className="font-heading text-lg font-bold text-brand-navy">
                Our Mission
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                To provide dependable sales and distribution support that helps
                brands strengthen market presence and reach their customers.
              </p>
            </div>
            <div className="border-l-2 border-brand-blue pl-4">
              <h3 className="font-heading text-lg font-bold text-brand-navy">
                Our Vision
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                To become one of the country's preferred sales and distribution
                service providers, with a focus on major key accounts.
              </p>
            </div>
          </div>

          <a
            href="#services"
            className="mt-8 inline-flex items-center gap-2 font-bold text-brand-red transition hover:gap-3"
          >
            Discover Our Capabilities <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="section-space bg-brand-gray">
      <div className="container-site">
        <SectionHeading
          eyebrow="What We Do"
          title="Distribution Support From Sales to Delivery."
          description="Our business model brings together commercial execution and distribution operations to support consumer goods brands and their retail accounts."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <article
                key={service.number}
                className="group flex h-full flex-col border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-red/40 hover:shadow-xl sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <div className="flex size-12 items-center justify-center bg-brand-red/10 text-brand-red transition group-hover:bg-brand-red group-hover:text-white">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>
                  <span className="font-heading text-sm font-bold text-gray-300">
                    {service.number}
                  </span>
                </div>

                <h3 className="mt-7 font-heading text-xl font-bold leading-snug text-brand-navy">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-gray-600">
                  {service.description}
                </p>

                <a
                  href="#contact"
                  aria-label={`Ask about ${service.title}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-red"
                >
                  Learn more <ArrowUpRight size={16} />
                </a>
              </article>
            )
          })}
        </div>

        <div className="mt-10 flex flex-col justify-between gap-5 bg-brand-navy p-7 sm:flex-row sm:items-center sm:p-9">
          <div>
            <p className="font-heading text-xl font-bold text-white sm:text-2xl">
              Looking for a distribution partner?
            </p>
            <p className="mt-2 max-w-xl text-sm leading-6 text-gray-300">
              Contact our team to discuss your products and business requirements.
            </p>
          </div>
          <ButtonLink href="#contact">
            Start a Conversation <ArrowRight size={17} />
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}

function Partners() {
  return (
    <section id="partners" className="section-space bg-white">
      <div className="container-site">
        <SectionHeading
          eyebrow="Our Network"
          title="Brands and Retail Accounts."
          description="The company profile identifies the following partner organizations and retail accounts. Names are presented as text rather than implying endorsement or affiliation beyond the supplied profile."
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex size-11 items-center justify-center bg-brand-red/10 text-brand-red">
                <Handshake size={22} />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-brand-navy">
                  Our Partners
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Organizations listed in the company profile
                </p>
              </div>
            </div>

            <div className="mt-6 divide-y divide-gray-100 border-y border-gray-100">
              {partners.map((partner, index) => (
                <article key={partner.name} className="flex gap-4 py-5">
                  <span className="flex size-9 shrink-0 items-center justify-center bg-brand-gray text-xs font-bold text-brand-blue">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0">
                    <h4 className="font-semibold leading-6 text-brand-navy">
                      {partner.name}
                    </h4>
                    <p className="mt-1 text-sm text-gray-600">
                      {partner.brand}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <div className="flex size-11 items-center justify-center bg-brand-blue/10 text-brand-blue">
                <BriefcaseBusiness size={22} />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-brand-navy">
                  Accounts
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Retail accounts listed in the company profile
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {accounts.map((account) => (
                <div
                  key={account}
                  className="flex items-start gap-3 border border-gray-100 bg-brand-gray/60 p-4"
                >
                  <CheckCircle2
                    size={17}
                    className="mt-0.5 shrink-0 text-brand-red"
                  />
                  <span className="text-sm font-medium leading-6 text-gray-700">
                    {account}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-5 text-xs leading-5 text-gray-500">
              Organization and account names are reproduced from the supplied
              company profile. Confirm the current relationships and obtain any
              necessary permissions before publication.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="section-space bg-brand-navy text-white">
      <div className="container-site">
        <SectionHeading
          eyebrow="How We Work"
          title="From Brand Partnership to Retail Availability."
          description="An overview of the activities that support LVL UP's sales and distribution business."
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => {
            const Icon = step.icon

            return (
              <article key={step.number} className="relative">
                {index !== processSteps.length - 1 && (
                  <div className="absolute left-14 top-7 hidden h-px w-[calc(100%-28px)] bg-white/20 lg:block" />
                )}
                <div className="relative flex size-14 items-center justify-center border border-white/25 bg-white/5 text-[#F1A05B]">
                  <Icon size={24} />
                </div>
                <p className="mt-6 text-xs font-bold tracking-[.18em] text-[#F1A05B]">
                  STEP {step.number}
                </p>
                <h3 className="mt-2 font-heading text-lg font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-300">
                  {step.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Careers() {
  return (
    <section className="bg-white py-16">
      <div className="container-site">
        <div className="grid items-center gap-8 border border-gray-200 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:p-12">
          <div>
            <span className="section-kicker">Careers</span>
            <h2 className="mt-4 font-heading text-2xl font-extrabold text-brand-navy sm:text-3xl">
              Interested in Joining Our Team?
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-gray-600">
              For inquiries about potential opportunities in sales,
              merchandising, warehouse operations, or delivery, contact the
              company directly. Please note that this website does not confirm
              any current vacancies.
            </p>
          </div>
          <a
            href={`mailto:${COMPANY.email}?subject=${encodeURIComponent('Career Inquiry')}`}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-brand-red px-5 py-3 text-sm font-bold text-brand-red transition hover:bg-brand-red hover:text-white"
          >
            <Mail size={17} /> Career Inquiry
          </a>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section-space bg-brand-gray">
      <div className="container-site">
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Contact Us"
              title="Let's Discuss Your Distribution Needs."
              description="Get in touch with LVL UP Enterprises OPC for business, product distribution, partnership, and general inquiries."
            />

            <div className="mt-9 space-y-6">
              <a
                href={`mailto:${COMPANY.email}`}
                className="group flex items-start gap-4"
              >
                <span className="flex size-12 shrink-0 items-center justify-center bg-white text-brand-red shadow-sm">
                  <Mail size={21} />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-widest text-gray-500">
                    Email
                  </span>
                  <span className="mt-1 block break-all font-semibold text-brand-navy transition group-hover:text-brand-red">
                    {COMPANY.email}
                  </span>
                </span>
              </a>

              <a
                href={`tel:${COMPANY.phoneLink}`}
                className="group flex items-start gap-4"
              >
                <span className="flex size-12 shrink-0 items-center justify-center bg-white text-brand-red shadow-sm">
                  <Phone size={21} />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-widest text-gray-500">
                    Telephone
                  </span>
                  <span className="mt-1 block font-semibold text-brand-navy transition group-hover:text-brand-red">
                    {COMPANY.phoneDisplay}
                  </span>
                </span>
              </a>

              <div className="flex items-start gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center bg-white text-brand-red shadow-sm">
                  <MapPin size={21} />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-widest text-gray-500">
                    Address
                  </span>
                  <span className="mt-1 block font-semibold leading-6 text-brand-navy">
                    {COMPANY.address}
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 shadow-sm sm:p-9">
            <div className="flex items-center gap-3">
              <div className="flex size-11 items-center justify-center bg-brand-red/10 text-brand-red">
                <Send size={20} />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-brand-navy">
                  Send a Business Inquiry
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Your email application will open with your message.
                </p>
              </div>
            </div>

            <form
              className="mt-7 space-y-5"
              onSubmit={(event) => {
                event.preventDefault()
                const data = new FormData(event.currentTarget)
                const name = data.get('name')
                const company = data.get('company')
                const email = data.get('email')
                const subject = data.get('subject')
                const message = data.get('message')

                const body = [
                  `Name: ${name}`,
                  `Company: ${company || 'Not provided'}`,
                  `Reply email: ${email}`,
                  '',
                  'Message:',
                  message,
                ].join('\n')

                const mailto = `mailto:${COMPANY.email}?subject=${encodeURIComponent(
                  subject || 'Business Inquiry',
                )}&body=${encodeURIComponent(body)}`

                window.location.href = mailto
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-gray-700">
                    Your name *
                  </span>
                  <input
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Full name"
                    className="min-h-12 w-full border border-gray-200 bg-white px-4 text-sm outline-none transition focus:border-brand-red"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-gray-700">
                    Company
                  </span>
                  <input
                    name="company"
                    autoComplete="organization"
                    placeholder="Company name"
                    className="min-h-12 w-full border border-gray-200 bg-white px-4 text-sm outline-none transition focus:border-brand-red"
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-gray-700">
                  Business email *
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="you@company.com"
                  className="min-h-12 w-full border border-gray-200 bg-white px-4 text-sm outline-none transition focus:border-brand-red"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-gray-700">
                  Inquiry type
                </span>
                <select
                  name="subject"
                  defaultValue="Business Inquiry"
                  className="min-h-12 w-full border border-gray-200 bg-white px-4 text-sm text-gray-700 outline-none transition focus:border-brand-red"
                >
                  <option>Business Inquiry</option>
                  <option>Distribution Partnership</option>
                  <option>Product Representation</option>
                  <option>Retail Account Inquiry</option>
                  <option>Career Inquiry</option>
                  <option>Other Inquiry</option>
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-gray-700">
                  How can we help? *
                </span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us a little about your inquiry..."
                  className="w-full resize-y border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-red"
                />
              </label>

              <button
                type="submit"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-brand-red px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-red-dark sm:w-auto"
              >
                Prepare Email <ArrowUpRight size={17} />
              </button>

              <p className="text-xs leading-5 text-gray-500">
                This form opens your default email application. It does not
                transmit or store submissions on this website. Your email
                application must be configured to send the message.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0E202D] text-white">
      <div className="container-site grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_.7fr_1fr]">
        <div>
          <a href="#home" aria-label="Back to homepage">
            <img
              src="/lvl-up-logo.png"
              alt="LVL UP Enterprises OPC"
              className="w-[190px] rounded-sm bg-white p-2"
              loading="lazy"
            />
          </a>
          <p className="mt-5 max-w-sm text-sm leading-7 text-gray-300">
            Sales, distribution, warehousing, logistics, merchandising, and
            key account management for consumer goods.
          </p>
        </div>

        <div>
          <h3 className="font-heading font-bold">Quick Links</h3>
          <nav className="mt-4 flex flex-col items-start gap-3 text-sm text-gray-300">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a href="#careers" className="transition hover:text-white">
              Careers
            </a>
          </nav>
        </div>

        <div>
          <h3 className="font-heading font-bold">Get in Touch</h3>
          <div className="mt-4 space-y-4 text-sm text-gray-300">
            <a
              href={`mailto:${COMPANY.email}`}
              className="flex items-start gap-3 transition hover:text-white"
            >
              <Mail size={17} className="mt-0.5 shrink-0" />
              <span className="break-all">{COMPANY.email}</span>
            </a>
            <a
              href={`tel:${COMPANY.phoneLink}`}
              className="flex items-center gap-3 transition hover:text-white"
            >
              <Phone size={17} className="shrink-0" />
              {COMPANY.phoneDisplay}
            </a>
            <p className="flex items-start gap-3">
              <MapPin size={17} className="mt-0.5 shrink-0" />
              <span>{COMPANY.address}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-3 py-5 text-xs text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} {COMPANY.name}. All rights reserved.</p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 transition hover:text-white"
          >
            Back to top <ArrowDownRight size={15} className="rotate-[-135deg]" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Partners />
        <Process />
        <div id="careers">
          <Careers />
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  )
}