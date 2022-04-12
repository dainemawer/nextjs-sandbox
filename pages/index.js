import Layout from '@components/Layout/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Home = ({ posts }) => {
    return (
        <>
            <Head>
                <title>Home</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
            </Head>
            <Layout>
                <div className="px-4 py-5 my-5 text-center">
                    <Image alt="Bootstrap" width="72" height="72" src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg" />
                        <h1 className="display-5 fw-bold">Centered hero</h1>
                        <div className="col-lg-6 mx-auto">
                            <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                                <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
                                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Secondary</button>
                            </div>
                        </div>
                </div>
                <div className="container px-4 py-5" id="featured-3">
                    <h2 className="pb-2 border-bottom">Columns with icons</h2>
                    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                        <div className="feature col">
                            <h2>Featured title</h2>
                            <p>Paragraph of text beneath the heading to explain the heading. We&apos;ll add onto it with another sentence and probably just keep going until we run out of words.</p>
                            <a href="#" className="icon-link">
                                Call to action
                                <svg className="bi" width="1em" height="1em"><use xlinkHref="#chevron-right"></use></svg>
                            </a>
                        </div>
                        <div className="feature col">
                            <h2>Featured title</h2>
                            <p>Paragraph of text beneath the heading to explain the heading. We&apos;ll add onto it with another sentence and probably just keep going until we run out of words.</p>
                            <a href="#" className="icon-link">
                                Call to action
                                <svg className="bi" width="1em" height="1em"><use xlinkHref="#chevron-right"></use></svg>
                            </a>
                        </div>
                        <div className="feature col">
                            <h2>Featured title</h2>
                            <p>Paragraph of text beneath the heading to explain the heading. We&apos;ll add onto it with another sentence and probably just keep going until we run out of words.</p>
                            <a href="#" className="icon-link">
                                Call to action
                                <svg className="bi" width="1em" height="1em"><use xlinkHref="#chevron-right"></use></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row mb-4 py-5">
                        {posts && posts.map(post => (
                            <div key={`post-${post.id}`} className="col-md-4 mb-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{post.title}</h5>
                                        <p className="card-text">{post.body}</p>
                                        <Link href={`/news/${post.id}`}>
                                            <a className="btn btn-primary">Read</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="row align-items-md-stretch mb-4 py-5">
                    <div className="col-md-6">
                        <div className="h-100 p-5 text-white bg-dark rounded-3">
                            <h2>Change the background</h2>
                            <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
                            <button className="btn btn-outline-light" type="button">Example button</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="h-100 p-5 bg-light border rounded-3">
                            <h2>Add borders</h2>
                            <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we&apos;ve adjusted the alignment and sizing of both column&apos;s content for equal-height.</p>
                            <button className="btn btn-outline-secondary" type="button">Example button</button>
                        </div>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm">
                            <div className="card-header py-3">
                                <h4 className="my-0 fw-normal">Free</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">$0<small className="text-muted fw-light">/mo</small></h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>10 users included</li>
                                    <li>2 GB of storage</li>
                                    <li>Email support</li>
                                    <li>Help center access</li>
                                </ul>
                                <button type="button" className="w-100 btn btn-lg btn-outline-primary">Sign up for free</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm">
                            <div className="card-header py-3">
                                <h4 className="my-0 fw-normal">Pro</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">$15<small className="text-muted fw-light">/mo</small></h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>20 users included</li>
                                    <li>10 GB of storage</li>
                                    <li>Priority email support</li>
                                    <li>Help center access</li>
                                </ul>
                                <button type="button" className="w-100 btn btn-lg btn-primary">Get started</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm border-primary">
                            <div className="card-header py-3 text-white bg-primary border-primary">
                                <h4 className="my-0 fw-normal">Enterprise</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">$29<small className="text-muted fw-light">/mo</small></h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>30 users included</li>
                                    <li>15 GB of storage</li>
                                    <li>Phone and email support</li>
                                    <li>Help center access</li>
                                </ul>
                                <button type="button" className="w-100 btn btn-lg btn-primary">Contact us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
        
    )
}

export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    const featured = posts.slice(0, 9);

    return { props: { posts: featured } };
}

export default Home;