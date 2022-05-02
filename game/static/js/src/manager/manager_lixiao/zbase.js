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
