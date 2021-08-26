import React, { useEffect } from 'react';
import styled from 'styled-components';

function HostUpload({
  selectedFiles,
  setSelectedFiles,
  setImgSelectedFiles,
  imgSelectedFiles,
}) {
  const handleImageChange = e => {
    if (e.target.files) {
      const imgFilesArray = Array.from(e.target.files);

      setImgSelectedFiles(e.target.files);

      const filesArray = Array.from(e.target.files).map(file =>
        URL.createObjectURL(file)
      );

      setSelectedFiles(prevImages => prevImages.concat(filesArray));
      Array.from(e.target.files).map(file => URL.revokeObjectURL(file));
    }
  };

  useEffect(() => {
    if (selectedFiles.length > 6) {
      setSelectedFiles(selectedFiles.splice(0, 6));
      alert('이미지 업로드는 최대 6장 입니다.');
    }
  }, [selectedFiles]);

  const deleteHandle = image => {
    const currentIndex = selectedFiles.indexOf(image);

    const newImages = [...selectedFiles];
    newImages.splice(currentIndex, 1);
    setSelectedFiles(newImages);
  };

  return (
    <FormBox>
      <FormText>
        <FormTextLeft>
          <FormBoxTitle>공간 이미지</FormBoxTitle>
          <FormBoxTitleOption>*</FormBoxTitleOption>
        </FormTextLeft>
        <FormBoxOption>2048 *1158 권장, 최대 3MB (최대 6장)</FormBoxOption>
      </FormText>
      <Form encType="multipart/form-data">
        <FormImgBox>
          {selectedFiles.map((image, index) => {
            return (
              <FormInputImageBox
                onClick={() => deleteHandle(image)}
                key={index}
              >
                <FormInputImageButton>✕</FormInputImageButton>
                <FormInputImage src={image} alt="" />
              </FormInputImageBox>
            );
          })}
        </FormImgBox>
        <LabelImg htmlFor="imgbutton">파일 등록</LabelImg>
        <FormButtonInput
          type="file"
          accept="image/jpeg, image/jpg, image/png"
          id="imgbutton"
          onChange={handleImageChange}
          multiple
        />
      </Form>
    </FormBox>
  );
}

export default HostUpload;

const Form = styled.form``;
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

const FormImgBox = styled.div`
  display: inline-block;
  width: 984px;
  height: 160px;
  margin-top: 10px;
  padding-left: 20px;
  border: 1px solid #e0e0e0;
  font-size: 18px;
  background: #fff;
`;

const FormInputImageBox = styled.div`
  display: inline-block;
  margin: 20px 20px 0px 10px;
  width: 120px;
  height: 120px;

  &:hover {
    cursor: pointer;
  }
`;

const FormInputImageButton = styled.div`
  width: 120px;
  height: 120px;
  position: absolute;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  opacity: 0;
  background-color: #6d3bff;
  &:hover {
    opacity: 0.9;
    transition: 0.2s ease-out;
  }
`;

const FormInputImage = styled.img.attrs({
  type: 'src',
})`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const LabelImg = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
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
const FormButtonInput = styled.input`
  display: none;
`;
