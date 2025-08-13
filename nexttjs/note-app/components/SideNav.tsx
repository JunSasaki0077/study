import { faArrowRightFromBracket, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SideNav = () => {
	const notes =["worrld","heeelo" ,"worrld","heeelo" ,"worrld","heeelo" ,"worrld","heeelo" ,"worrld",]
	const showNav = true
	return (
		<section className={"nav " + (showNav ? "" : "hidden-nav")}>
			<h1 className="text-gradient">MDNOTES</h1>
			<h6 className="">Easy Breezy Notes</h6>
			<div className="full-line"></div>
			<button>
				<h6>New note</h6>
				<FontAwesomeIcon icon={faPlus}  width={23} height={23}/>
			</button>
			<div className="notes-list">
				{notes.length == 0 ? <p>You have 0 notes</p>  :   notes.map((note,idx) => (
					<button className="card-button-secondary list-btn" key={idx}>
						<p>{note}</p>
						<small>DATETIME</small>
						<div className="delete-btn">
						<FontAwesomeIcon icon={faTrash} width={23} height={23} />
						</div>
					</button>
				)
				)}
			</div>
			<div className="full-line"></div>
			<button>
				<h6>Log out</h6>
				<FontAwesomeIcon icon={faArrowRightFromBracket} width={23} height={23} />
			</button>
		</section>
	)
}
export default SideNav