import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
    const location = useLocation();
    console.log(location);

    // /books --> /books/id
    let currentLink = '';

    const crumbs = location.pathname.split('/')
      .filter(crumb => crumb !== '')
      .map(crumb => {
        currentLink += `/${crumb}`

        return (
            <div className="crumb" key={crumb}>
                <a className="y">
                    <Link to={currentLink}>{crumb}</Link>
                </a>
            </div>
        )
      })

    return (
        <div  className="breadcrumbs">
            {crumbs}
        </div>
    )
}