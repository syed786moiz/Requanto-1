import {
  Building2, ShieldCheck, Brain, Boxes, Cpu, BarChart3, Network,
  Users, FileCheck, CreditCard, AlertTriangle, UserCheck, Banknote, Scale,
  Headphones, Bot, Briefcase, ClipboardCheck, Activity, Layers, Radar,
  HardHat, Umbrella, type LucideIcon,
} from 'lucide-react';

export type NavChild = { label: string; to: string; desc?: string; icon?: LucideIcon };
export type NavItem = { label: string; to: string; children?: NavChild[] };

export const NAV: NavItem[] = [
  { label: 'Solutions', to: '/solutions' },
  { label: 'Products', to: '/products' },
  { label: 'Services', to: '/services' },
  { label: 'Industries', to: '/industries' },
  {
    label: 'AI',
    to: '/innovation-lab',
    children: [
      { label: 'Innovation Lab', to: '/innovation-lab' },
      { label: 'AI Agents', to: '/agents' },
    ],
  },
  {
    label: 'Resources',
    to: '/resources',
    children: [
      { label: 'Blogs & Guides', to: '/resources#blog' },
      { label: 'Case Studies', to: '/resources#cases' },
      { label: 'AI Readiness Assessment', to: '/assessment' },
      { label: 'Cybersecurity Check', to: '/cyber-check' },
    ],
  },
  { label: 'About', to: '/about' },
];

export type Product = {
  id: string;
  name: string;
  tagline: string;
  category: 'Real Estate & Operations' | 'Automation' | 'Security & GRC' | 'Operations & Intelligence' | 'Governance' | 'Financial';
  icon: LucideIcon;
  accent: 'brand' | 'accent' | 'success';
  modules: string[];
};

export const PRODUCTS: Product[] = [
  {
    id: 'mysft',
    name: 'mySFT AI',
    tagline: 'AI real estate lifecycle & community operations platform',
    category: 'Real Estate & Operations',
    icon: Building2,
    accent: 'brand',
    modules: ['Leads', 'Bookings', 'Projects', 'Residents', 'Community', 'Vendors', 'Procurement', 'Documents', 'Payments', 'Analytics', 'AI Intelligence'],
  },
  {
    id: 'studio',
    name: 'Requanto Studio',
    tagline: 'AI low-code platform for building enterprise workflows',
    category: 'Automation',
    icon: Layers,
    accent: 'accent',
    modules: ['Workflow Builder', 'Form Builder', 'Rule Engine', 'Automation', 'Approvals', 'Integrations', 'AI Workflows'],
  },
  {
    id: 'shield',
    name: 'Requanto Shield',
    tagline: 'Cybersecurity & GRC platform',
    category: 'Security & GRC',
    icon: ShieldCheck,
    accent: 'brand',
    modules: ['Risk Management', 'Compliance', 'Audit', 'Policy', 'Issue', 'Vendor Risk', 'Asset', 'Business Continuity'],
  },
  {
    id: 'command',
    name: 'Requanto Command',
    tagline: 'Enterprise AI operations platform',
    category: 'Operations & Intelligence',
    icon: BarChart3,
    accent: 'accent',
    modules: ['Executive Dashboards', 'AI Insights', 'Business Intelligence', 'Operational Visibility', 'AI Copilots', 'Decision Intelligence'],
  },
  {
    id: 'risk',
    name: 'Requanto Risk AI',
    tagline: 'Enterprise risk platform',
    category: 'Governance',
    icon: Radar,
    accent: 'brand',
    modules: ['Risk Register', 'Assessments', 'Heatmaps', 'Treatment', 'Reporting', 'KRIs'],
  },
  {
    id: 'audit',
    name: 'Requanto Audit AI',
    tagline: 'Internal audit platform',
    category: 'Governance',
    icon: ClipboardCheck,
    accent: 'brand',
    modules: ['Audit Planning', 'Fieldwork', 'Findings', 'Testing', 'Reports', 'Workpapers'],
  },
  {
    id: 'vendor',
    name: 'Requanto Vendor AI',
    tagline: 'Third-party risk platform',
    category: 'Governance',
    icon: Users,
    accent: 'brand',
    modules: ['Vendor Inventory', 'Due Diligence', 'Assessments', 'Monitoring', 'Tiering', 'Concentration Risk'],
  },
  {
    id: 'finance',
    name: 'Requanto Finance AI',
    tagline: 'Financial workflow automation',
    category: 'Financial',
    icon: Banknote,
    accent: 'accent',
    modules: ['AP Automation', 'Reconciliation', 'Cash Flow', 'Procure-to-Pay', 'Approvals', 'Exceptions'],
  },
  {
    id: 'fraud',
    name: 'Requanto Fraud AI',
    tagline: 'AML and fraud detection',
    category: 'Financial',
    icon: AlertTriangle,
    accent: 'brand',
    modules: ['Transaction Monitoring', 'Alert Triage', 'SAR Automation', 'Behavioral Models', 'Case Management'],
  },
  {
    id: 'kyc',
    name: 'Requanto KYC AI',
    tagline: 'Customer verification platform',
    category: 'Financial',
    icon: UserCheck,
    accent: 'brand',
    modules: ['Onboarding', 'Document Verification', 'AML Screening', 'PEP & Sanctions', 'Ongoing Monitoring', 'Risk Scoring'],
  },
];

