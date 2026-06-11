interface Props {
  items: string[];
  reverse?: boolean;
}

export function MarqueeRow({ items, reverse = false }: Props) {
  const doubled = [...items, ...items];
  return (
    <div className="group relative overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className={`flex w-max gap-12 ${reverse ? "animate-marquee-reverse" : "animate-marquee"} group-hover:[animation-play-state:paused]`}
      >
        {doubled.map((t, i) => (
          <span
            key={i}
            className="font-display text-2xl sm:text-3xl font-semibold whitespace-nowrap text-foreground/40 hover:text-primary transition-colors"
          >
            {t} <span className="ml-12 text-primary/40">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
