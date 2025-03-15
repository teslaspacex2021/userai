"use client"

import { useState } from "react"
import Link from "next/link"
import { PlusCircle, ExternalLink, Server, MoreHorizontal, Trash, Edit, Globe } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { formatDate } from "@/lib/utils"

// 模拟网站数据
const mockSites = [
  {
    id: 1,
    name: "我的企业官网",
    domain: "company.userai.cn",
    template: "企业官网模板",
    createdAt: "2023-10-15T08:30:00Z",
    status: "online",
    visits: 1243,
  },
  {
    id: 2,
    name: "个人作品展示",
    domain: "portfolio.userai.cn",
    template: "作品集展示模板",
    createdAt: "2023-11-20T14:15:00Z",
    status: "online",
    visits: 567,
  },
  {
    id: 3,
    name: "电子商务商店",
    domain: "myshop.userai.cn",
    template: "电子商务模板",
    createdAt: "2023-12-05T10:45:00Z",
    status: "updating",
    visits: 892,
  },
]

export default function SitesPage() {
  const [sites, setSites] = useState(mockSites)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [siteToDelete, setSiteToDelete] = useState<number | null>(null)

  // 处理删除确认
  const confirmDelete = () => {
    if (siteToDelete !== null) {
      setSites(sites.filter(site => site.id !== siteToDelete))
      setSiteToDelete(null)
      setIsDeleteDialogOpen(false)
    }
  }
  
  // 打开删除对话框
  const openDeleteDialog = (id: number) => {
    setSiteToDelete(id)
    setIsDeleteDialogOpen(true)
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">我的网站</h1>
          <p className="text-muted-foreground">管理您创建的所有网站</p>
        </div>
        <Button asChild>
          <Link href="/dashboard/templates">
            <PlusCircle className="mr-2 h-4 w-4" />
            创建新网站
          </Link>
        </Button>
      </div>
      
      {sites.length === 0 ? (
        <Card>
          <CardHeader>
            <CardTitle>还没有网站</CardTitle>
            <CardDescription>
              您还没有创建任何网站，点击&quot;创建新网站&quot;按钮开始构建您的第一个网站。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="mt-4">
              <Link href="/dashboard/templates">
                <PlusCircle className="mr-2 h-4 w-4" />
                浏览模板
              </Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>网站列表</CardTitle>
            <CardDescription>
              您已创建 {sites.length} 个网站
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>网站名称</TableHead>
                  <TableHead>状态</TableHead>
                  <TableHead>访问量</TableHead>
                  <TableHead>创建日期</TableHead>
                  <TableHead className="text-right">操作</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sites.map((site) => (
                  <TableRow key={site.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center">
                        <Server className="mr-2 h-4 w-4 text-muted-foreground" />
                        <div>
                          <p>{site.name}</p>
                          <p className="text-xs text-muted-foreground">{site.domain}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <StatusBadge status={site.status} />
                    </TableCell>
                    <TableCell>{site.visits.toLocaleString()}</TableCell>
                    <TableCell>{formatDate(site.createdAt)}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">打开菜单</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>操作</DropdownMenuLabel>
                          <DropdownMenuItem asChild>
                            <Link href={`https://${site.domain}`} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              访问网站
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href={`/dashboard/sites/${site.id}/stats`}>
                              <Globe className="mr-2 h-4 w-4" />
                              查看统计
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href={`/dashboard/sites/${site.id}/edit`}>
                              <Edit className="mr-2 h-4 w-4" />
                              编辑设置
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem 
                            onClick={() => openDeleteDialog(site.id)}
                            className="text-destructive focus:text-destructive"
                          >
                            <Trash className="mr-2 h-4 w-4" />
                            删除网站
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}

      {/* 删除确认对话框 */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>确认删除</DialogTitle>
            <DialogDescription>
              您确定要删除这个网站吗？此操作无法撤销，网站数据将永久删除。
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              取消
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              确认删除
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

// 状态徽章组件
function StatusBadge({ status }: { status: string }) {
  if (status === "online") {
    return (
      <Badge variant="default" className="bg-green-500">
        在线
      </Badge>
    )
  }
  
  if (status === "updating") {
    return (
      <Badge variant="secondary" className="bg-amber-500">
        更新中
      </Badge>
    )
  }
  
  return (
    <Badge variant="secondary" className="bg-slate-500">
      离线
    </Badge>
  )
} 