# Simple Flask - React admin

간단한 어드민 페이지 개발 중입니다.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting Started
- key, url 정보 입력해둘 파일 생성

    - flask01 폴더(백엔드 서버)

        - .env

            ```txt
            JWT_SECRET_KEY="JSK"
            FLASK_APP_KEY="FAK"
            FLASK_APP=app.py
            FLASK_ENV=development
            ```
        
        - config.py

            ```python
            db = {
                'user'     : 'username',
                'password' : 'pw',
                'host'     : 'host',
                'port'     : '3306',
                'database' : 'dbname',
            }

            DB_URL = f"mysql+pymysql://{db['user']}:{db['password']}@{db['host']}:{db['port']}/{db['database']}?charset=utf8"

            ```
    - src/components/pages/Channels/Channelinfo.js

        ```javascript
        const playbackUrl = "";
        const arn = "";
        const json = {
            playbackUrl: playbackUrl,
            arn: arn
        };
        export default json;
        ```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

