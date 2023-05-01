"use client";
import Link from "next/link";

import { Container, FlexRow, Grid } from "@/components/Layout/Layout";
import { Header } from "@/components/Header/Header";
import { LinkedInLogo, EmailLogo } from "@/components/Logos";
import { BulletList, Company } from "@/components/Homepage/Homepage";

export default function Home() {
  return (
    <main>
      <Container width="100%">
        <Header>
          <h1>Tom Astley</h1>
        </Header>

        <section>
          <p style={{ maxWidth: "700px" }}>
            Technology Director with over 15 years of experience developing and leading digital projects. My unique background allows me to
            help drive the creative process to success from concept to delivery, both as a technology leader and individual contributor.
          </p>
        </section>

        <section>
          <h2>Experience</h2>
          <Grid max="800px" cols={1} rows={1}>
            <div key="88">
              <h3>88 Brand Partners</h3>
              <Company>
                June 2015 – Present
                <br />
                Director of Creative Technology
              </Company>
              <BulletList>
                <li>
                  <span>
                    Delivered multiple client websites that exceeded SEO performance, user engagement, and overall site useability.
                  </span>
                </li>
                <li>
                  <span>
                    Migrated all hosted client sites and internal development servers to separate cloud instances, reducing the monthly cost
                    and significantly improving reliability.
                  </span>
                </li>
                <li>
                  <span>
                    Managed a combination of internal developers and freelance resources to complete development projects on budget and on
                    time.
                  </span>
                </li>
              </BulletList>
            </div>
            <div key="AgencyEA">
              <h3>AgencyEA</h3>
              <Company>
                February 2014 – June 2010
                <br />
                Lead Interactive Developer
              </Company>
              <BulletList>
                <li>
                  <span>
                    Developed large-scale experiential digital projects for clients like Hilton and Hampton Hotels, increasing engagement.
                  </span>
                </li>
                <li>
                  <span>
                    Co-designed and developed an internal employee check-in board to enhance communication while employees were out at event
                    sites.
                  </span>
                </li>
              </BulletList>
            </div>
            <div key="Digitas">
              <h3>Digitas LBi</h3>
              <Company>
                June 2012 - February 2014 <br />
                Senior Creative Software Engineer
              </Company>
              <BulletList>
                <li>
                  <span>
                    Developed a mobile experience for Sprint utilizing the Facebook API to create a personalized 3D world navigated through
                    gyroscopic controls.
                  </span>
                </li>
              </BulletList>
            </div>
            <div key="Ogilvy">
              <h3>Ogilvy and Mather</h3>
              <Company>
                July 2008 – July 2012 <br />
                Senior Web Developer
              </Company>
              <BulletList>
                <li>
                  <span>Developed rich media ads and immersive flash-based websites for Huggies, Dove, CDW, and Oscar Mayer.</span>
                </li>
              </BulletList>
            </div>
          </Grid>
        </section>


        <section>
          <h2>Management Skills</h2>
          <h3></h3>

          <Grid cols={2} rows={1} min="auto" max="225px">
            <div>
              <ul>
                <li key="projectmanagement">Project Management</li>
                <li key="communications">Client Communications</li>
                <li key="scoping">Budgeting and Scoping</li>
                <li key="managing">Managing Small Teams</li>
              </ul>
            </div>
            <div>
              <ul>
                <li key="hiring">Talent Acquisition</li>
                <li key="Onboarding">New Hire Onboarding</li>
                <li key="pr">Performance Reviews</li>
              </ul>
            </div>
          </Grid>
        </section>

        <section>
          <h2>Skills</h2>
          <Grid cols={4} rows={1} min="auto" max="205px">
            <div>
              <h3>Front-end</h3>
              <ul>
                <li key="html">HTML</li>
                <li key="css">CSS</li>
                <li key="sass">SASS</li>
                <li key="ss">Styled Components</li>
                <li key="js">Javascript (es6+)</li>
              </ul>
            </div>
            <div>
              <ul>
                <li key="backend">
                  <h3>Back-end</h3>
                </li>
                <li key="node">NodeJs</li>
                <li key="php">PHP</li>
                <li key="express">Express</li>
              </ul>
            </div>
            <div>
              <h3>Frameworks/Libs</h3>
              <ul>
                <li key="react">React</li>
                <li key="VueJs">VueJs</li>
                <li key="NextJS">NextJS</li>
              </ul>
            </div>

            <div>
              <h3>Databases</h3>
              <ul>
                <li key="mysql">MySQL</li>
                <li key="Postgres">Postgres</li>
                <li key="MongoDB">MongoDB</li>
              </ul>
            </div>
          </Grid>
        </section>

        <section>
          <h2>Education</h2>
          <Grid cols={1} rows={1} min="auto" max="270px">
            <div>
              <ul>
                <li>
                  <h3>Columbia College Chicago</h3>
                  <p>
                    (BA) Interactive Multimedia
                    <br />
                    2005 - 2007
                    <br />
                    GPA: 3.98
                  </p>
                </li>
              </ul>
            </div>
          </Grid>
        </section>

        <section>
          <FlexRow width="60px" styles={{ "justify-content": "space-between" }}>
            <Link aria-label="LinkedIn Profile" href="https://www.linkedin.com/in/tom-astley/" target="_blank">
              <LinkedInLogo />
            </Link>
            <Link aria-label="Email Address" href="mailto:tastley@gmail.com">
              <EmailLogo />
            </Link>
          </FlexRow>
        </section>
      </Container>
    </main>
  );
}
