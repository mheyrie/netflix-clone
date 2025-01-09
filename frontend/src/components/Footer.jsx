export default function Footer() {
  return (
    <footer className="py-20 bg-black text-white flex justify-center">
      <div className="flex flex-col items-center justify-between ga-4">
        <div className="text-center md:text-left">
          <div>
            <p className="text-sm leading-loose text-muted-foreground">
              Questions? Call 1-800-000-0000
            </p>
          </div>
          <div>
            <ul className="grid grid-cols-2 md:grid-cols-4 justify-center md:justify-start gap-4 my-4">
              <li>
                <a href="#" className="text-sm text-muted-foreground">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground">
                  Account
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground">
                  Media Center
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground">
                  Investor Relations
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground">
                  Jobs
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground">
                  Ways to Watch
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground">
                  Cookie Preferences
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground">
                  Corporate Information
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground">
                  Speed Test
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground">
                  Legal Notices
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground">
                  Netflix Originals
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          <p className="text-sm text-muted-foreground">© 2023 Netflix, Inc.</p>
        </div>
      </div>
    </footer>
  );
}
