class Manager_daka{
    constructor(root){
        this.root = root;
        this.$manager_daka = $(`
      	<div class="web_app_manager_daka">
            <div class="web_app_manager_daka_context">
                    <div class="web_app_manager_daka_title">
                        异常打卡查询
                    </div>
                    <div class="web_app_manager_daka_table">
                        <table class="table table-hover table-bordered">
                            <tr>
                                <th>学号</th>
                                <th>姓名</th>
                                <th>班级</th>
                                <th>体温</th>
                            </tr>
                            <tbody class="web_app_manager_daka_table_content">
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
        this.$table_content.empty();
        let outer=this;
        $.ajax({
            url: "https://epidemic.dylolorz.cn/manager/daka",
            type: "GET",
            data: {
                
            },
            success: function(resp){
               if(resp.result==="success"){                                                                                                                
                    let players = resp.list;
                    for(let i=0;i<players.length;i++){
                        let player = players[i];
                        if(player.length === 4){
                            let obj = "<tr><td>"+player[0]+"</td><td>"+player[1]+"</td><td>"+player[2]+"</td><td>"+player[3]+"</td><tr>";
                            outer.$table_content.append(obj);
                        }else{
                            let obj = "<tr><td>"+player[0]+"</td><td>"+player[1]+"</td><td>"+player[2]+"</td><td>"+"未打卡"+"</td><tr>";
                            outer.$table_content.append(obj);
                        }
                    }
                }
 
            },
        });
    }
}
