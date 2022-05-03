class Manager_geli{
    constructor(root){
        this.root = root;
        this.$manager_geli = $(`
      	<div class="web_app_manager_geli">
            <div class="web_app_manager_geli_context">
                    <div class="web_app_manager_geli_title">
                        隔离信息维护
                    </div>
                    <div class="web_app_manager_geli_kind">
                        <div class="web_app_manager_geli_item">
                            <input type="text" placeholder="类型:1.插入 2.删除">
                        </div>
                    </div>
                    <div class="web_app_manager_geli_id">
                        <div class="web_app_manager_geli_item">
                            <input type="text" placeholder="学号">
                        </div>
                    </div>                                                                                                                                  
                    <div class="web_app_manager_geli_submit">
                        <div class="web_app_manager_geli_item">
                            <button>维护</button>
                        </div>
                    </div>
                    <div class="web_app_manager_geli_table">
                        <table class="table table-hover table-bordered">
                            <tr>
                                <th>姓名</th>
                                <th>学号</th>
                                <th>性别</th>
                                <th>班级</th>
                                <th>隔离时间</th>
                                <th>隔离楼号</th>
                                <th>隔离房间</th>
                            </tr>
                            <tbody class="web_app_manager_geli_table_content">
                            </tbody>
                        </table>
                    </div>
                    <div class="web_app_manager_geli_return">
                        <div class="web_app_manager_geli_item">
                            <button>返回</button>
                        </div>
                    </div>
                    </div>
            </div>
 
        `);
        this.root.$web_app.append(this.$manager_geli);
        this.$geli_kind = this.$manager_geli.find(".web_app_manager_geli_kind input");
        this.$geli_id = this.$manager_geli.find(".web_app_manager_geli_id input");
        this.$geli_query = this.$manager_geli.find(".web_app_manager_geli_submit button");
        this.$table_content = this.$manager_geli.find(".web_app_manager_geli_table_content");
        this.$geli_return = this.$manager_geli.find(".web_app_manager_geli_return button");
        this.start();
        this.hide();
    }

    start(){
        this.add_listening_event();
    }

    add_listening_event(){
        let outer = this;
        this.$geli_return.click(function(){
            outer.hide();
            outer.root.menu.show();
        });
        this.$geli_query.click(function(){
            let id = outer.$geli_id.val();
            let kind = outer.$geli_kind.val();
            let url = "https://epidemic.dylolorz.cn/manager/geli_insert/";
            if(kind === "2")url = "https://epidemic.dylolorz.cn/manager/geli_delete/";
            outer.update_table(url,id);
            outer.show_table();

            
        });
    }
    hide(){
        this.$geli_id.val("");
        this.$geli_kind.val("");
        this.$manager_geli.hide();
        
    }
    show(){
        this.$manager_geli.show();
        this.show_table();
    }

    update_table(url,id){
        let outer = this;
        $.ajax({
            url: url,
            type: "GET",
            data:{
                id: id,
            },
            success:function(resp){
                if(resp.result==="success"){
                    outer.show_table();
                }
            }
        });
    }
    show_table(){
        let outer = this;
        $.ajax({
                url: "https://epidemic.dylolorz.cn/manager/geli_query/",
                type: "GET",
                data:{
                },
                success:function(resp){
                    if(resp.result==="success"){
                        outer.$table_content.empty();
                        let players = resp.list;
                        for(let i=0;i<players.length;i++){
                            let player = players[i];
                            let obj = "<tr><td>"+player[1]+"</td><td>"+player[0]+"</td><td>"+player[2]+"</td><td>"+player[3]+"</td><td>"+player[6]+"</td><td>"+player[4]+"</td><td>"+player[5]+"</td></tr>";
                                outer.$table_content.append(obj);
                            }

                        }
                },
            });
    }
}
