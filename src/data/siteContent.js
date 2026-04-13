import { onesAssistantCaseStudy, workItemRefactorCaseStudy } from './caseStudies';

// 以后主要维护这个文件：
// 1. 改首页介绍、关于我、联系方式
// 2. 改项目文案、项目图片路径
// 3. 新增项目时直接复制 projects 里任意一项即可

export const heroSection = {
  eyebrow: '产品设计师',
  navBrand: 'UX Design',
  name: 'MIAO KE',
  portrait: '/images/home/portrait.jpg',
  portraitAlt: 'Miao Ke portrait',
  ctaText: '查看完整 Experience',
  ctaTarget: 'experience',
  intro: [
    '👋 Hi，我是柯苗，一名产品体验设计师。',
    '过去 9+ 年里，我一直在和复杂业务场景打交道，深耕 SaaS 企业服务领域 7 年，擅长企业级产品体验设计、设计系统搭建、复杂流程梳理与国际化适配，做过从 0-1 到 1-N 的产品设计。',
    '同时也在持续探索如何借助 AI 与 vibe coding 提升原型设计和方案验证的效率。',
  ],
  marqueeItems: ['Selected Works', 'Feature Projects', 'Case Studies'],
};

export const projects = [
  {
    id: 'spotify-live',
    title: '工作项详情重构',
    titleLines: ['工作项详情', '重构'],
    detailMeta: '2023-2025 / 完整研究案例 / 交互设计主导',
    subtitle: '面向研发协作场景的信息结构与配置体验优化',
    coverMeta: '2025 / B端项目管理协作工具 / 交互设计主导',
    coverSummary: '面向研发协作场景的信息结构与配置体验优化。',
    coverTags: ['问题定义', '用户研究', '方案设计', '可用性验证'],
    category: 'B 端项目管理协作工具',
    year: '2024',
    homeYear: '2025',
    client: 'ONES',
    description:
      '面向中大型企业客户，重构工作项详情的信息结构与配置框架，提升多角色协作下的信息查找效率与任务处理效率。',
    coverImage: '/images/projects/spotify-live-cover.svg',
    coverAlt: '工作项详情重构 cover',
    imageBackground: '#FFD7C0',
    detailImage: '/images/home/work-item-refactor-detail.svg',
    detailAlt: '工作项详情重构 detail support graphic',
    caseStudy: workItemRefactorCaseStudy,
  },
  {
    id: 'ones-assistant',
    title: 'ONES Assistant',
    titleLines: ['ONES', 'Assistant'],
    detailMeta: '2025-2026 / B端 AI产品 / 交互设计',
    subtitle: '企业研发管理场景下，从全局对话到可复用、可扩展的 Agent',
    coverMeta: '2025-2026 / AI 智能体',
    coverSummary: '企业研发管理场景下，从全局对话到可复用、可扩展的 Agent',
    coverTags: ['AI Agent'],
    category: 'AI 智能体',
    year: '2025-2026',
    client: 'ONES',
    description: '企业研发管理场景下，从全局对话到可复用、可扩展的 Agent',
    coverImage: '/images/projects/synthesia-ai-cover.svg',
    coverAlt: 'ONES Assistant cover',
    imageBackground: '#EBE2FF',
    caseStudy: onesAssistantCaseStudy,
  },
];

export const thinkingSection = {
  title: 'UX THINKING MATTERS.',
  titleLines: ['UX', 'THINKING', 'MATTERS.'],
  capabilities: [
    {
      labelZh: '产品策略',
      labelEn: 'Product Strategy',
      description: '从业务目标推导设计目标',
    },
    {
      labelZh: '设计系统',
      labelEn: 'Design Systems',
      description: '构建可落地的原子级规范',
    },
    {
      labelZh: '0-1产品',
      labelEn: 'From 0 To 1',
      description: '定义核心链路与体验闭环',
    },
    {
      labelZh: '交互',
      labelEn: 'Interaction',
      description: '处理高复杂度的业务逻辑',
    },
  ],
  description:
    '我不仅设计界面，更设计逻辑与体验。我专注于将 AI 协作融入产品设计研发工作流，并在直觉与数据之间寻找设计的最佳平衡。',
  ctaText: '查看完整 About',
  ctaTarget: 'about',
};

export const footerSection = {
  marqueeText: 'Let’s build better product experiences.',
  title: 'LET’S TALK.',
  informationLabel: 'information',
  fields: [
    ['Base', '深圳 · 广东'],
    ['Phone', '17727589307'],
    ['Education', '本科 · 艺术与设计'],
    ['Wechat', 'Mius_k'],
    ['Email', 'miuskeee@gmail.com'],
  ],
  navigationLabel: 'NAVIGATE',
  navigationItems: ['Home', 'About', 'Experience', 'Contact'],
  copyright: '© 2025 MIAO KE',
  backToTop: 'Back to top',
};

export const pageEndBar = {
  copyright: '© 2025 MIAO KE',
  backToTop: 'Back to top',
};

