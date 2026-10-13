import StatCard from "../../components/StatCard";
import Button from "../../components/Button";
import CornerTab from "../../components/CornerTab";
import TabSection from "../../components/TabSection";
import SkillsSection from "../../components/SkillsSection";
import TestimonialSection from "../../components/TestimonialSection";
import TeamSection from "../../components/TeamSection";

import styles from "./Home.module.css";
import { homeHero, stats, skills, assessments, servicesIntro } from "../../content";

const Home = () => {
  return (
    <main className="container-fluid">
      <div className={`${styles.hero} row`}>
        <div className="col-10 col-md-9 col-lg-9 align-self-start">
          <h1>
            {homeHero.heading.text}<span>{homeHero.heading.highlight}</span>
          </h1>
        </div>
      </div>
      <section className={`${styles.heroMiddle} row`}>
        <div
          className={`${styles.heroImgContainer} ps-0 col-xs-12 col-md-6 col-lg-7`}
        >
          <img {...homeHero.image} />
        </div>
        <div className={`${styles.heroMiddleCopy} col-xs-12 col-md-6 col-lg-5`}>
          <p>
            {homeHero.body}
          </p>
          <div className={styles.ctaContainer}>
            <Button style="tertiary" btnText={homeHero.primaryCta} />
            <Button style="secondary" btnText={homeHero.secondaryCta} />
          </div>
        </div>
      </section>
      <section className={`${styles.heroBottom} row gx-3`}>
        {stats?.map((card) => (
          <div key={card.number} className="p-1 col-xs-12 col-md-4">
            <StatCard number={card.number} title={card.title} />
          </div>
        ))}
      </section>
      <section className={styles.whatWeDo}>
        <div className="row">
          <div className="col-12">
            <CornerTab tabText={servicesIntro.tab} altColor />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <h2>{servicesIntro.heading}</h2>
          </div>
          <div className="col-xs-12 col-md-6 lighter-text">
            <p>
              {servicesIntro.body}
            </p>
          </div>
        </div>
        <TabSection />
      </section>
      <section className={`${styles.SkillsSection} row`}>
        <SkillsSection {...skills} />
      </section>
      <section className={`${styles.TestimonialSection} row gx-2`}>
        {/* PASS INFO INTO COMPONENT */}
        <TestimonialSection />
      </section>
      <section className={styles.assessments}>
        <div className={`${styles.assessmentContainer} row`}>
          <div className="col-xs-12 col-md-4">
            <CornerTab tabText={assessments.tab} altColor />
          </div>
          <div className={`${styles.assessmentBody} col-xs-12 col-md-8`}>
            <p className={styles.title}>
              {assessments.title}
            </p>
            <p>
              {assessments.body}
            </p>
            <Button btnText={assessments.cta} />
          </div>
        </div>
      </section>
      <section className={`${styles.teamSection} row`}>
        <TeamSection />
      </section>
    </main>
  );
};

export default Home;
