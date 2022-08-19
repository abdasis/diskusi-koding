import Guest from "@/Layouts/Guest";
import "./Beranda.css"
import CardArticle from "@/Components/CardArticle";
import {usePage} from "@inertiajs/inertia-react";

const Beranda = () => {
    const {posts} = usePage().props

    return(
        <>
            <div className="welcome text-light">
                <div className="container">
                    <div className="d-flex flex-column justify-content-center  box-content">
                        <div className="col-md-6">
                            <h1 className="display-4 mb-3">Selamat Datang</h1>
                            <p className="mb-4">Temukan materi belajar secara gratis dan mudah dibaca kapan saja dan dimana saja</p>
                            <button className="btn btn-orange border-bottom rounded-3">
                                Gabung Sekarang
                            </button>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                </div>
            </div>
            <div className="container my-4">
                <div className="latest-terbaru">
                    <div className="widget-header">
                        <h1 className="display-5 widget-title">Terbaru</h1>
                        <p>Baca artikel terbaru dari kami</p>
                    </div>
                    <div className="list-acticles">
                        <div className="row mb-3">
                            {posts.map(post => (
                                <div className="col-md-3 g-4" key={post.id}>
                                    <CardArticle
                                        title={post.title.length > 45 ? post.title.substring(0, 45) + '...' : post.title}
                                        description={post.body.length > 100 ? post.body.substring(0,100) + "..." : post.body}
                                        featured={"https://placeimg.com/640/480/tech"}
                                        id={post.id}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

Beranda.layout = page => <Guest children={page} title={"Beranda"} />

export default Beranda;