export const PLATFORMS = [
  'mySFT AI', 'Requanto Studio', 'Requanto Shield', 'Requanto Command',
  'Requanto Risk AI', 'Requanto Audit AI', 'Requanto Vendor AI',
  'Requanto Finance AI', 'Requanto Fraud AI', 'Requanto KYC AI',
];

export const INDUSTRIES_PLATFORM = [
  'Real Estate', 'Construction', 'Banking', 'Insurance', 'Healthcare',
  'Manufacturing', 'Government', 'Technology', 'Smart Cities',
];

export type Agent = {
  name: string;
  role: string;
  icon: LucideIcon;
  category: string;
  tasks: string[];
};

export const AGENTS: Agent[] = [
  { name: 'AI Sales Agent', role: 'Pipeline & opportunity co-pilot', icon: Briefcase, category: 'Revenue', tasks: ['Lead scoring', 'Follow-up nudges', 'Forecasting'] },
  { name: 'AI Compliance Agent', role: 'Continuous compliance monitoring', icon: ShieldCheck, category: 'GRC', tasks: ['Control testing', 'Gap alerts', 'Evidence capture'] },
  { name: 'AI Procurement Agent', role: 'Source-to-pay automation', icon: Boxes, category: 'Operations', tasks: ['Requisitions', 'Approval routing', 'Savings finder'] },
  { name: 'AI Vendor Agent', role: 'Third-party risk & onboarding', icon: Users, category: 'GRC', tasks: ['Due diligence', 'Assessments', 'Monitoring'] },
  { name: 'AI Service Desk Agent', role: 'Enterprise IT support', icon: Headphones, category: 'IT', tasks: ['Ticket triage', 'Resolutions', 'Knowledge lookup'] },
  { name: 'AI Resident Copilot', role: 'Community resident experience', icon: Building2, category: 'Real Estate', tasks: ['Requests', 'Communications', 'Payments'] },
  { name: 'AI Security Analyst', role: 'Threat detection & response', icon: ShieldCheck, category: 'Security', tasks: ['Alert triage', 'Investigation', 'Playbooks'] },
  { name: 'AI Executive Assistant', role: 'Leadership productivity', icon: Bot, category: 'Productivity', tasks: ['Briefings', 'Scheduling', 'Summaries'] },
  { name: 'AI Financial Copilot', role: 'Finance operations co-pilot', icon: Banknote, category: 'Finance', tasks: ['Reconciliations', 'Close tasks', 'Anomaly flagging'] },
  { name: 'AI Audit Copilot', role: 'Internal audit co-pilot', icon: FileCheck, category: 'GRC', tasks: ['Sampling', 'Testing', 'Findings'] },
  { name: 'AI Fraud Investigator', role: 'AML & fraud investigations', icon: AlertTriangle, category: 'Finance', tasks: ['Alert triage', 'Network analysis', 'SAR drafting'] },
  { name: 'AI Procurement Copilot', role: 'Procurement guidance', icon: Briefcase, category: 'Operations', tasks: ['Sourcing', 'Negotiation', 'Contract review'] },
];

export type IndustryCard = {
  id: string;
  name: string;
  blurb: string;
  icon: LucideIcon;
  solutions: string[];
};

