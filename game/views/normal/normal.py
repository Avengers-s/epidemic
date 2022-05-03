from django.http import JsonResponse
import pymysql

def daka(request):
    data = request.GET
    username = data.get('id')
    tiwen = data.get('tiwen')
    didian = data.get('didian')
    zaixiao = data.get('zaixiao')
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

def lixiao(request):
    data = request.GET
    username = data.get('id')
    time1 = data.get('time1')
    time2 = data.get('time2')
    didian = data.get('didian')
    db = pymysql.connect(host='localhost',user='root',password='root',port=443,db='db1')
    sql = f'call insert_outrequire("{username}","{time1}","{time2}","{didian}")'
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

def weihu(request):
    data = request.GET
    username = data.get('id')
    kind = data.get('kind')
    time = data.get('time')
    num = data.get('num')
    db = pymysql.connect(host='localhost',user='root',password='root',port=443,db='db1')
    sql = f'call update_vaccinate("{username}",{num},"{time}",{kind})'
    #获取下标
    cursor = db.cursor()
    cursor.execute(sql)
    #查询
    result = cursor.fetchall()
    #print(result)
    db.commit()
    db.close();

    return JsonResponse({
        'result': result[0][0],
    })

