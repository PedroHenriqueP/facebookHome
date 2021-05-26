import styled from 'styled-components';

export const Section = styled.section`
    width: 100%;
    background-color: #f0f2f5;
`;

export const Limit = styled.div`
    max-width: 1300px;
    display: flex;
    justify-content: space-between;
`;

export const More = styled.div`
    width: 33,33%;
    height: 100vh;
    overflow-y: scroll; 
    margin-top: 10px;
    >div{
        cursor: pointer;
        display: flex;
        margin: 0 10px;
        align-items: center;
        border-radius: 10px;
        &:hover{
            background-color: #e3e3e3;
        }
        >a{
            margin: 0 10px;
            font-family: inherit;
            color: #050505;
            font-size: 13px;
        }
    }
`;

export const Profile = styled.img`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin: 7px 0 7px 10px;
`;

export const Body = styled.div`
    width: 33,33%;
    height: 100vh;
    margin-top: 10px;
    overflow: auto;
`;

export const NewPost = styled.div`
    background-color: #FFF;
    border-radius: 8px;
    box-shadow: 0 0 .1em #898989;
    width:500px;
    display: flex;
    flex-direction: column;
    >.new{
        display: flex;
        align-items: center;
        margin: auto;
        >input{
            font-family: inherit;
            color: #65676b;
            background-color: #f0f2f5;
            border-radius: 30px;
            font-size: 17px;
            padding: 10px 16px;
            margin-left: 20px;
            width: 350px;
            border: 1px solid #dddfe2;
            color: #1d2129;
        }
    }
    >.media{
        display: flex;
        justify-content: space-around;
        >.video{
            display: flex;
            align-items: center;
            cursor: pointer;
            border-radius: 10px;
            margin: 10px 0;
            &:hover{
                background-color: #e3e3e3;
            }
            >a{
                margin-right: 20px;
            }
        }
    }
`;

export const Profile2 = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    padding: 10px 0;
    cursor: pointer;
`;

export const Line = styled.div`
    border-top: 1px solid #dddfe2;
    position: relative;
    width: 90%;
    margin: 0 auto;
`;

export const IconPost = styled.img`
    width: 25px;
    height: 25px;
    margin-left: 20px;
    padding: 10px 5px 10px 0;
`;

export const Post = styled.div`
    width: 500px;
    background-color: #FFF;
    margin: 20px 0;
    border-radius: 8px;
    box-shadow: 0 0 .1em #898989;
`;

export const BodyLimit = styled.div`
    padding: 10px 0;
`;

export const PostHead = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10px;
    >.infoPost{
        display: flex;
        flex-direction: column;
        margin-left: 5px;
        >.namePost{
            cursor: pointer;
            font-family: inherit;
            font-size: 16px;
            font-weight: 600;
        }
        >.hourPost{
            font-weight: 400;
            color: #7da9e3;
            font-size: 13px;
        }
    }
`;

export const PostComment = styled.div`
    position: relative;
    width: 90%;
    margin: 10px auto;
`;

export const PostImg = styled.img`
    position: relative;
    width: 100%;
    margin-bottom: 10px;
`;

export const PostOption = styled.div`
    position: relative;
    width: 90%;
    margin: 5px auto;
    display: flex;
    justify-content: space-around;
    >a{
        cursor: pointer;
        position: relative;
        width: 33%;
        padding: 10px 0;
        align-items: center;
        text-align: center;
        border-radius: 4px;
        &:hover{
            background-color: #f0f2f5;
        }
    }
`;

export const PostFooter = styled.div`

`;

export const Contacts = styled.div`
    width: 33,33%;
    overflow-y: scroll; 
`;