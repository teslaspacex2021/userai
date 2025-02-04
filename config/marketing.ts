import { Icons } from "@/components/icons"
import { LucideIcon } from "lucide-react"

export interface Feature {
  title: string
  description: string
  icon: LucideIcon
}

export interface Testimonial {
  content: string
  author: string
  role: string
  company: string
  image?: string
}

export interface PricingPlan {
  name: string
  description: string
  price: string
  features: string[]
  cta: string
  popular?: boolean
}

export interface BlogPost {
  title: string
  description: string
  date: string
  image?: string
  showImage?: boolean
  author: string
  category: string
  slug: string
  content?: string
}

export interface NavItem {
  title: string
  href: string
}

export interface FooterNav {
  product: NavItem[]
  support: NavItem[]
  company: NavItem[]
  legal: NavItem[]
  branding: {
    name: string
    description: string
  }
}

export interface MarketingConfig {
  mainNav: NavItem[]
  footerNav: FooterNav
}

export const features: Feature[] = [
  {
    title: "AI 智能创作",
    description: "基于先进的 AI 模型，自动生成高质量的营销文案、产品描述和社媒内容。支持多语言创作，确保内容的原创性和吸引力。",
    icon: Icons.brain,
  },
  {
    title: "多平台内容管理",
    description: "一站式管理 X、Facebook、TikTok 等多个社交媒体平台的内容。支持内容定时发布、互动管理和数据分析。",
    icon: Icons.share2,
  },
  {
    title: "独立站建设",
    description: "2小时快速搭建专业独立站，提供多种模板选择。支持自定义域名、SSL 证书、支付接入等功能。",
    icon: Icons.rocket,
  },
  {
    title: "SEO 优化",
    description: "AI 自动生成 SEO 友好的文章和产品描述，优化网站结构和内容，提升搜索引擎排名，获取更多自然流量。",
    icon: Icons.shield,
  },
  {
    title: "数据分析",
    description: "整合各平台数据，提供统一的数据分析界面。包括访问量、转化率、用户行为等多维度分析，助您做出数据驱动的决策。",
    icon: Icons.monitor,
  },
  {
    title: "一对一服务",
    description: "配备专属项目经理，提供营销策略咨询、广告投放优化、平台运营指导等专业服务，助力业务快速增长。",
    icon: Icons.users,
  }
]

export const testimonials: Testimonial[] = [
  {
    content: "UserAI帮助我们显著提升了营销效率，AI生成的内容质量超出预期。",
    author: "张经理",
    role: "营销总监",
    company: "某电商公司",
  },
  {
    content: "使用UserAI后，我们的社媒运营效率提升了300%，强烈推荐！",
    author: "李总",
    role: "CEO",
    company: "某科技公司",
  }
]

export const pricingPlans: PricingPlan[] = [
  {
    name: "基础版",
    description: "适合个人创业者和小型团队",
    price: "¥199/月",
    features: [
      "AI内容生成",
      "基础数据分析",
      "单平台管理",
      "5GB存储空间",
      "邮件支持",
      "1000条API调用",
      "1000条社媒内容发布",
      "1000条社媒内容发布",
      "1000条社媒内容发布",
      "1000条社媒内容发布",
      "1000条社媒内容发布",
      "1000条社媒内容发布",
    ],
    cta: "开始使用"
  },
  {
    name: "专业版",
    description: "适合成长期企业",
    price: "¥599/月",
    features: [
      "所有基础版功能",
      "多平台内容管理",
      "高级数据分析",
      "20GB存储空间",
      "7*24客服支持"
    ],
    cta: "免费试用",
    popular: true
  },
  {
    name: "企业版",
    description: "适合大型企业",
    price: "联系销售",
    features: [
      "所有专业版功能",
      "自定义AI模型",
      "API访问",
      "无限存储空间",
      "专属客户经理"
    ],
    cta: "联系我们"
  }
]

