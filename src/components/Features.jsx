export default function Features() {
    return (
        <section className="offers-section">
            <h2>Why choose Easybank?</h2>
            <p className="offers-desc">
                We leverage Open Banking to turn your bank account into your financial hub. Control
                your finances like never before.
            </p>
            <div className="offers-grid">
                <div className="online-banking">
                    <div>
                        <img className="offers-pic" src="/images/icon-online.svg" alt="" />
                    </div>
                    <h3>Online Banking</h3>
                    <p>
                        Our modern web and mobile applications allow you to keep track of your finances
                        wherever you are in the world.
                    </p>
                </div>
                <div className="simple-budgeting">
                    <div>
                        <img className="offers-pic" src="/images/icon-budgeting.svg" alt="" />
                    </div>
                    <h3>Simple Budgeting</h3>
                    <p>
                        See exactly where your money goes each month. Receive notifications when you're
                        close to hitting your limits.
                    </p>
                </div>
                <div className="fast-onboarding">
                    <div>
                        <img className="offers-pic" src="/images/icon-onboarding.svg" alt="" />
                    </div>
                    <h3>Fast Onboarding</h3>
                    <p>
                        We don't do branches. Open your account in minutes online and start taking control
                        of your finances right away.
                    </p>
                </div>
                <div className="open-api">
                    <div>
                        <img className="offers-pic" src="/images/icon-api.svg" alt="" />
                    </div>
                    <h3>Open API</h3>
                    <p>
                        Manage your savings, investments, pension, and much more from one account. Tracking
                        your money has never been easier.
                    </p>
                </div>
            </div>
        </section>
    );
}
