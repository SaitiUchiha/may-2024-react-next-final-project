'use client';
import React, {FC} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import '@/app/globals.css'

type NavLinkProps = {
    path: string;
    children: React.ReactNode;
}
const  NavLinkComponent:FC<NavLinkProps>= ({path, children}) => {
  const pathname = usePathname()
    return (
      <div>
          <Link href={path} className={pathname === path ? 'nav-link' : ''} style={{ textDecoration: 'none', color:"#363636"}}>{children}</Link>
      </div>

  )
}

export default NavLinkComponent;