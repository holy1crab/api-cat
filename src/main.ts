import {format} from 'util';

import {config as envConfig} from 'dotenv';
import * as request from 'superagent';


envConfig();


const appId = process.env.FACEBOOK_APP_ID;
const redirectUri = 'https://www.facebook.com/connect/login_success.html';


async function main(){

    const url = format('https://www.facebook.com/v2.8/dialog/oauth?client_id=%s&redirect_uri=%s', appId, redirectUri);

    console.log(url);

    // const response = <request.Response>await request.get(url);
    // console.log(response.header, response.text);
}


main();