import Footer from "@/components/sections/footer/default";
import Navbar from "@/components/sections/navbar/default";
import { legalConfig, legalLastUpdated } from "@/config/legal";
import { siteConfig } from "@/config/site";

export default function LicensePage() {
  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col">
      <Navbar />
      <main className="mt-20 flex-1">
        <div className="container mx-auto max-w-4xl px-4 py-16 sm:py-24">
          <div className="rounded-xl border bg-card p-8 shadow-sm sm:p-12">
            <div className="mb-10 text-center">
              <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                License
              </h1>
              <p className="text-muted-foreground">
                Last updated: {legalLastUpdated}
              </p>
            </div>

            <div className="space-y-6 text-sm leading-7 sm:text-base">
              <p>
                The public open-source portion of {siteConfig.name} is released
                under the MIT License.
              </p>
              <div className="rounded-lg border bg-muted/30 p-6 font-mono text-xs leading-6 sm:text-sm">
                <p>MIT License</p>
                <p>Copyright (c) 2024 FluxKit</p>
                <p>
                  Permission is hereby granted, free of charge, to any person
                  obtaining a copy of this software and associated
                  documentation files (the &quot;Software&quot;), to deal in
                  the Software without restriction, including without
                  limitation the rights to use, copy, modify, merge, publish,
                  distribute, sublicense, and/or sell copies of the Software,
                  and to permit persons to whom the Software is furnished to
                  do so, subject to the following conditions:
                </p>
                <p>
                  The above copyright notice and this permission notice shall
                  be included in all copies or substantial portions of the
                  Software.
                </p>
                <p>
                  THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY
                  OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
                  TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                  PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
                  DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
                  CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
                  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                  THE SOFTWARE.
                </p>
              </div>
              <p className="text-muted-foreground">
                Commercial licensing for premium assets, if offered, is handled
                separately from the MIT-licensed open-source foundation. For
                licensing questions, contact {legalConfig.company.email}.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
