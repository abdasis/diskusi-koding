import "./CardArticle.css"
import {InertiaLink} from "@inertiajs/inertia-react";
export default function CardArticle({title, featured, meta, description, id}){
    return(
        <>
            <div className="card shadow-sm border-light h-100" style={{ width: "18rem" }}>
                <img src={featured} className="card-img-top" alt="" />
                <div className="card-body">
                    <InertiaLink href={route('post.detail', id)}>
                        <h5 className="card-title post-title">{title}</h5>
                    </InertiaLink>
                    <p className="card-text">
                        {description}
                    </p>
                </div>
            </div>

        </>
    )
}
