class Menu{
    constructor(root){
        this.root = root;
        this.$menu = $(`
            <div class="web_app_menu">
                <div class="web_app_menu_normal">
                    <div class="web_app_menu_normal_daka">
                        健康打卡
                    </div>

                    <div class="web_app_menu_normal_lixiao">
                        离校审批
                    </div>
                        
                    <div class="web_app_menu_normal_churu">
                        出入信息管理
                    </div>
                </div>

                <div class="web_app_menu_manager">
                    <div class="web_app_menu_manager_daka">
                        打卡查询
                    </div>
                    
                    <div class="web_app_menu_manager_lixiao">
                        离校审批查询
                    </div>

                    <div class="web_app_menu_manager_churu">
                        出入信息查询
                    </div>
                </div>
            </div>
        `);
        this.root.$web_app.append(this.$menu);
        this.$normal = this.$menu.find(".web_app_menu_normal");
        this.$normal_daka = this.$normal.find(".web_app_menu_normal_daka");
        this.$normal_lixiao = this.$normal.find(".web_app_menu_normal_lixiao");
        this.$normal_churu = this.$normal.find(".web_app_menu_normal_churu");

        this.$manager = this.$menu.find(".web_app_menu_manager");
        this.$manager_daka = this.$manager.find(".web_app_menu_manager_daka");
        this.$manager_lixiao = this.$manager.find(".web_app_menu_manager_lixiao");
        this.$manager_churu = this.$manager.find(".web_app_menu_manager_churu");

        this.hide();
        this.start();
    }
    start(){
        this.add_listening_event();
    }

    add_listening_event(){
      this.add_normal_listening_event();
      this.add_manager_listening_event();
    }

    add_normal_listening_event(){
        let outer = this;
        this.$normal_daka.click(function(){
            outer.hide();
            outer.root.normal_daka.show();
        });

        this.$normal_lixiao.click(function(){
        });

        this.$normal_churu.click(function(){
        });
    }
    add_manager_listening_event(){
        let outer = this;
        this.$manager_daka.click(function(){
        });

        this.$manager_lixiao.click(function(){
        });

        this.$manager_churu.click(function(){
        });
    }
    hide(){
        this.$menu.hide();
    }
    show(){
        this.$menu.show();
        if(this.root.settings.character === "normal"){
            this.$normal.show();
            this.$manager.hide();
        }else{
            this.$normal.hide();
            this.$manager.show();
        }
    }
}
class Normal_daka{
    constructor(root){
        this.root = root;
        this.$normal_daka = $(`
      	<div class="web_app_normal_daka">
            <div class="web_app_normal_daka_context">
                    <div class="web_app_normal_daka_title">
                        学生健康打卡
                    </div>
                    <div class="web_app_normal_daka_name">
                        <div class="web_app_normal_daka_item">
                            <input type="text" placeholder="姓名">
                        </div>
                    </div>
                    <div class="web_app_normal_daka_id">
                        <div class="web_app_normal_daka_item">
                            <input type="text" placeholder="学号">
                        </div>
                    </div>                                                                                                                                  
                    <div class="web_app_normal_daka_submit">
                        <div class="web_app_normal_daka_item">
                            <button>提交</button>
                        </div>
                    </div>
                    <div class="web_app_normal_daka_return">
                        <div class="web_app_normal_daka_item">
                            <button>返回</button>
                        </div>
                    </div>
                    </div>
            </div>
 
        `);
        this.root.$web_app.append(this.$normal_daka);

        this.$daka_return = this.$normal_daka.find(".web_app_normal_daka_return button");
        this.start();
        this.hide();
    }

    start(){
        this.add_listening_event();
    }

    add_listening_event(){
        let outer = this;
        this.$daka_return.click(function(){
            outer.hide();
            outer.root.menu.show();
        });
    }
    hide(){
        this.$normal_daka.hide();
    }
    show(){
        this.$normal_daka.show();
    }
}
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
        this.$login_username = this.$login.find(".web_app_settings_username input");
        this.$login_password = this.$login.find(".web_app_settings_password input");
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
class WebApp {
    constructor(id){
        this.id = id;
        this.$web_app = $('#' + id);
        this.settings = new Settings(this);
        this.menu = new Menu(this);
        this.normal_daka = new Normal_daka(this);
    }

}
