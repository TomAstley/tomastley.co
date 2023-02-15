"use client";
import Link from "next/link";

import { Container, FlexRow, Grid } from "@/components/Layout/Layout";
import { Header } from "@/components/Header/Header";
import { LinkedInLogo, EmailLogo } from "@/components/Logos";

export default function Home() {
  return (
    <main>
      <Container width="100%">
        <Header>
          <h1>Tom Astley</h1>
        </Header>

        <section>
          <p style={{maxWidth: '700px'}}>
            Technology Director and Developer with over 15 years of experience developing and leading digital projects. My background has
            allowed me to contribute to the creative process from concept to delivery while managing small teams of developers.
          </p>
        </section>

   
        <section>
          <h2>Skills</h2>
          <Grid cols={4} rows={2} min="auto" max="225px">
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
                <li key="Bootstrap">Bootstrap</li>
                <li key="NextJS">NextJS</li>
              </ul>
            </div>
            <div>
              <h3>Software & Tools</h3>
              <ul>
                <li key="git">GIT</li>
                <li key="adobe">Adobe Creative Suite</li>
                <li key="notion">Notion</li>
                <li key="vscode">VSCode</li>
              </ul>
            </div>
            <div>
              <h3>CMS</h3>
              <ul>
                <li key="wordpress">Wordpress</li>
                <li key="Drupal">Drupal</li>
                <li key="Sanity">Sanity</li>
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
          <h2>Management Skills</h2>
          <Grid cols={1} rows={1} min="auto" max="225px">
            <div>
              <ul>
                <li key="hiring">Hiring</li>
                <li key="pr">Performance Reviews</li>
                <li key="communications">Client Communications</li>
                <li key="scoping">Budgeting and Scoping</li>
                <li key="managing">Managing Small Teams</li>
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
          <h2>Experience</h2>
          <Grid>
            <div key="88">
              <h3>88 Brand Partners</h3>
              <p>
                June 2015 – Present
                <br />
                Director of Creative Technology
              </p>
            </div>
            <div key="AgencyEA">
              <h3>AgencyEA</h3>
              <p>
                February 2014 – June 201
                <br />
                Lead Interactive Developer
              </p>
            </div>
            <div key="Digitas">
              <h3>Digitas LBi</h3>
              <p>
                June 2012 - February 2014 <br />
                Senior Creative Software Engineer
              </p>
            </div>
            <div key="Ogilvy">
              <h3>Ogilvy and Mather</h3>
              <p>
                July 2008 – July 2012 <br />
                Senior Web Developer
              </p>
            </div>
          </Grid>
        </section>


        <section>
          <FlexRow width="60px" styles={{ "justify-content": "space-between" }}>
            <Link href="https://www.linkedin.com/in/tom-astley/" target="_blank">
              <LinkedInLogo />
            </Link>
            <Link href="mailto:tastley@gmail.com">
              <EmailLogo />
            </Link>
          </FlexRow>
        </section>
      </Container>
    </main>
  );
}
