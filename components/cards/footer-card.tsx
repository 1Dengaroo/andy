function FooterCard() {
  return (
    <div className="flex h-full min-h-14 items-center justify-center px-4 text-center">
      <p className="font-mono text-[0.6rem] tracking-wider text-muted-foreground/60">
        Made by{' '}
        <a
          href="https://linkedin.com/in/andydeng-"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground/80 transition-colors hover:text-accent-primary"
        >
          Andy Deng
        </a>
        {' / '}
        <a
          href="https://github.com/1dengaroo/andy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground/80 transition-colors hover:text-accent-primary"
        >
          Source
        </a>
      </p>
    </div>
  );
}

export default FooterCard;
