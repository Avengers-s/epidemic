class Manager_weihu{
    constructor(root){
        this.root = root;
        this.$manager_weihu = $(`
      	<div class="web_app_manager_weihu">
            <div class="web_app_manager_weihu_context">
                    <div class="web_app_manager_weihu_title">
                        疫苗情况查询
                    </div>
                    <div class="web_app_manager_weihu_name">
                        <div class="web_app_manager_weihu_item">
                            <input type="text" placeholder="姓名">
                        </div>
                    </div>
                    <div class="web_app_manager_weihu_id">
                        <div class="web_app_manager_weihu_item">
                            <input type="text" placeholder="学号">
                        </div>
                    </div>                                                                                                                                  
                    <div class="web_app_manager_weihu_submit">
                        <div class="web_app_manager_weihu_item">
                            <button>查询</button>
                        </div>
                    </div>
                    <div class="web_app_manager_weihu_table">
                        <table class="table table-hover table-bordered">
                            <tr>
                                <th>姓名</th>
                                <th>学号</th>
                                <th>班级</th>
                                <th>班级人数</th>
                                <th>接种类型</th>
                                <th>接种时间</th>
                                <th>接种针剂</th>
                            </tr>
                            <tbody class="web_app_manager_weihu_table_content">
                            </tbody>
                        </table>
                    </div>
                    <div class="web_app_manager_weihu_return">
                        <div class="web_app_manager_weihu_item">
                            <button>返回</button>
                        </div>
                    </div>
                    </div>
            </div>
 
        `);
        this.root.$web_app.append(this.$manager_weihu);
        this.$weihu_name = this.$manager_weihu.find(".web_app_manager_weihu_name input");
        this.$weihu_id = this.$manager_weihu.find(".web_app_manager_weihu_id input");
        this.$weihu_query = this.$manager_weihu.find(".web_app_manager_weihu_submit button");
        this.$table_content = this.$manager_weihu.find(".web_app_manager_weihu_table_content");
        this.$weihu_return = this.$manager_weihu.find(".web_app_manager_weihu_return button");
        this.start();
        this.hide();
    }

    start(){
        this.add_listening_event();
    }

    add_listening_event(){
        let outer = this;
        this.$weihu_return.click(function(){
            outer.hide();
            outer.root.menu.show();
        });
        this.$weihu_query.click(function(){
            let id = outer.$weihu_id.val();
            $.ajax({
                url: "https://epidemic.dylolorz.cn/manager/weihu/",
                type: "GET",
                data:{
                    'id': id,
                },
                success:function(resp){
                    if(resp.result==="success"){
                        outer.$table_content.empty();
                        let players = resp.list;
                        for(let i=0;i<players.length;i++){
                            let player = players[i];
                            let obj = "<tr><td>"+resp.username+"</td><td>"+player[0]+"</td><td>"+resp.class+"</td><td>"+resp.num+"</td><td>"+player[3]+"</td><td>"+player[2]+"</td><td>"+player[1]+"</td></tr>";
                                outer.$table_content.append(obj);
                            }

                        }
                },
            });
        });
    }
    hide(){
        this.$weihu_id.val("");
        this.$weihu_name.val("");
        this.$manager_weihu.hide();
        
    }
    show(){
        this.$manager_weihu.show();
    }

}
