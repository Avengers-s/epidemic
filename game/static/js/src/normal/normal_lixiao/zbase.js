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
