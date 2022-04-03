import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #8c52e5;
    width: 100%;
    height: 100vh;
    .card {
        display: grid;
        background-color: #f9f9f9;
        max-width: 300px;
        border-radius: 20px;
        padding: 20px;
        h5 {
            font-family: "Roboto", sans-serif;
            text-align: center;
            font-size: 22px;
            color: #8c52e5;
            margin-bottom: 10px;
        }
        form {
            input {
                width: 100%;
                height: 22px;
                text-align: center;
                margin-bottom: 10px;
                padding: 3px 0;
                border-radius: 22px;
                border: 1px solid #e2e2e2;
            }
            input[type="submit"] {
                cursor: pointer;
                border: none;
                background-color: #68de5a;
                padding: 5px;
                border-radius: 12px;
                transition: 600ms;
                &:hover {
                    background-color: #8c52e5;
                }
            }
        }
    }
`