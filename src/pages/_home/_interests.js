import React from 'react'
import styled from '@style'
import { useI18next } from 'gatsby-plugin-react-i18next'
import { BookOpen, Chrome } from '@styled-icons/feather'
import { GameController, Airplane } from '@styled-icons/ionicons-outline'
import { Flex, Container, Wrapper } from '@components/containers'
import { ShadowTitle, Text } from '@components/elements'

const Interest = () => {
  const { t } = useI18next()
  return (
    <AlterWrapper>
      <Container>
        <Flex alignItems="center" justifyContent="center" mb={['0', '4rem']}>
          <ShadowTitle title={t('INTERESTS')} />
        </Flex>
        <Flex m="95px 30px 0" justifyContent="center" flexWrap="wrap">
          <Item>
            <BookOpen />
            <Text mt={4} fontSize={{ _: 2, sm: 3 }}>
              {t('Manga reading')}
            </Text>
          </Item>
          <Item>
            <Chrome />
            <Text mt={4} fontSize={{ _: 2, sm: 3 }}>
              {t('Coding')}
            </Text>
          </Item>
          <Item>
            <GameController />
            <Text mt={4} fontSize={{ _: 2, sm: 3 }}>
              {t('Gaming')}
            </Text>
          </Item>
          <Item>
            <Airplane />
            <Text mt={4} fontSize={{ _: 2, sm: 3 }}>
              {t('Travelling')}
            </Text>
          </Item>
        </Flex>
      </Container>
    </AlterWrapper>
  )
}

const AlterWrapper = styled(Wrapper)`
  background: ${(props) => props.theme.colors.segment};
`

const Item = styled(Flex)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 20px;
  margin: 20px 30px;
  background: ${(props) => props.theme.colors.section};
  color: ${(props) => props.theme.colors.general};
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.1);
  width: 190px;
  height: 204px;

  @media (max-width: 576px) {
    width: 100%;
    margin: 20px 10px;
  }

  & > svg {
    width: 45px;
    height: 45px;
  }
`

export default Interest
