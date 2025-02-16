export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-10 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <p className="text-center md:text-left text-sm text-muted-foreground mb-6">
          Questions? Call 1-800-000-0000
        </p>

        {/* Links Section */}
        <ul className="grid grid-cols-2 md:grid-cols-4 md:gap-8 gap-3">
          {[
            "FAQ",
            "Help Center",
            "Account",
            "Media Center",
            "Investor Relations",
            "Jobs",
            "Ways to Watch",
            "Terms of Use",
            "Privacy",
            "Cookie Preferences",
            "Corporate Information",
            "Contact Us",
            "Speed Test",
            "Legal Notices",
            "Netflix Originals",
          ].map((item, index) => (
            <li key={index}>
              <a href="#" className="text-sm text-muted-foreground hover:underline">
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Copyright Section */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">©  Netflix, Inc.</p>
        </div>
      </div>
    </footer>
  );
}
