class Manager_daka{
    constructor(root){
        this.root = root;
        this.$manager_daka = $(`
      	<div class="web_app_manager_daka">
            <div class="web_app_manager_daka_context">
                    <div class="web_app_manager_daka_title">
                        学生健康打卡
                    </div>
                    <div class="web_app_manager_daka_name">
                        <div class="web_app_manager_daka_item">
                            <input type="text" placeholder="姓名">
                        </div>
                    </div>
                    <div class="web_app_manager_daka_id">
                        <div class="web_app_manager_daka_item">
                            <input type="text" placeholder="学号">
                        </div>
                    </div>                                                                                                                                  
                    <div class="web_app_manager_daka_submit">
                        <div class="web_app_manager_daka_item">
                            <button>提交</button>
                        </div>
                    </div>
                    <div class="web_app_manager_daka_table">
                        <table class="table table-hover table-bordered">
                            <tr>
                                <th>姓名</th>
                                <th>学号</th>
                            </tr>
                            <tbody class="web_app_manager_daka_table_content">
                                <tr>
                                    <td>111</td>
                                    <td>222</td>
                                </tr>
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
    }
}