export const marketingConfig: MarketingConfig = {
  mainNav: [
    {
      title: "首页",
      href: "/",
    },
    {
      title: "功能特性",
      href: "/features",
    },
    {
      title: "解决方案",
      href: "/solutions",
    },
    {
      title: "案例",
      href: "/cases",
    },
    {
      title: "价格",
      href: "/pricing",
    },
    {
      title: "帮助",
      href: "/help",
    },
  ],
  footerNav: {
    product: [
      { title: "功能特性", href: "/features" },
      { title: "解决方案", href: "/solutions" },
      { title: "客户案例", href: "/cases" },
    ],
    support: [
      { title: "帮助中心", href: "/help" },
      { title: "开发文档", href: "/docs" },
      { title: "联系我们", href: "/contact" },
    ],
    company: [
      { title: "加入我们", href: "/careers" },
    ],
    legal: [
      { title: "隐私政策", href: "/privacy" },
      { title: "服务条款", href: "/terms" },
    ],
    branding: {
      name: "UserAI",
      description: "一站式AI营销SaaS平台，助力企业提升营销效率"
    }
  }
}

export const blogPosts: BlogPost[] = [
  {
    title: "如何利用AI提升营销效率",
    description: "探索AI在现代营销中的应用，以及如何利用AI技术提升营销效率和效果。",
    date: "2024-03-15",
    image: "/images/blog/ai-marketing-trends.jpg",
    showImage: false,
    author: "张明",
    category: "AI营销",
    slug: "how-to-improve-marketing-with-ai",
    content: `在当今数字化时代，AI技术正在彻底改变营销领域的游戏规则。本文将深入探讨如何利用AI技术来提升营销效率和效果。

在竞争日益激烈的市场环境下，AI技术可以帮助企业显著提升营销效率、降低人工成本、实现精准营销、提供个性化体验。

1. 智能内容创作
- 自动生成营销文案和标题
- 智能图片和视觉设计生成
- 视频内容制作和剪辑
- 多语言内容本地化

2. 数据分析与洞察
- 用户行为分析和画像
- 营销效果预测和归因
- ROI跟踪和优化
- 竞品分析和市场洞察

3. 个性化营销
- 智能用户画像构建
- 个性化推荐系统
- 动态定价策略
- 自动化营销活动`
  },
  {
    title: "2024年社交媒体营销趋势",
    description: "解析最新的社交媒体营销趋势，帮助企业制定有效的社媒策略。",
    date: "2024-03-12",
    image: "/images/blog/social-media-strategy.jpg",
    showImage: false,
    author: "李华",
    category: "社媒营销",
    slug: "social-media-marketing-trends-2024",
    content: `2024年社交媒体营销正在经历重大变革。短视频、直播和社交电商的融合成为主流，企业需要适应新的营销方式。

1. 短视频营销
- 垂直领域内容深耕
- 创意玩法不断创新
- 跨平台内容分发

2. 直播电商
- 场景化营销
- 达人带货新模式
- 私域流量运营

3. 社区营销
- 用户内容共创
- 品牌社群运营
- 粉丝经济深化`
  },
  {
    title: "数据驱动的营销决策",
    description: "如何利用数据分析来优化营销策略，提高投资回报率。",
    date: "2024-03-08",
    image: "/images/blog/ecommerce-optimization.jpg",
    showImage: false,
    author: "王芳",
    category: "数据分析",
    slug: "data-driven-marketing-decisions",
    content: `数据分析已经成为现代营销决策的核心依据。本文将介绍如何利用数据来优化营销策略。

1. 数据收集
- 用户行为数据
- 营销效果数据
- 竞品分析数据

2. 分析方法
- 描述性分析
- 预测性分析
- 归因分析

3. 优化策略
- 预算分配优化
- 受众定位优化
- 内容策略优化`
  },
  {
    title: "电商平台选择指南",
    description: "详细对比各大电商平台的优劣势，助你选择最适合的平台。",
    date: "2024-03-05",
    image: "/images/blog/post-1.jpg",
    showImage: false,
    author: "赵强",
    category: "电商运营",
    slug: "ecommerce-platform-guide",
    content: `选择合适的电商平台对企业的线上业务发展至关重要。本文将从多个维度对比主流电商平台。

1. 平台特点
- 用户群体特征
- 运营门槛
- 费用结构

2. 功能对比
- 店铺装修
- 营销工具
- 物流体系

3. 平台政策
- 入驻要求
- 扶持政策
- 违规处罚`
  },
  {
    title: "品牌营销实战案例",
    description: "深度解析成功品牌的营销策略，提供可落地的实战经验。",
    date: "2024-03-02",
    image: "/images/blog/post-2.jpg",
    showImage: false,
    author: "孙明",
    category: "品牌营销",
    slug: "brand-marketing-case-studies",
    content: `通过分析优秀品牌的营销案例，我们可以学习到很多实用的营销策略和方法。

1. 内容营销
- 品牌故事打造
- 话题营销策划
- 社媒矩阵运营

2. 活动策划
- 线上线下联动
- 用户互动设计
- KOL合作策略

3. 效果评估
- 品牌声量提升
- 用户口碑建设
- ROI分析`
  },
  {
    title: "新品上线营销指南",
    description: "全方位解析新品上线的营销策略，从0到1打造爆款产品。",
    date: "2024-02-28",
    image: "/images/blog/post-5.jpg",
    showImage: false,
    author: "刘芳",
    category: "产品营销",
    slug: "product-launch-marketing-guide",
    content: `新品上线是产品营销中最关键的阶段之一，需要精心策划和执行。

1. 前期准备
- 市场调研
- 竞品分析
- 定位策略

2. 上线节奏
- 预热阶段
- 首发活动
- 持续运营

3. 推广渠道
- 社媒矩阵
- KOL合作
- 私域引流`
  }
]

