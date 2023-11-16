import styled from "styled-components";

export const WeatherContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    margin: 100px auto;
    gap: 10px;
`;

export const InputBox = styled.input`
    display: flex;
    flex-direction: column;
    width: 180px;
    font-size: 16px;
    border-radius: 15px;
    padding: 15px 15px;
    border: 2px solid #000000;
    margin-bottom: 50px;
`;

export const WeatherInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 190px;
    height: 160px;
    border-radius: 10px;
    padding: 5px 10px;
    border: 1px solid #000000;

    .city {
        font-size: 25px;
        text-align: left;
        padding: 5px 3px;
        padding-top: 10px;
    }
    
    .temperature {
        font-size: 50px;
        text-align: left;
        padding: 5px 3px;
    }

    .weatherState {
        font-size: 18px;
        text-align: right;
        padding: 5px 3px;
    }
`