import React from 'react'
import styled from '@style'
import { Formik, Field } from 'formik'
import * as Yup from 'yup'
import { Phone, MapPin, Mail } from '@styled-icons/feather'
import { useI18next } from 'gatsby-plugin-react-i18next'
import { Layout, Seo } from '@components/layouts'
import { Flex, Wrapper, Container, Box } from '@components/containers'
import { Text, Input, ShadowTitle, Button, ExLink } from '@components/elements'

const Contact = () => {
  const { t } = useI18next()

  const ContactSchema = Yup.object().shape({
    name: Yup.string().required(t('Required')),
    _replyto: Yup.string()
      .email(t('Please enter proper email address'))
      .required(t('Required')),
    message: Yup.string().min(5, t('Too short')).required(t('Required')),
  })
  return (
    <Layout>
      <Seo title={t('Contact')} description={t("Let's get in touch")} />
      <Wrapper>
        <Container>
          <Flex alignItems="center" justifyContent="center" mb={['0', '4rem']}>
            <ShadowTitle title={t('GET IN TOUCH')} />
          </Flex>
          <Flex
            flexWrap="wrap"
            p={{ lg: '0 50px', sm: '0 30px' }}
            m="80px -15px 0"
          >
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
                  "I am willing to share my experience with you. Please don't hesitate to ask me any questions!"
                )}
              </Text>
              <Formik
                initialValues={{
                  name: '',
                  _replyto: '',
                  message: '',
                }}
                validationSchema={ContactSchema}
              >
                {({ errors, touched, isValid, dirty }) => (
                  <form action="https://formspree.io/xdowleqj" method="POST">
                    <Flex
                      m="24px -15px 0"
                      flexWrap={{ _: 'wrap', md: 'inherit' }}
                    >
                      <Flex flexDirection="column" width="100%" m="0 15px">
                        <Field name="name">
                          {({ field }) => (
                            <SInput
                              {...field}
                              label={t('Name')}
                              error={errors.name && touched.name}
                              variant="textfield"
                            />
                          )}
                        </Field>
                        {errors.name && touched.name ? (
                          <Text color="error">{errors.name}</Text>
                        ) : null}
                      </Flex>
                      <Flex flexDirection="column" width="100%" m="0 15px">
                        <Field name="_replyto">
                          {({ field }) => (
                            <SInput
                              {...field}
                              label={t('Email')}
                              // eslint-disable-next-line no-underscore-dangle
                              error={errors._replyto && touched._replyto}
                              variant="textfield"
                            />
                          )}
                        </Field>

                        {
                          // eslint-disable-next-line no-underscore-dangle
                          errors._replyto && touched._replyto ? (
                            // eslint-disable-next-line no-underscore-dangle
                            <Text color="error">{errors._replyto}</Text>
                          ) : null
                        }
                      </Flex>
                    </Flex>
                    <Flex>
                      <Flex flexDirection="column" width="100%">
                        <Field name="message">
                          {({ field }) => (
                            <SArea
                              {...field}
                              error={errors.message && touched.message}
                              label={t('Message')}
                              variant="textarea"
                            />
                          )}
                        </Field>
                        {errors.message && touched.message ? (
                          <Text color="error">{errors.message}</Text>
                        ) : null}
                      </Flex>
                    </Flex>

                    <Box mt="24px" mb="30px">
                      <Button
                        variant="primary"
                        type="submit"
                        disabled={!dirty || !isValid}
                      >
                        {t('Send message')}
                      </Button>
                    </Box>
                  </form>
                )}
              </Formik>
            </Flex>
            <ContactCard
              width={{ _: 1, lg: 0.332, md: 1 }}
              flexDirection="column"
              m="0 15px"
              p="30px"
            >
              <TContact color="general" as="h4">
                {t('Contact Information')}
              </TContact>
              <ContactItem mb="24px" mt="16px">
                <Phone />
                <ExLink to="tel:+60182655318" from="contact | phone">
                  <Text color="general">+60182655318</Text>
                </ExLink>
              </ContactItem>
              <ContactItem mb="24px">
                <Mail />
                <ExLink
                  to="mailto:amammustofa@gmail.com"
                  from="contact | email"
                >
                  <Text color="general">amammustofa@gmail.com</Text>
                </ExLink>
              </ContactItem>
              <ContactItem>
                <MapPin />
                <ExLink
                  to="http://maps.google.com/maps?q=Cybersquare+Apex+tower+Malaysia"
                  from="contact | map"
                >
                  <Text color="general">Cyberjaya, Selangor, Malaysia</Text>
                </ExLink>
              </ContactItem>
              <TContact mt="36px" color="general" as="h4">
                {t('Note')}
              </TContact>
              <Text color="general">
                {t(
                  'I might answer a bit late, but it should be within a day or two'
                )}
              </Text>
            </ContactCard>
          </Flex>
        </Container>
      </Wrapper>
    </Layout>
  )
}

const SInput = styled(Input)`
  width: 100%;
`

const SArea = styled(Input)`
  margin-top: 16px;
  width: 100%;
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
  height: auto;
`

const ContactItem = styled(Flex)`
  align-items: center;

  & > svg {
    width: 24px;
    height: 24px;
    margin-right: 16px;
    color: ${(props) => props.theme.colors.general};
  }
`
export default Contact
