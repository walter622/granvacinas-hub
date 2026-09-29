import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowRight, Baby, BriefcaseBusiness, Check, ChevronDown, ClipboardCheck,
  Clock3, Heart, Home, IceCreamBowl, Instagram, Mail, MapPin, Menu, Phone,
  Plane, Play, ShieldCheck, Sparkles, Stethoscope, Syringe, UserRound,
  UsersRound, X,
} from "lucide-react";
import heroImage from "@/assets/gran-hero.jpg";
import careImage from "@/assets/gran-care.jpg";
import adultImage from "@/assets/gran-adult.jpg";
import homeImage from "@/assets/gran-home.jpg";
import logoAsset from "@/assets/gran-vacinas-logo.svg.asset.json";
import dosesAsset from "@/assets/gran-vacinas-doses.webp.asset.json";
import teamAsset from "@/assets/gran-vacinas-equipe.webp.asset.json";
import facadeSideAsset from "@/assets/gran-vacinas-fachada-lateral.webp.asset.json";
import entranceAsset from "@/assets/gran-vacinas-entrada.webp.asset.json";

const WHATSAPP_NUMBER = "5511XXXXXXXX";
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gran Vacinas | Vacinação humanizada na Granja Viana" },
      { name: "description", content: "Vacinação para toda a família na Granja Viana, na clínica ou em casa, com orientação, segurança e acolhimento." },
      { property: "og:title", content: "Gran Vacinas | Imunidade e confiança em cada vacina" },
      { property: "og:description", content: "Cuidado especializado e vacinação humanizada para cada fase da vida." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const lifeStages = [
  { icon: Baby, title: "Prematuros", text: "Hexavalente e pentavalente acelulares, rotavírus pentavalente, influenza, febre amarela, pneumocócicas e meningocócicas ACWY e B." },
  { icon: Heart, title: "Bebês e crianças", text: "DTPa+VIP, rotavírus, influenza, hepatite A, tríplice viral, varicela, HPV, pneumocócicas, meningocócicas e dengue." },
  { icon: UserRound, title: "Adolescentes", text: "HPV nonavalente, DTPa, influenza, tríplice viral, varicela, hepatites, febre amarela, dengue e meningocócicas." },
  { icon: BriefcaseBusiness, title: "Adultos", text: "DTPa, influenza, tríplice viral, varicela, hepatites, HPV, herpes-zóster, febre amarela, dengue, pneumocócica e meningocócica." },
  { icon: Sparkles, title: "Gestantes", text: "Hepatite B, influenza tetravalente, tríplice bacteriana DTPa e VSR, com orientação para cada período da gestação." },
  { icon: UsersRound, title: "Acima de 60 anos", text: "DTPa, influenza tetra alta dose, herpes-zóster, hepatite, meningocócica ACWY, pneumocócicas e VSR." },
  { icon: Plane, title: "Trabalho e viagens", text: "Tríplice viral, hepatite, HPV, DTPa, varicela, influenza, febre amarela, febre tifóide, meningocócica e pneumocócica." },
];

const audiences: Array<[string, string]> = [
  ["Pais e mães", "que querem a caderneta de toda a casa em dia"],
  ["Bebês e crianças", "no esquema inicial de vacinação"],
  ["Adolescentes", "que precisam completar ou atualizar o esquema"],
  ["Adultos", "que nunca checaram as próprias vacinas"],
  ["Gestantes", "com orientação para cada período da gravidez"],
  ["Acima de 50 e 60 anos", "com reforços e proteção sazonal em dia"],
  ["Quem perdeu a caderneta", "e precisa reorganizar o histórico"],
  ["Quem vai viajar", "e precisa de proteção antes da data"],
  ["Quem prefere em casa", "com vacinação domiciliar na sua região"],
];

const testimonials = [
  ["Atendimento excelente. Desde a recepção até a enfermeira, que mostrou todos os dados da vacina, tirou minhas dúvidas e aplicou com muita delicadeza.", "Ligia B."],
  ["Equipe atenciosa, desde os agendamentos até a aplicação a domicílio. Enfermeira humana e bastante amorosa com a minha bebê. Recomendo muito!", "Isa Mayumi W."],
  ["Faço todas as vacinas da minha bebê com eles. Sempre fomos muito bem atendidos e as enfermeiras são muito carinhosas e atenciosas.", "Dayane K."],
];

const faqs = [
  ["A Gran Vacinas atende adultos e famílias?", "Sim. Atendemos prematuros, crianças, adolescentes, adultos, gestantes e idosos, com vacinas indicadas para cada fase da vida."],
  ["Como funciona a vacinação em casa?", "Profissionais qualificados vão até você, com triagem e atendimento personalizado. Entre em contato para verificar disponibilidade e condições na sua região."],
  ["Preciso agendar para ir à clínica?", "Não. Na clínica, o atendimento é por ordem de chegada, de segunda a sexta das 9h às 18h e aos sábados das 9h às 14h."],
  ["Perdi a caderneta. O que faço?", "Nossa equipe avalia quais vacinas precisam ser atualizadas. Algumas podem exigir reforço ou reinício do esquema, e uma nova caderneta pode ser iniciada."],
  ["As vacinas têm efeitos colaterais?", "Algumas podem causar reações leves, como dor no local, febre baixa ou irritabilidade. Geralmente são temporárias, e nossa equipe orienta sobre o que esperar."],
  ["Gestante pode se vacinar?", "Sim. Algumas vacinas são indicadas na gravidez, como influenza e dTpa. A equipe orienta o que é adequado para cada período."],
  ["Preciso comprar algo depois da análise?", "Não. O objetivo é orientar você com clareza para que decida com tranquilidade, no seu tempo."],
];

const formFields: Array<[string, string, string, string]> = [
  ["nome", "Nome", "text", "Como podemos chamar você?"],
  ["whatsapp", "WhatsApp", "tel", "(11) 99999-9999"],
  ["email", "E-mail", "email", "voce@exemplo.com"],
  ["vacina", "Vacina de interesse", "text", "Ex.: Influenza, HPV..."],
];

const vaccineMarqueeItems = [
  "Meningo B e ACWY", "HPV", "Herpes-Zóster", "Influenza", "Hexavalente",
  "Pneumocócica", "Rotavírus", "Dengue", "Febre Amarela", "Varicela",
  "Hepatite A e B", "VSR",
];

function VaccineMarquee() {
  const items = Array.from({ length: 4 }, () => vaccineMarqueeItems).flat();
  return <div aria-hidden="true" className="overflow-hidden bg-brand-deep py-4"><div className="marquee-track flex w-max items-center">{items.map((vaccine, index) => <span key={index} className="flex items-center text-sm font-black uppercase whitespace-nowrap"><span className="px-6 text-brand-lime">{vaccine}</span><span className="text-primary-foreground/40">|</span></span>)}</div></div>;
}

function CTA({ children, href = "#formulario", dark = false }: { children: ReactNode; href?: string; dark?: boolean }) {
  return <a href={href} className={`focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-center text-sm font-extrabold transition-transform hover:-translate-y-0.5 ${dark ? "bg-brand-deep text-primary-foreground" : "bg-brand-lime text-accent-foreground"}`}>{children}<ArrowRight className="size-4" /></a>;
}

function SectionTitle({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <h2 className={`mb-10 max-w-3xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl ${light ? "text-primary-foreground" : "text-brand-deep"}`}>{children}</h2>;
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = { nome: String(data.get("nome") ?? "").trim(), whatsapp: String(data.get("whatsapp") ?? "").trim(), email: String(data.get("email") ?? "").trim(), vacina: String(data.get("vacina") ?? "").trim() };
    const nextErrors: Record<string, string> = {};
    if (values.nome.length < 2 || values.nome.length > 100) nextErrors["nome"] = "Informe seu nome.";
    if (!/^\(?\d{2}\)?\s?9?\d{4}-?\d{4}$/.test(values.whatsapp)) nextErrors["whatsapp"] = "Informe um WhatsApp válido com DDD.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email) || values.email.length > 255) nextErrors["email"] = "Informe um e-mail válido.";
    if (!values.vacina || values.vacina.length > 120) nextErrors["vacina"] = "Informe a vacina de interesse.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    const message = encodeURIComponent(`Olá, Gran Vacinas! Meu nome é ${values.nome}. WhatsApp: ${values.whatsapp}. E-mail: ${values.email}. Tenho interesse em: ${values.vacina}. Gostaria de analisar minha caderneta.`);
    window.open(`${whatsappUrl}?text=${message}`, "_blank", "noopener,noreferrer");
  }

  return <main className="overflow-hidden bg-background">
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-md">
      <div className="section-shell flex h-20 items-center justify-between">
        <a href="#inicio" aria-label="Gran Vacinas — início"><img src={logoAsset.url} alt="Gran Vacinas" className="h-12 w-auto" /></a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          <a className="text-sm font-bold text-brand-deep hover:text-brand-green" href="#diferenciais">Diferenciais</a>
          <a className="text-sm font-bold text-brand-deep hover:text-brand-green" href="#como-funciona">Como funciona</a>
          <a className="text-sm font-bold text-brand-deep hover:text-brand-green" href="#duvidas">Dúvidas</a>
        </nav>
        <button className="focus-ring rounded-md p-2 text-brand-deep lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}>{menuOpen ? <X /> : <Menu />}</button>
      </div>
      {menuOpen && <nav className="border-t border-border bg-background px-4 py-4 lg:hidden"><div className="mx-auto flex max-w-sm flex-col gap-4"><a href="#diferenciais" onClick={() => setMenuOpen(false)}>Diferenciais</a><a href="#como-funciona" onClick={() => setMenuOpen(false)}>Como funciona</a><a href="#duvidas" onClick={() => setMenuOpen(false)}>Dúvidas</a></div></nav>}
    </header>

    <section id="inicio" className="relative min-h-[92vh] pt-20">
      <img src={heroImage} alt="Enfermeira da Gran Vacinas acolhendo mãe e filha" width={1600} height={1104} className="absolute inset-0 h-full w-full object-cover object-[65%_center]" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/10" />
      <div className="section-shell relative flex min-h-[calc(92vh-5rem)] items-center py-14"><div className="max-w-2xl">
        <h1 className="text-4xl font-black leading-[1.08] text-brand-deep sm:text-5xl lg:text-6xl">A vacinação da sua família em dia, com especialistas e acolhimento de verdade.</h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground/80 sm:text-lg">Cuidado com mais segurança e praticidade, sem se perder na caderneta e sem carregar ninguém pela cidade. Na clínica ou no conforto da sua casa.</p>
        <div className="mt-7"><CTA>Quero analisar minha caderneta</CTA></div>
        <p className="mt-4 max-w-xl text-xs italic text-muted-foreground">Análise sujeita à avaliação profissional. Vacinação domiciliar sujeita à disponibilidade e região de atendimento.</p>
      </div></div>
    </section>

    <VaccineMarquee />

    <section className="bg-brand-deep py-20 text-primary-foreground"><div className="section-shell grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
      <div className="relative aspect-video overflow-hidden rounded-lg bg-foreground/20"><img src={teamAsset.url} alt="Profissional da Gran Vacinas preparando vacinas na clínica" width={1153} height={769} loading="lazy" className="h-full w-full object-cover"/><div className="absolute inset-0 grid place-items-center bg-brand-deep/20"><span className="grid size-16 place-items-center rounded-full bg-brand-lime text-accent-foreground"><Play className="ml-1 size-7 fill-current" /></span></div><p className="absolute inset-x-4 bottom-4 text-xs font-bold">VÍDEO EXPLICATIVO | Gran Vacinas | Conheça nossa clínica</p></div>
      <div><SectionTitle light>Conheça o nosso jeito de cuidar.</SectionTitle><p className="leading-relaxed text-primary-foreground/80">Existe uma coisa que nenhuma página consegue entregar: a sensação de ser bem cuidado. Envie a foto da sua caderneta, tire suas dúvidas e veja se o nosso jeito de cuidar faz sentido para você e sua família.</p><div className="mt-7"><CTA>Quero analisar minha caderneta</CTA></div></div>
    </div></section>

    <section className="py-24"><div className="section-shell grid gap-12 lg:grid-cols-2"><div><SectionTitle>Por que tantas famílias estão levando a vacinação para dentro de casa?</SectionTitle><p className="text-lg leading-relaxed">Porque manter a vacinação em dia exige muito mais do que lembrar de uma data. A Gran Vacinas cuida da parte técnica e logística para que você se concentre no que importa: a sua família.</p><p className="mt-8 text-2xl font-black text-brand-green">Nós cuidamos da vacina.<br/>Você cuida de quem ama.</p></div><div className="grid gap-3">{["Saber quais vacinas já foram tomadas e quais faltam", "Entender o indicado para cada idade", "Encontrar horário em uma agenda corrida", "Levar criança, bebê ou idoso até a clínica", "Ter triagem e profissionais qualificados", "Conservar e registrar cada dose com segurança", "Acompanhar reforços ao longo dos anos", "Não perder a caderneta no caminho"].map((item) => <div key={item} className="flex gap-3 rounded-lg bg-brand-soft p-4"><Check className="mt-0.5 size-5 shrink-0 text-brand-green"/><span className="font-semibold">{item}</span></div>)}</div></div></section>

    <section className="bg-warm py-24"><div className="section-shell"><SectionTitle>A verdade sobre manter a vacinação em dia</SectionTitle><div className="grid gap-4 md:grid-cols-2">{[
      ["Preciso levar todo mundo até a clínica.", "Não necessariamente. Profissionais qualificados podem atender sua família em casa."],
      ["Vacinação em casa deve ser menos segura.", "Com processo, equipe treinada, triagem e conservação correta, o cuidado pode ser seguro e acolhedor."],
      ["Vacinação é coisa de criança.", "Adultos, gestantes e idosos também podem precisar de vacinas e reforços, conforme avaliação profissional."],
      ["Se perdi a caderneta, já era.", "Nossa equipe avalia seu histórico, orienta a atualização e pode iniciar uma nova caderneta com segurança."],
    ].map(([myth, truth]) => <article key={myth} className="rounded-lg border border-border bg-card p-6"><div className="mb-4 flex items-start gap-3"><X className="mt-1 size-5 shrink-0 text-destructive"/><h3 className="text-lg font-extrabold text-brand-deep">“{myth}”</h3></div><p className="pl-8 leading-relaxed text-muted-foreground"><strong className="text-brand-green">A verdade:</strong> {truth}</p></article>)}</div></div></section>

    <section className="py-24"><div className="section-shell grid items-center gap-12 lg:grid-cols-2"><div className="grid grid-cols-2 gap-3"><img src={homeImage} alt="Vacinação domiciliar Gran Vacinas" width={1200} height={912} loading="lazy" className="aspect-[4/5] w-full rounded-lg object-cover"/><img src={dosesAsset.url} alt="Vacinas preparadas com segurança na clínica Gran Vacinas" width={1153} height={769} loading="lazy" className="mt-10 aspect-[4/5] w-full rounded-lg object-cover"/></div><div><SectionTitle>A complexidade fica com a Gran Vacinas. O cuidado chega até você.</SectionTitle><p className="leading-relaxed text-muted-foreground">Imunização de alto nível para quem quer unir cuidado e praticidade, com equipe qualificada, triagem, acompanhamento de possíveis reações, tecnologia Buzzy, gestão informatizada de lotes e estrutura com até 48 horas de conservação sem energia.</p><p className="mt-5 font-bold text-brand-deep">Aqui, você não está simplesmente tomando vacinas. Está incorporando acompanhamento especializado à sua rotina.</p></div></div></section>

    <section className="bg-brand-soft py-24"><div className="section-shell"><SectionTitle>O que pode nascer no seu plano de vacinação?</SectionTitle><p className="mb-10 max-w-2xl text-muted-foreground">Uma boa vacinação não termina em uma dose. Ela pode ser o começo de um cuidado contínuo para cada fase da vida.</p><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{lifeStages.map(({icon: Icon,title,text}) => <article key={title} className="rounded-lg border border-border bg-card p-6"><span className="mb-5 grid size-11 place-items-center rounded-full bg-secondary text-secondary-foreground"><Icon className="size-5"/></span><h3 className="text-lg font-black text-brand-deep">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p></article>)}</div><p className="mt-8 max-w-3xl text-lg font-bold text-brand-deep">Talvez a proteção que estava faltando na sua família comece aqui.</p><div className="mt-6"><CTA dark>Quero analisar minha caderneta</CTA></div></div></section>

    <section className="py-24"><div className="section-shell grid gap-12 lg:grid-cols-2"><div><SectionTitle>Para quem é a Gran Vacinas?</SectionTitle><ul className="mt-8 grid gap-4">{audiences.map(([title, text]) => <li key={title} className="flex items-start gap-3"><Check className="mt-1 size-5 shrink-0 text-brand-green"/><span className="leading-snug"><strong className="font-black text-brand-deep">{title}</strong> <span className="text-muted-foreground">{text}</span></span></li>)}</ul><p className="mt-8 text-xl font-black text-brand-green">Mais tranquilidade, orientação clara e praticidade.</p></div><div className="grid grid-cols-2 gap-3 self-center"><img src={adultImage} alt="Adulto recebendo vacina com acolhimento na Gran Vacinas" width={1600} height={1200} loading="lazy" className="aspect-[3/4] w-full rounded-lg object-cover"/><img src={facadeSideAsset.url} alt="Entrada da clínica Gran Vacinas no Open Mall The Square" width={768} height={1365} loading="lazy" className="aspect-[3/4] w-full rounded-lg object-cover"/></div></div></section>

    <section className="bg-brand-deep py-24 text-primary-foreground"><div className="section-shell"><SectionTitle light>Cuidado conquista. Confiança faz voltar.</SectionTitle><p className="mb-10 max-w-3xl leading-relaxed text-primary-foreground/75">Uma boa experiência uma vez tranquiliza. Uma boa experiência todas as vezes constrói confiança para a vida inteira.</p><div className="grid gap-5 md:grid-cols-3">{testimonials.map(([quote,name]) => <blockquote key={name} className="rounded-lg bg-primary-foreground/10 p-6"><div className="mb-4 flex gap-1 text-brand-lime">★★★★★</div><p className="leading-relaxed">“{quote}”</p><footer className="mt-5 font-extrabold text-brand-lime">— {name}</footer></blockquote>)}</div></div></section>

    <section id="diferenciais" className="py-24"><div className="section-shell"><SectionTitle>Imunização humanizada com pensamento de operação profissional.</SectionTitle><div className="grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">{[
      [Home,"Vacinação domiciliar","Profissionais qualificados na sua casa, com atendimento em Cotia e cidades e regiões próximas."],
      [Sparkles,"Tecnologia Buzzy","Vibração e frio em formato amigável para ajudar a reduzir a dor e o medo de agulhas."],
      [ClipboardCheck,"Análise de caderneta","Envie uma foto e receba orientação clara e personalizada sobre o que pode estar faltando."],
      [Stethoscope,"Equipe que acompanha","Médicos e enfermeiros monitoram possíveis reações, com triagem antes da aplicação."],
      [IceCreamBowl,"Conservação segura","Estrutura com até 48 horas sem energia e rastreabilidade informatizada de lotes."],
      [Heart,"Acolhimento de verdade","Ambiente aconchegante no Open Mall The Square, com brinquedos e atendimento sem agendamento."],
    ].map(([icon,title,text]) => { const Icon = icon as typeof Home; return <article key={String(title)} className="flex gap-4"><span className="grid size-12 shrink-0 place-items-center rounded-full bg-brand-soft text-brand-green"><Icon className="size-5"/></span><div><h3 className="font-black text-brand-deep">{String(title)}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{String(text)}</p></div></article>})}</div><div className="mt-16 border-t border-border pt-12"><div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-14"><div className="min-w-0"><h3 className="text-3xl font-black text-brand-deep sm:text-4xl">Conheça a nossa clínica</h3><p className="mt-5 text-lg leading-relaxed text-brand-deep">Na Gran Vacinas, imunização é sinônimo de cuidado, segurança e atenção personalizada. Atendemos toda a família, do recém-nascido ao idoso, em um ambiente moderno e acolhedor, pensado para o seu conforto.</p><p className="mt-5 leading-relaxed text-muted-foreground">Cada vacina é aplicada por uma equipe especializada, sempre precedida de uma avaliação para garantir a segurança do atendimento. Todo o histórico é registrado em nosso sistema eletrônico, para que você tenha proteção completa e tranquilidade a cada visita.</p><p className="mt-5 leading-relaxed text-muted-foreground">Com infraestrutura moderna e atendimento humanizado, transformamos cada vacinação em uma experiência segura e agradável.</p><p className="mt-8 border-l-4 border-brand-lime py-2 pl-5 text-lg font-black text-brand-green">Escolha a Gran Vacinas e proteja quem você mais ama com confiança, cuidado e qualidade.</p></div><div className="self-center"><img src={entranceAsset.url} alt="Entrada da Gran Vacinas" width={900} height={1600} loading="lazy" className="mx-auto aspect-[4/5] w-full max-w-md rounded-lg object-cover object-[center_60%]"/></div></div></div></div></section>

    <section className="bg-warm py-20"><div className="section-shell max-w-4xl text-center"><SectionTitle>Quanto custa deixar a vacinação para depois?</SectionTitle><p className="text-lg leading-relaxed text-muted-foreground">Considere o tempo de deslocamento, o horário perdido, as filas, a dúvida sobre o que falta, os reforços esquecidos e o risco de deixar a proteção para tarde demais.</p><p className="mx-auto mt-6 max-w-3xl text-2xl font-black text-brand-deep">A pergunta é: quanto vale saber que cada pessoa da sua casa está com o esquema vacinal em dia?</p></div></section>

    <section id="como-funciona" className="py-24"><div className="section-shell"><SectionTitle>Como funciona a análise da caderneta?</SectionTitle><div className="grid gap-5 lg:grid-cols-5">{[
      ["01","Chame no WhatsApp","Preencha seus dados ou clique no botão."], ["02","Envie a caderneta","Se perdeu, nossa equipe orienta como começar."], ["03","Nós analisamos","Explicamos com clareza o que pode estar faltando."], ["04","Você escolhe","Na clínica ou em casa, conforme disponibilidade."], ["05","Aplicação cuidadosa","Triagem, Buzzy, acompanhamento e registro."],
    ].map(([number,title,text]) => <article key={number} className="border-t-2 border-brand-lime pt-5"><span className="text-xs font-black text-brand-green">PASSO {number}</span><h3 className="mt-3 font-black text-brand-deep">{title}</h3><p className="mt-2 text-sm text-muted-foreground">{text}</p></article>)}</div></div></section>

    <section id="formulario" className="bg-brand-soft py-24"><div className="section-shell grid gap-12 lg:grid-cols-[.85fr_1.15fr]"><div><SectionTitle>Quer entender melhor a sua vacinação?</SectionTitle><p className="leading-relaxed text-muted-foreground">Preencha os dados e nossa equipe entrará em contato pelo WhatsApp para analisar a caderneta e explicar as próximas etapas.</p><div className="mt-8 space-y-4 text-sm font-bold text-brand-deep"><p className="flex gap-3"><Clock3 className="size-5 text-brand-green"/>Atendimento claro e sem pressa</p><p className="flex gap-3"><ShieldCheck className="size-5 text-brand-green"/>Orientação feita pela equipe da clínica</p></div></div><form onSubmit={submitForm} noValidate className="rounded-lg border border-border bg-card p-6 shadow-sm sm:p-8"><div className="grid gap-5">{formFields.map(([name,label,type,placeholder]) => <label key={name} className="block text-sm font-bold text-brand-deep">{label}<input name={name} type={type} placeholder={placeholder} maxLength={name === "email" ? 255 : 120} aria-invalid={Boolean(errors[name])} className="focus-ring mt-2 min-h-12 w-full rounded-md border border-input bg-background px-4 font-normal text-foreground placeholder:text-muted-foreground"/>{errors[name] && <span className="mt-1 block text-xs text-destructive">{errors[name]}</span>}</label>)}</div><button type="submit" className="focus-ring mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-deep px-6 text-sm font-extrabold text-primary-foreground transition-transform hover:-translate-y-0.5">Quero analisar minha caderneta <ArrowRight className="size-4"/></button><p className="mt-4 text-xs italic text-muted-foreground">O preenchimento não garante automaticamente o agendamento. A vacinação domiciliar é avaliada conforme região e disponibilidade.</p></form></div></section>

    <section id="duvidas" className="py-24"><div className="section-shell max-w-4xl"><SectionTitle>Informação também é cuidado.</SectionTitle><div className="divide-y divide-border border-y border-border">{faqs.map(([question,answer]) => <details key={question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-extrabold text-brand-deep">{question}<ChevronDown className="size-5 shrink-0 transition-transform group-open:rotate-180"/></summary><p className="max-w-3xl pt-3 leading-relaxed text-muted-foreground">{answer}</p></details>)}</div></div></section>

    <section className="bg-brand-green py-20 text-primary-foreground"><div className="section-shell text-center"><h2 className="mx-auto max-w-4xl text-3xl font-black leading-tight sm:text-5xl">Proteger quem você ama não deveria ser mais uma tarefa complicada.</h2><p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-primary-foreground/85">Fale com nossos especialistas, envie a foto da caderneta e descubra com clareza o que sua família precisa. Na clínica ou em casa, com segurança e acolhimento.</p><div className="mt-8"><CTA>Quero analisar minha caderneta</CTA></div><p className="mt-8 text-sm font-bold">Gran Vacinas — Imunidade e confiança em cada vacina.</p></div></section>

    <footer className="bg-brand-deep py-14 text-primary-foreground"><div className="section-shell grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]"><div><img src={logoAsset.url} alt="Gran Vacinas" className="h-14 w-auto brightness-0 invert"/><p className="mt-5 max-w-md text-sm leading-relaxed text-primary-foreground/70">Clínica de vacinas na Granja Viana, com atendimento humanizado, vacinação domiciliar e programas corporativos.</p></div><div className="space-y-3 text-sm"><h3 className="font-black text-brand-lime">Fale com a gente</h3><a className="flex gap-2" href="tel:+551146123464"><Phone className="size-4"/>(11) 4612-3464</a><a className="flex gap-2" href="https://instagram.com/gran.vacinas"><Instagram className="size-4"/>@gran.vacinas</a><a className="flex gap-2" href="mailto:contato@granvacinas.com.br"><Mail className="size-4"/>Contato</a></div><div className="text-sm"><h3 className="font-black text-brand-lime">Onde estamos</h3><p className="mt-3 flex gap-2 leading-relaxed"><MapPin className="mt-0.5 size-4 shrink-0"/>Open Mall The Square — Rod. Raposo Tavares, Km 22, Piso Térreo, Mezanino 801, Cotia</p></div></div><div className="section-shell mt-10 flex flex-col gap-3 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60 md:flex-row md:justify-between"><p>RT: Dra. Nathalia Cerri Vieira — Clínico Geral — CRM 115137</p><p>Política de Privacidade | Termos de Uso · © 2026 Gran Vacinas</p></div></footer>
  </main>;
}