import { Selector, t } from "testcafe";
class LoginPage {
  constructor() {
    this.loginBtn  = Selector('span').withText('Log In');;
    this.usernameInput = Selector('input[formcontrolname="username"]'); 
    this.passwordInput = Selector('input[formcontrolname="password"]');
    this.logonBtn  = Selector('span').withText('Login');;
    this.validateUser=Selector(".mat-menu-trigger")
    this.errorMsg=Selector(".et-bg-red .pr-1")
  }

  async clickLoginBtn(){
    await t
    .click(this.loginBtn)
  }
  async setUsername(username){
    await t
    .typeText(this.usernameInput,username)
  }
  async setPassword(password){
    await t
    .typeText(this.passwordInput, password)
  }

 
  
  async clickLogOnBtn(){
    await t
    .click(this.logonBtn)
  
  }
  async validate(){
    await t
    .click(this.validateUser)
  }
}
export default new LoginPage()