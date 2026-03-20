export const workItemRefactorCaseStudy = {
  label: 'Full Case Study',
  introCallout:
    '面向复杂研发协作场景，重构工作项详情的信息结构与配置框架，提升多角色协作下的信息查找效率与任务处理效率。',
  blocks: [
    {
      type: 'chapter',
      title: '一、项目概览',
      blocks: [
        {
          type: 'html',
          html: '<p>这是一次 <strong>面向中大型企业客户</strong> 的工作项详情重构项目。</p><p>随着客户使用深入，工作项承载的信息持续增加，原有详情页在信息组织、跨角色协作和配置扩展能力上逐渐暴露问题，既影响日常使用效率，也限制了产品后续演进。</p><p>我在项目中主要负责问题定义、研究设计、竞品分析、核心交互方案输出与验证，协同产品、研发和业务团队推动方案分阶段落地。</p>',
        },
        {
          type: 'sectionTitle',
          text: '项目结果摘要',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            '第一阶段已上线表单资源库、自定义标签页与分组、信息重组、编辑器升级等能力；',
            '第二阶段围绕详情载体解耦与浏览方式优化完成 Demo 验证；',
            '可用性测试中，Demo 评分由线上现状的 3.2 提升至 4.4；',
          ],
        },
        {
          type: 'figure',
          src: '/images/projects/work-item-refactor/work-item-refactor-config-before-after-01.png',
          alt: '表单配置页面 - 前后对比',
          caption: '▵ 表单配置页面 - 前后对比',
          assetName: 'attachment:81e3d196-95b8-4475-aeb4-186c3e82201a:表单配置页面.png',
        },
        {
          type: 'figure',
          src: '/images/projects/work-item-refactor/work-item-refactor-detail-drawer-01.png',
          alt: '详情弹窗-原有详情页在高信息密度和复杂协作场景下，阅读、查找和切换成本较高。',
          caption: '▵ 详情弹窗-原有详情页在高信息密度和复杂协作场景下，阅读、查找和切换成本较高。',
          assetName: 'attachment:3983c2fc-1a00-47fb-b210-83ffe64bccf3:1详情弹窗展示.png',
        },
        {
          type: 'meta',
          items: [
            ['产品类型', 'B 端项目管理协作工具'],
            ['服务对象', '中大型企业产研团队'],
            ['项目角色', '交互设计主导'],
            ['我的职责', '问题定义、用户研究、竞品分析、交互方案设计、可用性验证'],
            ['协作对象', '产品、研发、业务、解决方案专家'],
          ],
        },
      ],
    },
    {
      type: 'chapter',
      title: '二、为什么要重构工作项详情',
      blocks: [
        {
          type: 'html',
          html: '<p>产品进入成熟阶段后，核心客户对工作项详情的要求已经不再停留在“能看、能填”，而是希望它能够支撑更复杂的协作流程、更灵活的业务配置，以及更高效的信息处理。</p><p>一方面，企业客户的管理流程复杂，不同角色会在同一个工作项内完成协作，导致详情页中的属性、动态、描述、关联内容不断增加，信息密度越来越高。另一方面，随着客户定制化需求增强，现有详情框架在布局灵活性和扩展能力上的限制也越来越明显。</p><p>因此，这次改版的目标并不只是优化某个页面，而是重新梳理工作项详情在复杂业务场景下的使用方式，让它既能提升当前效率，也能支撑未来产品持续演进。</p>',
        },
        {
          type: 'callout',
          icon: '💡',
          html: '关键洞察：<em>不同角色在同一工作项中关注的信息差异显著，需要更贴近场景的信息呈现与交互方式。</em>',
        },
      ],
    },
    {
      type: 'chapter',
      title: '三、原有体验的核心问题是什么',
      blocks: [
        {
          type: 'html',
          html: '<p>经过前期梳理，我将原有工作项详情的问题收敛为三个核心矛盾。</p>',
        },
        {
          type: 'subchapter',
          title: '1. 信息很多，但用户很难快速找到重点',
          blocks: [
            {
              type: 'html',
              html: '<p>工作项详情同时承载属性、描述、动态、评论、关联内容等大量信息，但现有结构缺少清晰的分区和优先级。用户在查看和编辑时，经常需要在密集信息中来回查找，影响处理效率。</p><p>典型表现包括：</p>',
            },
            {
              type: 'list',
              ordered: false,
              items: [
                '属性过多，查找成本高',
                '长内容会挤压其他模块的阅读空间',
                '必填项不够明显，填写效率低',
                '不同角色在同一页面中看到大量与自己无关的信息',
              ],
            },
          ],
        },
        {
          type: 'subchapter',
          title: '2. 当前结构无法适应复杂场景',
          blocks: [
            {
              type: 'html',
              html: '<p>不同工作项类型、不同角色、不同业务流程，对详情页的信息组织方式和操作路径都有明显差异。但现有详情结构较为固定，无法根据场景进行灵活适配。</p><p>典型表现包括：</p>',
            },
            {
              type: 'list',
              ordered: false,
              items: [
                '同一结构承载所有工作项类型，缺少差异化表达',
                '缺乏标签页、分组等信息组织能力',
                '详情载体与列表布局强绑定，影响连续浏览',
                '动态、评论、关联内容等协作信息缺少合理空间',
              ],
            },
          ],
        },
        {
          type: 'subchapter',
          title: '3. 配置能力不足，限制了产品扩展',
          blocks: [
            {
              type: 'html',
              html: '<p>对于企业客户来说，详情页不仅是一个使用界面，也是配置能力的一部分。原有方案只能支持基础模块的增删改，无法满足更复杂的业务规则和定制化需求。</p>',
            },
            {
              type: 'figure',
              src: '/images/projects/work-item-refactor/work-item-refactor-problem-config-center-01.jpeg',
              alt: '原表单配置中心仅支持有限区域配置，难以支撑复杂业务需求',
              caption:
                '▵ 原表单配置中心仅支持有限区域配置，难以支撑复杂业务需求 - 蓝色表示可配置区域',
            },
            {
              type: 'html',
              html: '<p>典型表现包括：</p>',
            },
            {
              type: 'list',
              ordered: false,
              items: [
                '无法灵活配置属性分组和标签页',
                '无法支撑条件展示、场景化布局等复杂规则',
                '第三方能力缺少合适的承载区域',
                '难以满足不同团队和角色的协作差异',
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'chapter',
      title: '四、我如何确认这些问题值得解决',
      blocks: [
        {
          type: 'html',
          html: '<p>为了确认问题的广度、严重性和优先级，我从<strong>用户反馈、体验走查、用户研究、竞品分析</strong>和<strong>方案验证</strong>五个方向交叉分析。</p>',
        },
        {
          type: 'subchapter',
          title: '1. 用户反馈和体验走查',
          blocks: [
            {
              type: 'html',
              html: '<p>我先对工单池中的 20000+ 用户反馈进行了梳理，其中与工作项详情相关的问题有 321 条，约 70% 来自高价值客户；结合团队内部体验走查，共识别出 396 条问题，并提炼出 15 项核心痛点和关键功能诉求。</p>',
            },
            {
              type: 'callout',
              icon: '💡',
              html: '数据洞察：这一步帮助我确认，详情页的问题并不是个别场景中的边缘问题，而是已经持续影响核心客户体验的系统性问题。',
            },
            {
              type: 'figure',
              src: '/images/projects/work-item-refactor/work-item-refactor-feedback-01.png',
              alt: '从用户反馈与体验走查中确认，详情页问题已持续影响核心客户体验。',
              caption: '▵ 从用户反馈与体验走查中确认，详情页问题已持续影响核心客户体验。',
              assetName: 'attachment:5bcc38bb-156f-4f88-8737-9602faa68edc:0_工单反馈.png',
            },
          ],
        },
        {
          type: 'subchapter',
          title: '2. 用户研究',
          blocks: [
            {
              type: 'html',
              html: '<p>为了理解不同角色在工作项中的实际使用方式，我设计并执行了多轮用户研究，覆盖产品经理、项目经理、研发、测试、运维等不同职能角色，并纳入不同权限层级和经验水平的样本。</p><p>研究中我主要采用了以下方式：</p>',
            },
            {
              type: 'list',
              ordered: false,
              items: [
                '情景观察与深度访谈：理解真实工作流中的查看、编辑和切换行为',
                '问卷调研：扩大样本范围，验证观察结论',
              ],
            },
            {
              type: 'html',
              html: '<p>通过这些研究，我确认了几个关键事实：</p>',
            },
            {
              type: 'list',
              ordered: false,
              items: [
                '不同角色在同一工作项中关注的信息差异很大',
                '用户更关注成组的信息，而不是单个字段',
                '连续处理任务和聚焦阅读任务，对详情载体的需求不同',
                '动态区域的重要性会随着协作模式变化而变化',
              ],
            },
            {
              type: 'figure',
              src: '/images/projects/work-item-refactor/work-item-refactor-research-01.png',
              alt: '用户研究图 1',
              caption: '▵ 用户研究图 1',
              assetName: 'attachment:71e9bb91-736d-47d0-bec2-93b0aa96c14d:image.png',
            },
            {
              type: 'figure',
              src: '/images/projects/work-item-refactor/work-item-refactor-research-02.png',
              alt: '通过多角色研究理解真实工作流，确认不同角色关注的信息与使用方式存在显著差异。',
              caption:
                '▵ 通过多角色研究理解真实工作流，确认不同角色关注的信息与使用方式存在显著差异。',
              assetName: 'attachment:6e69c438-fd34-4bca-8ba8-30c0968fc7a8:2问卷调研.png',
            },
          ],
        },
        {
          type: 'subchapter',
          title: '3. 竞品分析',
          blocks: [
            {
              type: 'html',
              html: '<p>我对国内外 13 个相关产品的前台详情与后台配置能力进行了对比分析，包括 Jira、Tapd、ClickUp、Airtable、Asana、Linear 等。</p>',
            },
            {
              type: 'callout',
              icon: '💡',
              html: '数据洞察：竞品分析让我确认，当前产品的问题不只是单点体验不足，而是整体详情框架已经落后于行业实践。多数成熟产品已经在以下方面建立了更强能力：<ul><li>更灵活的详情载体</li><li>更清晰的信息布局</li><li>属性分组与标签页能力</li><li>更强的个性化展示和编辑能力</li></ul>',
            },
            {
              type: 'figure',
              src: '/images/projects/work-item-refactor/work-item-refactor-competitor-01.png',
              alt: '竞品分析显示，成熟产品已在详情载体、信息布局和配置能力上形成更完整实践。',
              caption: '▵ 竞品分析显示，成熟产品已在详情载体、信息布局和配置能力上形成更完整实践。',
              assetName: 'attachment:7a3523bb-9ad1-4f0f-ae57-ccf522d64e61:3竞品分析.png',
            },
            {
              type: 'details',
              summary: '展开查看完整竞品对比',
              blocks: [
                {
                  type: 'table',
                  headers: ['友商情况', '思考'],
                  rows: [
                    [
                      '更强大的富文本编辑：70% 竞品的富文本编辑器允许插入表格、调整图片大小等能力，比我们强大很多',
                      '接入 ONES Wiki 编辑器，提供统一的编辑体验，满足更多不同用户对内容多样性的需求',
                    ],
                    [
                      '支持抽屉 + 弹窗的详情模式：90% 竞品都提供了 2 种及以上的详情布局模式，允许普通成员基于个人偏好自定义切换；抽屉载体时，都支持用户自定义调整详情面板宽度',
                      '解耦详情载体和列表布局的绑定关系，避免用户频繁切换视图带来无必要的影响；新增抽屉模式后，也继续评估宽/窄详情布局是否仍有保留必要',
                    ],
                    [
                      '左内容、右属性的信息布局：90% 竞品都采用了这种信息布局，将大部分空间留给协作时产生的内容，比如描述、动态',
                      '核心空间应分配给协作过程产生的内容，但也继续思考是否存在强依赖属性工作的流程，需要不同的布局策略',
                    ],
                    [
                      '瀑布流的浏览方式：85% 竞品平铺展示各个模块，仅通过鼠标滚动就能在一屏内浏览信息，并且均不会展示内容为空的模块',
                      '能够一屏浏览信息，保证信息连续性和流畅性；同时也要平衡瀑布流查找困难与 Tab 切换成本的问题',
                    ],
                    [
                      '灵活的信息分组能力：超过 90% 的竞品都支持属性分组，用户可以根据自己的使用习惯和逻辑关系，自由调整属性顺序',
                      '不同团队和项目可能有不同工作流程和需求，属性分组能力可以帮助产品适应这种多样化',
                    ],
                    [
                      '提供个性化的信息展示：超过 80% 的海外产品支持用户基于个人习惯定制详情中部分内容的显隐、顺序、分组等能力',
                      '个性化体验更友好，但也要进一步平衡个人习惯与团队协作一致性之间的关系',
                    ],
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'subchapter',
          title: '4. 可用性测试',
          blocks: [
            {
              type: 'html',
              html: '<p>在研究结论基础上，我围绕关键问题输出了多组 Demo 方案，并邀请用户进行可用性测试，重点验证详情载体、属性分组、信息浏览方式、动态区域调整等设计点。</p>',
            },
            {
              type: 'callout',
              icon: '🎉',
              html: '用户评分：Demo <strong>4.4</strong> &gt; 线上现状 <strong>3.2</strong>',
            },
            {
              type: 'html',
              html: '<p>测试结果显示，用户对 Demo 的整体评分达到 4.4，高于线上现状的 3.2，说明新的设计方向在连续浏览、信息查找和结构清晰度上具备明显优势。</p><p>同时，Demo 测试也帮助我识别出一些需要继续权衡的问题，例如：</p>',
            },
            {
              type: 'list',
              ordered: false,
              items: [
                '抽屉模式下对列表信息的遮挡',
                '瀑布流在高密度信息场景下的查找成本',
                '个性化展示与团队一致性之间的平衡',
              ],
            },
            {
              type: 'figure',
              src: '/images/projects/work-item-refactor/work-item-refactor-usability-test-01.png',
              alt: '可用性测试验证了关键设计方向，也帮助识别出后续需要继续权衡的问题。',
              caption: '▵ 可用性测试验证了关键设计方向，也帮助识别出后续需要继续权衡的问题。',
              assetName: 'attachment:d8c1dafb-0cba-4328-84f4-97e6d29940b5:5_可用性测试.png',
            },
            {
              type: 'details',
              summary: '展开查看详细测试反馈',
              blocks: [
                {
                  type: 'table',
                  headers: ['测试点', 'Demo 做得好的', '需要调整策略的'],
                  rows: [
                    [
                      '新增抽屉载体 + 合并宽/窄详情',
                      '终于能边看表格边看详情了，不用频繁切换视图了；支持自由调整宽度，查看内容很方便',
                      '详情抽屉查看时，不应该遮挡列表上的关键属性；继续打开动态后界面元素太拥挤；70% 的用户对新列表布局和表格布局的差异感到困惑',
                    ],
                    [
                      '优化现有详情弹窗尺寸',
                      '弹窗尺寸变大后，不会频繁出现省略号，能展示更多信息了',
                      '-',
                    ],
                    [
                      '支持详情内切换上/下工作（含快捷键）',
                      '操作很流畅，沉浸式查看详情时不用再反复打开、关闭了',
                      '如果能支持新窗口打开就更好了',
                    ],
                    [
                      '调整信息展示策略 + 浏览方式',
                      '不展示为空模块，详情信息精简很多',
                      '变成瀑布流后，信息太多不好查找',
                    ],
                    [
                      '支持属性分组',
                      '比线上清晰很多，属性关联性也更强了',
                      '-',
                    ],
                    [
                      '支持成员个人 Pin 属性',
                      '可以只看自己关注的信息，有效解决查找困难的问题',
                      '掌控感较强的管理员，不希望协作时出现信息不对齐问题',
                    ],
                    [
                      '支持调整动态区域宽度',
                      '调整后展示空间很大，能够很好地阅读动态内容',
                      '对于不依赖动态工作的场景，将动态区域调整到最小还是觉得占空间',
                    ],
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'chapter',
      title: '五、我怎么设计',
      blocks: [
        {
          type: 'html',
          html: '<p>基于前期研究，我没有选择一次性全面改版，而是按<strong>「先解决高频效率问题，再逐步调整底层框架」</strong>的思路，分阶段推进方案。</p>',
        },
        {
          type: 'sectionTitle',
          text: '设计目标',
        },
        {
          type: 'html',
          html: '<p>这次改版主要围绕 4 个目标展开：</p>',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            '提升工作项详情的信息查找效率',
            '让详情结构能够适配不同场景和角色需求',
            '增强管理员配置能力，支撑复杂业务流程',
            '为后续开放能力和第三方集成预留框架基础',
          ],
        },
        {
          type: 'figure',
          src: '/images/projects/work-item-refactor/work-item-refactor-design-goals-01.png',
          alt: '设计目标图',
          caption: '▵ 设计目标图',
          assetName: 'attachment:31e18245-3e3e-4ec6-b1e8-1a289e6cc677:Frame_16162.png',
        },
        {
          type: 'details',
          summary: '展开查看具体方案执行',
          blocks: [
            {
              type: 'html',
              html: '<p>因为新方案对老用户使用习惯影响较大，所以后续会采取小步快跑的方式逐步上线。</p>',
            },
            {
              type: 'table',
              headers: ['', '', '第一批已上线', '第二批规划中'],
              rows: [
                ['⛳ O1：增强详情框架灵活性 & 扩展性', 'KR 1：解耦详情载体和列表布局的绑定关系', '', '✅'],
                ['⛳ O1：增强详情框架灵活性 & 扩展性', 'KR 2：增强 Layout 能力，支持管理员自定义内容放置区域', '✅', ''],
                ['⛳ O1：增强详情框架灵活性 & 扩展性', 'KR 3：开辟新的插槽位，承载更多开放能力', '', '✅'],
                ['⛳ O2：强化业务场景感知', 'KR 1：基于最佳实践定义初始布局配置，让用户开箱即用', '', '✅'],
                ['⛳ O2：强化业务场景感知', 'KR 2：基于工作场景定义工作项类型对应的快捷操作，提高快捷能力使用率', '', '✅'],
                ['⛳ O3：提高用户查找信息的效率', 'KR 1：信息重组，提供清晰的内容分区', '✅', ''],
                ['⛳ O3：提高用户查找信息的效率', 'KR 2：调整信息展示策略，渐进式呈递', '', '✅'],
                ['⛳ O3：提高用户查找信息的效率', 'KR 3：提供多种浏览方式，满足不同用户的使用偏好', '', '✅'],
                ['⛳ O3：提高用户查找信息的效率', 'KR 4：解决属性太多，难以查找的问题', '✅', ''],
                ['⛳ O3：提高用户查找信息的效率', 'KR 5：优化信息视觉样式，视觉减负', '✅', ''],
                ['⛳ O4：提升用户编辑信息的体验', 'KR 1：必填标识可视，提高填写效率', '✅', ''],
                ['⛳ O4：提升用户编辑信息的体验', 'KR 2：接入 Wiki 编辑器，统一交互体验', '✅', ''],
                ['⛳ O4：提升用户编辑信息的体验', 'KR 3：提供草稿能力，避免误操作', '', '✅'],
                ['⛳ O5：保证多语言体验', 'KR 1：优化信息布局以及适配规则，保证信息完整性', '✅', ''],
              ],
            },
          ],
        },
        {
          type: 'subchapter',
          title: '设计方案一：重构表单配置能力（已上线）',
          blocks: [
            {
              type: 'html',
              html: '<p>原有配置方式只能支持基础模块操作，管理员很难围绕业务场景组织表单内容，也缺少顺手的配置入口。</p>',
            },
            {
              type: 'figure',
              src: '/images/projects/work-item-refactor/work-item-refactor-config-before-after-01.png',
              alt: '表单配置页面 - 前后对比',
              caption: '▵ 表单配置页面 - 前后对比',
              assetName: 'attachment:81e3d196-95b8-4475-aeb4-186c3e82201a:表单配置页面.png',
            },
            {
              type: 'html',
              html: '<p>为此，我引入了“表单资源库”的设计，将属性和控件集中管理。管理员可以直接搜索、拖拽和定位资源，并在当前场景中快速新建属性，减少配置过程中的来回跳转。</p>',
            },
            {
              type: 'figure',
              src: '/images/projects/work-item-refactor/work-item-refactor-solution-1-01.png',
              alt: '表单资源库',
              caption: '▵ 表单配置页面 - 高亮为表单资源库-通过引入表单资源库，将零散编辑转为围绕业务结构进行组织，提升管理员配置效率。',
              assetName: 'attachment:8fb0ecc0-6930-4418-b12a-fe1e237c53f0:image.png',
            },
            {
              type: 'html',
              html: '<p>这个方案解决的核心问题是：让配置行为从“零散编辑”转变为“围绕业务结构进行组织”，为后续布局和分组能力建立基础。</p>',
            },
            {
              type: 'figure',
              src: '/images/projects/work-item-refactor/work-item-refactor-solution-1-02.png',
              alt: '自定义拖拽配置属性',
              caption: '▵ 表单配置页面 - 自定义拖拽配置属性',
              assetName: 'attachment:17235c4d-414a-44e0-ba37-5c82be330022:image.png',
            },
            {
              type: 'figure',
              src: '/images/projects/work-item-refactor/work-item-refactor-solution-1-03.png',
              alt: '搜索资源并定位到对应的位置',
              caption: '▵ 表单配置页面 - 搜索资源并定位到对应的位置',
              assetName: 'attachment:750afc13-d3a7-4fc2-95c6-ae764d92f3f3:image.png',
            },
          ],
        },
        {
          type: 'subchapter',
          title: '设计方案二：支持自定义标签页和分组（已上线）',
          blocks: [
            {
              type: 'html',
              html: '<p>研究发现，用户在工作项中关注的通常不是单个属性，而是一组具备上下文关系的信息。原有平铺结构难以承载这种业务语义，也不利于团队快速理解信息。</p><p>因此，我将详情结构升级为支持标签页和分组的可配置模式。管理员可以根据业务线、角色或流程阶段组织信息，并设置不同成员的可见范围。这样既能减少无关信息干扰，也能让不同角色更快进入自己的任务上下文。</p>',
            },
            {
              type: 'figure',
              src: '/images/projects/work-item-refactor/work-item-refactor-solution-2-01.png',
              alt: '内容配置区域',
              caption: '▵ 表单配置页面 - 内容配置区域',
              assetName: 'attachment:3b9cde1d-627e-4457-9c03-75cf518a59a6:image.png',
            },
            {
              type: 'figure',
              src: '/images/projects/work-item-refactor/work-item-refactor-solution-2-02.png',
              alt: '自定义标签页',
              caption: '表单配置页面-自定义标签页',
              assetName: 'attachment:0cf6a81c-5855-4971-9474-c661e0701345:image.png',
            },
            {
              type: 'figure',
              src: '/images/projects/work-item-refactor/work-item-refactor-solution-2-03.png',
              alt: '标签页可见性',
              caption: '▵ 自定义标签页-支持配置标签页的可见性，即对哪些成员/角色展示',
              assetName: 'attachment:f7411857-826a-4606-a048-3fe2a8ac951d:image.png',
            },
            {
              type: 'figure',
              src: '/images/projects/work-item-refactor/work-item-refactor-solution-2-04.png',
              alt: '自定义标签页2',
              caption: '▵ 表单配置页面-自定义标签页2',
              assetName: 'attachment:0054c889-8807-4f4c-a5f5-570afbd8660e:image.png',
            },
            {
              type: 'figure',
              src: '/images/projects/work-item-refactor/work-item-refactor-solution-2-05.png',
              alt: '自定义拖拽分组',
              caption: '▵ 表单配置页面-自定义拖拽分组',
              assetName: 'attachment:b9b75b18-5afa-456d-ae90-2803f97d8aa7:image.png',
            },
            {
              type: 'figure',
              src: '/images/projects/work-item-refactor/work-item-refactor-solution-2-06.png',
              alt: '通过标签页与分组重组信息结构',
              caption: '表单配置页面-右侧配置属性信息，通过标签页与分组重组信息结构，让页面组织方式更贴近真实业务语义',
              assetName: 'attachment:f8991cc9-dda9-4f7e-866a-d7f446489a06:image.png',
            },
          ],
        },
        {
          type: 'subchapter',
          title: '设计方案三：解耦详情载体与列表布局（方案验证中）',
          blocks: [
            {
              type: 'html',
              html: '<p>原有详情查看方式与列表布局强绑定，用户在表格、看板等视图下打开和切换工作项时，容易丢失当前位置，也难以连续浏览多个任务。</p>',
            },
            {
              type: 'figure',
              src: '/images/projects/work-item-refactor/work-item-refactor-detail-drawer-01.png',
              alt: '弹窗与抽屉并存',
              caption: '▵ 详情弹窗-通过弹窗与抽屉并存的方式，兼顾连续处理任务与深度阅读两类场景。',
              assetName: 'attachment:3983c2fc-1a00-47fb-b210-83ffe64bccf3:1详情弹窗展示.png',
            },
            {
              type: 'html',
              html: '<p>因此，我探索了将详情载体从原有模式中解耦，支持弹窗与抽屉两种方式并存。这样用户在连续处理任务时可以保留列表上下文，在深度阅读时也能获得更完整的信息空间。</p><p>这个方案本质上是在兼顾两类不同任务模式：</p>',
            },
            {
              type: 'list',
              ordered: false,
              items: [
                '连续处理任务时，需要保持上下文和操作连贯性',
                '深度查看任务时，需要更沉浸的信息空间',
              ],
            },
            {
              type: 'figure',
              src: '/images/projects/work-item-refactor/work-item-refactor-solution-3-01.png',
              alt: '拖拽自定义划分区域',
              caption: '▵ 详情弹窗 -拖拽自定义划分区域',
              assetName: 'attachment:430b3dd8-1910-4125-b13f-d212917d62a9:5悬停_2.png',
            },
            {
              type: 'figure',
              src: '/images/projects/work-item-refactor/work-item-refactor-solution-3-02.png',
              alt: '宽详情：平铺 ➡️ 抽屉',
              caption: '▵ 宽详情：平铺 ➡️ 抽屉',
              assetName: 'attachment:46df19c0-5986-4581-9d91-12135318b7f4:2宽详情展示.png',
            },
            {
              type: 'figure',
              src: '/images/projects/work-item-refactor/work-item-refactor-solution-3-03.png',
              alt: '窄详情：平铺 ➡️ 抽屉',
              caption: '▵ 窄详情：平铺 ➡️ 抽屉',
              assetName: 'attachment:46984a3b-2d6f-4f93-9bf9-431e42fbd554:3窄详情展示.png',
            },
            {
              type: 'figure',
              src: '/images/projects/work-item-refactor/work-item-refactor-solution-3-04.png',
              alt: '详情内快捷新建子任务',
              caption: '▵ 详情内快捷新建子任务',
              assetName: 'attachment:db109085-6bb7-48b6-a9d8-94b6a74191a8:4详情快捷新建子任务.png',
            },
          ],
        },
        {
          type: 'subchapter',
          title: '方案四：优化高频编辑与浏览体验（部分已上线）',
          blocks: [
            {
              type: 'html',
              html: '<p>在结构层调整之外，我也同步优化了高频使用过程中的关键细节，包括：</p>',
            },
            {
              type: 'list',
              ordered: false,
              items: [
                '优化属性区排版与视觉层级，降低查找难度',
                '强化必填标识，提升填写效率',
                '接入统一的 Wiki 编辑器，改善富文本编辑体验（已上线）',
                '优化多语言场景下的信息布局与适配规则（已上线）',
                '补足草稿与防误操作能力',
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'chapter',
      title: '六、结果怎么样',
      blocks: [
        {
          type: 'html',
          html: '<p>这次项目采用分阶段推进的方式，先上线高优先级、低迁移成本的能力，再逐步验证和推进影响更大的框架调整。</p>',
        },
        {
          type: 'sectionTitle',
          text: '已上线的能力',
        },
        {
          type: 'html',
          html: '<p>第一阶段已经完成并上线的能力包括：</p>',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            '✅ 表单资源库',
            '✅ 自定义标签页与分组',
            '✅ 信息重组与视觉减负',
            '✅ 必填标识优化',
            '✅ 编辑器能力升级',
            '✅ 多语言适配优化',
          ],
        },
        {
          type: 'html',
          html: '<p>这部分方案优先解决了信息查找、配置效率和内容编辑的高频问题，也为后续更深层的结构升级打下了基础。</p>',
        },
        {
          type: 'sectionTitle',
          text: '已验证的方向',
        },
        {
          type: 'html',
          html: '<p>针对详情载体解耦、浏览方式优化、动态区域调整等第二阶段方向，我通过 Demo 和可用性测试完成了初步验证。</p><p>测试结果显示：</p>',
        },
        {
          type: 'list',
          ordered: false,
          items: ['Demo 用户评分：4.4', '线上现状评分：3.2'],
        },
        {
          type: 'html',
          html: '<p>多数用户认可新方案在以下方面的改善：</p>',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            '连续浏览工作项时更顺畅',
            '属性与内容的组织更清晰',
            '高密度信息下的查找效率更高',
            '协作内容的阅读空间更合理',
          ],
        },
      ],
    },
    {
      type: 'chapter',
      title: '七、我的复盘',
      blocks: [
        {
          type: 'html',
          html: '<p>这次项目让我进一步确认，B 端复杂产品中的体验问题，往往不是通过单点交互优化解决的，而是要回到业务场景和信息结构本身。</p><p>相比优化某一个控件或某一块布局，这次项目更重要的价值在于：通过系统研究把分散问题收敛成结构性矛盾，再用分阶段策略推动方案落地。这不仅改善了当前体验，也重新定义了工作项详情作为“协作界面 + 配置框架 + 扩展基础”的产品角色。</p><p>如果继续推进下一阶段，我会重点关注两个问题：</p>',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            '如何在个性化配置与团队一致性之间建立更清晰的边界',
            '如何让不同工作模式下的详情浏览方式更自然地适配用户任务',
          ],
        },
      ],
    },
  ],
};
