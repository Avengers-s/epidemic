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
class Menu{
    constructor(root){
        this.root = root;
        this.$menu = $(`
            <div class="web_app_menu">
                <div class="web_app_menu_normal">
                    <div class="web_app_menu_normal_title">
                        选项
                    </div>
                    <div class="web_app_menu_normal_daka">
                        <div class="web_app_menu_normal_item">
                            <button>健康打卡</button>
                        </div>
                    </div>

                    <div class="web_app_menu_normal_lixiao">
                        <div class="web_app_menu_normal_item">
                            <button>离校审批</button>
                        </div>
                    </div>
                        
                    <div class="web_app_menu_normal_weihu">
                        <div class="web_app_menu_normal_item">
                            <button>疫苗信息维护</button>
                        </div>
                    </div>
                </div>

                <div class="web_app_menu_manager">
                    <div class="web_app_menu_manager_title">
                        选项
                    </div>
                    <div class="web_app_menu_manager_daka">
                        <div class="web_app_menu_normal_item">
                            <button>打卡查询</button>
                        </div>
                    </div>
                    
                    <div class="web_app_menu_manager_lixiao">
                        <div class="web_app_menu_normal_item">
                            <button>离校审批查询</button>
                        </div>
                    </div>

                    <div class="web_app_menu_manager_weihu">
                        <div class="web_app_menu_normal_item">
                            <button>疫苗信息查询</button>
                        </div>
                    </div>
                    <div class="web_app_menu_manager_geli">
                        <div class="web_app_menu_normal_item">
                            <button>隔离信息维护</button>
                        </div>
                    </div>
                </div>
            </div>
        `);
        this.root.$web_app.append(this.$menu);
        this.$normal = this.$menu.find(".web_app_menu_normal");
        this.$normal_daka = this.$normal.find(".web_app_menu_normal_daka button");
        this.$normal_lixiao = this.$normal.find(".web_app_menu_normal_lixiao button");
        this.$normal_weihu = this.$normal.find(".web_app_menu_normal_weihu button");

        this.$manager = this.$menu.find(".web_app_menu_manager");
        this.$manager_daka = this.$manager.find(".web_app_menu_manager_daka button");
        this.$manager_lixiao = this.$manager.find(".web_app_menu_manager_lixiao button");
        this.$manager_weihu = this.$manager.find(".web_app_menu_manager_weihu button");
        this.$manager_geli = this.$manager.find(".web_app_menu_manager_geli");
        this.hide();
        this.start();
    }
    start(){
        this.add_listening_event();
    }

    add_listening_event(){
      this.add_normal_listening_event();
      this.add_manager_listening_event();
    }

