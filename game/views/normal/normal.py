from django.http import JsonResponse
import pymysql

def daka(request):
    data = request.GET
    username = data.get('id')
    tiwen = data.get('tiwen')
    didian = data.get('didian')
    zaixiao = data.get('zaixiao')
    print(username,tiwen,didian,zaixiao)
    flag = 0
    if zaixiao == "yes":
        flag = 1
    db = pymysql.connect(host='localhost',user='root',password='root',port=443,db='db1')
    sql = f'call insert_health("{username}","{didian}",{tiwen},{flag})'
    #获取下标
    cursor = db.cursor()
    cursor.execute(sql)
                #查询
    #result = cursor.fetchall()
    #print(result)
    db.commit()
    db.close()

    return JsonResponse({
        'result': "success",
    })
