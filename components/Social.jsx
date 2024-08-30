import React from 'react'
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';
function Social() {
    const socialMediaLinks = [
        { name: "LinkedIn", url: "https://www.linkedin.com/in/mahmoud-barakat", icon: FiLinkedin },
        { name: "GitHub", url: "https://github.com/mahmoud-barakat", icon: FiGithub },
        { name: "Twitter", url: "https://twitter.com/mahmoud_barakat", icon: FiTwitter },
        { name: "Instagram", url: "https://www.instagram.com/mahmoud_barakat", icon: FiInstagram },
    ];

    return (
        <div className="flex gap-4 mt-4 xl:mt-0">
            {socialMediaLinks.map((social) => (
                <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-white hover:text-accent-default transition-colors"
                    aria-label={social.name}
                >
                    <social.icon />
                </a>
            ))}
        </div>)
}

export default Social