from django.http import JsonResponse
import pymysql

def signin(request):
    data = request.GET
    username = data.get('username')
    password = data.get('password')
    character = ""
    db = pymysql.connect(host='localhost',user='root',password='root',port=443,db='db1')
    sql = "select * from admin"
    #获取下标
    cursor = db.cursor()
    cursor.execute(sql)
                #查询
    result = cursor.fetchall()
    db.commit()
    print(f'查询成功数据为:{result}',type(result))
    db.close()
    if username == "111":
        character = 'normal'
    else:
        character = 'manager'
    return JsonResponse({
        'result': "success",
        "character": character,
    })
