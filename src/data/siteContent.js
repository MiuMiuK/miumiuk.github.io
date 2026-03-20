import { workItemRefactorCaseStudy } from './caseStudies';

// 以后主要维护这个文件：
// 1. 改首页介绍、关于我、联系方式
// 2. 改项目文案、项目图片路径
// 3. 新增项目时直接复制 projects 里任意一项即可

export const heroSection = {
  eyebrow: 'Product Designer / Design Lead / Strategy',
  navBrand: 'UX Design',
  name: 'MIAO KE',
  portrait: '/images/profile/portrait.jpg',
  portraitAlt: 'Miao Ke portrait',
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
    subtitle: '面向研发协作场景的信息结构与配置体验优化',
    coverMeta: '2024｜B2B｜Enterprise UX｜Configuration',
    coverSummary: '面向研发协作场景的信息结构与配置体验优化。',
    coverInfo: [
      ['产品类型', 'B 端项目管理协作工具'],
      ['我的角色', '交互设计主导'],
      ['项目职责', '问题定义、用户研究、方案设计、可用性验证'],
    ],
    category: 'B2B | ENTERPRISE | UX | CONFIGURATION',
    year: '2024',
    client: 'ONES',
    tags: [
      '1. 问题定义',
      '2. 用户研究',
      '3. 竞品分析',
      '4. 交互方案设计',
      '5. 可用性验证',
    ],
    description:
      '面向中大型企业客户，重构工作项详情的信息结构与配置框架，提升多角色协作下的信息查找效率与任务处理效率。',
    overview:
      '随着客户使用深入，工作项承载的信息持续增加，原有详情页在信息组织、跨角色协作和配置扩展能力上逐渐暴露问题，既影响日常使用效率，也限制了产品后续演进。这次改版的目标不只是优化某个页面，而是重新梳理工作项详情在复杂业务场景下的使用方式，让它既能提升当前效率，也能支撑未来产品持续演进。',
    process: [
      {
        step: '问题确认',
        details:
          '从 20000+ 用户反馈、体验走查、用户研究和竞品分析中交叉验证问题广度与严重性，确认详情页问题已持续影响核心客户体验，并收敛出信息查找困难、结构难适配复杂场景、配置能力不足三类核心矛盾。',
      },
      {
        step: '研究洞察',
        details:
          '覆盖产品经理、项目经理、研发、测试、运维等多角色开展情景观察、深度访谈与问卷调研，确认不同角色在同一工作项中关注的信息差异显著，用户更关注成组信息，并且连续处理任务与聚焦阅读任务对详情载体有不同需求。',
      },
      {
        step: '方案设计',
        details:
          '按“先解决高频效率问题，再逐步调整底层框架”的思路分阶段推进：第一阶段重构表单配置能力，引入表单资源库、自定义标签页与分组、信息重组与编辑器升级；第二阶段探索详情载体与列表布局解耦，支持弹窗与抽屉两种浏览方式。',
      },
      {
        step: '方案验证',
        details:
          '围绕详情载体、属性分组、信息浏览方式、动态区域调整等设计点输出多组 Demo，并通过可用性测试验证设计方向；测试中 Demo 评分由线上现状的 3.2 提升至 4.4，验证了连续浏览、信息查找和结构清晰度的改善。',
      },
    ],
    results:
      '第一阶段已上线表单资源库、自定义标签页与分组、信息重组、编辑器升级等能力；第二阶段围绕详情载体解耦与浏览方式优化完成 Demo 验证，可用性测试评分从 3.2 提升至 4.4。',
    bgClass: 'bg-[#1DB954]',
    coverImage: '/images/projects/spotify-live-cover.svg',
    coverAlt: '工作项详情重构 cover',
    detailImage: '/images/projects/spotify-live-detail.svg',
    detailAlt: '工作项详情重构 detail banner',
    hoverFacts: [
      ['产品类型', 'B 端项目管理协作工具'],
      ['服务对象', '中大型企业产研团队'],
      ['项目角色', '交互设计主导'],
      ['我的职责', '问题定义、用户研究、竞品分析、交互方案设计、可用性验证'],
      ['协作对象', '产品、研发、业务、解决方案专家'],
    ],
    caseStudy: workItemRefactorCaseStudy,
  },
  {
    id: 'nexus-os',
    title: 'Nexus Design System',
    subtitle: 'Scaling products through unified visual language.',
    coverMeta: '2022-2023｜System｜Infrastructure｜Tooling',
    coverSummary: '通过统一的视觉语言与组件体系，支撑多产品协同扩展。',
    coverInfo: [
      ['产品类型', '跨产品设计系统'],
      ['我的角色', '设计系统主导'],
      ['项目职责', '组件体系设计、设计 Token、文档规范、协作流程搭建'],
    ],
    category: 'SYSTEM | INFRASTRUCTURE | TOOLING',
    year: '2022-2023',
    client: 'Google',
    tags: ['1. Component Library', '2. Design Tokens', '3. Documentation Hub'],
    description: '为 40 多个产品团队构建可扩展的设计语言。',
    overview: '从零到一构建了一套跨平台的原子化设计系统。',
    process: [
      {
        step: '审计',
        details: '对现有 2000 多个 UI 组件进行了分类和合并。',
      },
      {
        step: '自动化',
        details: '建立了从 Figma 到代码库的自动化同步流水线。',
      },
    ],
    results: '开发效率提升 45%，设计决策时间减少 60%。',
    bgClass: 'bg-[#0F766E]',
    coverImage: '/images/projects/nexus-os-cover.svg',
    coverAlt: 'Nexus Design System cover',
    detailImage: '/images/projects/nexus-os-detail.svg',
    detailAlt: 'Nexus Design System detail banner',
    hoverFacts: [
      ['产品类型', '跨产品设计系统'],
      ['服务对象', '40+ 产品与设计研发团队'],
      ['项目角色', '设计系统主导'],
      ['我的职责', '组件体系设计、设计 Token、文档规范、协作流程搭建'],
      ['协作对象', '设计、前端、产品平台团队'],
    ],
  },
  {
    id: 'synthesia-ai',
    title: 'Synthesia AI',
    subtitle: 'Generative interface framework for future HMI.',
    coverMeta: '2024｜AI｜Experimental｜Multi-Modal',
    coverSummary: '探索生成式界面如何在未来 HMI 场景中动态响应用户意图。',
    coverInfo: [
      ['产品类型', '生成式 AI 交互实验'],
      ['我的角色', '体验概念设计'],
      ['项目职责', '交互框架定义、意图建模、动态界面原型、验证方案设计'],
    ],
    category: 'AI | EXPERIMENTAL | MULTI-MODAL',
    year: '2024',
    client: 'Research Lab',
    tags: ['1. Intent Recognition', '2. Dynamic UI Generation', '3. Haptic Feedback'],
    description:
      '探索“无界面”交互的可能性，利用生成式 AI 根据用户意图实时重构 UI 组件。',
    overview:
      '传统的 UI 是静态的。Synthesia 试图打破这一现状，界面不再是预设的像素，而是根据用户的认知负荷、情感状态和当前任务实时生成的“数字器官”。',
    process: [
      {
        step: '意图建模',
        details: '利用微表情和注视点追踪技术构建实时的意图预测模型。',
      },
      {
        step: '动态渲染',
        details: '基于 Shader 和生成式算法，使组件呈现出如液体般流动的感官体验。',
      },
    ],
    results: '在复杂数据处理场景下，用户的认知负荷降低了 40%，交互错误率下降了 22%。',
    bgClass: 'bg-[#D4FF00]',
    coverImage: '/images/projects/synthesia-ai-cover.svg',
    coverAlt: 'Synthesia AI cover',
    detailImage: '/images/projects/synthesia-ai-detail.svg',
    detailAlt: 'Synthesia AI detail banner',
    hoverFacts: [
      ['产品类型', '生成式 AI 交互实验'],
      ['服务对象', '未来人机交互探索场景'],
      ['项目角色', '体验概念设计'],
      ['我的职责', '交互框架定义、意图建模、动态界面原型、验证方案设计'],
      ['协作对象', '研究、算法、交互与视觉团队'],
    ],
  },
];

