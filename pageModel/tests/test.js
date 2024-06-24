import { ClientFunction } from "testcafe";
import login from "../pages/login";
import dotenv from 'dotenv';

dotenv.config();

const url = 'https://etalente.co.za';

const getUrl =ClientFunction(()=>window.location.href)


fixture `Login to the Application`
.page (url);


test('TC1: Login with Valid Credentials', async t => {
    await t.expect(getUrl()).contains(url)
    await t.expect(login.loginBtn.exists).ok()
    await login.clickLoginBtn()
    await login.setUsername(process.env.USERNAME)
    await login.setPassword(process.env.PASSWORD)
    await login.clickLogOnBtn()
    await t.wait(5000)
    await t.expect(login.validateUser.innerText).contains("Masixole Kondile")
        
});


test('TC2: Login with Invalid Credentials', async t => {
    await t
    .expect(getUrl()).contains(url)
    .expect(login.loginBtn.exists).ok()
    await login.clickLoginBtn()
    await login.setUsername(process.env.INVALIDUSERNAME)
    await login.setPassword(process.env.INVALIDPASSWORD)
    await login.clickLogOnBtn()
    await login.clickLogOnBtn()
    await t.wait(5000)
    await t.expect(login.errorMsg.innerText).contains("Invalid credentials provided")
});


