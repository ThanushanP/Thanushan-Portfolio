import "./projectsList.css"

export default function ProjectsList({title, active, setSelected,id}) {
  return (
    <li className={active? "active":"projectsList"} onClick={()=>setSelected(id)}>
        {title}
    </li>
  )
}