// 将博客文章转换为帮助文档
export interface HelpArticle {
  id: string
  title: string
  description: string
  category: string
  content: string
  lastUpdated: string
  type: 'article' | 'faq' | 'doc'  // 区分文章、问题和文档类型
}

export const helpCategories = [
  {
    title: "快速入门",
    description: "了解基本使用方法",
    articles: ["getting-started", "features", "quickstart"]
  },
  {
    title: "账户与计费",
    description: "了解账户管理和支付相关问题",
    articles: [
      "subscription", 
      "payment", 
      "billing",
      "invoice",
      "refund",
      "enterprise-billing",
      "pricing-faq"
    ]
  },
  {
    title: "AI 助手",
    description: "了解如何使用 AI 功能",
    articles: [
      "ai-content-creation",
      "ai-image-generation",
      "ai-marketing-automation",
      "ai-copywriting",
      "ai-data-analysis"
    ]
  },
  {
    title: "常见问题",
    description: "解答用户常见疑问",
    articles: [
      "faq-account-security",
      "faq-api-usage",
      "faq-service-limits",
      "faq-technical-issues",
      "faq-data-privacy"
    ]
  }
]

export const helpArticles: Record<string, HelpArticle> = {
  // 快速入门文档
  "getting-started": {
    id: "getting-started",
    title: "新手指南",
    description: "从零开始了解如何使用 UserAI",
    category: "快速入门",
    type: "doc",
    lastUpdated: "2024-03-20",
    content: `开始使用 UserAI 非常简单，本指南将帮助您快速上手。

1. 注册和登录
- 访问官网完成注册
- 验证邮箱
- 设置账户信息

2. 基础设置
- 选择您需要的功能模块
- 配置基本参数
- 连接社交媒体账号

3. 开始使用
- 了解界面布局
- 创建第一个项目
- 尝试AI创作功能`
  },
  "account-setup": {
    id: "account-setup",
    title: "账号设置",
    description: "如何设置和管理您的账号",
    category: "快速入门",
    type: "doc",
    lastUpdated: "2024-03-19",
    content: `了解如何正确设置和管理您的账号。

1. 个人信息设置
- 完善基本信息
- 上传头像
- 设置偏好

2. 安全设置
- 修改密码
- 开启两步验证
- 管理登录设备

3. 通知设置
- 邮件通知
- 站内消息
- 手机推送`
  },
  "basic-features": {
    id: "basic-features",
    title: "基础功能介绍",
    description: "了解 UserAI 的核心功能",
    category: "快速入门",
    type: "doc",
    lastUpdated: "2024-03-18",
    content: `了解 UserAI 的核心功能模块。

1. 内容创作
- AI写作助手
- 图片生成
- 内容优化

2. 社媒管理
- 账号管理
- 内容发布
- 数据分析

3. 数据中心
- 数据概览
- 报表生成
- 数据导出`
  },

  // 热门主题
  "ai-creation": {
    id: "ai-creation",
    title: "AI内容创作指南",
    description: "如何使用AI助手创作内容",
    category: "热门主题",
    type: "doc",
    lastUpdated: "2024-03-17",
    content: `学习如何使用AI助手创作优质内容。

1. 文案创作
- 选择模板
- 设置参数
- 优化输出

2. 图片生成
- 选择风格
- 编写提示词
- 调整效果

3. 内容优化
- SEO优化
- 文案润色
- 本地化调整`
  },

  // FAQ 问题
  "faq-getting-started": {
    id: "faq-getting-started",
    title: "如何开始使用 UserAI？",
    description: "了解如何快速开始使用我们的服务",
    category: "常见问题",
    type: "faq",
    lastUpdated: "2024-03-16",
    content: `如何开始使用 UserAI？

注册账号后，您可以通过以下步骤快速开始：

1. 账号设置
- 完成邮箱验证
- 设置基本信息
- 选择套餐方案

2. 功能体验
- 查看新手指南
- 参加入门培训
- 尝试核心功能

3. 获取帮助
- 查看帮助文档
- 联系客服支持
- 参与社区讨论`
  },
  "faq-pricing": {
    id: "faq-pricing",
    title: "计费和订阅问题",
    description: "了解计费方式和订阅管理相关问题",
    category: "常见问题",
    type: "faq",
    lastUpdated: "2024-03-15",
    content: `关于计费和订阅的常见问题解答：

1. 如何选择合适的套餐？
- 根据团队规模
- 考虑功能需求
- 评估预算情况

2. 支持哪些支付方式？
- 支付宝
- 微信支付
- 对公转账
- 国际信用卡

3. 如何升级或降级套餐？
- 在账户中心操作
- 费用按比例计算
- 即时生效`
  },
  "faq-ai-creation": {
    id: "faq-ai-creation",
    title: "AI 创作相关问题",
    description: "解答使用 AI 创作功能时的常见问题",
    category: "常见问题",
    type: "faq",
    lastUpdated: "2024-03-14",
    content: `关于 AI 创作功能的常见问题：

1. AI 创作的内容是否原创？
- 确保内容唯一性
- 避免重复生成
- 支持人工优化

2. 如何提高 AI 创作质量？
- 优化提示词
- 调整生成参数
- 结合人工审核

3. 支持哪些创作类型？
- 营销文案
- 产品描述
- 社媒内容
- 图片生成`
  },
  "faq-account-security": {
    id: "faq-account-security",
    title: "账户安全问题",
    description: "关于账户安全和隐私保护的常见问题",
    category: "常见问题",
    type: "faq",
    lastUpdated: "2024-03-13",
    content: `关于账户安全的重要信息：

1. 如何保护账户安全？
- 设置强密码（至少12位，包含大小写字母、数字和特殊符号）
- 开启双重认证（支持短信和authenticator验证）
- 定期更新密码（建议每3个月更换一次）
- 避免在公共设备上保存登录状态

2. 遇到账户异常怎么办？
- 立即修改密码并退出所有设备
- 检查登录记录和异常操作
- 联系客服处理（7*24小时在线支持）
- 开启登录异常提醒

3. 数据安全如何保障？
- 全程SSL加密传输
- AES-256位加密存储
- 定期安全审计和渗透测试
- 多重备份和容灾方案

4. 账户访问控制
- 支持IP白名单设置
- 多级权限管理系统
- 操作日志完整记录
- 敏感操作二次验证

5. 个人隐私保护
- 符合GDPR标准
- 数据脱敏处理
- 隐私政策透明公开
- 用户数据导出和删除权限

6. 安全认证和合规
- ISO27001信息安全认证
- 等保三级认证
- CCRC认证
- SOC2 Type II审计

7. 异常监控和预警
- 24/7安全监控
- 智能风控系统
- 实时异常检测
- 自动化安全响应

8. 账户恢复机制
- 多种身份验证方式
- 专业客服团队支持
- 标准化恢复流程
- 紧急账户冻结功能

9. 企业账户安全
- 子账户管理
- 角色权限配置
- 审计日志导出
- 安全策略定制

10. 最佳安全实践
- 定期安全培训
- 安全更新提醒
- 漏洞奖励计划
- 应急响应预案`
  },
  "faq-platform-integration": {
    id: "faq-platform-integration",
    title: "平台对接问题",
    description: "关于社交媒体平台对接的常见问题",
    category: "常见问题",
    type: "faq",
    lastUpdated: "2024-03-12",
    content: `平台对接相关问题解答：

1. 支持哪些平台？
- 主流社交媒体
- 电商平台
- 企业网站

2. 如何添加新平台？
- 授权绑定
- API配置
- 功能测试

3. 遇到对接问题？
- 查看对接文档
- 测试连接状态
- 联系技术支持`
  },

  // 保留原有的博客文章
  "how-to-improve-marketing-with-ai": {
    id: "how-to-improve-marketing-with-ai",
    title: "如何利用AI提升营销效率",
    description: "探索AI在现代营销中的应用，以及如何利用AI技术提升营销效率和效果。",
    category: "最新文章",
    type: "article",
    lastUpdated: "2024-03-15",
    content: blogPosts.find(post => post.slug === "how-to-improve-marketing-with-ai")?.content || ""
  },
  "social-media-marketing-trends-2024": {
    id: "social-media-marketing-trends-2024",
    title: "2024年社交媒体营销趋势",
    description: "解析最新的社交媒体营销趋势，帮助企业制定有效的社媒策略。",
    category: "最新文章",
    type: "article",
    lastUpdated: "2024-03-12",
    content: blogPosts.find(post => post.slug === "social-media-marketing-trends-2024")?.content || ""
  },
  "data-driven-marketing-decisions": {
    id: "data-driven-marketing-decisions",
    title: "数据驱动的营销决策",
    description: "如何利用数据分析来优化营销策略，提高投资回报率。",
    category: "最新文章",
    type: "article",
    lastUpdated: "2024-03-08",
    content: blogPosts.find(post => post.slug === "data-driven-marketing-decisions")?.content || ""
  },
  "ecommerce-platform-guide": {
    id: "ecommerce-platform-guide",
    title: "电商平台选择指南",
    description: "详细对比各大电商平台的优劣势，助你选择最适合的平台。",
    category: "最新文章",
    type: "article",
    lastUpdated: "2024-03-05",
    content: blogPosts.find(post => post.slug === "ecommerce-platform-guide")?.content || ""
  },
  "brand-marketing-case-studies": {
    id: "brand-marketing-case-studies",
    title: "品牌营销实战案例",
    description: "深度解析成功品牌的营销策略，提供可落地的实战经验。",
    category: "最新文章",
    type: "article",
    lastUpdated: "2024-03-02",
    content: blogPosts.find(post => post.slug === "brand-marketing-case-studies")?.content || ""
  },
  "product-launch-marketing-guide": {
    id: "product-launch-marketing-guide",
    title: "新品上线营销指南",
    description: "全方位解析新品上线的营销策略，从0到1打造爆款产品。",
    category: "最新文章",
    type: "article",
    lastUpdated: "2024-02-28",
    content: blogPosts.find(post => post.slug === "product-launch-marketing-guide")?.content || ""
  },
  "subscription": {
    id: "subscription",
    title: "订阅管理指南",
    description: "了解如何管理您的订阅计划",
    category: "账户与计费",
    type: "doc",
    lastUpdated: "2024-03-20",
    content: `详细了解订阅管理的所有信息：

1. 订阅计划类型
- 基础版：适合个人和小团队
- 专业版：适合成长期企业
- 企业版：适合大型企业
- 定制版：根据需求定制

2. 订阅周期选择
- 月付：灵活按月支付
- 年付：享受优惠折扣
- 季付：平衡灵活性和成本
- 多年订阅：最优惠价格

3. 如何升级降级
- 随时调整套餐
- 费用按比例计算
- 即时生效
- 无需等待周期结束

4. 订阅权益
- 功能模块使用权限
- 技术支持等级
- API调用次数
- 存储空间配额

5. 续费管理
- 自动续费设置
- 续费提醒
- 续费优惠
- 批量续费

6. 账户管理
- 子账号数量
- 权限分配
- 使用统计
- 账单管理`
  },
  "payment": {
    id: "payment",
    title: "支付方式指南",
    description: "了解支持的支付方式和操作流程",
    category: "账户与计费",
    type: "doc",
    lastUpdated: "2024-03-19",
    content: `了解所有支付相关信息：

1. 支持的支付方式
- 支付宝支付
- 微信支付
- 银行转账
- 国际信用卡

2. 企业支付选项
- 对公转账
- 合同签订
- 专票开具
- 账期支付

3. 支付安全保障
- SSL加密传输
- 第三方支付认证
- 交易监控系统
- 资金安全保障

4. 国际支付
- 支持的货币类型
- 汇率换算规则
- 跨境支付手续费
- 退款处理时间

5. 支付流程
- 选择支付方式
- 确认订单信息
- 完成支付
- 查看交易记录

6. 特殊支付需求
- 分期付款方案
- 集团付款处理
- 代理商支付
- 定制支付方案`
  },
  "billing": {
    id: "billing",
    title: "账单管理指南",
    description: "了解如何查看和管理账单",
    category: "账户与计费",
    type: "doc",
    lastUpdated: "2024-03-18",
    content: `全面了解账单管理：

1. 账单查看
- 月度账单明细
- 消费趋势分析
- 使用量统计
- 费用预估

2. 账单导出
- PDF格式导出
- Excel格式导出
- 自定义时间段
- 批量导出

3. 账单提醒
- 余额预警
- 续费提醒
- 账单推送
- 自动续费设置

4. 账单分析
- 费用构成分析
- 使用效率分析
- 成本优化建议
- 预算管理工具

5. 多账户管理
- 子账户账单
- 部门账单
- 项目账单
- 成本中心

6. 账单处理
- 账单审核流程
- 支付确认
- 账单归档
- 账单调整申请`
  },
  "invoice": {
    id: "invoice",
    title: "发票申请指南",
    description: "了解发票申请流程和注意事项",
    category: "账户与计费",
    type: "doc",
    lastUpdated: "2024-03-17",
    content: `发票申请全流程指南：

1. 发票类型
- 增值税普通发票
- 增值税专用发票
- 电子发票
- 纸质发票

2. 申请流程
- 填写开票信息
- 选择发票类型
- 提交申请
- 发票开具时间

3. 发票管理
- 发票记录查询
- 发票重开申请
- 发票邮寄管理
- 发票验真查询

4. 开票信息
- 企业信息管理
- 开票资质审核
- 发票信息变更
- 多抬头管理

5. 发票邮寄
- 收件地址管理
- 快递选择
- 运费说明
- 签收确认

6. 特殊说明
- 发票金额限制
- 开票时效说明
- 发票退回处理
- 发票遗失处理`
  },
  "refund": {
    id: "refund",
    title: "退款政策说明",
    description: "了解退款条件和流程",
    category: "账户与计费",
    type: "doc",
    lastUpdated: "2024-03-16",
    content: `退款政策详细说明：

1. 退款条件
- 服务未使用
- 质量问题退款
- 特殊情况退款
- 退款限制说明

2. 退款流程
- 提交退款申请
- 审核确认
- 退款处理
- 到账时间

3. 退款金额计算
- 未使用额度退款
- 使用量扣除
- 手续费说明
- 优惠券处理

4. 特殊退款情况
- 订阅计划退款
- 批量购买退款
- 促销商品退款
- 定制服务退款

5. 退款方式
- 原路退回
- 账户余额
- 其他退款方式
- 跨境退款说明

6. 售后服务
- 退款咨询
- 退款进度查询
- 退款凭证开具
- 争议处理`
  },
  "enterprise-billing": {
    id: "enterprise-billing",
    title: "企业计费方案",
    description: "企业客户的特殊计费政策",
    category: "账户与计费",
    type: "doc",
    lastUpdated: "2024-03-15",
    content: `企业客户专属计费方案：

1. 计费模式
- 阶梯计费
- 包年包月
- 按量计费
- 混合计费

2. 企业优惠
- 规模折扣
- 长期合作优惠
- 行业特惠
- 定制方案

3. 结算方式
- 预付费模式
- 后付费模式
- 混合结算
- 灵活付款期

4. 企业专属服务
- 专属客户经理
- 技术支持服务
- 培训服务
- 定制开发

5. 多部门管理
- 部门预算分配
- 使用量控制
- 权限管理
- 费用归属

6. 合规支持
- 合同定制
- 审计支持
- 发票管理
- 资质文件`
  },
  "pricing-faq": {
    id: "pricing-faq",
    title: "计费常见问题",
    description: "解答计费相关的常见疑问",
    category: "账户与计费",
    type: "doc",
    lastUpdated: "2024-03-14",
    content: `计费相关常见问题解答：

1. 价格调整
- 价格调整通知
- 老用户优惠政策
- 价格锁定期
- 调价补偿方案

2. 使用限制
- API调用限制
- 存储空间限制
- 并发用户限制
- 功能使用限制

3. 特殊情况
- 服务中断补偿
- 账户冻结处理
- 超额使用处理
- 紧急需求支持

4. 账户管理
- 账户状态说明
- 信用额度政策
- 账户升级降级
- 账户注销说明

5. 优惠政策
- 新用户优惠
- 推广活动规则
- 代金券使用
- 积分规则

6. 其他问题
- 发票相关问题
- 退款相关问题
- 支付相关问题
- 账单相关问题`
  },
  // AI 相关文章
  "ai-content-creation": {
    id: "ai-content-creation",
    title: "AI 内容创作指南",
    description: "如何使用 AI 生成高质量的营销内容",
    category: "AI 助手",
    type: "doc",
    lastUpdated: "2024-03-20",
    content: `了解如何使用 AI 创作优质内容。

1. AI 写作基础
- 了解 AI 写作原理
- 选择合适的写作场景
- 掌握提示词技巧

2. 内容优化策略
- 结构化写作方法
- 品牌语气调整
- SEO 优化建议

3. 实战应用
- 产品文案创作
- 社媒内容生成
- 营销文案优化`
  },
  "ai-image-generation": {
    id: "ai-image-generation",
    title: "AI 图像生成教程",
    description: "掌握 AI 图像生成的核心技巧",
    category: "AI 助手",
    type: "doc",
    lastUpdated: "2024-03-19",
    content: `探索 AI 图像生成的无限可能。

1. 基础概念
- 了解 AI 绘画模型
- 图像风格类型
- 分辨率与质量

2. 提示词技巧
- 构建有效提示词
- 风格词使用方法
- 负面提示词应用

3. 实用场景
- 产品展示图
- 社媒配图
- 广告创意图`
  },
  "ai-marketing-automation": {
    id: "ai-marketing-automation",
    title: "AI 营销自动化",
    description: "使用 AI 实现营销流程自动化",
    category: "AI 助手",
    type: "doc",
    lastUpdated: "2024-03-18",
    content: `利用 AI 提升营销效率。

1. 自动化基础
- 营销流程梳理
- AI 工具选择
- 自动化策略

2. 场景应用
- 邮件营销自动化
- 社媒发布自动化
- 数据分析自动化

3. 效果优化
- 数据监控
- A/B 测试
- 持续优化`
  },
  "ai-copywriting": {
    id: "ai-copywriting",
    title: "AI 文案写作技巧",
    description: "提升 AI 文案写作效果的实用技巧",
    category: "AI 助手",
    type: "doc",
    lastUpdated: "2024-03-17",
    content: `掌握 AI 文案写作的核心方法。

1. 文案策划
- 目标受众分析
- 卖点提炼
- 创意构思

2. AI 写作技巧
- 提示词编写
- 内容修改
- 风格调整

3. 应用场景
- 产品描述
- 广告文案
- 落地页文案`
  },
  "ai-data-analysis": {
    id: "ai-data-analysis",
    title: "AI 数据分析指南",
    description: "使用 AI 进行营销数据分析",
    category: "AI 助手",
    type: "doc",
    lastUpdated: "2024-03-16",
    content: `深入了解 AI 数据分析方法。

1. 数据收集
- 数据源选择
- 数据清洗
- 数据整合

2. 分析方法
- 趋势分析
- 用户行为分析
- 转化率分析

3. 决策优化
- 数据可视化
- 报告生成
- 策略调整`
  }
} 