export const profileTags = [
  { label: '设计体系负责人', color: 'border-red-400/30 bg-red-400/5 text-red-400' },
  { label: 'UED 团队管理', color: 'border-orange-400/30 bg-orange-400/5 text-orange-400' },
  { label: '规范制定者', color: 'border-yellow-500/30 bg-yellow-500/5 text-yellow-500' },
  { label: '跨团队支撑', color: 'border-purple-400/30 bg-purple-400/5 text-purple-400' },
  { label: '问题解决能力', color: 'border-blue-400/30 bg-blue-400/5 text-blue-400' },
  { label: '决策能力', color: 'border-pink-400/30 bg-pink-400/5 text-pink-400' },
  { label: 'Owner 意识', color: 'border-rose-400/30 bg-rose-400/5 text-rose-400' },
  { label: '执行力强', color: 'border-sky-400/30 bg-sky-400/5 text-sky-400' },
  { label: '用户研究', color: 'border-violet-400/30 bg-violet-400/5 text-violet-400' },
];

export const aboutSection = {
  icon: '👩‍💼',
  title: '关于我',
  tagsTitle: 'Tags on me',
  pointsTitle: 'How I see',
  points: [
    '9+ 年设计经验，其中包括 3 年设计管理经验，深耕 SaaS 企业服务领域达 7 年的产品体验设计师。',
    '能够独立负责 0-1、1-N 的企业级项目，如企业级项目管理系统、ERP 和 OA 等大型复杂项目。',
    '具备海外项目经验，为不同国家和地区的业务需求提供设计支撑，并处理国际化多语言体验适配。',
    '拥有从 0-1 构建设计系统并成功实施的实战经验，显著提高产品设计一致性和产研团队效率。',
    '参与 AIGC 创新大赛，贡献方案思路，运用 AI 工具提高 UED 团队工作效率。',
    '具备建设和管理设计团队的经验，指导初中级设计师成长，并优化团队协作流程。',
    '能迅速适应多变项目业务场景和需求，关注产品设计细节。',
  ],
};

