from django.http import JsonResponse
import pymysql

def signin(request):
    data = request.GET
    username = data.get('username')
    password = data.get('password')
    character = ""
    db = pymysql.connect(host='localhost',user='root',password='root',port=443,db='db1')
    sql = f'select login("{username}","{password}")'
    #获取下标
    cursor = db.cursor()
    cursor.execute(sql)
                #查询
    result = cursor.fetchall()
    db.commit()
    db.close()
    if result[0][0] == 1:
        character = 'normal'
    elif result[0][0] == 2:
        character = 'manager'
    else:
        return JsonResponse({
            'result': "用户名或密码错误",
        })

    return JsonResponse({
        'result': "success",
        'character': character,
    })
