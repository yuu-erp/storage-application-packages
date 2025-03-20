import React from 'react'
import { Link, LinkProps, useLocation } from 'react-router-dom'

const routes = [
  { title: 'Learning', href: '/' },
  { title: 'Chat', href: '/chat' },
  { title: 'Dashboard', href: '/dashboard' },
  { title: 'Meeting', href: '/meeting' },
  { title: 'Activities', href: '/activities' }
]

// Loại bỏ 'children' từ LinkProps để tự định nghĩa lại
interface NavItemProps extends Omit<LinkProps, 'children'> {
  children: (props: { isActive: boolean }) => React.ReactNode
  className?: string
}

const NavItem: React.FC<NavItemProps> = ({ to, children, className, ...props }) => {
  const location = useLocation()
  const isActive = location.pathname === to

  return (
    <Link to={to} className={`${className}`} {...props}>
      {children({ isActive })}
    </Link>
  )
}

const MenuPopup = () => {
  return (
    <div className="fixed left-1/2 -translate-x-1/2 bottom-5 flex items-center bg-black/30 backdrop-blur-lg rounded-full h-14 px-3 gap-3 py-2">
      {routes.map((route) => (
        <NavItem key={route.href} to={route.href} className="text-white h-full">
          {({ isActive }) => (
            <div className="h-full px-5 bg-white/30 rounded-full flex items-center justify-center">
              <span className="font-bold ">{route.title}</span>
            </div>
          )}
        </NavItem>
      ))}
    </div>
  )
}

export default React.memo(MenuPopup)
