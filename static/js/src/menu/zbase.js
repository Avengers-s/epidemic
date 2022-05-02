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
