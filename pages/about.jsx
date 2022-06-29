import styles from '../styles/ContactCode.module.css';

const AboutPage = () => {
  return (
    <div className={styles.code}>
      <h3 className={styles.className}>A Little Bit About Me</h3>
      <p>Hi! My name is Emily, and I'm interested in <em>cybersecurity</em>, <em>human interactions with technology</em>, and making it possible for more people to <em>get started in tech</em>.</p>
      <br></br>
      <h4 className={styles.className}>What I've Done So Far</h4>
      <p>With <a target="_blank" rel="noopener" href="https://www.bitproject.org/">Bit Project</a>, I've been able to help a Global Student Community and a cohort of mentored students to <strong>learn serverless technologies</strong>, guiding them through creating projects (sometimes their first!). This has been done with the <strong><a target="_blank" rel="noopener" href="https://github.com/apps/counselorbot">CounselorBot</a></strong>, a GitHub bot that acts as an LMS (learning management system).</p>
      <br></br>
      <p>I've also collaborated with AWS &amp; NewRelic teams to create <a target="_blank" rel="noopener" href="https://newrelic.awsworkshop.io/pixie/using_pixie/scenario_1/">TinyHats</a>, a microservices application that was <strong>presented at KubeCon and used for an AWS workshop</strong>.</p>
      <br></br>
      <h4 className={styles.className}>What I Want To Do Next</h4>
      <p>I hope to continue growing the Bit Project community to <strong>give more people access to technical skills</strong> that can be used to create their own projects that solve both big and small problems in their communities.</p>
      <br></br>

      <p>Part of this goal is to also bring <strong>better cybersecurity resources and training</strong> to underdeveloped areas, especially as cyber-risks exponentially increase over the next few years.</p>
      <br></br>
      <p>I love bringing creative ideas and even&nbsp;<em>fun</em> into technology; especially anything that has to do with escape rooms.</p>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
