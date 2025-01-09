export default function Footer() {
  return (
    <footer className="py-6 md:px-8 md:py-0 bg-black text-white border-t border-gray-800 flex justify-center">
      <div className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <a
            href="https://www.linkedin.com/in/oladele-mary/"
            target="_blank"
            className="font-medium underline  underline-offset-4"
          >
            Mheyrie. The code is availabale on my github <a href="https://github.com/mheyrie"  target="_blank"
            className="font-medium underline  underline-offset-4" rel="noreferrer">Github</a>.
          </a>
        </p>
      </div>
    </footer>
  );
}
