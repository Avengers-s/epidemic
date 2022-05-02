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
