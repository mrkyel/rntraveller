import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  flex: 1;
  margin: 10px;
  justify-content: center;
  background-color: #52b669;
`;
const Input = styled.TextInput`
  width: 300px;
  margin-left: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #fff;
`;
const FindPasswordTextWrapper = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;
const FindPasswordText = styled.Text`
  color: white;
  margin-right: 25px;
`;
const ButtonArea = styled.View`
  align-items: center;
  margin-top: 50px;
`;
const ButtonTouchArea = styled.TouchableOpacity`
  width: 300px;
  margin: 5px;
  border-radius: 10px;
  background-color: white;
  padding: 10px;
`;
const ConfirmText = styled.Text`
  font-size: 14px;
  color: #52b669;
  text-align: center;
`;
const Login = () => {
  return (
    <Wrapper>
      <Input placeholder="Username" placeholderTextColor="white" />
      <Input placeholder="Password" placeholderTextColor="white" />
      <FindPasswordTextWrapper>
        <FindPasswordText>비밀번호 찾기</FindPasswordText>
      </FindPasswordTextWrapper>
      <ButtonArea>
        <ButtonTouchArea>
          <ConfirmText>확인</ConfirmText>
        </ButtonTouchArea>
      </ButtonArea>
    </Wrapper>
  );
};
export default Login;
