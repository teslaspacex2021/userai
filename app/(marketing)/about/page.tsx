import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "关于我们 - UserAI",
  description: "了解 UserAI 的使命、愿景和团队",
}

const teamMembers = [
  {
    name: "张三",
    title: "创始人 & CEO",
    image: "/images/team/member-1.jpg",
    description:
      "前 Google 高级工程师，拥有超过 15 年的 AI 和营销技术经验。致力于用 AI 技术改变营销行业。",
  },
  {
    name: "李四",
    title: "CTO",
    image: "/images/team/member-2.jpg",
    description:
      "前阿里巴巴技术专家，机器学习和自然语言处理领域专家。主导开发了多个大规模 AI 系统。",
  },
  {
    name: "王五",
    title: "产品总监",
    image: "/images/team/member-3.jpg",
    description:
      "拥有 10 年产品管理经验，曾在多家知名互联网公司担任产品负责人，对用户体验和产品设计有独到见解。",
  },
]

const values = [
  {
    title: "创新驱动",
    description: "不断探索和应用最新技术，为客户创造更大价值",
  },
  {
    title: "用户至上",
    description: "始终以用户需求为中心，提供最佳的产品体验",
  },
  {
    title: "追求卓越",
    description: "对产品品质精益求精，持续改进和优化",
  },
  {
    title: "开放协作",
    description: "与合作伙伴共同成长，构建健康的生态系统",
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20" />
        <div className="container relative px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                用 AI 重新定义营销
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                我们致力于用 AI 技术帮助企业实现营销自动化，提升营销效率
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                我们的使命
              </div>
              <h2 className="text-3xl font-bold">让营销更智能、更高效</h2>
              <p className="text-gray-500 text-lg">
                UserAI 成立于2023年，是一家专注于 AI
                营销领域的科技公司。我们的使命是通过 AI
                技术帮助企业实现营销自动化，提升营销效率。
              </p>
              <p className="text-gray-500 text-lg">
                我们相信，AI 技术将彻底改变营销行业的工作方式。通过将 AI
                应用于内容创作、社媒管理、数据分析等领域，我们帮助企业在数字化转型的浪潮中保持竞争力。
              </p>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about/mission.jpg"
                alt="我们的使命"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">我们的价值观</h2>
            <p className="text-gray-500 max-w-[600px] mx-auto">
              这些核心价值观指引着我们的产品开发和服务提供
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-500">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">我们的团队</h2>
            <p className="text-gray-500 max-w-[600px] mx-auto">
              由行业专家组成的核心团队，致力于为客户创造价值
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary mb-2">{member.title}</p>
                  <p className="text-gray-500">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="w-full py-12 md:py-24 bg-primary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center text-white">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                加入我们
              </h2>
              <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl">
                我们正在寻找优秀的人才加入团队，一起用 AI 技术改变营销行业
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/careers">
                <Button
                  size="lg"
                  className="h-12 px-8 bg-white text-primary hover:bg-white/90"
                >
                  查看职位
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 px-8 border-white text-white hover:bg-white hover:text-primary"
                >
                  联系我们
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
