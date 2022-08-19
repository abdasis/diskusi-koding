import {usePage} from "@inertiajs/inertia-react";
import Guest from "@/Layouts/Guest";
import "./Detail.css"
import Disqus from "disqus-react"

const Detail = () => {
    const {post} = usePage().props
    const disqusShortname = "diskusi-koding"
    const disqusConfig = {
        url: "https://diskusikoding.com",
        identifier: "article-id",
        title: "Title of Your Article"
    }
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="single-article-box my-3">
                            <div className="card border-light shadow-sm p-3 py-4">
                                <div className="card-header bg-white border-0">
                                    <h1 className={'single-post-title'}>{post.title}</h1>
                                </div>
                                <div className="card-body">
                                    <div className="post-body">
                                        <p>{post.body}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="comment-box">
                            <div className="card border-light shadow-sm">
                                <div className="card-header bg-white border-0">
                                    <h5>Berikan Komentar</h5>
                                </div>
                                <div className="card-body">
                                    <Disqus.DiscussionEmbed
                                        shortname={disqusShortname}
                                        config={disqusConfig}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">

                    </div>
                </div>
            </div>
        </>
    )
}

Detail.layout = page => <Guest children={page} title={"Detail Artikel"}/>

export default Detail;
