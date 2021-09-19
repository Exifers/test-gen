import { Field, Form } from 'formik'
import styled from '@emotion/styled'
import { Text } from '../../styles/texts'
import { COLORS } from '../../styles/colors'
import { BREAKPOINTS } from '../../styles/breakpoints'

export const FormCard = styled(Form)`
  background-color: ${COLORS.WHITE};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 16px;
  max-width: 335px;
  padding: 32px;
  box-sizing: border-box;

  @media (max-width: ${BREAKPOINTS.MD}px) {
    margin: 24px auto 64px auto;
  }
`

export const TextBlock = styled(Text)`
  padding: 16px 0 16px 0;
  margin: 10px 0 10px 0;
`

export const InputFormControl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 10px 0 10px 0;
`

export const FormInput = styled(Field)`
  border: 1px solid ${COLORS.GREY};
  border-radius: 4px;
  height: 40px;
  margin-top: 10px;
  width: 100%;
  font-size: 14px;
  color: ${COLORS.TEXT};
  padding-left: 16px;
  box-sizing: border-box;
`

export const FormLabel = styled(Text)``

export const SubmitButton = styled.button`
  box-shadow: none;
  border: none;
  color: ${COLORS.WHITE};
  background-color: ${COLORS.BLUE};
  border-radius: 8px;
  padding: 18px;
  cursor: pointer;

  &:active {
    background-color: ${COLORS.BLUE_LIGHT};
  }
`

export const ErrorMessage = styled(Text)`
  color: ${COLORS.RED};
`
