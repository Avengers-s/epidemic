class Manager_churu{
    constructor(root){
        this.root = root;
        this.$manager_churu = $(`
      	<div class="web_app_manager_churu">
            <div class="web_app_manager_churu_context">
                    <div class="web_app_manager_churu_title">
                        学生出入管理
                    </div>
                    <div class="web_app_manager_churu_name">
                        <div class="web_app_manager_churu_item">
                            <input type="text" placeholder="姓名">
                        </div>
                    </div>
                    <div class="web_app_manager_churu_id">
                        <div class="web_app_manager_churu_item">
                            <input type="text" placeholder="学号">
                        </div>
                    </div>                                                                                                                                  
                    <div class="web_app_manager_churu_submit">
                        <div class="web_app_manager_churu_item">
                            <button>提交</button>
                        </div>
                    </div>
                    <div class="web_app_manager_churu_table">
                        <table class="table table-hover table-bordered">
                            <tr>
                                <th>姓名</th>
                                <th>学号</th>
                            </tr>
                            <tbody class="web_app_manager_churu_table_content">
                                <tr>
                                    <td>111</td>
                                    <td>222</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="web_app_manager_churu_return">
                        <div class="web_app_manager_churu_item">
                            <button>返回</button>
                        </div>
                    </div>
                    </div>
            </div>
 
        `);
        this.root.$web_app.append(this.$manager_churu);

        this.$table_content = this.$manager_churu.find(".web_app_manager_churu_table_content");
        this.$churu_return = this.$manager_churu.find(".web_app_manager_churu_return button");
        this.start();
        this.hide();
    }

    start(){
        this.add_listening_event();
    }

    add_listening_event(){
        let outer = this;
        this.$churu_return.click(function(){
            outer.hide();
            outer.root.menu.show();
        });
    }
    hide(){
        this.$manager_churu.hide();
    }
    show(){
        this.$manager_churu.show();
    }
}
class Manager_daka{
    constructor(root){
        this.root = root;
        this.$manager_daka = $(`
      	<div class="web_app_manager_daka">
            <div class="web_app_manager_daka_context">
                    <div class="web_app_manager_daka_title">
                        异常打卡查询
                    </div>
                    <div class="web_app_manager_daka_table">
                        <table class="table table-hover table-bordered">
                            <tr>
                                <th>学号</th>
                                <th>姓名</th>
                                <th>班级</th>
                                <th>体温</th>
                            </tr>
                            <tbody class="web_app_manager_daka_table_content">
                            </tbody>
                        </table>
                    </div>
                    <div class="web_app_manager_daka_return">
                        <div class="web_app_manager_daka_item">
                            <button>返回</button>
                        </div>
                    </div>
                    </div>
            </div>
 
        `);
        this.root.$web_app.append(this.$manager_daka);

        this.$table_content = this.$manager_daka.find(".web_app_manager_daka_table_content");
        this.$daka_return = this.$manager_daka.find(".web_app_manager_daka_return button");
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
        this.$manager_daka.hide();
    }
    show(){
        this.$manager_daka.show();
        this.$table_content.empty();
        let outer=this;
        $.ajax({
            url: "https://epidemic.dylolorz.cn/manager/daka",
            type: "GET",
            data: {
                
            },
            success: function(resp){
               if(resp.result==="success"){                                                                                                                
                    let players = resp.list;
                    for(let i=0;i<players.length;i++){
                        let player = players[i];
                        if(player.length === 4){
                            let obj = "<tr><td>"+player[0]+"</td><td>"+player[1]+"</td><td>"+player[2]+"</td><td>"+player[3]+"</td><tr>";
                            outer.$table_content.append(obj);
                        }else{
                            let obj = "<tr><td>"+player[0]+"</td><td>"+player[1]+"</td><td>"+player[2]+"</td><td>"+"未打卡"+"</td><tr>";
                            outer.$table_content.append(obj);
                        }
                    }
                }
 
            },
        });
    }
}
class Manager_lixiao{
    constructor(root){
        this.root = root;
        this.$manager_lixiao = $(`
      	<div class="web_app_manager_lixiao">
            <div class="web_app_manager_lixiao_context">
                    <div class="web_app_manager_lixiao_title">
                        离校管理
                    </div>
                    <div class="web_app_manager_lixiao_name">
                        <div class="web_app_manager_lixiao_item">
                            <input type="text" placeholder="姓名">
                        </div>
                    </div>
                    <div class="web_app_manager_lixiao_id">
                        <div class="web_app_manager_lixiao_item">
                            <input type="text" placeholder="学号">
                        </div>
                    </div>                                                                                                                                  
                    <div class="web_app_manager_lixiao_submit">
                        <div class="web_app_manager_lixiao_item">
                            <button>提交</button>
                        </div>
                    </div>
                    <div class="web_app_manager_lixiao_table">
                        <table class="table table-hover table-bordered">
                            <tr>
                                <th>姓名</th>
                                <th>学号</th>
                            </tr>
                            <tbody class="web_app_manager_lixiao_table_content">
                                <tr>
                                    <td>111</td>
                                    <td>222</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="web_app_manager_lixiao_return">
                        <div class="web_app_manager_lixiao_item">
                            <button>返回</button>
                        </div>
                    </div>
                    </div>
            </div>
 
        `);
        this.root.$web_app.append(this.$manager_lixiao);

        this.$table_content = this.$manager_lixiao.find(".web_app_manager_lixiao_table_content");
        this.$lixiao_return = this.$manager_lixiao.find(".web_app_manager_lixiao_return button");
        this.start();
        this.hide();
    }