export const workExperience = {
  title: '工作经历',
  items: [
    {
      company: '深圳复临科技有限公司',
      role: '资深用户体验设计师',
      period: '2018.08 ~ 至今',
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
      summary: [
        '早期作为 UI 设计师，负责「兴奇 OA」门户的 App 和 Web 端版本迭代，跟进界面交互优化，熟练掌握相关多端设计规范，为后续实际落地设计系统打下坚实基础。',
        '中期开始多线程参与集团旗下「天奇 ERP 有色金属信息平台」「兴奇人事系统」「兴奇 OA」多个业务线的版本增量业务迭代，逐步深入了解用户体验。',
        '后期从 0-1 独立负责「日昌盛小额贷款业务系统」项目（包含 App 和 Web 端），前期跟产品经理一起跟进需求情况，项目过程中跟进开发进度，保障项目方案设计成功落地。',
      ],
    },
    {
      company: '武汉锐智天成有限公司',
      role: 'UI 设计师',
      period: '2014.11 ~ 2016.10',
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
      role: '平面设计师（实习）',
      period: '2014.05 ~ 2014.09',
      summary: [
        '管理湖北省标识行业协会网站后台维护，以及微信公众号管理与发布，还有其他各类宣传物料、海报、易拉宝等设计。',
      ],
    },
  ],
};

export const contactSection = {
  title: 'Want to',
  highlight: 'Collaborate?',
  email: 'hello@miaoke.design',
  copyright: '© 2024 MIAO KE — ALL RIGHTS RESERVED',
  socialLinks: [
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Medium', href: 'https://medium.com' },
    { label: 'Dribbble', href: 'https://dribbble.com' },
  ],
};
