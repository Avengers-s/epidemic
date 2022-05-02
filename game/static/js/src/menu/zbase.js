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
