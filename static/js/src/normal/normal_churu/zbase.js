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