export const INDUSTRIES: IndustryCard[] = [
  { id: 'realestate', name: 'Real Estate', blurb: 'Lead prediction, vendor intelligence & resident AI', icon: Building2, solutions: ['Lead Prediction', 'Vendor Intelligence', 'Resident Copilot'] },
  { id: 'construction', name: 'Construction', blurb: 'Procurement & supplier intelligence', icon: HardHat, solutions: ['Predictive Procurement', 'Supplier Intelligence'] },
  { id: 'banking', name: 'Banking', blurb: 'Risk, AML, KYC & audit automation', icon: Banknote, solutions: ['Risk Intelligence', 'AML & Fraud', 'KYC Onboarding'] },
  { id: 'insurance', name: 'Insurance', blurb: 'Underwriting & claims automation', icon: Umbrella, solutions: ['Claims AI', 'Underwriting Copilot', 'Third-Party Risk'] },
  { id: 'healthcare', name: 'Healthcare', blurb: 'Document intelligence & compliance', icon: Activity, solutions: ['Document Intelligence', 'Workflow Automation', 'Compliance Monitoring'] },
  { id: 'manufacturing', name: 'Manufacturing', blurb: 'Predictive procurement & operational analytics', icon: Cpu, solutions: ['Predictive Procurement', 'Supplier Intelligence', 'Operational Analytics'] },
  { id: 'government', name: 'Government', blurb: 'Compliance & operational risk', icon: Scale, solutions: ['Compliance Workflows', 'Audit Automation', 'Operational Risk'] },
  { id: 'technology', name: 'Technology', blurb: 'Service desk & engineering governance', icon: Cpu, solutions: ['Service Desk AI', 'Engineering Governance', 'Cloud Optimization'] },
  { id: 'smartcities', name: 'Smart Cities', blurb: 'Resident copilot & service operations', icon: Network, solutions: ['Resident Copilot', 'Visitor Intelligence', 'AI Maintenance Ops'] },
  { id: 'nbfc', name: 'NBFC', blurb: 'Loan origination & risk automation', icon: CreditCard, solutions: ['Loan Origination', 'Risk Scoring', 'KYC & Onboarding'] },
  { id: 'financialservices', name: 'Financial Services', blurb: 'End-to-end financial risk & operations', icon: Banknote, solutions: ['Risk & Compliance', 'AML & Fraud', 'Audit Automation'] },
];

export type ServiceCard = {
  id: string;
  name: string;
  icon: LucideIcon;
  features: string[];
  desc: string;
};

export const SERVICES: ServiceCard[] = [
  { id: 'vciso', name: 'Virtual CISO', icon: ShieldCheck, desc: 'Executive security leadership on demand', features: ['Security Strategy', 'Roadmaps', 'Board Reporting', 'Compliance Programs', 'Vendor Risk Reviews', 'Incident Readiness'] },
  { id: 'vcto', name: 'Virtual CTO', icon: Cpu, desc: 'Technology leadership for AI-first transformation', features: ['Technology Strategy', 'Cloud Transformation', 'AI Adoption Roadmap', 'Product Architecture', 'Enterprise Modernization', 'Engineering Governance'] },
  { id: 'managed-it', name: 'Managed IT Services', icon: Headphones, desc: 'Run, optimize & modernize your stack', features: ['IT Strategy', 'Cloud Consulting', 'Process Automation', 'Technology Assessments', 'Application Modernization', 'Digital Transformation'] },
  { id: 'cyber-consulting', name: 'Cybersecurity Consulting', icon: ShieldCheck, desc: 'Assess, design & operationalize security', features: ['Cybersecurity Assessments', 'Governance Risk & Compliance', 'Security Architecture Reviews', 'Security Program Development', 'Third-Party Risk Management', 'Compliance Readiness'] },
  { id: 'advisory', name: 'Technology Advisory', icon: Briefcase, desc: 'Outcome-driven technology guidance', features: ['Strategy & Operating Models', 'Vendor Selection', 'AI Adoption Strategy', 'Program Governance', 'Value Realization', 'Roadmap Planning'] },
  { id: 'digital-transformation', name: 'Digital Transformation', icon: Network, desc: 'Reimagine operations end-to-end', features: ['Operating Model Design', 'Process Re-engineering', 'Platform Strategy', 'Change Management', 'Metrics & KPIs', 'Scaled Delivery'] },
  { id: 'cloud-consulting', name: 'Cloud Consulting', icon: Layers, desc: 'Cloud strategy, migration & optimization', features: ['Cloud Strategy', 'Landing Zones', 'Migration', 'FinOps', 'Modernization', 'Reliability'] },
  { id: 'ai-adoption', name: 'AI Adoption Services', icon: Brain, desc: 'From pilots to production AI', features: ['Use Case Discovery', 'Data Readiness', 'Model Evaluation', 'Responsible AI', 'Governance', 'Scaled Rollout'] },
];

