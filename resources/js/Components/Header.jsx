import "./Header.css"
import {InertiaLink} from "@inertiajs/inertia-react";

export default function Header(){
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light shadow-sm bg-white custum-navbar bg-gradient py-2">
                <div className="container">
                    <InertiaLink className="navbar-brand" href={route('beranda')}>
                        Diskusi Koding
                    </InertiaLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    Beranda
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Tutorial
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
