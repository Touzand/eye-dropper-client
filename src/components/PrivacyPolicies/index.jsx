import { Container, P, Section, Subtitle, Title } from "./style";

const PrivacyPolice = () => {
  return (
    <Container>
      <Title>Privacy Policy</Title>
      <Section>
        <Subtitle>Personal data</Subtitle>
        <P>
          <strong>Min Eye-Dropper</strong> had never collected and will never
          collect any personal data, browsing history etc.
        </P>
        <P>
          In future <strong>Min Eye-Dropper</strong> may collect your picked color history and
          extension settings (except any data which can help identify user).
          Such data may be used for decisions about implementing or removing
          features and getting some usefull/fun facts about picked colors. It
          will happen only with your permission.
        </P>
      </Section>
      <Section>
        <Subtitle>Third party services</Subtitle>
        <P>
          Eye Dropper uses Chrome(Chromium) or WebExtensions Storage Sync API
          and Web Storage API(localStorage) for storing color history.
        </P>
      </Section>
      <a href="/eye-dropper-client">Back to home page</a>
    </Container>
  );
};

export default PrivacyPolice;
