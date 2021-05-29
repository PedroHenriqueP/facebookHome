import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    height: 60px;
    background-color: #FFF;
    position: fixed;
    top: 0;
    display: flex;
    z-index: 2;
    box-shadow: 0 0 .1em #898989;
`;

export const Limit = styled.div`
    position: relative;
    width: 100%;
    margin: auto 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const FaceMore = styled.div`
    display: flex;
    align-items: center;
    >input{
        background-color: #f0f2f5;
        border-radius: 30px;
        border: 1px solid #dddfe2;
        padding: 10px 80px 10px 16px;
        font-size: 15px;
    }
`;

export const Options = styled.div`
    display: flex;
    >.iconOptions{

    }
`;

export const More = styled.div`
    display: flex; 
        align-items: center;
        background-color: #f0f2f5;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        margin-left: 5px;
        cursor: pointer;
        &:hover{
            background-color: #e3e3e3;
    }
`;

export const IconOptions = styled.img`
    width: 20px;
    border-radius: 50%;
    margin: auto;
`;

export const ProfileFace = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 50px;
    &:hover{
        background-color: #f0f2f5;
    }
    >h2{
        font-family: inherit;
        font-size: 15px;
        margin: 0 8px;
    }
`;

export const Profile = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    padding: 3px 0 3px 3px;
    cursor: pointer;
`;

export const Icon = styled.img`
    width: 40px;
    margin-right: 10px;
    cursor: pointer;
`;