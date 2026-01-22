import {
  LayoutDashboard,
  ListTodo,
  HelpCircle,
  Settings,
  Newspaper,
  ClipboardClock,
  AlarmClockCheck,
  BookCheck,
} from 'lucide-react'
import { type SidebarData } from '../types'

export const sidebarData: SidebarData = {
  user: {
    name: 'envyafish',
    avatar: '/avatars/shadcn.jpg',
  },
  navGroups: [
    {
      title: '通用',
      items: [
        {
          title: '看板',
          url: '/',
          icon: LayoutDashboard,
        },
        {
          title: '任务',
          icon: ListTodo,
          items: [
            {
              url: '/tasks',
              title: '任务管理',
              icon: BookCheck,
            },
            {
              url: '/tasks/log',
              title: '执行记录',
              icon: AlarmClockCheck,
            },
          ],
        },
        {
          title: '下载记录',
          url: '/download-log',
          icon: ClipboardClock,
        },
        {
          title: '文章',
          url: '/articles',
          icon: Newspaper,
        },
      ],
    },
    {
      title: 'Other',
      items: [
        {
          title: '设置',
          url: '/settings',
          icon: Settings,
        },
        {
          title: '帮助中心',
          url: '/help-center',
          icon: HelpCircle,
        },
      ],
    },
  ],
}
