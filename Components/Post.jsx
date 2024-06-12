import styled from "styled-components/native";

const PostView = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.4);
  border-bottom-style: solid;
`;
const PostImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 12px;
`;
const PostTitle = styled.Text`
  font-size: 16px;
  font-weight: 700;
`;
const PostData = styled.Text`
  font-size: 16px;
  font-weight: 300;
`;
const PostDetails = styled.View`
  flex: 1;
  margin-left: 15px;
  justify-content: center;
`;

export const Post = (obj) => {
  return (
    <PostView>
      <PostImage source={{ uri: obj.picture.large }} />
      <PostDetails>
        <PostTitle>{obj.name.first + " " + obj.name.last}</PostTitle>
        <PostData>{obj.phone}</PostData>
      </PostDetails>
    </PostView>
  );
};
