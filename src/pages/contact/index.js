import React from 'react'
import styled from '@style'
import { Phone, MapPin, Mail } from '@styled-icons/feather'
import { useI18next } from 'gatsby-plugin-react-i18next'
import { Layout, Seo } from '@components/layouts'
import { Flex, Wrapper, Container, Box } from '@components/containers'
import { Text, Input, ShadowTitle, Button, ExLink } from '@components/elements'

const Contact = () => {
  const { t } = useI18next()
  return (
    <Layout>
      <Seo title={t('Contact')} description={t("Let's get in touch")} />
      <Wrapper>
        <Container>
          <Flex alignItems="center" justifyContent="center" mb={['0', '4rem']}>
            <ShadowTitle title={t('GET IN TOUCH')} />
          </Flex>
          <Flex flexWrap="wrap" p={{ lg: '0 50px', sm: '0 30px' }} m="0 -15px">
            <Flex
              width={{ lg: 0.608, md: 1 }}
              flexDirection="column"
              m="0 15px"
            >
              <Text mb="16px" color="general" as="h4">
                {t('Feel free to Drop a line')}
              </Text>
              <Text color="general">
                {t(
                  'I might answer a bit late, but it should be within a day or two'
                )}
              </Text>
              <Flex m="24px -15px 0">
                <SInput label={t('Name')} variant="textfield" />

                <SInput label={t('Email')} variant="textfield" />
              </Flex>
              <SArea label={t('Message')} variant="textarea" />
              <Box mt="24px">
                <Button variant="primary" type="submit">
                  {t('Send message')}
                </Button>
              </Box>
            </Flex>
            <ContactCard
              width={{ lg: 0.332, md: 1 }}
              flexDirection="column"
              m="0 15px"
              p="30px"
            >
              <TContact color="general" as="h4">
                {t('Contact Information')}
              </TContact>
              <ContactItem>
                <Phone />
                <ExLink to="tel:+60182655318">
                  <Text color="general">+60182655318</Text>
                </ExLink>
              </ContactItem>
              <ContactItem>
                <Mail />
                <ExLink to="mailto:amammustofa@gmail.com">
                  <Text color="general">amammustofa@gmail.com</Text>
                </ExLink>
              </ContactItem>
              <ContactItem>
                <MapPin />
                <ExLink to="http://maps.google.com/maps?q=Cybersquare+Apex+tower+Malaysia">
                  <Text color="general">Cyberjaya, Selangor, Malaysia</Text>
                </ExLink>
              </ContactItem>
            </ContactCard>
          </Flex>
        </Container>
      </Wrapper>
    </Layout>
  )
}

const SInput = styled(Input)`
  width: 100%;
  margin: 0 15px;
`

const SArea = styled(Input)`
  margin-top: 16px;
`

const TContact = styled(Text)`
  margin-bottom: 32px;
  position: relative;

  &::after {
    width: 50px;
    height: 2px;
    background: ${(props) => props.theme.colors.general};
    content: '';
    top: 100%;
    position: absolute;
    left: 0;
    margin-top: 15px;
  }
`

const ContactCard = styled(Flex)`
  box-shadow: 0 8px 30px 8px rgba(0, 0, 0, 0.1);
`

const ContactItem = styled(Flex)`
  align-items: center;
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }

  & > svg {
    width: 24px;
    height: 24px;
    margin-right: 16px;
  }
`
export default Contact
