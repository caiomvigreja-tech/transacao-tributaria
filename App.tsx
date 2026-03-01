import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck, 
  TrendingDown, 
  Scale, 
  Calculator, 
  BarChart3,
  MessageCircle,
  ArrowRight,
  Menu,
  X,
  MapPin,
  Calendar
} from 'lucide-react';
import { FormData, FaqItem } from './types';

const App: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    whatsapp: '',
    valorDivida: ''
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission logic
    alert('Obrigado! O Dr. Filipe Carvalho e a sua equipe entrarão em contato em breve.');
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('contato');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const clientLogos = [
    "https://advocaciafilipecarvalho.com.br/wp-content/uploads/2025/07/logotipo.png",
    "https://advocaciafilipecarvalho.com.br/wp-content/uploads/2025/07/ddc-transportes-logo.webp",
    "https://advocaciafilipecarvalho.com.br/wp-content/uploads/2025/10/logo-2024.png",
    "https://advocaciafilipecarvalho.com.br/wp-content/uploads/2025/07/logo-2102162800-1724351239-091048064c8d0a9aa2987981afef63641724351239-320-0.webp",
    "https://advocaciafilipecarvalho.com.br/wp-content/uploads/2025/08/Imagem-do-WhatsApp-de-2025-07-29-as-14.57.27_fd32b453.jpg",
    "https://advocaciafilipecarvalho.com.br/wp-content/uploads/2026/01/logoibl_221x73.png"
  ];

  const mainLogo = "https://advocaciafilipecarvalho.com.br/wp-content/uploads/2026/01/Logo-6.png";
  const officePhoto = "https://i.ibb.co/VYbgj779/Captura-de-Tela-2026-02-06-a-s-01-15-21.png";

  const navLinks = [
    { id: 'algoritmo', label: 'Como Funciona' },
    { id: 'beneficios', label: 'Diferenciais' },
    { id: 'escritorio', label: 'O Especialista' },
    { id: 'faq', label: 'Dúvidas' }
  ];

  const faqItems: FaqItem[] = [
    { 
      q: "Posso trocar um parcelamento por um transação com desconto?", 
      a: "Sim, e muitas vezes é o melhor caminho. Migramos parcelamentos caros para acordos com descontos que não existiam na época da primeira adesão." 
    },
    { 
      q: "Posso usar prejuízo fiscal na transação?", 
      a: "Depende do edital vigente, mas em diversas modalidades é possível usar créditos para abater até 70% do saldo após o pagamento da entrada." 
    },
    { 
      q: "Isso é um REFIS?", 
      a: "Não. O Refis é um parcelamento geral. A Transação é um acordo personalizado onde provamos sua capacidade real de pagamento para obter benefícios exclusivos." 
    },
    {
      q: "Existe valor mínimo?",
      a: "Não há um valor mínimo legal, mas nossa estratégia gera maior impacto financeiro em passivos tributários superiores a R$ 100 mil."
    },
    { 
      q: "Vou atrair fiscalização?", 
      a: "Não. A transação é um direito legal e uma política de estímulo à conformidade da própria Procuradoria para reduzir o contencioso." 
    },
    { 
      q: "Serve para qualquer regime?", 
      a: "Sim. Atendemos empresas do Lucro Real, Presumido e Simples Nacional, adequando a estratégia às regras específicas de cada regime tributário." 
    },
    { 
      q: "Como funciona o diagnóstico gratuito?", 
      a: "Nossa equipe analisa o seu Rating na PGFN e identifica oportunidades de economia sem custo inicial. Você só avança se os números forem vantajosos." 
    }
  ];

  const benefits = [
    {
      icon: <Calculator size={32} />,
      title: "Inteligência Financeira",
      text: "Utilizamos créditos de Prejuízo Fiscal e Base Negativa de CSLL para amortizar o saldo devedor. É o uso inteligente de ativos da empresa para proteger o seu dinheiro vivo."
    },
    {
      icon: <TrendingDown size={32} />,
      title: "Modernização de Parcelamentos",
      text: "Se o seu parcelamento atual está sufocando o seu fluxo de caixa, nós estruturamos a migração para modalidades de transação muito mais vantajosas."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Blindagem do Patrimônio",
      text: "Vinculamos a regularização fiscal à proteção dos sócios. Resolvemos o problema no CNPJ para garantir que a dívida nunca alcance o patrimônio da sua família."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden selection:bg-emerald-500 selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 py-3 shadow-xl transition-all duration-300">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <img 
              src={mainLogo} 
              alt="Filipe Carvalho Advocacia Empresarial" 
              className="h-10 lg:h-14 w-auto object-contain transition-transform group-hover:scale-105 duration-300"
            />
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            {navLinks.map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`} 
                className="text-[11px] xl:text-xs font-bold text-slate-300 hover:text-emerald-400 transition-colors uppercase tracking-[0.15em] relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-emerald-400 after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
            
            <button 
              onClick={scrollToForm}
              className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-6 py-2.5 rounded-full text-xs font-bold hover:from-emerald-500 hover:to-emerald-400 transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 uppercase tracking-widest transform hover:-translate-y-0.5"
            >
              Falar com Especialista
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 p-4 shadow-2xl flex flex-col space-y-4">
             {navLinks.map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold text-slate-300 hover:text-emerald-400 uppercase tracking-widest"
              >
                {item.label}
              </a>
            ))}
            <button 
              onClick={scrollToForm}
              className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white w-full py-3 rounded-lg text-xs font-bold uppercase tracking-widest"
            >
              Falar com Especialista
            </button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 lg:pt-24 pb-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 L100 0 L100 100 Z" fill="currentColor" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-20">
            <div className="lg:w-3/5 text-center lg:text-left">
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest">
                Recuperação Fiscal Empresarial
              </div>
              
              {/* Added text-balance for better headline flow */}
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-8 tracking-tight text-balance">
                Transação Tributária: <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-emerald-500">Reduza o peso das dívidas fiscais</span> e recupere o fôlego financeiro.
              </h1>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto lg:mx-0">
                <div className="bg-slate-800/40 border border-slate-700/50 p-4 rounded-2xl flex flex-col items-center lg:items-start hover:bg-slate-800/60 transition-colors backdrop-blur-sm group">
                  <div className="text-3xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">Até 70%</div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">de Desconto</div>
                  <p className="text-sm lg:text-base text-slate-300 text-center lg:text-left leading-relaxed font-medium">
                    Garanta reduções expressivas em multas e juros.
                  </p>
                </div>
                
                <div className="bg-slate-800/40 border border-slate-700/50 p-4 rounded-2xl flex flex-col items-center lg:items-start hover:bg-slate-800/60 transition-colors backdrop-blur-sm group">
                  <div className="text-3xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">145 Meses</div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">para Pagar</div>
                  <p className="text-sm lg:text-base text-slate-300 text-center lg:text-left leading-relaxed font-medium">
                    Parcele o saldo com prazo estendido.
                  </p>
                </div>
                
                <div className="bg-slate-800/40 border border-slate-700/50 p-4 rounded-2xl flex flex-col items-center lg:items-start hover:bg-slate-800/60 transition-colors backdrop-blur-sm group">
                  <div className="text-3xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">Inteligência</div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Tributária</div>
                  <p className="text-sm lg:text-base text-slate-300 text-center lg:text-left leading-relaxed font-medium">
                    Quite a dívida sem esvaziar o caixa da empresa.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-2/5 w-full max-w-md">
              <div id="contato" className="bg-white p-6 lg:p-8 rounded-2xl shadow-2xl text-slate-800 border border-slate-100 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-4 py-1 rounded-md text-xs font-bold uppercase tracking-wider shadow-lg whitespace-nowrap">
                  Prioridade
                </div>
                <h3 className="text-2xl font-bold mb-2 text-center text-slate-900">Diagnóstico Gratuito</h3>
                <p className="text-center text-slate-500 text-sm mb-6">Preencha para análise de viabilidade</p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-1">Nome Completo</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Ex: João Silva"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-sm font-medium"
                      onChange={(e) => setFormData({...formData, nome: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-1">WhatsApp Profissional</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="(00) 00000-0000"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-sm font-medium"
                      onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2">Valor aproximado da dívida</label>
                    <div className="grid grid-cols-1 gap-2">
                      {['R$ 100k a R$ 500k', 'R$ 500k a R$ 2 milhões', 'Acima de R$ 2 milhões'].map((value) => (
                        <label key={value} className="flex items-center gap-3 p-3 border border-slate-200 rounded-lg cursor-pointer hover:bg-emerald-50 hover:border-emerald-200 transition-all group">
                          <input 
                            type="radio" 
                            name="valorDivida" 
                            value={value} 
                            required
                            className="text-emerald-600 focus:ring-emerald-500 border-slate-300"
                            onChange={(e) => setFormData({...formData, valorDivida: e.target.value})}
                          />
                          <span className="text-sm font-semibold text-slate-600 group-hover:text-slate-900">{value}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-medium py-4 rounded-xl transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 text-base uppercase tracking-wider mt-2 group"
                  >
                    Solicitar Diagnóstico
                    <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-[10px] text-center text-slate-400 mt-4 leading-relaxed flex items-center justify-center gap-1">
                    <ShieldCheck size={12} />
                    Dados protegidos conforme LGPD.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof & Logos Section */}
      <section className="bg-white border-b border-slate-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8">
                <div className="flex flex-col">
                  <span className="text-5xl font-extrabold text-slate-900 tracking-tighter">100 Mi+</span>
                  <span className="text-xs uppercase tracking-widest text-emerald-600 font-bold mt-1">Em dívidas renegociadas</span>
                </div>
                <div className="hidden sm:block h-16 w-px bg-slate-200"></div>
                <div className="flex flex-col">
                  <span className="text-5xl font-extrabold text-slate-900 tracking-tighter">Estratégia</span>
                  <span className="text-xs uppercase tracking-widest text-emerald-600 font-bold mt-1">Soluções Personalizadas</span>
                </div>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed italic border-l-4 border-emerald-500 pl-6 bg-slate-50 py-4 pr-4 rounded-r-lg text-pretty">
                "Nossa atuação vai além do CNPJ: devolvemos a conformidade fiscal para as empresas e a tranquilidade para a vida pessoal dos sócios, protegendo patrimônios construídos em décadas de trabalho."
              </p>
            </div>
            
            <div>
               <div className="grid grid-cols-2 md:grid-cols-3 gap-6 items-center justify-items-center opacity-70">
                {clientLogos.map((url, index) => (
                  <div key={index} className="p-4 flex items-center justify-center w-full h-24 grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110">
                    <img 
                      src={url} 
                      alt={`Logo Cliente ${index + 1}`} 
                      className="max-h-16 w-full object-contain mix-blend-multiply"
                      onError={(e) => { 
                        const target = e.target as HTMLImageElement;
                        target.parentElement!.style.display = 'none'; 
                      }}
                    />
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 border border-dashed border-slate-300 px-4 py-3 rounded-lg mt-6 w-full justify-center bg-slate-50/50">
                <ShieldCheck className="text-slate-400" size={16} />
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 text-center">Atuação em Indústria, Comércio e Serviços</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Algorithm CAPAG Section */}
      <section id="algoritmo" className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-slate-900 leading-tight text-balance">
                O Sistema da Receita Federal pode estar <span className="text-red-600">bloqueando</span> o seu acesso a <strong className="text-slate-900 decoration-emerald-500 underline decoration-4 underline-offset-4">descontos de até 70%</strong> e <strong className="text-slate-900 decoration-emerald-500 underline decoration-4 underline-offset-4">prazos de até 12 anos</strong> para pagar suas dívidas fiscais.
              </h2>
              
              <p className="text-slate-500 text-lg max-w-2xl mx-auto text-pretty">
                A PGFN e a Receita Federal utilizam um sistema automático para medir a sua <span className="font-bold text-slate-900">Capacidade de Pagamento</span> e definir o seu Rating.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Problem Card */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-all flex flex-col">
                <div className="absolute top-0 right-0 w-2 h-full bg-red-400"></div>
                <div className="flex items-center gap-3 mb-6 text-red-500">
                  <div className="p-3 bg-red-50 rounded-lg">
                    <TrendingDown size={28} />
                  </div>
                  <h4 className="font-bold text-xl text-slate-800">Sistema Automático</h4>
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed flex-grow text-pretty">
                  Se o seu faturamento bruto é alto, o governo atribui um <strong>Rating de alta capacidade</strong>, bloqueando descontos. O problema? Faturamento não é lucro.
                </p>
                <ul className="space-y-3 mt-auto">
                  <li className="flex items-center gap-3 text-sm text-slate-500">
                    <div className="h-2 w-2 rounded-full bg-red-400 shrink-0"></div>
                    Ignora custos operacionais
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-500">
                    <div className="h-2 w-2 rounded-full bg-red-400 shrink-0"></div>
                    Desconsidera passivo bancário
                  </li>
                </ul>
              </div>

              {/* Solution Card */}
              <div className="bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-800 relative overflow-hidden text-white group transform md:-translate-y-4 md:hover:-translate-y-6 transition-all duration-300 flex flex-col">
                <div className="absolute top-0 right-0 w-2 h-full bg-emerald-400"></div>
                <div className="flex items-center gap-3 mb-6 text-emerald-400">
                  <div className="p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                    <BarChart3 size={28} />
                  </div>
                  <h4 className="font-bold text-xl text-white">Nossa Solução</h4>
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed flex-grow text-pretty">
                  Auditamos os seus números e contestamos o Rating automático com provas documentais para buscar o reenquadramento num <strong>Score favorável à transação</strong>.
                </p>
                <ul className="space-y-3 mt-auto">
                  <li className="flex items-center gap-2 text-sm text-emerald-100 font-medium bg-white/5 p-2 rounded-lg">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    Acesso a descontos máximos em multas
                  </li>
                  <li className="flex items-center gap-2 text-sm text-emerald-100 font-medium bg-white/5 p-2 rounded-lg">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    Condições de pagamento ajustadas
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900 text-balance">Por que grandes grupos escolhem nossa estratégia?</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg text-pretty">
              Diferente de escritórios tradicionais, a nossa entrega une o Direito Tributário à análise financeira profunda.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-2xl transition-all duration-300 border border-slate-100 group flex flex-col">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300 shrink-0">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-800">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm lg:text-base text-pretty">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 bg-slate-950 text-white border-y border-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-balance">Esta solução foi desenhada para empresas que enfrentam:</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Asfixia Financeira", desc: "Parcelas de acordos antigos que consomem todo o lucro da operação." },
                { title: "Risco de Execução", desc: "Intimações de penhora, bloqueios de contas ou risco iminente de perda de bens." },
                { title: "Rating Incorreto", desc: "Empresas classificadas como \"capazes de pagar\", mas que possuem margens reais apertadas." },
                { title: "Necessidade de CND", desc: "Empresas que precisam da Certidão Negativa para licitações ou financiamentos." },
                { title: "Acordos Incompletos", desc: "Fez a transação por adesão, mas não incluiu prejuízo fiscal ou não individualizou o desconto." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-800/80 transition-all group">
                  <div className="mt-1 shrink-0">
                    <CheckCircle2 className="text-slate-600 group-hover:text-emerald-500 h-6 w-6 transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-slate-200 group-hover:text-white">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed text-pretty">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expert Section */}
      <section id="escritorio" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative group">
              <div className="absolute -inset-4 bg-emerald-100 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-50">
                <img 
                  src="https://i.ibb.co/yBkzknLP/Filipe-Carvalho.webp" 
                  alt="Dr. Filipe Carvalho" 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="prose prose-slate text-slate-700 leading-relaxed text-lg space-y-6">
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-xl">Dr. Filipe Carvalho</h3>
                  <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-4">Fundador</p>
                  <p className="text-base text-slate-600 leading-relaxed">
                    Sócio e fundador do escritório Filipe Carvalho Advocacia Empresarial Tributária, especializado em Planejamento Tributário e Estruturação Empresarial. Especialista em Planejamento Tributário pela <strong>PUC/RS</strong>, pós-graduado em Direito Tributário pela <strong>EBRADI</strong> e em Ciências Contábeis pela <strong>PUC/PR</strong>. Graduado em Ciências Jurídicas pela UNIRP, atualmente integra o Curso de Atualização em Reforma Tributária da <strong>USP - Ribeirão Preto</strong>. Atua com assessoria empresarial, oferecendo soluções estratégicas em tributação, estruturação de negócios e planejamento societário internacional.
                  </p>
                </div>
                
                <p className="font-semibold text-slate-800 bg-emerald-50 p-6 border-l-4 border-emerald-500 rounded-r-xl italic shadow-sm text-pretty text-base lg:text-lg">
                  "Nós não apenas protocolamos pedidos; nós auditamos o passivo para garantir que a sua empresa pague o mínimo legal possível, preservando o fluxo de caixa para o crescimento."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <div className="w-full h-[600px] relative bg-slate-100 group">
        {/* Iframe with Grayscale Logic */}
        <iframe 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          loading="lazy" 
          allowFullScreen 
          referrerPolicy="no-referrer-when-downgrade"
          src="https://maps.google.com/maps?q=Rua%20Duarte%20Pacheco%2C%2090%20-%20S%C3%A3o%20Jos%C3%A9%20do%20Rio%20Preto%2FSP&t=&z=17&ie=UTF8&iwloc=&output=embed"
          title="Localização Unidade I"
          className="grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out absolute inset-0 w-full h-full"
        ></iframe>
        
        {/* Card Positioned on Left to avoid covering center pin */}
        <div className="absolute bottom-4 left-4 right-4 md:top-1/2 md:bottom-auto md:left-20 lg:left-32 md:right-auto md:-translate-y-1/2 w-auto md:w-[450px] md:max-w-md z-10">
           <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-transform duration-300 hover:scale-[1.01]">
             <div className="relative h-64">
               <img 
                 src={officePhoto} 
                 alt="Fachada Escritório Filipe Carvalho" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
               <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-1">Nossa Sede</p>
                  <h3 className="font-bold text-2xl">Unidade I — Matriz</h3>
               </div>
             </div>
             
             <div className="p-8">
               <div className="flex items-start gap-5">
                  <div className="p-3 bg-slate-50 rounded-lg shrink-0 border border-slate-100 mt-1">
                    <MapPin className="text-emerald-600 h-6 w-6" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-base text-slate-600 leading-relaxed mb-6">
                      Rua Duarte Pacheco, 90<br/>
                      Higienópolis<br/>
                      São José do Rio Preto/SP
                    </p>
                    <a 
                      href="https://maps.google.com?q=Rua+Duarte+Pacheco,+90+-+São+José+do+Rio+Preto/SP" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-sm font-bold text-white bg-slate-900 px-6 py-3 rounded-lg hover:bg-emerald-600 transition-colors uppercase tracking-wider w-full justify-center md:w-auto"
                    >
                      Traçar Rota <ArrowRight size={16} />
                    </a>
                  </div>
               </div>
             </div>
           </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center text-slate-900">FAQ – Dúvidas Frequentes</h2>
          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-100 overflow-hidden">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-6 flex justify-between items-center transition-colors"
                >
                  <span className={`font-bold pr-4 ${openFaq === idx ? 'text-emerald-600' : 'text-slate-700'} text-balance`}>{item.q}</span>
                  {openFaq === idx ? <ChevronUp className="text-emerald-500 shrink-0" /> : <ChevronDown className="text-slate-400 shrink-0" />}
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-50 pt-4 text-sm lg:text-base text-pretty">
                    {item.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-24 bg-slate-900 text-white text-center relative overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 max-w-4xl mx-auto text-balance">Não permita que o passivo tributário comprometa o futuro do seu negócio.</h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto text-pretty">
            Bloqueios judiciais e juros abusivos não esperam. Antecipe-se ao Fisco com uma estratégia profissional e proteja o seu legado.
          </p>
          <button 
            onClick={scrollToForm}
            className="group bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold px-10 py-5 rounded-full text-lg lg:text-xl transition-all shadow-2xl shadow-emerald-500/20 hover:shadow-emerald-500/40 flex items-center gap-3 mx-auto uppercase tracking-wide"
          >
            Quero meu diagnóstico fiscal
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-500 py-16 border-t border-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 mb-12 items-start">
            <div>
              <div className="mb-6">
                <img 
                  src={mainLogo} 
                  alt="Filipe Carvalho Advocacia Empresarial" 
                  className="h-12 w-auto object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
              <p className="text-sm leading-relaxed max-w-xs text-slate-400 text-pretty">
                Estratégia jurídica focada em resultados empresariais, conformidade fiscal e proteção patrimonial dos sócios.
              </p>
            </div>
            <div>
              <h5 className="text-white font-bold mb-6 uppercase text-xs tracking-[0.2em]">Onde estamos</h5>
              <div className="space-y-4">
                <p className="text-sm text-slate-400 leading-relaxed group">
                  <strong className="text-white block mb-1 group-hover:text-emerald-500 transition-colors">Unidade I — S. J. do Rio Preto/SP</strong>
                  Rua Duarte Pacheco, 90
                </p>
                <p className="text-sm text-slate-400 leading-relaxed group">
                  <strong className="text-white block mb-1 group-hover:text-emerald-500 transition-colors">Unidade II — São Paulo/SP</strong>
                  Rua Haddock Lobo, 1307 - Conj. 63
                </p>
              </div>
            </div>
            <div className="flex flex-col md:items-end">
              <h5 className="text-white font-bold mb-6 uppercase text-xs tracking-[0.2em]">Atendimento</h5>
              <a href="#" className="flex items-center gap-3 mb-4 bg-slate-900 px-5 py-3 rounded-lg border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-800 transition-all group w-fit">
                <MessageCircle size={20} className="text-emerald-500 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-white font-medium">WhatsApp Profissional</span>
              </a>
              <p className="text-sm text-slate-400">Segunda a Sexta, das 8h às 17h</p>
            </div>
          </div>
          <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-slate-600">
            <p>&copy; {new Date().getFullYear()} Escritório Filipe Carvalho. Todos os Direitos Reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;