    start(){
        this.add_listening_event();
    }

    add_listening_event(){
        let outer = this;
        this.$lixiao_return.click(function(){
            outer.hide();
            outer.root.menu.show();
        });
    }
    hide(){
        this.$manager_lixiao.hide();
    }
    show(){
        this.$manager_lixiao.show();
    }
}
class Menu{
    constructor(root){
        this.root = root;
        this.$menu = $(`
            <div class="web_app_menu">
                <div class="web_app_menu_normal">
                    <div class="web_app_menu_normal_title">
                        选项
                    </div>
                    <div class="web_app_menu_normal_daka">
                        <div class="web_app_menu_normal_item">
                            <button>健康打卡</button>
                        </div>
                    </div>

                    <div class="web_app_menu_normal_lixiao">
                        <div class="web_app_menu_normal_item">
                            <button>离校审批</button>
                        </div>
                    </div>
                        
                    <div class="web_app_menu_normal_churu">
                        <div class="web_app_menu_normal_item">
                            <button>出入信息管理</button>
                        </div>
                    </div>
                </div>

                <div class="web_app_menu_manager">
                    <div class="web_app_menu_manager_title">
                        选项
                    </div>
                    <div class="web_app_menu_manager_daka">
                        <div class="web_app_menu_normal_item">
                            <button>打卡查询</button>
                        </div>
                    </div>
                    
                    <div class="web_app_menu_manager_lixiao">
                        <div class="web_app_menu_normal_item">
                            <button>离校审批查询</button>
                        </div>
                    </div>

                    <div class="web_app_menu_manager_churu">
                        <div class="web_app_menu_normal_item">
                            <button>出入查询</button>
                        </div>
                    </div>
                </div>
            </div>
        `);
        this.root.$web_app.append(this.$menu);
        this.$normal = this.$menu.find(".web_app_menu_normal");
        this.$normal_daka = this.$normal.find(".web_app_menu_normal_daka button");
        this.$normal_lixiao = this.$normal.find(".web_app_menu_normal_lixiao button");
        this.$normal_churu = this.$normal.find(".web_app_menu_normal_churu button");

        this.$manager = this.$menu.find(".web_app_menu_manager");
        this.$manager_daka = this.$manager.find(".web_app_menu_manager_daka button");
        this.$manager_lixiao = this.$manager.find(".web_app_menu_manager_lixiao button");
        this.$manager_churu = this.$manager.find(".web_app_menu_manager_churu button");

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
            outer.hide();
            outer.root.normal_lixiao.show();
        });

        this.$normal_churu.click(function(){
            outer.hide();
            outer.root.normal_churu.show();
        });
    }
    add_manager_listening_event(){
        let outer = this;
        this.$manager_daka.click(function(){
            outer.hide();
            outer.root.manager_daka.show();
        });

        this.$manager_lixiao.click(function(){
            outer.hide();
            outer.root.manager_lixiao.show();
        });

        this.$manager_churu.click(function(){
            outer.hide();
            outer.root.manager_churu.show();
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
class Normal_churu{
    constructor(root){
        this.root = root;
        this.$normal_churu = $(`
      	<div class="web_app_normal_churu">
            <div class="web_app_normal_churu_context">
                    <div class="web_app_normal_churu_title">
                        出入信息填报
                    </div>
                    <div class="web_app_normal_churu_name">
                        <div class="web_app_normal_churu_item">
                            <input type="text" placeholder="姓名">
                        </div>
                    </div>
                    <div class="web_app_normal_churu_id">
                        <div class="web_app_normal_churu_item">
                            <input type="text" placeholder="学号">
                        </div>
                    </div>                                                                                                                                  
                    <div class="web_app_normal_churu_submit">
                        <div class="web_app_normal_churu_item">
                            <button>提交</button>
                        </div>
                    </div>
                    <div class="web_app_normal_churu_return">
                        <div class="web_app_normal_churu_item">
                            <button>返回</button>
                        </div>
                    </div>
                    </div>
            </div>
 
        `);
        this.root.$web_app.append(this.$normal_churu);

        this.$churu_return = this.$normal_churu.find(".web_app_normal_churu_return button");
        this.start();
        this.hide();
    }

    start(){
        this.add_listening_event();
    }

    add_listening_event(){
        let outer = this;
        this.$churu_return.click(function(){
            outer.hide();
            outer.root.menu.show();
        });
    }
    hide(){
        this.$normal_churu.hide();
    }
    show(){
        this.$normal_churu.show();
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
                            <input type="text" placeholder="姓名" readonly>
                        </div>
                    </div>
                    <div class="web_app_normal_daka_id">
                        <div class="web_app_normal_daka_item">
                            <input type="text" placeholder="学号" readonly>
                        </div>
                    </div>

                    <div class="web_app_normal_daka_tiwen">
                        <div class="web_app_normal_daka_item">
                            <input type="text" placeholder="体温">
                        </div>
                    </div>
                    
                    <div class="web_app_normal_daka_didian">
                        <div class="web_app_normal_daka_item">
                            <input type="text" placeholder="地点">
                        </div>
                    </div>

                    <div class="web_app_normal_daka_zaixiao">
                            <input type="radio" name="zaixiao" value="yes" class="web_app_normal_daka_radio_1" checked="checked">在校
                            <input type="radio" name="zaixiao" value="no" class="web_app_normal_daka_radio_2">不在校
                            
                    </div>

                    <div class="web_app_normal_daka_error_message">
                    
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
        this.$daka_name = this.$normal_daka.find(".web_app_normal_daka_name input");
        this.$daka_tiwen = this.$normal_daka.find(".web_app_normal_daka_tiwen input");
        this.$daka_didian = this.$normal_daka.find(".web_app_normal_daka_didian input");
        this.$daka_submit = this.$normal_daka.find(".web_app_normal_daka_submit button");
        this.$daka_xuehao = this.$normal_daka.find(".web_app_normal_daka_id input");
        this.$daka_return = this.$normal_daka.find(".web_app_normal_daka_return button");
        this.$daka_radio_1 = this.$normal_daka.find(".web_app_nromal_daka_radio_1");
        this.$daka_radio_2 = this.$normal_daka.find(".web_app_normal_daka_radio_2");
        this.$error_message = this.$normal_daka.find(".web_app_normal_daka_error_message");
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
        this.$daka_submit.click(function(){
            let tiwen = outer.$daka_tiwen.val();
            let didian = outer.$daka_didian.val();
            let zaixiao = $('input:radio:checked').val();
            if(typeof tiwen==="undefined" || tiwen === null || tiwen.trim()=== "" || typeof didian==="undefined" || didian === null || didian.trim()===""){
                outer.$error_message.html("信息未填写完整");
            }else{
                $.ajax({
                    url:"https://epidemic.dylolorz.cn/normal/daka",
                    type:"GET",
                    data:{
                        "id":outer.root.settings.xuehao,
                        "tiwen":tiwen,
                        "didian":didian,
                        "zaixiao":zaixiao,
                    },
                    success:function(resp){
                        if(resp.result === "success"){
                            outer.$error_message.html("提交成功!");
                        }else{
                            outer.$error_message.html("提交失败");
                        }
                    },
                });
            }
        });
    }
    hide(){
        this.$normal_daka.hide();
        this.$error_message.empty();
    }
    show(){
        this.$normal_daka.show();
        this.$daka_xuehao.val(this.root.settings.xuehao);
        let outer = this;
        $.ajax({
            url:"https://epidemic.dylolorz.cn/getinfo/getname",
            type:"GET",
            data:{
                username: outer.root.settings.xuehao,
            },
            success:function(resp){
                if(resp.result === "success"){
                    outer.$daka_name.val(resp.username);
                }
            },
        });
    }
}
class Normal_lixiao{
    constructor(root){
        this.root = root;
        this.$normal_lixiao = $(`
      	<div class="web_app_normal_lixiao">
            <div class="web_app_normal_lixiao_context">
                    <div class="web_app_normal_lixiao_title">
                        离校申请
                    </div>
                    <div class="web_app_normal_lixiao_name">
                        <div class="web_app_normal_lixiao_item">
                            <input type="text" placeholder="姓名">
                        </div>
                    </div>
                    <div class="web_app_normal_lixiao_id">
                        <div class="web_app_normal_lixiao_item">
                            <input type="text" placeholder="学号">
                        </div>
                    </div>                                                                                                                                  
                    <div class="web_app_normal_lixiao_submit">
                        <div class="web_app_normal_lixiao_item">
                            <button>提交</button>
                        </div>
                    </div>
                    <div class="web_app_normal_lixiao_return">
                        <div class="web_app_normal_lixiao_item">
                            <button>返回</button>
                        </div>
                    </div>
                    </div>
            </div>
 
        `);
        this.root.$web_app.append(this.$normal_lixiao);

        this.$lixiao_return = this.$normal_lixiao.find(".web_app_normal_lixiao_return button");
        this.start();
        this.hide();
    }

    start(){
        this.add_listening_event();
    }

    add_listening_event(){
        let outer = this;
        this.$lixiao_return.click(function(){
            outer.hide();
            outer.root.menu.show();
        });
    }
    hide(){
        this.$normal_lixiao.hide();
    }
    show(){
        this.$normal_lixiao.show();
    }
}
class Settings{
    constructor(root){
        this.root = root;
        this.character = "";
        this.xuehao="000";
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
                    outer.xuehao = username;
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
        this.normal_lixiao = new Normal_lixiao(this);
        this.normal_churu = new Normal_churu(this);

        this.manager_daka = new Manager_daka(this);
        this.manager_lixiao = new Manager_lixiao(this);
        this.manager_churu = new Manager_churu(this);
    }

}
