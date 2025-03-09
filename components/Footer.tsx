import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gradient-deep">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <nav className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    {/* Main Nav */}
                    <div className="space-y-4">
                        {/* <h3 className="text-white font-semibold text-lg">
                            Navigation
                        </h3> */}
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/"
                                    className="text-zinc-400 hover:text-white transition-colors"
                                >
                                    Listings
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/auctions"
                                    className="text-zinc-400 hover:text-white transition-colors"
                                >
                                    Auctions
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/activity"
                                    className="text-zinc-400 hover:text-white transition-colors"
                                >
                                    Activity
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/profile"
                                    className="text-zinc-400 hover:text-white transition-colors"
                                >
                                    Profile
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    {/* <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">Faucet</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">Support</a></li>
            </ul>
          </div> */}

                    {/* Legal */}
                    <div className="space-y-4">
                        {/* <h3 className="text-white font-semibold text-lg">
                            Legal
                        </h3> */}
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/terms-service"
                                    className="text-zinc-400 hover:text-white transition-colors"
                                >
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                            <Link
                                    href="/privacy-policy"
                                    className="text-zinc-400 hover:text-white transition-colors"
                                >
                                      Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Community */}
                    <div className="space-y-4">
                        {/* <h3 className="text-white font-semibold text-lg">
                            Community
                        </h3> */}
                        <div className="flex space-x-4">
                        <a
                                href="https://emelverse.gitbook.io/emelverse"
                                target='blank'
                                className="text-zinc-400 hover:text-white transition-colors p-2 rounded-full hover:bg-zinc-800/50"
                            >
                                Docs
                            </a>
                            <a
                                href="https://x.com/emelverse"
                                target='blank'
                                className="text-zinc-400 hover:text-white transition-colors p-2 rounded-full hover:bg-zinc-800/50"
                            >
                                Twitter
                            </a>
                            <a
                                href="https://discord.gg/QRwzRQNZrr"
                                target='blank'
                                className="text-zinc-400 hover:text-white transition-colors p-2 rounded-full hover:bg-zinc-800/50"
                            >
                                Discord
                            </a>
                        </div>
                    </div>
                </nav>

                {/* Copyright */}
                <div className="pt-8 border-t border-zinc-800/30 text-center">
                    <p className="text-zinc-500 text-sm">
                        © 2024 Emelverse. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
