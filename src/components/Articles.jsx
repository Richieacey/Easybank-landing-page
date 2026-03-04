export default function Articles() {
    return (
        <section className="articles">
            <h2>Latest Articles</h2>
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
            </div>
        </section>
    );
}
