import { Power } from 'lucide-react'
import Link from 'next/link'

export default function AdminNavIcon() {
  return (
    <Link href="/home" className="flex items-center gap-2 text-red-500 hover:text-red-700 transition">
        <Power className="w-5 h-5" />
        <span>Exit Admin</span>
    </Link>
  )
}
