export default function SidebarMenuitem({text, Icon}) {
  return (
    <div>
        <Icon className="h-6"/>
        <span>{text}</span>
    </div>
  )
}