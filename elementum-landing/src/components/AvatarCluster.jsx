/**
 * Renders a set of circular avatars absolutely positioned within
 * a relative container. Each avatar accepts a className for placement.
 */
function AvatarCluster({ avatars, className = "" }) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`}>
      {avatars.map((avatar, index) => (
        <img
          key={index}
          src={avatar.src}
          alt=""
          aria-hidden="true"
          className={`pointer-events-auto absolute animate-float rounded-full border-4 border-cream object-cover shadow-md transition-transform duration-300 hover:z-10 hover:scale-110 ${avatar.className}`}
          style={{
            animationDuration: `${5 + (index % 3)}s`,
            animationDelay: `${index * 0.4}s`,
          }}
        />
      ))}
    </div>
  );
}

export default AvatarCluster;