export const profileTags = [
  { label: '设计体系负责人', color: 'border-[#F87171]/30 bg-[#F87171] text-white' },
  { label: 'UED 团队管理', color: 'border-[#FB923C]/30 bg-[#FB923C] text-white' },
  { label: '规范制定者', color: 'border-[#EAB308]/30 bg-[#EAB308] text-white' },
  { label: '跨团队支撑', color: 'border-[#C084FC]/30 bg-[#C084FC] text-white' },
  { label: '问题解决能力', color: 'border-[#60A5FA]/30 bg-[#60A5FA] text-white' },
  { label: '决策能力', color: 'border-[#F472B6]/30 bg-[#F472B6] text-white' },
  { label: 'Owner 意识', color: 'border-[#FB7185]/30 bg-[#FB7185] text-white' },
  { label: '执行力强', color: 'border-[#38BDF8]/30 bg-[#38BDF8] text-white' },
  { label: '用户研究', color: 'border-[#A78BFA]/30 bg-[#A78BFA] text-white' },
];

export const aboutSection = {
  icon: '👩‍💼',
  title: '关于我',
  tagsTitle: 'Tags on me',
  pointsTitle: 'How I see',
  points: [
    '9+年设计经验，其中包括 3年设计管理经验，深耕 SaaS 企业服务领域达 7年的产品体验设计师；',
    '能够独立负责 0-1、1-N 的企业级项目，如企业级项目管理系统、ERP 和 OA 等大型复杂项目，擅长项目规划、进度控制、质量保证和风险管理；',
    '具备海外项目经验，为不同国家/地区的业务需求提供设计支撑，针对产品国际化中的多语言体验适配问题，提出并实施通用解决方案；',
    '拥有从 0-1 构建设计系统 并成功实施的 实战经验，显著提高产品设计一致性和产研团队效率；',
    '具备 AI 项目交互设计经验，推动 AI 能力与研发管理场景结合，使其能够基于项目、Wiki 等业务上下文完成分析、内容生成与能力复用；',
    '参与 AIGC 创新大赛，贡献方案思路，运用 AI 工具提高 UED 团队工作效率；',
    '具备 建设、管理设计团队（10 人左右）的经验；指导初、中级设计师成长；优化团队和跨部门协作流程，培养专业导师和面试官；',
    '能 迅速适应多变项目业务场景和需求，关注产品设计细节。',
  ],
};

export const aboutPage = {
  heroTitleLines: ['UX', 'THINKING', 'MATTERS.'],
  heroParagraphs: [
    [{ text: '我不仅设计界面，更设计逻辑与体验。' }],
    [
      { text: '我专注于将 ' },
      { text: 'AI 协作', highlight: true },
      { text: ' 融入产品设计研发工作流，并在直觉与数据之间寻找设计的最佳平衡。' },
    ],
  ],
  backLabel: 'Back',
  ctaButtons: [
    {
      label: '浏览精选项目',
      target: 'projects',
      variant: 'secondary-dark',
    },
    {
      label: '查看完整 Experience',
      target: 'experience',
      variant: 'primary',
    },
  ],
};