export type CaseStudy = {
  industry: string;
  title: string;
  outcome: string;
  metrics: { label: string; value: string }[];
  icon: LucideIcon;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    industry: 'Real Estate',
    title: 'Community operator unifies operations with mySFT AI',
    outcome: 'Consolidated 6 disconnected tools into one AI platform across 40+ communities — cutting service turnaround and vendor leakage.',
    metrics: [
      { label: 'Faster service requests', value: '62%' },
      { label: 'Vendor spend saved', value: '$3.1M' },
      { label: 'Communities live', value: '40+' },
    ],
    icon: Building2,
  },
  {
    industry: 'Healthcare',
    title: 'Provider automates documentation & compliance',
    outcome: 'Document intelligence and workflow automation reduced administrative burden while tightening compliance posture.',
    metrics: [
      { label: 'Manual review cut', value: '71%' },
      { label: 'Audit prep time', value: '-54%' },
      { label: 'Compliance score', value: '92' },
    ],
    icon: Activity,
  },
  {
    industry: 'Financial Services',
    title: 'Bank modernizes AML, KYC & internal audit',
    outcome: 'Fraud AI, KYC AI and Audit AI deployed together to modernize risk operations and reduce false positives.',
    metrics: [
      { label: 'False positives', value: '-48%' },
      { label: 'Onboarding time', value: '-63%' },
      { label: 'Audit cycle', value: '2x faster' },
    ],
    icon: Banknote,
  },
  {
    industry: 'Manufacturing',
    title: 'Manufacturer predicts procurement & supplier risk',
    outcome: 'Predictive procurement and supplier intelligence reduced delays and improved working capital.',
    metrics: [
      { label: 'Procurement cycle', value: '-37%' },
      { label: 'Supplier risk events', value: '-44%' },
      { label: 'Working capital freed', value: '$8.5M' },
    ],
    icon: Cpu,
  },
  {
    industry: 'Government',
    title: 'Agency strengthens compliance & operational risk',
    outcome: 'Compliance workflows and audit automation improved transparency and reduced reporting cycles.',
    metrics: [
      { label: 'Reporting cycle', value: '-58%' },
      { label: 'Findings closed on time', value: '+39%' },
      { label: 'Controls automated', value: '210' },
    ],
    icon: Scale,
  },
  {
    industry: 'Technology',
    title: 'SaaS firm scales service desk & engineering governance',
    outcome: 'AI service desk agent and engineering governance cut ticket backlog and improved reliability.',
    metrics: [
      { label: 'Ticket backlog', value: '-69%' },
      { label: 'MTTR improvement', value: '-41%' },
      { label: 'CSAT', value: '94' },
    ],
    icon: Cpu,
  },
];

export const FINANCIAL_SOLUTIONS = [
  { name: 'AI Risk & Compliance', icon: ShieldCheck, desc: 'Unified risk register, assessments & control testing' },
  { name: 'AI AML & Fraud Detection', icon: AlertTriangle, desc: 'Transaction monitoring, alert triage & SAR automation' },
  { name: 'AI KYC & Onboarding', icon: UserCheck, desc: 'Document verification, screening & ongoing monitoring' },
  { name: 'AI Loan Origination', icon: CreditCard, desc: 'Application intake, decisioning & underwriting copilot' },
  { name: 'AI Financial Document Intelligence', icon: FileCheck, desc: 'Extract, classify & validate financial documents' },
  { name: 'AI Accounts Payable', icon: Banknote, desc: 'Invoice capture, matching & exception handling' },
  { name: 'AI Procurement', icon: Boxes, desc: 'Source-to-pay automation with savings intelligence' },
  { name: 'AI Treasury & Cash Flow', icon: Activity, desc: 'Forecasting, liquidity & cash flow intelligence' },
  { name: 'AI Internal Audit', icon: ClipboardCheck, desc: 'Planning, testing, findings & workpapers' },
  { name: 'AI Third-Party Risk', icon: Users, desc: 'Due diligence, tiering & continuous monitoring' },
];

export const VALUES = [
  { title: 'Outcomes over output', desc: 'We measure success in business value — cycle time, risk reduction, revenue.', icon: BarChart3 },
  { title: 'AI-native by default', desc: 'Every solution is designed with intelligence at the core, not bolted on.', icon: Brain },
  { title: 'Trust & security first', desc: 'Enterprise-grade governance, compliance and responsible AI baked in.', icon: ShieldCheck },
  { title: 'One partner, many platforms', desc: 'A connected ecosystem from real estate to risk to finance.', icon: Network },
];

export const LEADERSHIP = [
  { name: 'Aarav Mehta', role: 'Founder & Chief Executive', focus: 'Enterprise AI strategy' },
  { name: 'Sofia Rahman', role: 'Chief Product Officer', focus: 'AI platforms & low-code' },
  { name: 'Daniel Okafor', role: 'Chief Information Security Officer', focus: 'GRC & virtual CISO' },
  { name: 'Mei Lin Tan', role: 'Chief Technology Officer', focus: 'Cloud & AI engineering' },
  { name: 'Karan Malhotra', role: 'Chief Delivery Officer', focus: 'Managed services & ops' },
  { name: 'Priya Nair', role: 'Chief Customer Officer', focus: 'Adoption & outcomes' },
];
