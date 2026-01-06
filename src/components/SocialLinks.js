import { socialLinks } from '../lib/utils';

export function SocialLinks({ className = '', size = 24 }) {
  return (
    <div className={`flex justify-center justify items-center gap-6 ${className}`}>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-lg glass card-hover hover:text-primary"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}