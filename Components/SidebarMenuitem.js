export default function SidebarMenuitem({text, Icon}) {
  return (
    <div>
        <Icon className="h-7"/>
        <span>{text}</span>
    </div>
  )
}