    add_normal_listening_event(){
        let outer = this;
        this.$normal_daka.click(function(){
            outer.hide();
            outer.root.normal_daka.show();
        });

        this.$normal_lixiao.click(function(){
            outer.hide();
            outer.root.normal_lixiao.show();
        });

        this.$normal_weihu.click(function(){
            outer.hide();
            outer.root.normal_weihu.show();
        });
    }
    add_manager_listening_event(){
        let outer = this;
        this.$manager_daka.click(function(){
            outer.hide();
            outer.root.manager_daka.show();
        });

        this.$manager_lixiao.click(function(){
            outer.hide();
            outer.root.manager_lixiao.show();
        });

        this.$manager_weihu.click(function(){
            outer.hide();
            outer.root.manager_weihu.show();
        });
        this.$manager_geli.click(function(){
            outer.hide();
            outer.root.manager_geli.show();
        });
    }
    hide(){
        this.$menu.hide();
    }
    show(){
        this.$menu.show();
        if(this.root.settings.character === "normal"){
            this.$normal.show();
            this.$manager.hide();
        }else{
            this.$normal.hide();
            this.$manager.show();
        }
    }
}
class Normal_daka{
    constructor(root){
        this.root = root;
        this.$normal_daka = $(`
      	<div class="web_app_normal_daka">
            <div class="web_app_normal_daka_context">
                    <div class="web_app_normal_daka_title">
                        学生健康打卡
                    </div>
                    <div class="web_app_normal_daka_name">
                        <div class="web_app_normal_daka_item">
                            <input type="text" placeholder="姓名" readonly>
                        </div>
                    </div>
                    <div class="web_app_normal_daka_id">
                        <div class="web_app_normal_daka_item">
                            <input type="text" placeholder="学号" readonly>
                        </div>
                    </div>

                    <div class="web_app_normal_daka_tiwen">
                        <div class="web_app_normal_daka_item">
                            <input type="text" placeholder="体温">
                        </div>
                    </div>
                    
                    <div class="web_app_normal_daka_didian">
                        <div class="web_app_normal_daka_item">
                            <input type="text" placeholder="地点">
                        </div>
                    </div>

                    <div class="web_app_normal_daka_zaixiao">
                            <input type="radio" name="zaixiao" value="yes" class="web_app_normal_daka_radio_1" checked="checked">在校
                            <input type="radio" name="zaixiao" value="no" class="web_app_normal_daka_radio_2">不在校
                            
                    </div>

                    <div class="web_app_normal_daka_error_message">
                    
                             </div>
                    <div class="web_app_normal_daka_submit">
                        <div class="web_app_normal_daka_item">
                            <button>提交</button>
                        </div>
                    </div>
                    <div class="web_app_normal_daka_return">
                        <div class="web_app_normal_daka_item">
                            <button>返回</button>
                        </div>
                    </div>
                    </div>
            </div>
 
        `);
        this.root.$web_app.append(this.$normal_daka);
        this.$daka_name = this.$normal_daka.find(".web_app_normal_daka_name input");
        this.$daka_tiwen = this.$normal_daka.find(".web_app_normal_daka_tiwen input");
        this.$daka_didian = this.$normal_daka.find(".web_app_normal_daka_didian input");
        this.$daka_submit = this.$normal_daka.find(".web_app_normal_daka_submit button");
        this.$daka_xuehao = this.$normal_daka.find(".web_app_normal_daka_id input");
        this.$daka_return = this.$normal_daka.find(".web_app_normal_daka_return button");
        this.$daka_radio_1 = this.$normal_daka.find(".web_app_nromal_daka_radio_1");
        this.$daka_radio_2 = this.$normal_daka.find(".web_app_normal_daka_radio_2");
        this.$error_message = this.$normal_daka.find(".web_app_normal_daka_error_message");
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
        this.$daka_submit.click(function(){
            let tiwen = outer.$daka_tiwen.val();
            let didian = outer.$daka_didian.val();
            let zaixiao = $('input:radio:checked').val();
            if(typeof tiwen==="undefined" || tiwen === null || tiwen.trim()=== "" || typeof didian==="undefined" || didian === null || didian.trim()===""){
                outer.$error_message.html("信息未填写完整");
            }else{
                $.ajax({
                    url:"https://epidemic.dylolorz.cn/normal/daka",
                    type:"GET",
                    data:{
                        "id":outer.root.settings.xuehao,
                        "tiwen":tiwen,
                        "didian":didian,
                        "zaixiao":zaixiao,
                    },
                    success:function(resp){
                        if(resp.result === "success"){
                            outer.$error_message.html("提交成功!");
                        }else{
                            outer.$error_message.html("提交失败");
                        }
                    },
                });
            }
        });
    }
    hide(){
        this.$normal_daka.hide();
        this.$error_message.empty();
        this.$daka_tiwen.val("");
        this.$daka_didian.val("");
    }
    show(){
        this.$normal_daka.show();
        this.$daka_xuehao.val(this.root.settings.xuehao);
        let outer = this;
        $.ajax({
            url:"https://epidemic.dylolorz.cn/getinfo/getname",
            type:"GET",
            data:{
                username: outer.root.settings.xuehao,
            },
            success:function(resp){
                if(resp.result === "success"){
                    outer.$daka_name.val(resp.username);
                }
            },
        });
    }
}
class Normal_lixiao{
    constructor(root){
        this.root = root;
        this.$normal_lixiao = $(`
      	<div class="web_app_normal_lixiao">
            <div class="web_app_normal_lixiao_context">
                    <div class="web_app_normal_lixiao_title">
                        学生离校申请
                    </div>
                    <div class="web_app_normal_lixiao_name">
                        <div class="web_app_normal_lixiao_item">
                            <input type="text" placeholder="姓名" readonly>
                        </div>
                    </div>
                    <div class="web_app_normal_lixiao_id">
                        <div class="web_app_normal_lixiao_item">
                            <input type="text" placeholder="学号" readonly>
                        </div>
                    </div>

                    <div class="web_app_normal_lixiao_time1">
                        <div class="web_app_normal_lixiao_item">
                            <input type="text" placeholder="离开时间">
                        </div>
                    </div>

                     <div class="web_app_normal_lixiao_time2">
                        <div class="web_app_normal_lixiao_item">
                            <input type="text" placeholder="返回时间">
                        </div>
                    </div>

                    <div class="web_app_normal_lixiao_didian">
                        <div class="web_app_normal_lixiao_item">
                            <input type="text" placeholder="地点">
                        </div>
                    </div>


                    <div class="web_app_normal_lixiao_error_message">
                    
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
        this.$lixiao_name = this.$normal_lixiao.find(".web_app_normal_lixiao_name input");
        this.$lixiao_time1 = this.$normal_lixiao.find(".web_app_normal_lixiao_time1 input");
        this.$lixiao_time2 = this.$normal_lixiao.find(".web_app_normal_lixiao_time2 input");
        this.$lixiao_didian = this.$normal_lixiao.find(".web_app_normal_lixiao_didian input");
        this.$lixiao_submit = this.$normal_lixiao.find(".web_app_normal_lixiao_submit button");
        this.$lixiao_xuehao = this.$normal_lixiao.find(".web_app_normal_lixiao_id input");
        this.$lixiao_return = this.$normal_lixiao.find(".web_app_normal_lixiao_return button");
        this.$error_message = this.$normal_lixiao.find(".web_app_normal_lixiao_error_message");
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
        this.$lixiao_submit.click(function(){
            let time1 = outer.$lixiao_time1.val();
            let time2 = outer.$lixiao_time2.val();
            let didian = outer.$lixiao_didian.val();
            if(time1 === "" || time2=== "" || didian===""){
                outer.$error_message.html("信息未填写完整");
            }else{
                $.ajax({
                    url:"https://epidemic.dylolorz.cn/normal/lixiao",
                    type:"GET",
                    data:{
                        "id":outer.root.settings.xuehao,
                        "time1":time1,
                        "time2":time2,
                        "didian":didian,
                    },
                    success:function(resp){
                        if(resp.result === "success"){
                            outer.$error_message.html("提交成功!");
                        }else{
                            outer.$error_message.html("提交失败");
                        }
                    },
                });
            }
        });
    }
    hide(){
        this.$normal_lixiao.hide();
        this.$error_message.empty();
        this.$lixiao_time1.val("");
        this.$lixiao_time2.val("");
        this.$lixiao_didian.val("");
    }
    show(){
        this.$normal_lixiao.show();
        this.$lixiao_xuehao.val(this.root.settings.xuehao);
        let outer = this;
        $.ajax({
            url:"https://epidemic.dylolorz.cn/getinfo/getname",
            type:"GET",
            data:{
                username: outer.root.settings.xuehao,
            },
            success:function(resp){
                if(resp.result === "success"){
                    outer.$lixiao_name.val(resp.username);
                }
            },
        });
    }
}
class Normal_weihu{
    constructor(root){
        this.root = root;
        this.$normal_weihu = $(`
      	<div class="web_app_normal_weihu">
            <div class="web_app_normal_weihu_context">
                    <div class="web_app_normal_weihu_title">
                        疫苗接种维护
                    </div>
                    <div class="web_app_normal_weihu_name">
                        <div class="web_app_normal_weihu_item">
                            <input type="text" placeholder="姓名" readonly>
                        </div>
                    </div>
                    <div class="web_app_normal_weihu_id">
                        <div class="web_app_normal_weihu_item">
                            <input type="text" placeholder="学号" readonly>
                        </div>
                    </div>

                     

                    <div class="web_app_normal_weihu_kind">
                        <div class="web_app_normal_weihu_item">
                            <input type="text" placeholder="种类:1(科兴) 2(北京生物)">
                        </div>
                    </div>
                    
                    <div class="web_app_normal_weihu_time">
                        <div class="web_app_normal_weihu_item">
                            <input type="text" placeholder="接种时间">
                        </div>
                    </div>

                    <div class="web_app_normal_weihu_num">
                        <div class="web_app_normal_weihu_item">
                            <input type="text" placeholder="针剂">
                        </div>
                    </div>

                    <div class="web_app_normal_weihu_error_message">
                    
                             </div>
                    <div class="web_app_normal_weihu_submit">
                        <div class="web_app_normal_weihu_item">
                            <button>提交</button>
                        </div>
                    </div>
                    <div class="web_app_normal_weihu_return">
                        <div class="web_app_normal_weihu_item">
                            <button>返回</button>
                        </div>
                    </div>
                    </div>
            </div>
 
        `);
        this.root.$web_app.append(this.$normal_weihu);
        this.$weihu_name = this.$normal_weihu.find(".web_app_normal_weihu_name input");
        this.$weihu_kind = this.$normal_weihu.find(".web_app_normal_weihu_kind input");
        this.$weihu_time = this.$normal_weihu.find(".web_app_normal_weihu_time input");
        this.$weihu_num = this.$normal_weihu.find(".web_app_normal_weihu_num input");
        this.$weihu_submit = this.$normal_weihu.find(".web_app_normal_weihu_submit button");
        this.$weihu_xuehao = this.$normal_weihu.find(".web_app_normal_weihu_id input");
        this.$weihu_return = this.$normal_weihu.find(".web_app_normal_weihu_return button");
        this.$error_message = this.$normal_weihu.find(".web_app_normal_weihu_error_message");
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
        this.$weihu_submit.click(function(){
            let kind = outer.$weihu_kind.val();
            let time = outer.$weihu_time.val();
            let num = outer.$weihu_num.val();
            if(kind === "" || time=== "" || num===""){
                outer.$error_message.html("信息未填写完整");
            }else{
                $.ajax({
                    url:"https://epidemic.dylolorz.cn/normal/weihu/",
                    type:"GET",
                    data:{
                        "id":outer.root.settings.xuehao,
                        "kind":kind,
                        "time":time,
                        "num":num,
                    },
                    success:function(resp){
                        if(resp.result === "successful"){
                            resp.result = "success";
                        }
                        if(resp.result === "success"){
                            outer.$error_message.html("提交成功!");
                        }else{
                            outer.$error_message.html("提交失败");
                        }
                    },
                });
            }
        });
    }
    hide(){
        this.$normal_weihu.hide();
        this.$error_message.empty();
        this.$weihu_time.val("");
        this.$weihu_kind.val("");
        this.$weihu_num.val("");
    }
    show(){
        this.$normal_weihu.show();
        this.$weihu_xuehao.val(this.root.settings.xuehao);
        let outer = this;
        $.ajax({
            url:"https://epidemic.dylolorz.cn/getinfo/getname",
            type:"GET",
            data:{
                username: outer.root.settings.xuehao,
            },
            success:function(resp){
                if(resp.result === "success"){
                    outer.$weihu_name.val(resp.username);
                }
            },
        });
    }
}
class Settings{
    constructor(root){
        this.root = root;
        this.character = "";
        this.xuehao="000";
        this.$settings = $(`
            <div class="web_app_settings">
                <div class="web_app_settings_login">
                    <div class="web_app_settings_login_title">
                        登录
                    </div>
                    <div class="web_app_settings_login_username">
                        <div class="web_app_settings_login_item">
                            <input type="text" placeholder="用户名">
                        </div>
                    </div>
                    <div class="web_app_settings_login_password">
                        <div class="web_app_settings_login_item">
                            <input type="password" placeholder="密码">
                        </div>
                    </div>
                    <div class="web_app_settings_login_submit">
                        <div class="web_app_settings_login_item">
                            <button>登录</button>
                        </div>
                    </div>
                    <div class="web_app_settings_error_message">
                    </div>
                </div>
            </div>
        `);
        this.root.$web_app.append(this.$settings);
        this.$login = this.$settings.find(".web_app_settings_login");
        this.$login_username = this.$login.find(".web_app_settings_login_username input");
        this.$login_password = this.$login.find(".web_app_settings_login_password input");
        this.$login_submit = this.$login.find(".web_app_settings_login_submit button");
        this.$login_error_message = this.$login.find(".web_app_settings_error_message");
        this.start();
    }
    start(){
        this.add_listening_events();
    }
    add_listening_events(){
        let outer = this;
        this.$login_submit.click(function(){
            outer.login();
        });
    }
    login(){
        let outer = this;
        let username = this.$login_username.val();
        let password = this.$login_password.val();
        this.$login_error_message.empty();
        $.ajax({
            url: "https://epidemic.dylolorz.cn/settings/login",
            type: "GET",
            data: {
                username: username,
                password: password,
                
            },
            success:function(resp){
                if(resp.result === "success"){
                    outer.character = resp.character;
                    outer.xuehao = username;
                    outer.root.menu.show();
                    outer.hide();
                }else{
                    outer.$login_error_message.html(resp.result);
                }
            }
        });
    }
    hide(){
        this.$settings.hide();
    }
}
class WebApp {
    constructor(id){
        this.id = id;
        this.$web_app = $('#' + id);
        this.settings = new Settings(this);
        this.menu = new Menu(this);
        
        this.normal_daka = new Normal_daka(this);
        this.normal_lixiao = new Normal_lixiao(this);
        this.normal_weihu = new Normal_weihu(this);

        this.manager_daka = new Manager_daka(this);
        this.manager_lixiao = new Manager_lixiao(this);
        this.manager_weihu = new Manager_weihu(this);
        this.manager_geli = new Manager_geli(this);
    }

}
