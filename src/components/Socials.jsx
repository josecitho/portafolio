export default function Socials() {
  const socials = [
    { name: "LinkedIn", icon: "💼", url: "https://www.linkedin.com/in/jose-valdebenito-olivares-7b397a295" },
    { name: "GitHub", icon: "🐙", url: "https://github.com/josecitho" },
    { name: "Twitter", icon: "𝕏", url: "https://twitter.com/pepeithor" },
  ];

  return (
    <section className="w-full flex flex-col items-center border-t border-purple-500/20 pt-12">
      <h3 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-teal-500">
        Conecta conmigo
      </h3>
      <div className="flex justify-center gap-8">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300"
          >
            <div className="text-4xl group-hover:animate-bounce">{social.icon}</div>
            <span className="text-sm font-semibold text-gray-300 group-hover:text-purple-300 transition-colors">{social.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}