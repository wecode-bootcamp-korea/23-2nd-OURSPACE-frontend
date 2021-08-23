import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import Checkbox from './Checkbox';
import Comment from './Comment';

function Review() {
  const [imgBase64, setImgBase64] = useState('');
  const [imgFile, setImgFile] = useState(null);
  const [commentList, setCommentList] = useState({
    list: [],
    commentText: '',
    userId: '',
  });

  const commentState = e => {
    const { value } = e.target;

    setCommentList({ ...commentList, commentText: value });
  };

  const commentAdd = () => {
    const { list, commentText } = commentList;
    const newUserId = 'user' + Math.trunc(Math.random() * 10);
    const newList = list.concat({
      userId: newUserId,
      commentText: commentText,
    });
    setCommentList({ ...commentList, list: newList, commentText: '' });
  };

  const handleChangeFile = event => {
    let reader = new FileReader();

    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64) {
        setImgBase64(base64.toString());
      }
    };
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
      setImgFile(event.target.files[0]);
    }
  };

  return (
    <Container>
      <Reviews>
        <Text>
          <Intro>
            이용후기&nbsp;
            <Primary>
              <Em>1개</Em>
            </Primary>
            <Dot></Dot>
            <Span>
              평균 평점&nbsp;
              <Primary>
                <Em>5.0</Em>
              </Primary>
            </Span>
          </Intro>
        </Text>
        <div className="reviewBox">
          <ul className="reviewlist">
            <Lists>
              <Rbox>
                {commentList.list.map((item, i) => {
                  return (
                    <Comment
                      key={i}
                      userimg={item.userImg}
                      userId={item.userId}
                      text={item.commentText}
                      onChange={commentState}
                    />
                  );
                })}
              </Rbox>
              <Reply>
                <Tit>
                  <Em>호스트님의 답글</Em>
                </Tit>
                <Hostrv>기후기후기후기후기후기후</Hostrv>
                <Time>
                  <Timeinfo>2021.08.23 19:52:23</Timeinfo>
                </Time>
              </Reply>
            </Lists>
          </ul>
        </div>
        <Reviewbox>
          <Checkbox />
        </Reviewbox>
        <Textinput
          type="text"
          onChange={commentState}
          onKeyPress={event => {
            if (event.key === 'Enter') {
              commentAdd();
            }
          }}
          value={commentList.commentText}
        />
        <Photorv>포토리뷰</Photorv>
        <Filebox>
          <Upload></Upload>
          <Label for="imgFile">
            <Imgbutton>+</Imgbutton>
          </Label>
          <File
            type="file"
            name="imgFile"
            id="imgFile"
            accept="image/png, image/jpeg, image/jpg"
            onChange={handleChangeFile}
          />

          <Imgbox src="" alt="" />
        </Filebox>
        <Form type="button" onClick={commentAdd}>
          등록하기
        </Form>
      </Reviews>
    </Container>
  );
}
export default Review;

const Container = styled.div`
  min-height: 760px;
  /* background: #f6f6f6; */
`;

const Reviews = styled.div`
  width: 760px;
  height: 340px;
  /* border: 1px solid black; */
  margin: 0 auto;
`;

const Text = styled.div`
  border-top: 1px solid #f6f6f6;
  margin-bottom: 50px;
  position: relative;
  line-height: 25px;
  width: 100%;
`;

const Intro = styled.h4`
  padding-bottom: 16px;
  margin-bottom: 28px;
  vertical-align: top;
  position: relative;
  margin: 70px 0 28px;
  color: #000;
  font-size: 18px;
  font-weight: 600;
  line-height: 30px;
  &::after {
    width: 20px;
    height: 4px;
    position: absolute;
    bottom: 0;
    left: 0;
    content: '';
    display: block;
    background-color: #ffd014;
  }
`;

const Primary = styled.strong`
  color: #6d3afb;
`;

const Em = styled.em`
  vertical-align: top;
  color: #6d3afb;
`;

const Dot = styled.span`
  width: 4px;
  height: 4px;
  margin: 0 5px;
  display: inline-block;
  border-radius: 50%;
  background-color: #949494;
  vertical-align: middle;
`;

const Span = styled.span`
  vertical-align: top;
`;
const Lists = styled.li`
  padding: 24px 0 0;
  font-size: 16px;
  border-top: 0;
  border-bottom: 1px solid #ebebeb;
`;
const Rbox = styled.div`
  padding: 0 0 24px 110px;
  position: relative;
`;
const Userimg = styled.span`
  background-image: url('/images/review.jpeg');
  background-repeat: no-repeat;
  top: 0;
  width: 80px;
  height: 80px;
  border-radius: 80px;
  position: absolute;
  left: 0;
  border-radius: 45px;
  background-size: cover;
  background-position: 50%;
`;
const Name = styled.strong`
  margin-top: 3px;
  margin-right: 117px;
  font-size: 18px;
  line-height: 21px;
  display: inline-block;
  word-wrap: break-word;
  word-break: break-all;
`;
const Preview = styled.p`
  margin-top: 11px;
  line-height: 28px;
  color: #656565;
`;
const Time = styled.div`
  margin-top: 13px;
`;
const Timeinfo = styled.span`
  font-size: 12px;
  color: #b2b2b2;
  vertical-align: top;
`;
const Area = styled.div`
  top: 4px;
  position: absolute;
  right: 0;
  margin-left: 10px;
  display: inline-block;
  vertical-align: top;
`;
const Reply = styled.div`
  padding-top: 11px;
  padding: 0 0 24px 110px;
  position: relative;
`;
const Tit = styled.p`
  font-size: 18px;
  color: #6d3afb;
`;
const Hostrv = styled.p`
  margin-top: 11px;
  line-height: 28px;
  color: #656565;
`;

const PostButton = styled.button`
  width: 200px;
  height: 40px;
  background-color: #6d3afb;
  margin-top: 30px;
  float: right;
  border: none;
  color: #fff;
  cursor: pointer;

  a {
    text-decoration: none;
    color: #fff;
  }
`;
const Textinput = styled.textarea`
  padding-left: 20px;
  width: 100%;
  height: 100px;
  border: 1px solid #dfdfdf;
  resize: none;
  font-size: 18px;
  outline: none;
`;
const Reviewbox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Filebox = styled.div`
  width: 100px;
`;
const Label = styled.label`
  display: inline-block;
  padding: 0.5em 0.75em;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #999;
  font-size: inherit;
  line-height: normal;
  vertical-align: middle;
  background-color: #fdfdfd;
  cursor: pointer;
  border: 1px solid #ebebeb;
  border-bottom-color: #e2e2e2;
  border-radius: 0.25em;
`;
const File = styled.input`
  position: absolute;
  width: 100px;
  height: 20px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;
const Imgbutton = styled.div`
  font-size: 40px;
`;
const Form = styled.button`
  width: 100%;
  height: 60px;
  margin-top: 20px;
  float: right;
  background: #6d3afb;
  color: white;
  border: 1px solid #6d3afb;
  cursor: pointer;
`;
const Imgbox = styled.img`
  width: 400px;
`;
const Photorv = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 10px;
`;
const Upload = styled.div`
  background: #efefef;
  width: 150px;
  height: 150px;
`;
