import Text from '@components/atoms/Text/index';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  padding: 110px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  box-sizing: border-box;
  background: #484848;
`;

const TextList = styled.div`
  margin: 0 0 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledText = styled(Text)`
  font-size: 15px;
  line-height: 22px;

  color: #ffffff;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
`;

const Footer = () => {
  return (
    <Wrapper>
      <TextList>
        <StyledText bold>회사 리소스</StyledText>
        <StyledText>shazam 소개</StyledText>
        <StyledText>채용 정보</StyledText>
        <StyledText>도움말</StyledText>
      </TextList>
      <TextList>
        <StyledText bold>법적 고지</StyledText>
        <StyledText>이용 약관</StyledText>
        <StyledText>개인정보 보호</StyledText>
        <StyledText>데이터 관리</StyledText>
      </TextList>
    </Wrapper>
  );
};

export default Footer;
