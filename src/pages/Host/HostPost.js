import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { css } from 'styled-components';
import axios from 'axios';
import HostAmenity from './HostAmenity/HostAmenity';
import HostRadio from './HostRadio/HostRadio';
import HostUpload from './HostUpload';
import HostAddress from './HostAddress';
import HostPerson from './HostPerson';
import HostLocation from './HostLocation';
import { HOST_API } from '../../config';

function HostPost() {
  const history = useHistory();

  const [title, setTitle] = useState('');

  const titleChange = e => {
    setTitle(e.target.value);
  };

  const [subTitle, setSubTitle] = useState('');

  const subTitleChange = e => {
    setSubTitle(e.target.value);
  };

  const [allPrice, setAllPrice] = useState('');

  const AllPriceInput = e => {
    setAllPrice(e.target.value);
  };

  const [dayPrice, setDayPrice] = useState('');

  const DayPriceInput = e => {
    setDayPrice(e.target.value);
  };

  const [nightPrice, setNightPrice] = useState('');

  const NightPriceInput = e => {
    setNightPrice(e.target.value);
  };

  const [checkedBoxInputs, setCheckedBoxInputs] = useState([]);
  const [checkedInputs, setCheckedInputs] = useState([]);

  const [button, setButton] = useState([]);

  const [productList, setProductList] = useState([]);

  const [selectedFiles, setSelectedFiles] = useState([]);

  const [addressDetail, setAddressDetail] = useState('');

  const [isOpenPost, setIsOpenPost] = useState(false);

  const [number, setNumber] = useState(0);

  const [location, setLocation] = useState([]);

  const axiosPost = async e => {
    try {
      const formData = new FormData();
      const headers = {
        'content-type': 'multipart/form-data',
        Authorization: localStorage.getItem('access_token'),
      };

      formData.append('title', title);
      formData.append('sub_title', subTitle);
      formData.append('category', checkedInputs);
      formData.append('image', selectedFiles);
      formData.append('district', location);
      formData.append('address', addressDetail);
      formData.append('price_all', allPrice);
      formData.append('price_day', dayPrice);
      formData.append('price_night', nightPrice);
      formData.append('facility', checkedBoxInputs);
      formData.append('max_count', number);

      const response = await axios.post(HOST_API, formData, { headers });
      response.data.message === 'success'
        ? alert('와 성공했어용 !')
        : alert('아앗,, 다시');
      history.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <HostPostWrap>
      <HostPostContent>
        <Heading>
          <HeadingTitle>공간 정보를 입력해주세요.</HeadingTitle>
          <HeadingRight>
            <HeadingTitleOption>*</HeadingTitleOption>
            <HeadingOption>필수입력</HeadingOption>
          </HeadingRight>
        </Heading>

        <FormBox>
          <FormText>
            <FormTextLeft>
              <FormBoxTitle>공간명</FormBoxTitle>
              <FormBoxTitleOption>*</FormBoxTitleOption>
            </FormTextLeft>
            <FormBoxOption>최대 18자</FormBoxOption>
          </FormText>
          <FormInput
            placeholder="공간명을 입력해주세요."
            value={title}
            onChange={titleChange}
            maxLength="18"
          ></FormInput>
        </FormBox>

        <FormBox>
          <FormText>
            <FormTextLeft>
              <FormBoxTitle>공간 한줄 소개</FormBoxTitle>
              <FormBoxTitleOption>*</FormBoxTitleOption>
            </FormTextLeft>
            <FormBoxOption>최대 50자</FormBoxOption>
          </FormText>
          <FormInput
            placeholder="공간을 소개하는 한줄 문장을 입력해주세요."
            value={subTitle}
            onChange={subTitleChange}
            maxLength="50"
          ></FormInput>
        </FormBox>

        <HostRadio
          button={button}
          setButton={setButton}
          checkedInputs={checkedInputs}
          setCheckedInputs={setCheckedInputs}
        />

        <HostUpload
          selectedFiles={selectedFiles}
          setSelectedFiles={setSelectedFiles}
        />
        <FormBox>
          <FormText>
            <FormTextLeft>
              <FormBoxTitle>지역</FormBoxTitle>
              <FormBoxTitleOption>*</FormBoxTitleOption>
            </FormTextLeft>
          </FormText>
          <FormCheckContents>
            <FormCheckBox>
              <FormCheckRight>지역 구분</FormCheckRight>
              <HostLocation location={location} setLocation={setLocation} />
            </FormCheckBox>
          </FormCheckContents>
        </FormBox>

        <HostAddress
          addressDetail={addressDetail}
          setAddressDetail={setAddressDetail}
          isOpenPost={isOpenPost}
          setIsOpenPost={setIsOpenPost}
        />

        <FormBox>
          <FormText>
            <FormTextLeft>
              <FormBoxTitle>예약 시간</FormBoxTitle>
              <FormBoxTitleOption>*</FormBoxTitleOption>
            </FormTextLeft>
            <FormBoxOption>ALL 5% 할인</FormBoxOption>
          </FormText>

          <ReserveTimeWrap>
            <ReserveTimeBox>
              <ReserveTimeText>All</ReserveTimeText>
              <FormInputTime
                placeholder="가격을 입력해 주세요."
                value={allPrice}
                onChange={AllPriceInput}
              />
            </ReserveTimeBox>

            <ReserveTimeBox>
              <ReserveTimeText>Day</ReserveTimeText>
              <FormInputTime
                placeholder="가격을 입력해 주세요."
                value={dayPrice}
                onChange={DayPriceInput}
              />
            </ReserveTimeBox>

            <ReserveTimeBox>
              <ReserveTimeText>Night</ReserveTimeText>
              <FormInputTime
                placeholder="가격을 입력해 주세요."
                value={nightPrice}
                onChange={NightPriceInput}
              />
            </ReserveTimeBox>
          </ReserveTimeWrap>
        </FormBox>

        <HostAmenity
          productList={productList}
          setProductList={setProductList}
          setCheckedBoxInputs={setCheckedBoxInputs}
          checkedBoxInputs={checkedBoxInputs}
        />

        <HostPerson number={number} setNumber={setNumber} />

        <ButtonBox>
          <ButtonPrev>이전</ButtonPrev>
          <ButtonNext onClick={axiosPost}>다음</ButtonNext>
        </ButtonBox>
      </HostPostContent>
    </HostPostWrap>
  );
}

export default HostPost;

const HostPostWrap = styled.div`
  padding-top: 78px;
  background: #f6f6f6;
`;

const HostPostContent = styled.div`
  width: 1158px;
  margin: 0 auto;
  padding-top: 60px;
`;

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 4px solid #6d3bff;
  margin-bottom: 20px;
`;

const HeadingTitle = styled.h2`
  font-size: 30px;
  font-weight: 700;
`;

const HeadingRight = styled.div`
  display: flex;
  align-items: center;
`;

const HeadingTitleOption = styled.div`
  padding-right: 10px;
  font-size: 24px;
  font-weight: 700;
  color: #ff3a48;
  writing-mode: vertical-rl;
`;

const HeadingOption = styled.div`
  color: #ff3a48;
  font-size: 18px;
  font-weight: 700;
`;

const FormBox = styled.div`
  margin-top: 40px;
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

const FormBoxOption = styled.span`
  font-size: 16px;
  color: #777;
`;

const FormInput = styled.input`
  width: 100%;
  height: 60px;
  margin-top: 10px;
  padding-left: 20px;
  border: 1px solid #e0e0e0;
  font-size: 18px;

  ::placeholder {
    font-size: 18px;
  }
`;

const FormBoxAmenity = styled.div`
  margin-top: 40px;
  margin-bottom: 20px;
`;
const FormTextAmenity = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid #777;
`;

const ReserveTimeWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ReserveTimeBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const ReserveTimeText = styled.p`
  margin-right: 20px;
  color: #2c2c2c;
  font-weight: 700;
`;

const FormInputTime = styled.input`
  width: 300px;
  height: 60px;
  padding-left: 20px;
  border: 1px solid #e0e0e0;
  font-size: 18px;
`;

const Reserve = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0;
`;

const ReserveText = styled.p`
  margin-right: 60px;
  color: #2c2c2c;
  font-weight: 700;
`;

const ButtonAmount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 200px;
  border: 1px solid #e0e0e0;
`;

const ButtonMin = styled.button`
  height: 100%;
  width: 50px;
  background-color: transparent;
  border: 0 solid #777;
  font-size: 20px;
  background-color: #e6e6e6;
`;

const ButtonPlus = styled.button`
  height: 100%;
  width: 50px;
  background-color: #e6e6e6;
  border: 0 solid #777;
  font-size: 20px;
`;

const Amount = styled.p`
  color: #777;
  font-size: 16px;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  height: 200px;
  margin-top: 150px;
`;

const Sticky = css`
  width: 565px;
  height: 60px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  color: #fff;
  cursor: pointer;
`;

const ButtonPrev = styled.button`
  background: #4d4d4d;
  ${Sticky}
`;

const ButtonNext = styled.button`
  background: #ff3a48;
  ${Sticky}
`;

const FormCheckContents = styled.div`
  margin-top: 20px;
`;

const FormCheckBox = styled.ul`
  height: 40px;
  display: flex;
  justify-content: space-between;
`;

const FormCheckRight = styled.li`
  font-size: 18px;
  width: 120px;
  height: 35px;
  background: #6d3bff;
  border-radius: 50px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
