class Normal_daka{
    constructor(root){
        this.root = root;
        this.$normal_daka = $(`
            <div class="web_app_menu_normal_daka">
                <div>学生打卡界面</div>
                <div class="web_app_menu_normal_daka_return">返回</div>
            </div>
           
        `);
        this.root.$web_app.append(this.$normal_daka);
        this.start();
        this.$daka_return = this.$normal_daka.find(".web_app_menu_normal_daka_return");
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
