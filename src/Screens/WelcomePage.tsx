import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #52b669;
`;

const TopTextArea = styled.View`
  flex: 0.5;
  justify-content: center;
  align-items: center;
`;
const TopText = styled.Text`
  font-size: 88px;
  letter-spacing: 12px;
  color: white;
`;
const TopSubText = styled.Text`
  font-size: 18px;
  color: white;
`;

const DownTextArea = styled.View`
  flex: 0.5;
  justify-content: center;
  align-items: center;
  margin: 35px;
`;
const DownTextAreaButton = styled.TouchableOpacity`
  width: 300px;
  margin: 5px;
  border-radius: 10px;
  align-items: center;
  background-color: white;
  padding: 10px;
`;
const DownText = styled.Text`
  font-size: 18px;
  color: white;
  text-align: center;
`;
const LoginText = styled.Text`
  font-size: 20px;
  color: #52b669;
`;
const RegisterText = styled.Text`
  font-size: 20px;
  color: #52b669;
`;

type LoginParamList = {
  Login: undefined;
  Register: undefined;
};

type NavigationProp = StackNavigationProp<LoginParamList, 'Login'>;
interface Props {
  navigation: NavigationProp;
}

const WelcomePage = ({ navigation }: Props) => {
  return (
    <>
      <Wrapper>
        <TopTextArea>
          <TopText>여행기</TopText>
          <TopSubText>열심히 일 한 당신 떠나요!</TopSubText>
        </TopTextArea>
        <DownTextArea>
          <DownTextAreaButton onPress={() => navigation.navigate('Login')}>
            <LoginText>로그인</LoginText>
          </DownTextAreaButton>
          <DownTextAreaButton onPress={() => navigation.navigate('Register')}>
            <RegisterText>회원가입</RegisterText>
          </DownTextAreaButton>
          <DownText>본 서비스는 여행기의 내용을 회원끼리 공유하는 서비스 입니다. </DownText>
        </DownTextArea>
      </Wrapper>
    </>
  );
};

export default WelcomePage;
