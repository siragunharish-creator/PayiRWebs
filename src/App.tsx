import React, { useState, useEffect, useRef, useId } from 'react';
import {
  Globe,
  MessageSquare,
  MapPin,
  TrendingUp,
  Sparkles,
  Phone,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Smartphone,
  Share2,
  CalendarCheck,
  ShieldCheck,
  Cpu,
  Store,
  Scissors,
  Coffee,
  Car,
  Stethoscope,
  HardHat,
  Menu,
  X,
  Check,
  Zap,
  Users,
  Play,
  Pause,
  RotateCcw,
  Eye,
  Activity,
  CheckCircle
} from 'lucide-react';

// Highly detailed vector PR monogram with stylized sprout stem, botanical circuit roots, and hover bloom
export const PRBrandMark: React.FC<{
  size?: number;
  glow?: boolean;
  className?: string;
  showWordmark?: boolean;
}> = ({ size = 48, glow = true, className = '', showWordmark = false }) => {
  const gradId = useId().replace(/:/g, '');

  return (
    <div className={`inline-flex items-center gap-3 select-none group cursor-pointer ${className}`}>
      <div 
        className="relative flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105"
        style={{ width: size, height: size }}
      >
        {glow && (
          <div className="absolute -inset-1 bg-gradient-to-tr from-emerald-500/40 via-teal-400/30 to-lime-400/20 rounded-2xl blur-md opacity-75 group-hover:opacity-100 transition-opacity" />
        )}
        <svg 
          viewBox="0 0 120 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-full relative z-10 drop-shadow-md"
        >
          <defs>
            <linearGradient id={`${gradId}-bg`} x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#064E3B" />
              <stop offset="60%" stopColor="#063E30" />
              <stop offset="100%" stopColor="#04271E" />
            </linearGradient>
            <linearGradient id={`${gradId}-leaf`} x1="45" y1="30" x2="75" y2="50" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#34D399" />
              <stop offset="50%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
            <linearGradient id={`${gradId}-stroke`} x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#34D399" />
              <stop offset="100%" stopColor="#0D9488" />
            </linearGradient>
          </defs>

          {/* Squircle Background Container */}
          <rect width="120" height="120" rx="30" fill={`url(#${gradId}-bg)`} stroke="rgba(52, 211, 153, 0.3)" strokeWidth="1.5" />

          {/* Subtle Cyber Geometry Nodes */}
          <circle cx="100" cy="24" r="1.5" fill="#34D399" opacity="0.6" />
          <circle cx="20" cy="96" r="1.5" fill="#34D399" opacity="0.6" />
          <line x1="90" y1="24" x2="100" y2="24" stroke="#34D399" strokeWidth="0.8" opacity="0.4" />

          {/* Letter P with sharp geometric cuts */}
          <path
            d="M 28 32 H 52 C 61 32 67 37 67 45.5 C 67 54 61 59 52 59 H 41 V 88 H 28 V 32 Z M 41 43 V 49 H 50 C 53.5 49 55.5 47.5 55.5 45.8 C 55.5 44.2 53.5 43 50 43 H 41 Z"
            fill="#FFFFFF"
            className="transition-all duration-300 group-hover:fill-emerald-100"
          />

          {/* Letter R */}
          <path
            d="M 69 32 H 88 C 96.5 32 101.5 36.5 101.5 44 C 101.5 50.2 97.5 54.5 91.5 55.5 L 103 88 H 89.5 L 79.5 58.5 H 74 V 88 H 69 V 32 Z M 74 42 V 50 H 86 C 89 50 90.8 48.5 90.8 46 C 90.8 43.5 89 42 86 42 H 74 Z"
            fill="#FFFFFF"
            className="transition-all duration-300 group-hover:fill-emerald-100"
          />

          {/* Center Sprout Stem & Leaf Growth (The Payir Essence) */}
          <g className="transition-transform duration-500 origin-center group-hover:scale-105">
            {/* Central Sprout Stem */}
            <path
              d="M 59 47 V 73"
              stroke="#FFFFFF"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* Left Leaf */}
            <path
              d="M 59 48 C 51 46 44 41 46 33 C 53 34 58 40 59 48 Z"
              fill={`url(#${gradId}-leaf)`}
              stroke="#FFFFFF"
              strokeWidth="1.2"
            />
            {/* Right Leaf */}
            <path
              d="M 59 48 C 67 46 74 41 72 33 C 65 34 60 40 59 48 Z"
              fill={`url(#${gradId}-leaf)`}
              stroke="#FFFFFF"
              strokeWidth="1.2"
            />
            {/* Roots extending downward as digital circuitry */}
            <path
              d="M 59 73 C 58 79 50 83 45 88"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M 59 73 C 60 79 68 83 73 88"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M 59 73 V 91"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M 55 81 C 52 84 48 85 43 84"
              stroke="#FFFFFF"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M 63 81 C 66 84 70 85 75 84"
              stroke="#FFFFFF"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </g>

          {/* Micro Growth Nodes */}
          <circle cx="45" cy="88" r="1.5" fill="#34D399" />
          <circle cx="73" cy="88" r="1.5" fill="#34D399" />
          <circle cx="59" cy="91" r="1.5" fill="#34D399" />
        </svg>
      </div>

      {showWordmark && (
        <div className="flex flex-col leading-tight">
          <div className="flex items-center gap-1.5">
            <span className="text-xl font-black tracking-tight text-white">
              PAYIR<span className="text-emerald-400">WEBS</span>
            </span>
            <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              PR
            </span>
          </div>
          <span className="text-[10px] font-medium tracking-wider uppercase text-emerald-300/80">
            Plant Presence • Grow Business
          </span>
        </div>
      )}
    </div>
  );
};

interface HeroAnimationProps {
  onStepChange?: (step: number) => void;
}

