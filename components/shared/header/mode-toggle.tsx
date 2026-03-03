"use client"
import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import {SunIcon,MoonIcon,SunMoonIcon} from 'lucide-react'
import {DropdownMenu,DropdownMenuContent, DropdownMenuLabel,DropdownMenuSeparator,DropdownMenuTrigger,DropdownMenuCheckboxItem} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'

const ModeToggle = () => {
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    if(!mounted){
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMounted(true)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  
const { theme, setTheme } = useTheme()


if(!mounted) return null

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'ghost'} className="focus-visible:ring-0 focus-visible:ring-offset-0">
          {
            theme === 'light' ? <SunIcon/> : theme === 'dark' ? <MoonIcon/> : <SunMoonIcon/> 
          }
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
          <DropdownMenuLabel>Appearance</DropdownMenuLabel>
          <DropdownMenuSeparator/>
          <DropdownMenuCheckboxItem checked={theme === 'light'} onCheckedChange={()=> setTheme('light')}>light</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={theme === 'dark'} onCheckedChange={()=> setTheme('dark')}>dark</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={theme === 'system'} onCheckedChange={()=> setTheme('system')}>system</DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ModeToggle