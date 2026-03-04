export default function Hero() {
    return (
        <>
            <div className="mobile-bg-container">
                <img className="bg-mockup" src="/images/image-mockups.png" alt="" />
                <img className="mobile-bg" src="/images/bg-intro-mobile.svg" alt="" />
            </div>
            <section className="section1">
                <div className="left-section">
                    <div>
                        <h1>Next generation digital banking</h1>
                        <p>
                            Take your financial life online. Your Easybank account will be a one-stop-shop
                            for spending, saving, budgeting, investing, and much more.
                        </p>
                        <button className="request-btn two">Request Invite</button>
                    </div>
                </div>
                <div className="right-section">
                    <img className="main-bg" src="/images/bg-intro-desktop.svg" alt="" />
                </div>
            </section>
        </>
    );
}
