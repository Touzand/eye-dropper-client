import { Container, P, Section, Subtitle, Title } from "./style";

const PrivacyPolice = () => {
  return (
    <Container>
      <Title>Privacy Policy</Title>
      <Section>
        <Subtitle>Personal data</Subtitle>
        <P>
          <strong>Min Eye-Dropper</strong> nunca ha recopilado y nunca
          recopilará información personal, como historial de navegación, clics,
          etc.
        </P>
        <P>
          Future versions of <strong>Min Eye-Dropper</strong> may store your
          chosen color preferences and extension settings (except any data which
          can help identify user). Such information may be utilized to make
          judgments about adding or removing features and to learn some
          interesting or valuable information about the chosen colors. Only with
          your consent will it be carried out.
        </P>
      </Section>
      <Section>
        <Subtitle>Third party services</Subtitle>
        <P>
          Eye Dropper stores color history using the Web Storage API
          (localStorage) and Chrome's (Chromium's) Storage Sync API.
        </P>
      </Section>
      <a href="/">Back to home page</a>
    </Container>
  );
};

export default PrivacyPolice;