export const workExperience = {
  title: '工作经历',
  items: [
    {
      company: '深圳复临科技有限公司',
      role: '资深用户体验设计师',
      period: '2018.08 ~ 至今',
      badges: ['UX 核心成员', '0-1 构建体系', 'AI 探索', '管理职能'],
      sections: [
        {
          title: '核心项目',
          items: [
            '独立负责「ONES core 核心业务基础设施」的设计工作，包含「ONES Automation」、「工作项改造」应用等，面对新的业务场景和复杂交互逻辑，通过深入了解业务逻辑和业务目标，高效完成设计任务。',
            '深度参与并负责过 ONES 全线产品的设计工作，包括「Project、Wiki、TestCase、Performance」等。',
            '作为设计驱动「产品升级专项」的 PO，制定路线图，主导并推动了升级专项发布，该专项包含「全球化-解决多语言适配问题」、「全局导航和 Wiki 升级」、「UI 全面升级」。',
          ],
          links: [
            { label: '工作项改造', href: 'https://www.notion.so/e2178a86f9404a728ed20629f789b5b6?pvs=21' },
            { label: '全球化-解决多语言适配问题', href: 'https://www.notion.so/e4031e54f8b2436890dd09aae89aacfc?pvs=21' },
            { label: 'UI 全面升级', href: 'https://www.notion.so/ONES-UI-5a7202cc998446c985bb61f1bfca9689?pvs=21' },
          ],
        },
        {
          title: '项目管理',
          items: [
            '作为设计统筹人，全程推进「ONES 团队版」「ONES Task」「ONES.cn 新官网」「Wiz 官网改版」等多个大型复杂项目全流程，包括需求梳理、设计进度跟踪、设计评审、设计验收等各个环节，确保项目按计划推进。',
            '作为设计负责人，跨团队把控 ONES 旗下产品「Tower」和「WizNote」两个设计团队的工作节奏，根据团队对应的工作情况调整管理方法，协调设计资源，并参与关键项目的产品交互评审工作，确保各项目稳定进行。',
          ],
          links: [
            { label: 'ONES.cn 新官网', href: 'https://www.notion.so/ONES-cn-2477f34ba76b804db5c5dd4b159d7445?pvs=21' },
          ],
        },
        {
          title: '设计系统',
          items: [
            '从 0-1 搭建设计系统，推进设计系统三个关键模块（设计规范、前端组件库、Figma 组件库）的构建和优化。',
            '作为设计系统的 PO，制定路线图，累计发布组件迭代 100+ 次，发布组件 60+ 个，组件系统覆盖率高达 90%，有效支撑内、外部设计和研发团队的日常工作，显著提高产研效能。',
            '独立负责核心基础组件、业务组件交互规范，为团队成员提供明确的组件设计指导和方案标准，确保设计输出的一致性和高质量。',
            '推动从 0-1 搭建 ONES Design Token 体系并成功落地和推广，建立跨职能部门协同流程，确定统一的设计语言，为 UI 升级和暗黑模式提供完善的基础建设。',
          ],
        },
        {
          title: '用户研究',
          items: [
            '作为 UXD 用研小组核心成员，深度实践「问卷定量」「深度访谈」「可用性测试」等研究方法。',
          ],
        },
        {
          title: '设计平台',
          items: [
            '制定并持续优化产品交互评审流程，参与核心项目的设计评审，严格把控方案质量，为团队制定明确的设计指导和方案标准，提高评审效率，确保设计方案的质量和可行性。',
            '建立了设计师资源排期体系，量化 UED 设计师资源，解决设计师资源分散维护、设计师个人目标不清晰的问题，使设计师排期流程透明化，并合理分配资源，为产品部、交付部、组件库等部门赋能。',
            '落地设计需求管理流程，关联产品需求和设计需求，打通产研，方便各角色实时了解对方进度，收集来自 Desk、客户以及内部用户的设计反馈，并根据客户提及次数以及设计债务影响范围，确定优先级，并协调资源逐步排期解决。',
            '主导并推动了设计工具从 Sketch 到 Figma 的迁移，确保设计平台的顺畅运行，包括 Figma 文件的定期备份和维护。',
          ],
        },
        {
          title: '团队管理和建设',
          items: [
            '培养 UED 团队成员成为导师或面试官，高效完成团队人才储备工作。',
            '定期组织并发起产品设计内部分享会，提高团队内产品设计认知，促进团队成员之间的沟通和协作。',
          ],
        },
      ],
    },
    {
      company: '广东兴奇集团',
      role: 'UI/UX 设计师',
      period: '2017.05 ~ 2018.08',
      badges: ['UI 设计', '系统重构'],
      sections: [
        {
          title: '早期',
          items: [
            '作为 UI 设计师，负责「兴奇 OA」门户的 App 和 Web 端版本迭代，跟进界面交互优化，熟练掌握相关多端设计规范，为后续实际落地设计系统打下坚实基础。',
          ],
        },
        {
          title: '中期',
          items: [
            '开始多线程参与集团旗下「天奇 ERP 有色金属信息平台」「兴奇人事系统」「兴奇 OA」多个业务线的版本增量业务迭代，逐步深入了解用户体验。',
          ],
        },
        {
          title: '后期',
          items: [
            '从 0-1 独立负责「日昌盛小额贷款业务系统」项目（包含 App 和 Web 端），前期跟产品经理一起跟进需求情况，项目过程中跟进开发进度，保障项目方案设计成功落地。',
          ],
        },
      ],
    },
    {
      company: '武汉锐智天成有限公司',
      role: 'UI 设计师',
      period: '2014.11 ~ 2016.10',
      badges: ['早期积累', '视觉表现'],
      sections: [
        {
          title: '初期负责画册、海报等物料设计',
          items: [
            '自己跟单，跟客户直接进行沟通，在充分了解客户需求的前提下，分析产品特性，运用恰当的表现形式，进行版式设计。',
          ],
        },
        {
          title: '后期逐步开始 UI 相关的设计',
          items: [
            '负责淘宝店铺 banner、风格 icon 等相关设计，逐步了解 UI 相关知识，为后续转行打下基础。',
          ],
        },
      ],
    },
    {
      company: '湖北省标识行业协会',
      role: '平面设计师',
      period: '2014.05 ~ 2014.09',
      badges: ['实习'],
      summary: [
        '管理湖北省标识行业协会网站后台维护，以及微信公众号管理与发布，还有其他各类宣传物料、海报、易拉宝等设计。',
      ],
    },
  ],
};

export const experiencePage = {
  barTitle: 'WORK HISTORY · CAREER PATH',
  ctaButtons: [
    {
      label: '查看完整 About',
      target: 'about',
      variant: 'secondary-dark',
    },
    {
      label: '浏览精选项目',
      target: 'projects',
      variant: 'primary',
    },
  ],
};

export const contactSection = footerSection;
