import Editor from "@/components/Editor"
import SideNav from "@/components/SideNav"
import MDX from "@/components/MDX"


const NotesPage = () => {
	const isViewer = false

	return (
		<main id="notes">
			<SideNav/>
			{!isViewer ? 
			<Editor isViewer={isViewer}/> 
			: <MDX />
			}
		</main>
	)
}
export default NotesPage