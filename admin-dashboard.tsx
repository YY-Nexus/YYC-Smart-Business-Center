"use client"

import { useState } from "react"
import {
  Users,
  FileText,
  BarChart3,
  Brain,
  Briefcase,
  Settings,
  ChevronDown,
  Search,
  Bell,
  User,
  Menu,
  Shield,
  UserX,
  Newspaper,
  ImageIcon,
  Tags,
  TrendingUp,
  PieChart,
  FileBarChart,
  Activity,
  Cpu,
  Database,
  Code,
  BookOpen,
  FolderOpen,
  Cloud,
  Building,
  Package,
  UserCheck,
  Wrench,
  Smartphone,
  MessageSquare,
  Sliders,
  Lock,
  BellRing,
  Palette,
  Home,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const menuItems = [
  {
    title: "仪表盘",
    icon: Home,
    href: "/dashboard",
  },
  {
    title: "用户管理",
    icon: Users,
    children: [
      { title: "用户列表", icon: Users, href: "/users" },
      { title: "角色权限", icon: Shield, href: "/roles" },
      { title: "封禁管理", icon: UserX, href: "/bans" },
    ],
  },
  {
    title: "内容管理",
    icon: FileText,
    children: [
      { title: "文章管理", icon: Newspaper, href: "/articles" },
      { title: "自媒体库", icon: ImageIcon, href: "/media" },
      { title: "分类管理", icon: Tags, href: "/categories" },
      { title: "推广营销", icon: TrendingUp, href: "/marketing" },
    ],
  },
  {
    title: "数据分析",
    icon: BarChart3,
    children: [
      { title: "数据概览", icon: PieChart, href: "/analytics" },
      { title: "报表中心", icon: FileBarChart, href: "/reports" },
      { title: "实时监控", icon: Activity, href: "/monitoring" },
    ],
  },
  {
    title: "智能引擎",
    icon: Brain,
    children: [
      { title: "AI 智能", icon: Cpu, href: "/ai" },
      { title: "存储管理", icon: Database, href: "/storage" },
      { title: "开发环境", icon: Code, href: "/development" },
      { title: "知识智库", icon: BookOpen, href: "/knowledge" },
      { title: "文件管理", icon: FolderOpen, href: "/files" },
      { title: "云端同步", icon: Cloud, href: "/sync" },
    ],
  },
  {
    title: "商务功能",
    icon: Briefcase,
    children: [
      { title: "商务管理", icon: Building, href: "/business" },
      { title: "ERP系统", icon: Package, href: "/erp" },
      { title: "CRM客户", icon: UserCheck, href: "/crm" },
      { title: "技术平台", icon: Wrench, href: "/platform" },
      { title: "API管理", icon: Code, href: "/api" },
      { title: "移动应用", icon: Smartphone, href: "/mobile" },
      { title: "实时通讯", icon: MessageSquare, href: "/chat" },
    ],
  },
  {
    title: "系统设置",
    icon: Settings,
    children: [
      { title: "常规设置", icon: Sliders, href: "/settings/general" },
      { title: "安全设置", icon: Lock, href: "/settings/security" },
      { title: "通知设置", icon: BellRing, href: "/settings/notifications" },
      { title: "外观设置", icon: Palette, href: "/settings/appearance" },
    ],
  },
]

export default function Component() {
  const [activeMenu, setActiveMenu] = useState("仪表盘")
  const [openMenus, setOpenMenus] = useState<string[]>([])

  const toggleMenu = (title: string) => {
    setOpenMenus((prev) => (prev.includes(title) ? prev.filter((item) => item !== title) : [...prev, title]))
  }

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="p-6 border-b">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              言枢象限
            </h1>
            <p className="text-xs text-muted-foreground">语启未来</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <div key={item.title}>
            {item.children ? (
              <Collapsible open={openMenus.includes(item.title)} onOpenChange={() => toggleMenu(item.title)}>
                <CollapsibleTrigger asChild>
                  <Button
                    variant={activeMenu === item.title ? "secondary" : "ghost"}
                    className="w-full justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${openMenus.includes(item.title) ? "rotate-180" : ""}`}
                    />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-1 mt-1">
                  {item.children.map((child) => (
                    <Button
                      key={child.title}
                      variant="ghost"
                      className="w-full justify-start pl-8 text-sm"
                      onClick={() => setActiveMenu(child.title)}
                    >
                      <child.icon className="w-4 h-4 mr-3" />
                      {child.title}
                    </Button>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            ) : (
              <Button
                variant={activeMenu === item.title ? "secondary" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveMenu(item.title)}
              >
                <item.icon className="w-4 h-4 mr-3" />
                {item.title}
              </Button>
            )}
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t">
        <div className="text-xs text-center text-muted-foreground">
          <p>万象归元于云枢</p>
          <p className="mt-1">深栈智启新纪元</p>
        </div>
      </div>
    </div>
  )

  return (
    <div className="flex h-screen bg-background">
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:w-64 lg:flex-col lg:border-r">
        <SidebarContent />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex h-16 items-center px-4 gap-4">
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 w-64">
                <SidebarContent />
              </SheetContent>
            </Sheet>

            {/* Search */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input placeholder="搜索功能、用户、内容..." className="pl-10" />
              </div>
            </div>

            {/* Header Actions */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 text-xs">
                  3
                </Badge>
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="用户头像" />
                      <AvatarFallback>管理</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">系统管理员</p>
                      <p className="text-xs leading-none text-muted-foreground">admin@yanshu.com</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>个人资料</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>设置</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>退出登录</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto">
            {/* Page Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold tracking-tight">{activeMenu}</h1>
              <p className="text-muted-foreground mt-2">欢迎使用言枢象限智能管理平台，开启数字化管理新体验</p>
            </div>

            {/* Dashboard Content */}
            {activeMenu === "仪表盘" && (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">总用户数</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12,345</div>
                    <p className="text-xs text-muted-foreground">+20.1% 较上月</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">内容总数</CardTitle>
                    <FileText className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">8,967</div>
                    <p className="text-xs text-muted-foreground">+15.3% 较上月</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">AI处理量</CardTitle>
                    <Brain className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">45,678</div>
                    <p className="text-xs text-muted-foreground">+32.5% 较上月</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">系统状态</CardTitle>
                    <Activity className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-600">正常</div>
                    <p className="text-xs text-muted-foreground">99.9% 运行时间</p>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Other content areas would be rendered based on activeMenu */}
            {activeMenu !== "仪表盘" && (
              <Card>
                <CardHeader>
                  <CardTitle>{activeMenu}</CardTitle>
                  <CardDescription>{activeMenu}功能模块正在开发中，敬请期待...</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center h-64 text-muted-foreground">
                    <div className="text-center">
                      <Brain className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p>智能引擎正在为您准备{activeMenu}功能</p>
                      <p className="text-sm mt-2">万象归元于云枢，深栈智启新纪元</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
