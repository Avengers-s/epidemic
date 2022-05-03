class Manager_lixiao{
    constructor(root){
        this.root = root;
        this.$manager_lixiao = $(`
      	<div class="web_app_manager_lixiao">
            <div class="web_app_manager_lixiao_context">
                    <div class="web_app_manager_lixiao_title">
                        离校管理
                    </div>
                    <div class="web_app_manager_lixiao_yijian">
                        <div class="web_app_manager_lixiao_item">
                            <input type="text" placeholder="是否同意">
                        </div>
                    </div>
                    <div class="web_app_manager_lixiao_id">
                        <div class="web_app_manager_lixiao_item">
                            <input type="text" placeholder="申请号">
                        </div>
                    </div>                                                                                                                                  
                    <div class="web_app_manager_lixiao_submit">
                        <div class="web_app_manager_lixiao_item">
                            <button>审批</button>
                        </div>
                    </div>
                    <div class="web_app_manager_lixiao_table">
                        <table class="table table-hover table-bordered">
                            <tr>
                                <th>申请号</th>
                                <th>学号</th>
                                <th>姓名</th>
                                <th>班级</th>
                                <th>离开时间</th>
                                <th>返校时间</th>
                                <th>地点</th>
                            </tr>
                            <tbody class="web_app_manager_lixiao_table_content">
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
        this.$lixiao_yijian = this.$manager_lixiao.find(".web_app_manager_lixiao_yijian input");
        this.$lixiao_id = this.$manager_lixiao.find(".web_app_manager_lixiao_id input");
        this.$lixiao_ac = this.$manager_lixiao.find(".web_app_manager_lixiao_submit button");
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
        this.$lixiao_ac.click(function(){
            let yijian = outer.$lixiao_yijian.val();
            let id = outer.$lixiao_id.val();
            $.ajax({
                url: "https://epidemic.dylolorz.cn/manager/lixiao_update/",
                type: "GET",
                data:{
                    'id': id,
                    'yijian': yijian,
                },
                success:function(resp){
                    if(resp.result === "success"){
                        outer.show_table();
                    }
                }
            });
        });
    }
    hide(){
        this.$lixiao_id.val("");
        this.$lixiao_yijian.val("");
        this.$manager_lixiao.hide();
        
    }
    show(){
        this.$manager_lixiao.show();
        this.show_table();
    }

    show_table(){
        this.$table_content.empty();
		let outer=this;                                                                                                                                     
        $.ajax({
            url: "https://epidemic.dylolorz.cn/manager/lixiao_query/",
            type: "GET",
            data: {
            },
            success: function(resp){
               if(resp.result==="success"){
                    let players = resp.list;
                    for(let i=0;i<players.length;i++){
                        let player = players[i];
                        let obj = "<tr><td>"+player[0]+"</td><td>"+player[2]+"</td><td>"+player[3]+"</td><td>"+player[4]+"</td><td>"+player[5]+"</td><td>"+player[6]+"</td><td>"+player[7]+"</td></tr>";
                        outer.$table_content.append(obj);
                    }

                }
            },
        });
    }
}
