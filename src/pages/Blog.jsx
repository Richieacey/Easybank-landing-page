import { useEffect } from 'react';

export default function Blog() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ paddingBottom: '7rem' }}>
            <section className="offers-section" style={{ backgroundColor: 'hsl(0, 0%, 98%)', paddingTop: '7rem', paddingBottom: '3rem' }}>
                <h2>Easybank Blog</h2>
                <p className="offers-desc">
                    Insights, tips, and the latest news on digital finance and personal wealth management.
                </p>
            </section>

            <section className="articles" style={{ paddingTop: '2rem', paddingBottom: '5rem' }}>
                <div className="articles-grid">
                    <div>
                        <div>
                            <img className="articles-pic" src="/images/image-currency.jpg" alt="" />
                        </div>
                        <div className="articles-desc">
                            <div className="author1">By Claire Robinson</div>
                            <h4>Receive money in any currency with no fees</h4>
                            <p className="article-preview">
                                The world is getting smaller and we're becoming more mobile. So why should you be
                                forced to only receive money in a single …
                            </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img className="articles-pic" src="/images/image-restaurant.jpg" alt="" />
                        </div>
                        <div className="articles-desc">
                            <div className="author2">By Wilson Hutton</div>
                            <h4>Treat yourself without worrying about money</h4>
                            <p className="article-preview">
                                Our simple budgeting feature allows you to separate out your spending and set
                                realistic limits each month. That means you …
                            </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img className="articles-pic" src="/images/image-plane.jpg" alt="" />
                        </div>
                        <div className="articles-desc-wilson2">
                            <div className="author2">By Wilson Hutton</div>
                            <h4>Take your Easybank card wherever you go</h4>
                            <p className="article-preview">
                                We want you to enjoy your travels. This is why we don't charge any fees on purchases
                                while you're abroad. We'll even show you …
                            </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img className="articles-pic" src="/images/image-confetti.jpg" alt="" />
                        </div>
                        <div className="articles-desc-claire2">
                            <div className="author1">By Claire Robinson</div>
                            <h4>Our invite-only Beta accounts are now live!</h4>
                            <p className="article-preview">
                                After a lot of hard work by the whole team, we're excited to launch our closed beta.
                                It's easy to request an invite through the site ...
                            </p>
                        </div>
                    </div>

                    {/* Duplicate some for the blog page to look longer */}
                    <div style={{ marginTop: '2rem' }}>
                        <div style={{ height: '12rem', backgroundColor: 'hsl(220, 16%, 96%)', borderTopLeftRadius: '10px', borderTopRightRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src="/images/icon-budgeting.svg" alt="" style={{ width: '50px' }} />
                        </div>
                        <div className="articles-desc">
                            <div className="author1">By Easybank Team</div>
                            <h4>5 Tips for Better Budgeting</h4>
                            <p className="article-preview">
                                Budgeting doesn't have to be hard. Here are our top 5 tips for getting your finances on track this year.
                            </p>
                        </div>
                    </div>

                    <div style={{ marginTop: '2rem' }}>
                        <div style={{ height: '12rem', backgroundColor: 'hsl(220, 16%, 96%)', borderTopLeftRadius: '10px', borderTopRightRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src="/images/icon-online.svg" alt="" style={{ width: '50px' }} />
                        </div>
                        <div className="articles-desc">
                            <div className="author2">By Easybank Team</div>
                            <h4>The Future of Open Banking</h4>
                            <p className="article-preview">
                                What does open banking mean for your personal data and financial freedom? We break it down.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
