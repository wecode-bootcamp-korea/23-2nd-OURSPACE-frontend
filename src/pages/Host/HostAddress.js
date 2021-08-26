import React from 'react';
import styled from 'styled-components';
import DaumPostcode from 'react-daum-postcode';

function HostAddress({
  addressDetail,
  setAddressDetail,
  isOpenPost,
  setIsOpenPost,
}) {
  const onChangeOpenPost = () => {
    setIsOpenPost(!isOpenPost);
  };

  const onCompletePost = data => {
    let fullAddr = data.address;
    let extraAddr = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddr += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddr +=
          extraAddr !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddr += extraAddr !== '' ? ` (${extraAddr})` : '';
    }

    setAddressDetail(fullAddr);
    setIsOpenPost(false);
  };

  return (
    <FormBox>
      <FormText>
        <FormTextLeft>
          <FormBoxTitle>주소(위치)</FormBoxTitle>
          <FormBoxTitleOption>*</FormBoxTitleOption>
        </FormTextLeft>
      </FormText>
      <FormInputImage
        placeholder="주소를 입력해 주세요."
        onChange={setAddressDetail}
        value={addressDetail}
        readOnly
      />

      <FormButton onClick={onChangeOpenPost}>주소 찾기</FormButton>
      {isOpenPost && (
        <DaumPostcode
          style={POST_CODE_STYLE}
          autoClose
          onComplete={onCompletePost}
        />
      )}
    </FormBox>
  );
}

export default HostAddress;

const POST_CODE_STYLE = {
  position: 'relative',
  top: '0%',
  display: 'block',
  width: '984px',
  height: '400px',
};

const FormInputImage = styled.input`
  width: 984px;
  height: 60px;
  margin-top: 10px;
  padding-left: 20px;
  border: 1px solid #e0e0e0;
  font-size: 18px;
`;

const FormBox = styled.div`
  margin-top: 40px;
`;

const FormButton = styled.button`
  float: right;
  width: 154px;
  height: 60px;
  margin-top: 10px;
  font-size: 18px;
  background: #6d3bff;
  border: none;
  color: #fff;
  cursor: pointer;
`;

const FormText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FormTextLeft = styled.div`
  display: flex;
  align-items: center;
`;

const FormBoxTitle = styled.div`
  height: 30px;
  font-size: 20px;
  font-weight: 700;
`;

const FormBoxTitleOption = styled.span`
  padding-left: 5px;
  color: #ff3a48;
  font-size: 24px;
  font-weight: 700;
`;