export const HeroPRGrowthExperience: React.FC<HeroAnimationProps> = ({ onStepChange }) => {
  const [currentStep, setCurrentStep] = useState<number>(6); // Default 6 (fully completed) or scrubbable
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const stepDescriptions = [
    { step: 1, title: 'The Beginning', desc: 'Every business starts with a small seed of an idea or local store.' },
    { step: 2, title: 'PR Monogram', desc: 'Geometric formation of P and R as the brand anchor.' },
    { step: 3, title: 'Botanical Tech Growth', desc: 'Abstract digital sprout emerging through the PR architecture.' },
    { step: 4, title: 'Digital Circuit Roots', desc: 'Connecting channels: Maps, WhatsApp, Google, and Web.' },
    { step: 5, title: 'Radial Expansion', desc: 'Network pulses radiating customer enquiries to your doorstep.' },
    { step: 6, title: 'PayirWebs System', desc: 'Full digital identity live: Website • Maps • Leads • Growth.' }
  ];

  // Auto-play timeline loop
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentStep(prev => (prev >= 6 ? 1 : prev + 1));
    }, 2800);
    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    if (onStepChange) onStepChange(currentStep);
  }, [currentStep, onStepChange]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full aspect-square max-w-[500px] mx-auto rounded-3xl bg-slate-950/80 border border-emerald-900/40 p-6 flex flex-col items-center justify-between shadow-2xl backdrop-blur-xl overflow-hidden group select-none"
    >
      {/* Background Interactive Ambient Glow */}
      <div 
        className="absolute w-72 h-72 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${mousePos.x * 60}px, ${mousePos.y * 60}px)`
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08)_0,transparent_70%)] pointer-events-none" />

      {/* Top Animation Stage Header */}
      <div className="w-full flex items-center justify-between z-20">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] font-mono tracking-wider text-emerald-300 uppercase">
            Stage 0{currentStep} / 06 : {stepDescriptions[currentStep - 1].title}
          </span>
        </div>
        <div className="flex items-center gap-1.5 bg-slate-900/90 border border-slate-800 rounded-lg p-1">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1 rounded text-slate-400 hover:text-emerald-400 transition-colors"
            title={isPlaying ? "Pause Timeline" : "Play Timeline"}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={() => { setCurrentStep(1); setIsPlaying(true); }}
            className="p-1 rounded text-slate-400 hover:text-emerald-400 transition-colors"
            title="Restart Animation"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Centerpiece SVG / Animation Canvas */}
      <div className="relative w-full flex-1 flex items-center justify-center my-4">
        
        {/* Step 1: The Small Glowing Seed Point */}
        {currentStep === 1 && (
          <div className="flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-700">
            <div className="relative">
              <div className="w-6 h-6 rounded-full bg-emerald-400 shadow-[0_0_25px_#10B981] animate-ping opacity-75" />
              <div className="absolute inset-0 w-6 h-6 rounded-full bg-white shadow-[0_0_15px_#34D399]" />
            </div>
            <p className="mt-8 text-sm font-semibold text-emerald-200 tracking-wide max-w-[240px]">
              &ldquo;Every business starts with a single seed.&rdquo;
            </p>
            <span className="mt-1 text-[11px] font-mono text-emerald-400/70">
              Local shop • Craft • Ambition
            </span>
          </div>
        )}

        {/* Steps 2 through 6: Animated SVG PR Monogram with Progressive Unveiling */}
        {currentStep >= 2 && (
          <div className="relative w-64 h-64 flex items-center justify-center">
            
            {/* Step 4 & 5 Orbiting Network Nodes */}
            {currentStep >= 4 && (
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 256 256">
                {/* Circuit Laser Connecting Lines */}
                <line x1="128" y1="128" x2="35" y2="45" stroke="#34D399" strokeWidth="1" strokeDasharray="3 3" opacity={currentStep >= 5 ? 0.9 : 0.4} />
                <line x1="128" y1="128" x2="220" y2="50" stroke="#34D399" strokeWidth="1" strokeDasharray="3 3" opacity={currentStep >= 5 ? 0.9 : 0.4} />
                <line x1="128" y1="128" x2="235" y2="135" stroke="#34D399" strokeWidth="1" strokeDasharray="3 3" opacity={currentStep >= 5 ? 0.9 : 0.4} />
                <line x1="128" y1="128" x2="215" y2="215" stroke="#34D399" strokeWidth="1" strokeDasharray="3 3" opacity={currentStep >= 5 ? 0.9 : 0.4} />
                <line x1="128" y1="128" x2="40" y2="215" stroke="#34D399" strokeWidth="1" strokeDasharray="3 3" opacity={currentStep >= 5 ? 0.9 : 0.4} />
                <line x1="128" y1="128" x2="20" y2="130" stroke="#34D399" strokeWidth="1" strokeDasharray="3 3" opacity={currentStep >= 5 ? 0.9 : 0.4} />

                {/* Concentric Glow Wave on Step 5+ */}
                {currentStep >= 5 && (
                  <circle cx="128" cy="128" r="95" stroke="#10B981" strokeWidth="1" opacity="0.3" fill="none" className="animate-pulse" />
                )}
              </svg>
            )}

            {/* Orbiting Satellite Badges */}
            {currentStep >= 4 && (
              <>
                {/* Website Node */}
                <div className="absolute -top-1 -left-1 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/90 border border-emerald-500/50 text-[10px] font-bold text-emerald-300 shadow-lg animate-in fade-in duration-500">
                  <Globe className="w-3 h-3 text-emerald-400" />
                  <span>Website</span>
                </div>

                {/* Google Maps Node */}
                <div className="absolute -top-1 -right-2 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/90 border border-teal-500/50 text-[10px] font-bold text-teal-300 shadow-lg animate-in fade-in duration-500">
                  <MapPin className="w-3 h-3 text-teal-400" />
                  <span>Google 4.9★</span>
                </div>

                {/* WhatsApp Direct Chat Node */}
                <div className="absolute top-1/2 -right-8 -translate-y-1/2 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950 border border-emerald-400 text-[10px] font-bold text-emerald-300 shadow-lg animate-in fade-in duration-500">
                  <MessageSquare className="w-3 h-3 text-emerald-400" />
                  <span>WhatsApp</span>
                </div>

                {/* Leads Node */}
                <div className="absolute -bottom-2 -right-2 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/90 border border-lime-500/50 text-[10px] font-bold text-lime-300 shadow-lg animate-in fade-in duration-500">
                  <TrendingUp className="w-3 h-3 text-lime-400" />
                  <span>Growth</span>
                </div>

                {/* Digital Card */}
                <div className="absolute -bottom-2 -left-2 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/90 border border-emerald-500/50 text-[10px] font-bold text-emerald-300 shadow-lg animate-in fade-in duration-500">
                  <Smartphone className="w-3 h-3 text-emerald-400" />
                  <span>Smart vCard</span>
                </div>

                {/* Customer Node */}
                <div className="absolute top-1/2 -left-8 -translate-y-1/2 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/90 border border-teal-500/50 text-[10px] font-bold text-teal-300 shadow-lg animate-in fade-in duration-500">
                  <Users className="w-3 h-3 text-teal-400" />
                  <span>Customers</span>
                </div>
              </>
            )}

            {/* Central Animated PR SVG Visual */}
            <div className={`relative transition-all duration-700 ${currentStep >= 5 ? 'scale-105' : 'scale-100'}`}>
              <svg viewBox="0 0 120 120" className="w-44 h-44 drop-shadow-[0_0_35px_rgba(16,185,129,0.35)]">
                <defs>
                  <linearGradient id="hero-grad-bg" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#064E3B" />
                    <stop offset="60%" stopColor="#043C2E" />
                    <stop offset="100%" stopColor="#021E17" />
                  </linearGradient>
                  <linearGradient id="hero-grad-leaf" x1="45" y1="30" x2="75" y2="50" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#34D399" />
                    <stop offset="100%" stopColor="#059669" />
                  </linearGradient>
                </defs>

                {/* Squircle base */}
                <rect width="120" height="120" rx="30" fill="url(#hero-grad-bg)" stroke="#34D399" strokeWidth={currentStep >= 5 ? 2.5 : 1.2} />

                {/* Step 2+: Animated Letter P */}
                <path
                  d="M 28 32 H 52 C 61 32 67 37 67 45.5 C 67 54 61 59 52 59 H 41 V 88 H 28 V 32 Z M 41 43 V 49 H 50 C 53.5 49 55.5 47.5 55.5 45.8 C 55.5 44.2 53.5 43 50 43 H 41 Z"
                  fill="#FFFFFF"
                  className="animate-in fade-in duration-700"
                />

                {/* Step 2+: Animated Letter R */}
                <path
                  d="M 69 32 H 88 C 96.5 32 101.5 36.5 101.5 44 C 101.5 50.2 97.5 54.5 91.5 55.5 L 103 88 H 89.5 L 79.5 58.5 H 74 V 88 H 69 V 32 Z M 74 42 V 50 H 86 C 89 50 90.8 48.5 90.8 46 C 90.8 43.5 89 42 86 42 H 74 Z"
                  fill="#FFFFFF"
                  className="animate-in fade-in duration-700"
                />

                {/* Step 3+: Botanical Tech Sprout */}
                {currentStep >= 3 && (
                  <g className="animate-in fade-in duration-500">
                    <path d="M 59 47 V 73" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
                    <path
                      d="M 59 48 C 51 46 44 41 46 33 C 53 34 58 40 59 48 Z"
                      fill="url(#hero-grad-leaf)"
                      stroke="#FFFFFF"
                      strokeWidth="1.2"
                    />
                    <path
                      d="M 59 48 C 67 46 74 41 72 33 C 65 34 60 40 59 48 Z"
                      fill="url(#hero-grad-leaf)"
                      stroke="#FFFFFF"
                      strokeWidth="1.2"
                    />
                  </g>
                )}

                {/* Step 4+: Circuit Roots */}
                {currentStep >= 4 && (
                  <g className="animate-in fade-in duration-500">
                    <path d="M 59 73 C 58 79 50 83 45 88" stroke="#34D399" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M 59 73 C 60 79 68 83 73 88" stroke="#34D399" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M 59 73 V 91" stroke="#34D399" strokeWidth="2.5" strokeLinecap="round" />
                    <circle cx="45" cy="88" r="2.2" fill="#FFFFFF" />
                    <circle cx="73" cy="88" r="2.2" fill="#FFFFFF" />
                    <circle cx="59" cy="91" r="2.2" fill="#FFFFFF" />
                  </g>
                )}
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* Step scrubber timeline control bar at bottom */}
      <div className="w-full z-20 space-y-2.5">
        <div className="flex items-center justify-between text-xs text-slate-300">
          <span className="font-semibold">{stepDescriptions[currentStep - 1].desc}</span>
        </div>

        {/* 6 Step Progress Dots */}
        <div className="flex items-center gap-1.5 w-full">
          {[1, 2, 3, 4, 5, 6].map((s) => (
            <button
              key={s}
              onClick={() => { setCurrentStep(s); setIsPlaying(false); }}
              className={`h-1.5 rounded-full transition-all flex-1 ${
                currentStep === s
                  ? 'bg-emerald-400 shadow-[0_0_8px_#34D399]'
                  : currentStep > s
                  ? 'bg-emerald-700'
                  : 'bg-slate-800'
              }`}
              title={`Jump to step ${s}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface ServiceEcosystemProps {
  onSelectService?: (serviceName: string) => void;
}

export const InteractiveServicesEcosystem: React.FC<ServiceEcosystemProps> = ({ onSelectService }) => {
  const [activeNode, setActiveNode] = useState<number>(0);

  const nodes = [
    {
      id: 0,
      title: 'Business Websites',
      tag: 'Speed & Conversion',
      icon: Globe,
      color: 'from-emerald-500 to-teal-400',
      badge: 'Mobile-First',
      headline: 'Lightning-Fast Custom Business Websites',
      description: 'Engineered specifically for local service providers. Loads in under a second, showcases your catalog, and prompts instant phone calls or chats.',
      specs: ['<1.2s Load Time on Mobile 4G', 'Zero Technical Maintenance Needed', 'Integrated Google Maps Embed', 'SEO Structured for Local Ranking'],
      previewMetric: '99/100 Google Speed Score'
    },
    {
      id: 1,
      title: 'Google Presence',
      tag: 'Local Map Dominance',
      icon: MapPin,
      color: 'from-cyan-500 to-blue-500',
      badge: 'Local SEO',
      headline: 'Google Business Profile & Map Ranking',
      description: 'Appear right at the top when people nearby search for your services. We set up, verify, and tune your keywords for maximum organic footfall.',
      specs: ['Google Maps Pin & Driving Directions', 'Automated 5-Star Review Prompt Flow', 'Complete Service Category Optimization', 'Regular Store Hours & Photos Sync'],
      previewMetric: '+180% Local Call Inquiries'
    },
    {
      id: 2,
      title: 'WhatsApp Business',
      tag: '1-Tap Lead Routing',
      icon: MessageSquare,
      color: 'from-emerald-400 to-lime-400',
      badge: 'Direct Chat',
      headline: 'Frictionless Click-to-WhatsApp Funnels',
      description: 'Say goodbye to lost website visits. Customers tap a single button with a pre-filled service inquiry and arrive directly in your WhatsApp chat.',
      specs: ['Pre-filled Service-Specific Messages', 'Floating Persistent Mobile Chat Bubble', 'Instant Catalogue Linking', 'Zero Form Fatigue for Busy Clients'],
      previewMetric: '3x More Inquiry Conversions'
    },
    {
      id: 3,
      title: 'Social Identity',
      tag: 'Brand Cohesion',
      icon: Share2,
      color: 'from-pink-500 to-purple-500',
      badge: 'Trust & Proof',
      headline: 'Unified Instagram & Social Brand Hub',
      description: 'Connect your website seamlessly with Instagram feeds, customer reviews, and video highlights to build instant authenticity.',
      specs: ['Instagram Profile Optimization', 'Branded Link-in-Bio Custom Hub', 'Cross-Platform Visual Consistency', 'Recent Client Work Showcase'],
      previewMetric: 'Consistent Omnichannel Brand'
    },
    {
      id: 4,
      title: 'Smart Digital Card',
      tag: 'Next-Gen vCard',
      icon: Smartphone,
      color: 'from-teal-400 to-emerald-400',
      badge: 'NFC Ready',
      headline: 'One-Tap Smartphone Contact Saving',
      description: 'Replace printed visiting cards that get thrown away. Share your digital card via QR code so customers save your contact with one tap.',
      specs: ['One-Tap Save to iPhone & Android Contacts', 'Click-to-Call & Click-to-Map Navigation', 'Shareable via QR or WhatsApp link', 'Always Up-to-Date Phone & Address'],
      previewMetric: '100% Retained Contact Info'
    },
    {
      id: 5,
      title: 'Booking & Enquiries',
      tag: 'Automated Slots',
      icon: CalendarCheck,
      color: 'from-amber-400 to-orange-500',
      badge: 'No Commissions',
      headline: 'Online Appointment & Quote Scheduler',
      description: 'Allow clients to reserve salon appointments, car detailing slots, clinic consultations, or repair bookings without back-and-forth phone calls.',
      specs: ['Commission-Free Direct Booking', 'Instant SMS & WhatsApp Alerts', 'Customizable Date & Time Windows', 'Built-in Service Pricing Selection'],
      previewMetric: '24/7 After-Hours Slot Bookings'
    },
    {
      id: 6,
      title: 'PWA Web Apps',
      tag: 'Zero App Store Fee',
      icon: Cpu,
      color: 'from-emerald-500 to-teal-600',
      badge: 'Modern Tech',
      headline: 'App-Like Phone Experience in Browser',
      description: 'Your customers can save an app icon to their phone home screen straight from Chrome or Safari without downloading from bulky App Stores.',
      specs: ['Installable to Home Screen in 1 Tap', 'Works Smoothly Even on Slow 3G', 'Push Notification Capability', 'Saves ₹1,00,000+ in App Store Costs'],
      previewMetric: 'Native Mobile App Feel'
    }
  ];

  const current = nodes[activeNode];
  const CurrentIcon = current.icon;

  return (
    <div className="w-full max-w-6xl mx-auto rounded-3xl bg-slate-900/90 border border-emerald-900/40 p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-xl">
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#05966908_1px,transparent_1px),linear-gradient(to_bottom,#05966908_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      {/* Top Header */}
      <div className="relative z-10 text-center max-w-2xl mx-auto space-y-3 mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
          <Activity className="w-3.5 h-3.5" />
          The PayirWebs Digital Engine
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
          Everything Connects Through Your <span className="text-emerald-400">PR Digital Core</span>
        </h3>
        <p className="text-xs sm:text-sm text-slate-300">
          Tap any capability node below to see how it links to your central brand and delivers real customer revenue.
        </p>
      </div>

      {/* Node Selector Ribbon */}
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-2 mb-10">
        {nodes.map((node, idx) => {
          const NodeIcon = node.icon;
          const isSelected = activeNode === idx;
          return (
            <button
              key={node.id}
              onClick={() => setActiveNode(idx)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all duration-200 border ${
                isSelected
                  ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.35)] scale-105'
                  : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 border-slate-700/80 hover:text-white'
              }`}
            >
              <NodeIcon className={`w-3.5 h-3.5 ${isSelected ? 'text-slate-950' : 'text-emerald-400'}`} />
              <span>{node.title}</span>
            </button>
          );
        })}
      </div>

      {/* Active Node Interactive Deep-Dive Card */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-950/70 border border-slate-800 rounded-3xl p-6 sm:p-8">
        
        {/* Left Column: Visual PR Central Circuit Diagram */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-emerald-900/40 relative">
          
          {/* Animated SVG Circuit Lines connecting active node to PR */}
          <div className="relative w-48 h-48 flex items-center justify-center">
            
            {/* Outer Orbit */}
            <div className="absolute inset-0 rounded-full border border-dashed border-emerald-500/30 animate-[spin_25s_linear_infinite]" />
            
            {/* Pulsing Core PR */}
            <div className="relative z-10">
              <PRBrandMark size={70} glow={true} />
            </div>

            {/* Orbiting Satellite Node Indicator */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500 text-slate-950 text-[10px] font-black uppercase tracking-wider shadow-lg animate-bounce">
              <CurrentIcon className="w-3 h-3" />
              <span>{current.badge}</span>
            </div>
          </div>

          <div className="mt-4 text-center">
            <span className="text-[11px] font-mono text-emerald-400 font-bold">
              {current.previewMetric}
            </span>
            <div className="text-[10px] text-slate-400">Measured local performance impact</div>
          </div>
        </div>

        {/* Right Column: Specifications & Action */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
              Capability 0{activeNode + 1}
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-xs text-slate-400 font-medium">{current.tag}</span>
          </div>

          <h4 className="text-xl sm:text-2xl font-black text-white">
            {current.headline}
          </h4>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {current.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
            {current.specs.map((spec, i) => (
              <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{spec}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onSelectService && onSelectService(current.title)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-md"
            >
              Get Started with {current.title}
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <span className="text-[11px] text-slate-400">Included in our flexible modular packages</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export const SeedToBrandTimeline: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(1);

  const stages = [
    {
      num: '01',
      stage: 'START',
      title: 'Your Business Beginning',
      subtitle: 'The Seed (பயிர்)',
      detail: 'You start with an authentic service, neighbourhood shop, food joint, clinic, or specialized trade. You only have a mobile number or WhatsApp.',
      milestone: 'Local Craft • Single Location • Word-of-Mouth',
      visualBadge: 'Seed Stage'
    },
    {
      num: '02',
      stage: 'BUILD',
      title: 'Your Digital Foundation',
      subtitle: 'The PR Architecture',
      detail: 'PayirWebs crafts your fast, responsive website and locks in your verified Google Business profile with exact geo-coordinates and rate cards.',
      milestone: 'Verified Domain • Google Maps Pin • Clean Mobile UI',
      visualBadge: 'Foundation Stage'
    },
    {
      num: '03',
      stage: 'CONNECT',
      title: 'Your Customer Highway',
      subtitle: 'The Digital Network',
      detail: 'We route inquiries directly into 1-tap WhatsApp chats, interactive rate cards, and automated reviews from delighted customers.',
      milestone: 'Click-to-WhatsApp • 4.9★ Review Booster • Direct Inquiries',
      visualBadge: 'Connection Stage'
    },
    {
      num: '04',
      stage: 'GROW',
      title: 'Your Dominant Authority',
      subtitle: 'The Flourishing Brand',
      detail: 'You consistently rank #1 in your locality for high-ticket clients. Add appointment scheduling, digital visiting cards, and PWA apps anytime.',
      milestone: 'Recurring Bookings • Premium Pricing • High Customer Trust',
      visualBadge: 'Harvest Stage'
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto space-y-12">
      {/* Stage Scrubbers */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {stages.map((st, idx) => {
          const isActive = activeStage === idx + 1;
          return (
            <button
              key={st.num}
              onClick={() => setActiveStage(idx + 1)}
              className={`p-4 rounded-2xl border text-left transition-all ${
                isActive
                  ? 'bg-slate-900 border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.2)] scale-102'
                  : 'bg-slate-950/40 border-slate-800 text-slate-400 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xs font-mono font-bold ${isActive ? 'text-emerald-400' : 'text-slate-600'}`}>
                  STAGE {st.num}
                </span>
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                  isActive ? 'bg-emerald-500/20 text-emerald-300' : 'bg-slate-800 text-slate-500'
                }`}>
                  {st.stage}
                </span>
              </div>
              <div className={`text-sm font-bold ${isActive ? 'text-white' : 'text-slate-300'}`}>
                {st.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Stage Spotlight Panel */}
      {(() => {
        const current = stages[activeStage - 1];
        return (
          <div className="rounded-3xl bg-slate-900/90 border border-emerald-900/40 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  {current.visualBadge} • {current.subtitle}
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  Stage {current.num}: {current.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {current.detail}
                </p>

                <div className="pt-2 p-3.5 rounded-2xl bg-slate-950 border border-slate-800 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Core Deliverable</div>
                    <div className="text-xs sm:text-sm font-bold text-emerald-200">{current.milestone}</div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-950/60 border border-slate-800 text-center space-y-3">
                <PRBrandMark size={64} glow={true} />
                <div className="text-xs font-mono text-emerald-400 font-bold">
                  PAYIR GROWTH CYCLE
                </div>
                <div className="text-[11px] text-slate-400">
                  Continuous digital expansion with no hidden platform lock-in.
                </div>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
};

export const BeforeAfterComparison: React.FC = () => {
  const [sliderPos, setSliderPos] = useState<number>(50);

  return (
    <div className="w-full max-w-4xl mx-auto rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl relative">
      <div className="text-center space-y-2 mb-6">
        <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800">
          Visual Transformation
        </span>
        <h3 className="text-xl sm:text-2xl font-black text-white">
          Compare the Difference: Traditional vs. PayirWebs Engine
        </h3>
        <p className="text-xs text-slate-400">
          Drag the slider horizontally to reveal the before and after transformation.
        </p>
      </div>

      {/* Interactive Drag Range */}
      <div className="relative w-full rounded-2xl overflow-hidden border border-slate-700 select-none aspect-[16/9] sm:aspect-[21/9]">
        
        {/* RIGHT (AFTER) LAYER */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 p-6 sm:p-8 flex flex-col justify-between text-white">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500 text-slate-950 shadow">
              AFTER PAYIRWEBS
            </span>
            <span className="text-xs font-mono text-emerald-300">High-Growth Setup</span>
          </div>

          <div className="grid grid-cols-2 gap-4 my-2">
            <div className="p-3 rounded-xl bg-slate-900/80 border border-emerald-500/40">
              <div className="text-xs font-bold text-emerald-300">Google Maps 4.9★</div>
              <div className="text-[11px] text-slate-300">Ranked #1 locally for direct inquiries</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/80 border border-emerald-500/40">
              <div className="text-xs font-bold text-emerald-300">1-Tap WhatsApp Funnel</div>
              <div className="text-[11px] text-slate-300">Pre-filled service orders arriving 24/7</div>
            </div>
          </div>

          <div className="text-xs text-emerald-300/90 font-medium">
            ✓ Clean custom domain • Lightning mobile speed • Trustworthy digital brand
          </div>
        </div>

        {/* LEFT (BEFORE) LAYER CLIPPED */}
        <div 
          className="absolute inset-y-0 left-0 bg-gradient-to-br from-rose-950/90 via-slate-900 to-slate-950 p-6 sm:p-8 flex flex-col justify-between text-white overflow-hidden border-r-2 border-emerald-400"
          style={{ width: `${sliderPos}%` }}
        >
          <div className="flex items-center justify-between min-w-[280px]">
            <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-rose-600 text-white shadow">
              BEFORE PAYIRWEBS
            </span>
            <span className="text-xs font-mono text-rose-300">Fragmented Status</span>
          </div>

          <div className="grid grid-cols-2 gap-4 my-2 min-w-[280px]">
            <div className="p-3 rounded-xl bg-slate-900/80 border border-rose-500/30">
              <div className="text-xs font-bold text-rose-300">No Google Map Ranking</div>
              <div className="text-[11px] text-slate-400">Invisible when people search nearby</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/80 border border-rose-500/30">
              <div className="text-xs font-bold text-rose-300">Lost Customers</div>
              <div className="text-[11px] text-slate-400">Manual phone queries without rates</div>
            </div>
          </div>

          <div className="text-xs text-rose-300/80 font-medium min-w-[280px]">
            ✕ Unverified social bio • Zero rate card • Competitors win the high-ticket clients
          </div>
        </div>

        {/* Interactive Center Handle Line */}
        <div 
          className="absolute top-0 bottom-0 pointer-events-none flex items-center justify-center -translate-x-1/2 z-20"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="w-8 h-8 rounded-full bg-emerald-400 text-slate-950 flex items-center justify-center font-bold text-xs shadow-xl border-2 border-white">
            ↔
          </div>
        </div>

        {/* Transparent Scrub Input Range */}
        <input
          type="range"
          min="5"
          max="95"
          value={sliderPos}
          onChange={(e) => setSliderPos(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
          aria-label="Drag comparison slider"
        />
      </div>

      <div className="flex justify-between items-center text-[11px] text-slate-400 mt-3 font-mono">
        <span>← Drag left to see After</span>
        <span>Drag right to see Before →</span>
      </div>
    </div>
  );
};

interface DemoModalData {
  title: string;
  category: string;
  accent: string;
  features: string[];
  sampleRates: { item: string; price: string }[];
  ctaText: string;
}

export const WhoWeHelpShowcase: React.FC<{ onBookDemo: (industry: string) => void }> = ({ onBookDemo }) => {
  const [activeNiche, setActiveNiche] = useState<string>('restaurant');
  const [modalDemo, setModalDemo] = useState<DemoModalData | null>(null);

  const niches = [
    {
      id: 'restaurant',
      name: 'Cafes & Restaurants',
      icon: Coffee,
      badge: 'Food & Hospitality',
      color: 'from-amber-500 to-orange-500',
      headline: 'Interactive QR Digital Menu & Table Booking',
      desc: 'No blurry PDF menus. Customers browse high-res photos on mobile and place direct WhatsApp orders or table reservations.',
      stats: 'Zero Commissions on Food Orders',
      rates: [
        { item: 'South Indian Filter Coffee Special', price: '₹60' },
        { item: 'Ghee Podi Roast Dosa', price: '₹140' },
        { item: 'Family Weekend Dining Thali', price: '₹350' }
      ]
    },
    {
      id: 'carwash',
      name: 'Car Wash & Detailing',
      icon: Car,
      badge: 'Auto Care',
      color: 'from-blue-500 to-cyan-500',
      headline: 'Interactive Rate Card & Slot Reservation',
      desc: 'Showcase ceramic coatings, interior foam wash packages, and driving directions directly from Google Maps.',
      stats: '1-Tap Weekend Slot Booking',
      rates: [
        { item: 'Deep Interior Foam & Steam Clean', price: '₹799' },
        { item: 'Ceramic Nano Gloss Coating', price: '₹3,499' },
        { item: 'Underbody Anti-Rust Treatment', price: '₹1,200' }
      ]
    },
    {
      id: 'salon',
      name: 'Salons & Parlours',
      icon: Scissors,
      badge: 'Beauty & Wellness',
      color: 'from-rose-500 to-pink-500',
      headline: 'Stylist Portfolio & Service Menu',
      desc: 'Visual treatment cards, bridal packages, and direct WhatsApp consultations with your head stylist.',
      stats: '4.9★ Google Review Prompter',
      rates: [
        { item: 'Signature Hair Spa & Styling', price: '₹899' },
        { item: 'Bridal HD Makeup Consultation', price: '₹4,999' },
        { item: 'Organic Hydra Facial Therapy', price: '₹1,499' }
      ]
    },
    {
      id: 'clinic',
      name: 'Clinics & Doctors',
      icon: Stethoscope,
      badge: 'Healthcare',
      color: 'from-emerald-500 to-teal-500',
      headline: 'Doctor Credentials & Timings Hub',
      desc: 'Build clinical credibility with verified doctor degrees, consultation slots, clinic location pin, and emergency phone buttons.',
      stats: 'Verified Medical Presence',
      rates: [
        { item: 'General Dental Examination', price: '₹300' },
        { item: 'Laser Teeth Whitening Session', price: '₹2,500' },
        { item: 'Orthodontic Smile Consultation', price: '₹500' }
      ]
    },
    {
      id: 'construction',
      name: 'Builders & Interiors',
      icon: HardHat,
      badge: 'Construction',
      color: 'from-emerald-600 to-lime-600',
      headline: 'Project Gallery & Instant Quote Estimator',
      desc: 'High-ticket portfolio showcasing finished villas, commercial interiors, floorplans, and direct WhatsApp quote requests.',
      stats: 'High-Ticket Lead Funnel',
      rates: [
        { item: '2BHK Complete Modular Kitchen', price: '₹1,45,000' },
        { item: 'Full Home Interior 3D Plan', price: '₹15,000' },
        { item: 'Turnkey Residential Construction', price: '₹2,100 / sq.ft' }
      ]
    },
    {
      id: 'shops',
      name: 'Shops & Boutiques',
      icon: Store,
      badge: 'Local Retail',
      color: 'from-teal-500 to-emerald-500',
      headline: 'Product Showcase & Store Navigation',
      desc: 'Help local buyers find your store on Google, view newly arrived stock, and message you on WhatsApp before traveling.',
      stats: '+140% In-Store Footfall',
      rates: [
        { item: 'Pure Kanchipuram Silk Saree', price: '₹4,500' },
        { item: 'Handwoven Designer Kurti Set', price: '₹1,299' },
        { item: 'Custom Festive Gift Hamper', price: '₹950' }
      ]
    }
  ];

  const current = niches.find(n => n.id === activeNiche) || niches[0];
  const CurrentIcon = current.icon;

  return (
    <div className="w-full max-w-6xl mx-auto space-y-10">
      
      {/* Category Buttons Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {niches.map((n) => {
          const Icon = n.icon;
          const isSelected = activeNiche === n.id;
          return (
            <button
              key={n.id}
              onClick={() => setActiveNiche(n.id)}
              className={`p-3.5 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-2 ${
                isSelected
                  ? 'bg-emerald-500 text-slate-950 border-emerald-400 font-bold shadow-lg shadow-emerald-500/20 scale-105'
                  : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
              }`}
            >
              <Icon className={`w-5 h-5 ${isSelected ? 'text-slate-950' : 'text-emerald-400'}`} />
              <span className="text-xs font-semibold">{n.name}</span>
            </button>
          );
        })}
      </div>

      {/* Selected Niche Showcase Card */}
      <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold">
              <CurrentIcon className="w-3.5 h-3.5" />
              {current.badge} • PayirWebs Solution
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white">
              {current.headline}
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              {current.desc}
            </p>

            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2.5 text-xs font-mono text-emerald-400 font-bold">
              <Zap className="w-4 h-4 text-emerald-400" />
              <span>Proven Impact: {current.stats}</span>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={() => setModalDemo({
                  title: current.name,
                  category: current.badge,
                  accent: current.color,
                  features: ['Pre-filled WhatsApp Direct Enquiries', 'Google Maps Location Embed', 'Transparent Mobile Rate Card'],
                  sampleRates: current.rates,
                  ctaText: `Enquire for ${current.name}`
                })}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all"
              >
                <Eye className="w-3.5 h-3.5 text-emerald-400" />
                Live Interactive Concept Preview
              </button>

              <button
                onClick={() => onBookDemo(current.name)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-md"
              >
                Build for My {current.name}
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Simulated Phone UI Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-64 rounded-3xl bg-slate-950 border-4 border-slate-800 p-3 shadow-2xl space-y-3">
              <div className="w-20 h-3 rounded-full bg-slate-800 mx-auto" />
              
              <div className="rounded-xl bg-slate-900 p-3 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-bold text-white">{current.name} Demo</div>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300">Open Now</span>
                </div>
                <div className="text-[10px] text-slate-400">Anna Nagar, Chennai • 4.9★ (310)</div>
              </div>

              {/* Sample Mini Rate Cards */}
              <div className="space-y-1.5">
                {current.rates.map((r, i) => (
                  <div key={i} className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-between text-[11px]">
                    <span className="text-slate-300 truncate pr-2">{r.item}</span>
                    <span className="font-mono font-bold text-emerald-400">{r.price}</span>
                  </div>
                ))}
              </div>

              <div className="pt-1">
                <div className="w-full py-2 rounded-lg bg-emerald-500 text-slate-950 text-center font-bold text-[10px] flex items-center justify-center gap-1.5">
                  <MessageSquare className="w-3 h-3" />
                  Order / Book on WhatsApp
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Interactive Concept Demo Modal */}
      {modalDemo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-lg rounded-3xl bg-slate-900 border border-emerald-500/50 p-6 sm:p-8 shadow-2xl text-white space-y-5">
            <button
              onClick={() => setModalDemo(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3">
              <PRBrandMark size={42} glow={false} />
              <div>
                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">
                  PayirWebs Interactive Concept Preview
                </span>
                <h4 className="text-xl font-bold">{modalDemo.title}</h4>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="text-xs font-bold text-emerald-300">Interactive Digital Rate Card:</div>
              <div className="space-y-2 pt-1">
                {modalDemo.sampleRates.map((sr, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs pb-1.5 border-b border-slate-800">
                    <span className="text-slate-300">{sr.item}</span>
                    <span className="font-mono font-bold text-emerald-400">{sr.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-xs text-slate-400 leading-relaxed">
              💡 <em>This demo illustrates the user experience created for clients in your industry. When someone visits your website, they can view verified rates and tap to book immediately.</em>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => {
                  setModalDemo(null);
                  onBookDemo(modalDemo.title);
                }}
                className="flex-1 py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-400 transition-all"
              >
                Request Custom Solution for This
              </button>
              <button
                onClick={() => setModalDemo(null)}
                className="py-3 px-4 rounded-xl bg-slate-800 text-slate-300 font-bold text-xs hover:bg-slate-700 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export const WhatsAppLeadEngine: React.FC<{ defaultIndustry?: string }> = ({ defaultIndustry = '' }) => {
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [businessType, setBusinessType] = useState(defaultIndustry || 'Local Shop / Retail');
  const [phone, setPhone] = useState('');
  const [desiredPlan, setDesiredPlan] = useState('Business Plan (Most Popular)');
  const [customGoal, setCustomGoal] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultIndustry) setBusinessType(defaultIndustry);
  }, [defaultIndustry]);

  const createWhatsAppUrl = () => {
    const formatted = `Hello PayirWebs Team! 🚀\n\nI want to establish and grow my digital presence.\n\n👤 Owner: ${name || 'Business Owner'}\n🏢 Business: ${businessName || 'My Business'}\n📂 Category: ${businessType}\n📦 Plan: ${desiredPlan}\n📞 Contact: ${phone || 'Not provided yet'}\n🎯 Goal: ${customGoal || 'Get found on Google and get WhatsApp leads'}`;
    return `https://wa.me/919876543210?text=${encodeURIComponent(formatted)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-3xl bg-slate-900 border border-emerald-900/60 p-8 sm:p-12 shadow-2xl relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Direct Contact Details */}
        <div className="lg:col-span-5 space-y-6">
          <PRBrandMark size={48} showWordmark={true} />

          <h3 className="text-2xl sm:text-3xl font-black text-white">
            Let’s Plant Your Digital Presence.
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Fill in the details below. We will instantly generate your tailored quote, or you can talk directly with our lead strategist on WhatsApp.
          </p>

          <div className="space-y-3 pt-2">
            <a
              href={createWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-950 border border-emerald-500/40 hover:border-emerald-400 transition-colors group"
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] text-slate-400">Direct WhatsApp Hotline</div>
                <div className="text-xs font-bold text-white">+91 98765 43210 (Quick Reply)</div>
              </div>
            </a>

            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
              <div className="w-9 h-9 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] text-slate-400">Regional Office</div>
                <div className="text-xs font-bold text-white">Chennai, Tamil Nadu, India</div>
              </div>
            </div>
          </div>

          <div className="text-[11px] text-slate-400 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Zero obligation. 100% confidentiality guaranteed.</span>
          </div>
        </div>

        {/* Right Side: Interactive Form */}
        <div className="lg:col-span-7 bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800">
          {submitted ? (
            <div className="text-center py-10 space-y-4 animate-in fade-in">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-400/40">
                <Check className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-white">Inquiry Ready!</h4>
              <p className="text-xs text-slate-300 max-w-sm mx-auto">
                Thank you, {name || 'entrepreneur'}. We have prepared your business plan. Click below to initiate instant WhatsApp messaging with our founding team.
              </p>
              <a
                href={createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-400 transition-all shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                Open in WhatsApp Now
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Anand Raj"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">Business Name *</label>
                  <input
                    type="text"
                    required
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="e.g. Sri Lakshmi Auto"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">Business Category</label>
                  <select
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:border-emerald-500 focus:outline-none"
                  >
                    <option>Local Shop / Retail</option>
                    <option>Cafes & Restaurants</option>
                    <option>Car Wash & Auto Detailing</option>
                    <option>Salons & Beauty Parlours</option>
                    <option>Clinics & Healthcare</option>
                    <option>Builders & Interior Designers</option>
                    <option>Tuition & Coaching Centers</option>
                    <option>Repair & Garage Workshops</option>
                    <option>Other Local Business</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">WhatsApp / Phone *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 9876543210"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">Desired Growth Package</label>
                <select
                  value={desiredPlan}
                  onChange={(e) => setDesiredPlan(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:border-emerald-500 focus:outline-none"
                >
                  <option>Starter Plan (Single-Page + WhatsApp)</option>
                  <option>Business Plan (Most Popular: Multi-page + Maps + Leads)</option>
                  <option>Growth Plan (Booking Engine + PWA + Priority)</option>
                  <option>Custom Tailored Scope</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">Specific Needs / Location</label>
                <textarea
                  rows={2}
                  value={customGoal}
                  onChange={(e) => setCustomGoal(e.target.value)}
                  placeholder="e.g. Located in T. Nagar, need more customer inquiries for weekend car wash..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:border-emerald-500 focus:outline-none resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3 px-4 rounded-xl font-bold text-xs bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all shadow-md shadow-emerald-500/20"
                >
                  Generate Plan & Submit
                </button>
                <a
                  href={createWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl font-bold text-xs bg-slate-800 hover:bg-slate-700 text-white text-center flex items-center justify-center gap-2 border border-slate-700 transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  Instant WhatsApp Message
                </a>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState('');
  const [faqExpanded, setFaqExpanded] = useState<number | null>(0);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleServiceSelect = (serviceTitle: string) => {
    setSelectedServiceForQuote(serviceTitle);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#05130E] text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950 relative overflow-x-hidden">
      
      {/* Background Deep Ambience Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-teal-500/[0.08] rounded-full blur-[150px]" />
        <div className="absolute bottom-10 left-1/3 w-[700px] h-[700px] bg-emerald-900/15 rounded-full blur-[160px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#05966907_1px,transparent_1px),linear-gradient(to_bottom,#05966907_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Sticky Header with PR Glow Accent */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#05130E]/85 border-b border-emerald-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          <div onClick={() => scrollToSection('hero')} className="cursor-pointer">
            <PRBrandMark size={44} showWordmark={true} glow={true} />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-bold text-slate-300">
            <button onClick={() => scrollToSection('ecosystem')} className="hover:text-emerald-400 transition-colors">Digital Ecosystem</button>
            <button onClick={() => scrollToSection('story')} className="hover:text-emerald-400 transition-colors">The PR Growth Story</button>
            <button onClick={() => scrollToSection('transformation')} className="hover:text-emerald-400 transition-colors">Transformation</button>
            <button onClick={() => scrollToSection('who-we-help')} className="hover:text-emerald-400 transition-colors">Industries</button>
            <button onClick={() => scrollToSection('pricing')} className="hover:text-emerald-400 transition-colors">Packages</button>
            <button onClick={() => scrollToSection('faq')} className="hover:text-emerald-400 transition-colors">FAQ</button>
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/919876543210?text=Hi%20PayirWebs!%20I%20want%20to%20get%20my%20business%20online."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold text-emerald-300 bg-emerald-950 border border-emerald-500/40 hover:bg-emerald-900/60 transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              WhatsApp Us
            </a>

            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all active:scale-95"
            >
              Get Started
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="https://wa.me/919876543210?text=Hi%20PayirWebs!"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-emerald-950 border border-emerald-500/40 text-emerald-300 sm:hidden"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:bg-slate-900 border border-slate-800"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-950/95 border-b border-emerald-900/40 px-6 py-6 space-y-4">
            <div className="flex flex-col space-y-3 font-semibold text-sm text-slate-300">
              <button onClick={() => scrollToSection('ecosystem')} className="text-left py-1 hover:text-emerald-400">Digital Ecosystem</button>
              <button onClick={() => scrollToSection('story')} className="text-left py-1 hover:text-emerald-400">The PR Story</button>
              <button onClick={() => scrollToSection('transformation')} className="text-left py-1 hover:text-emerald-400">Transformation</button>
              <button onClick={() => scrollToSection('who-we-help')} className="text-left py-1 hover:text-emerald-400">Industries</button>
              <button onClick={() => scrollToSection('pricing')} className="text-left py-1 hover:text-emerald-400">Packages</button>
              <button onClick={() => scrollToSection('faq')} className="text-left py-1 hover:text-emerald-400">FAQ</button>
            </div>
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full py-3 rounded-xl bg-emerald-400 text-slate-950 font-bold text-xs"
              >
                Get Your Business Online
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Body */}
      <main className="relative z-10">

        {/* SECTION 1: HERO SECTION WITH THE 6-STAGE PR GROWTH ANIMATION */}
        <section id="hero" className="pt-12 pb-24 md:pt-20 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>PLANT YOUR PRESENCE • GROW YOUR BUSINESS</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
                Your Business Deserves to Be{' '}
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-lime-300 bg-clip-text text-transparent">
                  Online & Dominant.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                From a local shop or service to a trusted regional brand: PayirWebs turns small beginnings into a powerful digital presence that brings local clients directly to your doorstep.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-black text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 rounded-2xl shadow-[0_0_25px_rgba(16,185,129,0.35)] transition-all hover:scale-102 active:scale-98"
                >
                  Get Your Business Online
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => scrollToSection('ecosystem')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-bold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-2xl transition-all"
                >
                  Explore Services
                  <ChevronDown className="w-4 h-4 text-emerald-400" />
                </button>
              </div>

              {/* Trust Subtext */}
              <div className="pt-6 border-t border-emerald-900/40">
                <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Unified Digital Growth Architecture
                </p>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-xs font-semibold text-slate-300">
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> High-Speed Websites</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Google 4.9★ Maps</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> WhatsApp Leads</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Smart vCards</span>
                </div>
              </div>
            </div>

            {/* Right Hero Centerpiece: The 6-Stage PR Growth SVG Animation */}
            <div className="lg:col-span-5">
              <HeroPRGrowthExperience />
            </div>

          </div>
        </section>

        {/* SECTION 2: THE DIGITAL ECOSYSTEM (CIRCUIT-CONNECTED SERVICES) */}
        <section id="ecosystem" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-emerald-900/30">
          <InteractiveServicesEcosystem onSelectService={handleServiceSelect} />
        </section>

        {/* SECTION 3: THE PR STORY ("FROM SEED TO DIGITAL BRAND") */}
        <section id="story" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-emerald-900/30 bg-slate-950/40">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                The Meaning of Payir (பயிர்)
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                From a Small Beginning to a Strong Digital Brand
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                In Tamil, <em>Payir</em> represents cultivated growth nurtured with deliberate care. Your business shouldn&apos;t remain stuck with just a phone number on a shop shutter.
              </p>
            </div>

            <SeedToBrandTimeline />
          </div>
        </section>

        {/* SECTION 4: BEFORE VS AFTER VISUAL TRANSFORMATION */}
        <section id="transformation" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-emerald-900/30">
          <BeforeAfterComparison />
        </section>

        {/* SECTION 5: WHO WE HELP (INDUSTRY DEMO MODALS) */}
        <section id="who-we-help" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-emerald-900/30 bg-slate-950/40">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">
                Tailored Experiences
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                Built for Businesses That Are Ready to Grow
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Every trade has unique customer habits. Tap your industry below to inspect a live simulated concept.
              </p>
            </div>

            <WhoWeHelpShowcase onBookDemo={(ind) => handleServiceSelect(`Website for ${ind}`)} />
          </div>
        </section>

        {/* SECTION 6: PACKAGES & TRANSPARENT PRICING */}
        <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-emerald-900/30">
          <div className="max-w-7xl mx-auto space-y-14">
            
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">
                Simple Growth Plans
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                Start Small. Grow When You’re Ready.
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                No expensive corporate retainer traps. Practical, high-return digital setups built for local budgets.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              
              {/* STARTER */}
              <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-8 flex flex-col justify-between shadow-xl">
                <div className="space-y-5">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-mono text-slate-400 font-bold">PACKAGE 01</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300">Essentials</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white">STARTER</h3>
                    <p className="text-xs text-slate-400 mt-1">For single shops taking their first digital step.</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                    <div className="text-[11px] font-bold text-slate-400 uppercase">Pricing</div>
                    <div className="text-2xl font-black text-white">Custom Quote</div>
                    <div className="text-[10px] text-emerald-400 font-medium">Clear one-time setup • Zero hidden fees</div>
                  </div>

                  <ul className="space-y-3 text-xs text-slate-300">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Fast One-Page Business Website</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> WhatsApp Direct Chat Integration</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Google Maps Pin Integration</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> 100% Mobile & Tablet Responsive</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Basic Local SEO Meta Tags</li>
                  </ul>
                </div>

                <div className="pt-8">
                  <button
                    onClick={() => handleServiceSelect('Starter Package')}
                    className="w-full py-3.5 rounded-xl font-bold text-xs bg-slate-800 hover:bg-slate-700 text-white transition-all border border-slate-700"
                  >
                    Start My Website
                  </button>
                </div>
              </div>

              {/* BUSINESS (FEATURED) */}
              <div className="rounded-3xl bg-slate-900 border-2 border-emerald-400 p-8 relative flex flex-col justify-between shadow-2xl shadow-emerald-950/60 ring-4 ring-emerald-500/10">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-emerald-400 text-slate-950 font-black text-[11px] uppercase tracking-wider shadow-md">
                  ★ Most Popular Choice
                </div>

                <div className="space-y-5">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-mono text-emerald-400 font-bold">PACKAGE 02</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">Full Presence</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white">BUSINESS</h3>
                    <p className="text-xs text-slate-300 mt-1">For establishments needing strong local authority.</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                    <div className="text-[11px] font-bold text-slate-400 uppercase">Pricing</div>
                    <div className="text-2xl font-black text-white">Custom Quote</div>
                    <div className="text-[10px] text-emerald-400 font-medium">Turnkey launch with complete assets</div>
                  </div>

                  <ul className="space-y-3 text-xs text-slate-200">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Multi-Page Architecture (Home, Services, Gallery, Contact)</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Google Business Profile Setup & Optimization</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Service-Specific Pre-filled WhatsApp Leads</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Smart Digital Visiting Card (vCard QR download)</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Interactive Lead Capture Form with Instant Alerts</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Social Media Bio & Instagram Grid Sync</li>
                  </ul>
                </div>

                <div className="pt-8">
                  <button
                    onClick={() => handleServiceSelect('Business Package')}
                    className="w-full py-3.5 rounded-xl font-black text-xs bg-emerald-400 hover:bg-emerald-300 text-slate-950 transition-all shadow-lg shadow-emerald-400/25"
                  >
                    Build My Business Online
                  </button>
                </div>
              </div>

              {/* GROWTH */}
              <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-8 flex flex-col justify-between shadow-xl">
                <div className="space-y-5">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-mono text-slate-400 font-bold">PACKAGE 03</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300">Advanced Engine</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white">GROWTH</h3>
                    <p className="text-xs text-slate-400 mt-1">For multi-service brands needing automation.</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                    <div className="text-[11px] font-bold text-slate-400 uppercase">Pricing</div>
                    <div className="text-2xl font-black text-white">Custom Quote</div>
                    <div className="text-[10px] text-teal-400 font-medium">Scalable booking & PWA capability</div>
                  </div>

                  <ul className="space-y-3 text-xs text-slate-300">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Everything in Business Package</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> 24/7 Online Appointment & Slot Booking Engine</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Progressive Web App (PWA) Installable Mode</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Google Search Console & Detailed Analytics</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Custom Domain & SSL Certificate Setup</li>
                  </ul>
                </div>

                <div className="pt-8">
                  <button
                    onClick={() => handleServiceSelect('Growth Package')}
                    className="w-full py-3.5 rounded-xl font-bold text-xs bg-slate-800 hover:bg-slate-700 text-white transition-all border border-slate-700"
                  >
                    Talk to PayirWebs
                  </button>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* SECTION 7: FREQUENTLY ASKED QUESTIONS */}
        <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-emerald-900/30 bg-slate-950/40">
          <div className="max-w-4xl mx-auto space-y-12">
            
            <div className="text-center space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">
                Got Questions?
              </span>
              <h2 className="text-3xl font-black text-white">
                Frequently Asked Questions
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Clear and honest answers for small business owners.
              </p>
            </div>

            <div className="space-y-3">
              {[
                {
                  q: "Do I need a website if I already have an Instagram account?",
                  a: "Yes. While Instagram is good for casual views, customers searching with intent to buy look on Google first. Social algorithms change constantly, but a website is your verified home base with your full rate card, phone number, and direct WhatsApp routing."
                },
                {
                  q: "I run a small neighbourhood shop. Is a website worth it for me?",
                  a: "Modern consumers search 'near me' before calling or visiting. Without a website or verified Google presence, nearby clients discover your competitors instead. PayirWebs specializes in simple, budget-friendly starter websites designed specifically for local shops."
                },
                {
                  q: "Can you connect WhatsApp and Google Maps to my website?",
                  a: "Yes, that is our primary focus. We don't just build static pages; we configure 1-tap WhatsApp buttons with pre-filled inquiries, integrate live driving directions, and optimize your Google Business listing."
                },
                {
                  q: "Can I start with a simple 1-page site and upgrade later?",
                  a: "Yes. This matches our Payir philosophy (Seed → Growth). You can start with our Starter package and easily add booking systems, galleries, and app capabilities whenever your business expands."
                },
                {
                  q: "How long does it take to launch my website?",
                  a: "Typically 3 to 7 working days once you share your basic shop details, phone number, and photos. We take care of all the technical setup."
                }
              ].map((item, idx) => {
                const isOpen = faqExpanded === idx;
                return (
                  <div key={idx} className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden">
                    <button
                      onClick={() => setFaqExpanded(isOpen ? null : idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-white hover:text-emerald-400 transition-colors"
                    >
                      <span>{item.q}</span>
                      <ChevronDown className={`w-4 h-4 shrink-0 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-emerald-400' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* SECTION 8: INTERACTIVE LEAD ENGINE & CONTACT FORM */}
        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-emerald-900/30">
          <WhatsAppLeadEngine defaultIndustry={selectedServiceForQuote} />
        </section>

        {/* SECTION 9: GRAND FINALE CINEMATIC SECTION */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-emerald-900/40 bg-gradient-to-b from-[#05130E] to-black text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.12)_0,transparent_60%)] pointer-events-none" />

          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <PRBrandMark size={72} glow={true} className="mx-auto" />

            <div className="text-xs font-mono text-emerald-400 tracking-widest uppercase">
              Your business has already started.
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Now Give It a <span className="text-emerald-400">Digital Presence</span> That Flourishes.
            </h2>

            <p className="text-xs sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
              PAYIRWEBS • Plant Your Presence. Grow Your Business.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-black text-sm shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                Start Your Digital Journey
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <a
                href="https://wa.me/919876543210?text=Hello%20PayirWebs!%20I%20am%20ready%20to%20grow%20my%20business%20online."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-slate-900 border border-slate-700 text-white font-bold text-sm hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-black text-slate-400 text-xs py-14 border-t border-slate-900 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <PRBrandMark size={36} showWordmark={true} glow={false} />
              <p className="text-slate-400 leading-relaxed text-xs">
                Plant Your Presence. Grow Your Business. Helping local shops, healthcare clinics, cafes, and trades establish digital authority.
              </p>
              <div className="text-[11px] font-mono text-emerald-400">
                Rooted in Tamil Nadu • Built for Growth
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-white font-bold text-xs uppercase tracking-wider">Navigation</div>
              <ul className="space-y-1.5">
                <li><button onClick={() => scrollToSection('hero')} className="hover:text-emerald-400">Home</button></li>
                <li><button onClick={() => scrollToSection('ecosystem')} className="hover:text-emerald-400">Digital Ecosystem</button></li>
                <li><button onClick={() => scrollToSection('story')} className="hover:text-emerald-400">PR Growth Story</button></li>
                <li><button onClick={() => scrollToSection('who-we-help')} className="hover:text-emerald-400">Industries</button></li>
                <li><button onClick={() => scrollToSection('pricing')} className="hover:text-emerald-400">Packages</button></li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="text-white font-bold text-xs uppercase tracking-wider">Capabilities</div>
              <ul className="space-y-1.5">
                <li><span className="text-slate-400">Business Websites</span></li>
                <li><span className="text-slate-400">Google Map Ranking</span></li>
                <li><span className="text-slate-400">WhatsApp Lead Routing</span></li>
                <li><span className="text-slate-400">Smart vCards</span></li>
                <li><span className="text-slate-400">PWA Mobile Apps</span></li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="text-white font-bold text-xs uppercase tracking-wider">Contact</div>
              <p className="text-slate-400">Chennai, Tamil Nadu, India</p>
              <p className="text-slate-400">contact@payirwebs.com</p>
              <p className="text-emerald-400 font-semibold">WhatsApp: +91 98765 43210</p>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
            <div>
              © 2026 PAYIRWEBS. All rights reserved. Built for businesses. Designed for growth.
            </div>
            <div className="flex items-center gap-4">
              <span>Privacy</span>
              <span>Terms</span>
              <span className="text-emerald-400 font-mono">Seed → Growth → Brand</span>
            </div>
          </div>

        </div>
      </footer>

      {/* MOBILE STICKY BOTTOM ACTION BAR */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-3 flex items-center gap-2 shadow-2xl">
        <a
          href="tel:+919876543210"
          className="flex-1 py-3 px-2 rounded-xl bg-slate-900 border border-slate-700 text-white font-bold text-xs flex items-center justify-center gap-1.5"
        >
          <Phone className="w-4 h-4 text-emerald-400" />
          Call Direct
        </a>
        <a
          href="https://wa.me/919876543210?text=Hi%20PayirWebs!%20I%20want%20to%20grow%20my%20business%20online."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[2] py-3 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
        >
          <MessageSquare className="w-4 h-4" />
          WhatsApp PayirWebs
        </a>
      </div>

    </div>
  );
}