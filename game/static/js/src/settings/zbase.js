class Settings{
    constructor(root){
        this.root = root;
        this.character = "";
        this.$settings = $(`
            <div class="web_app_settings">
                <div class="web_app_settings_login">
                    <div class="web_app_settings_login_title">
                        登录
                    </div>
                    <div class="web_app_settings_login_username">
                        <div class="web_app_settings_login_item">
                            <input type="text" placeholder="用户名">
                        </div>
                    </div>
                    <div class="web_app_settings_login_password">
                        <div class="web_app_settings_login_item">
                            <input type="password" placeholder="密码">
                        </div>
                    </div>
                    <div class="web_app_settings_login_submit">
                        <div class="web_app_settings_login_item">
                            <button>登录</button>
                        </div>
                    </div>
                    <div class="web_app_settings_error_message">
                    </div>
                </div>
            </div>
        `);
        this.root.$web_app.append(this.$settings);
        this.$login = this.$settings.find(".web_app_settings_login");
        this.$login_username = this.$login.find(".web_app_settings_login_username input");
        this.$login_password = this.$login.find(".web_app_settings_login_password input");
        this.$login_submit = this.$login.find(".web_app_settings_login_submit button");
        this.$login_error_message = this.$login.find(".web_app_settings_error_message");
        this.start();
    }
    start(){
        this.add_listening_events();
    }
    add_listening_events(){
        let outer = this;
        this.$login_submit.click(function(){
            outer.login();
        });
    }
    login(){
        let outer = this;
        let username = this.$login_username.val();
        let password = this.$login_password.val();
        this.$login_error_message.empty();
        $.ajax({
            url: "https://epidemic.dylolorz.cn/settings/login",
            type: "GET",
            data: {
                username: username,
                password: password,
                
            },
            success:function(resp){
                if(resp.result === "success"){
                    outer.character = resp.character;
                    outer.root.menu.show();
                    outer.hide();
                }else{
                    outer.$login_error_message.html(resp.result);
                }
            }
        });
    }
    hide(){
        this.$settings.hide();
    }
}
