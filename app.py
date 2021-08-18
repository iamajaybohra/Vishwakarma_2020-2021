from flask import Flask , request
from flask_cors import CORS
from flaskext.mysql import MySQL

import pickle
import numpy as np
import json

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

model = pickle.load(open('VMode.pkl' , 'rb'))

mysql = MySQL()
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = 'Kunal@1999'
app.config['MYSQL_DATABASE_DB'] = 'CBASE'
mysql.init_app(app)


@app.route('/', methods = ['POST'])
def index():
    data = request.get_json()
    features = [int(x) for x in data]
    fin = [np.array(features)]

    prediction = model.predict_proba(fin)
    output='{0:.{1}f}'.format(prediction[0][1], 2)

    #print(output)
    return '{}'.format(output)

@app.route('/insert' , methods = ['POST'])
def insert():
    data = request.get_json()
    #x = data[5] + data[6]
    data.extend([0] * 3)
    # data.append(0)
    # data.append(0)

    data = tuple(data)
    print(data)
    connection = mysql.connect()
    cursor = connection.cursor()
    # cursor.execute("SELECT * FROM USERS")
    cursor.execute("INSERT INTO USERS VALUES(%s , %s , %s , %s , %s , %s , %s , %s , %s , %s)", data)
    res = cursor.fetchone()
    connection.commit()
    print(res)
    cursor.close()
    return '{}'.format(res)

@app.route('/getV' , methods = ['GET' , 'POST'])
def getV():
    connection = mysql.connect()
    cursor = connection.cursor()

    cursor.execute("SELECT NAME,EMAIL,SP,CP FROM USERS WHERE VAC = 0")
    res = list(cursor.fetchall())
    res = [list(ele) for ele in res]

    l1 = []
    l2 = []
    l3 = []
    for ele in res :
        # print(ele[2])
        if ele[3] > 0.66 :
            l1.append(ele)
        elif ele[3] > 0.33 :
            l2.append(ele)
        else :
            l3.append(ele)
    
    # print(l1)
    l1.sort(key = lambda x : x[2])
    l2.sort(key = lambda x : x[2])
    l3.sort(key = lambda x : x[2])

    le1 = len(l1) 
    le2 = len(l2)
    le3 = len(l3)

    result = "" 
    
    i = 0
    while i < le1 :
        if i < le1 // 2 :
            result += str(l1[i][1]) + "/" + str(l1[i][0]) +  "/" + str(2) + ","
        else :
            result += str(l1[i][1]) +  "/" +  str(l1[i][0]) +  "/" +  str(1) + ","
        i += 1
    i = 0
    while i < le2 :
        if i < le2 // 2 :
            result += str(l2[i][1]) +  "/" +  str(l2[i][0]) +  "/" +  str(4) + ","
        else :
            result += str(l2[i][1]) +  "/" +  str(l2[i][0]) +  "/" +  str(3) + ","
        i += 1
    i = 0
    while i < le3 :
        if i < le3 // 2 :
            result += str(l3[i][1]) +  "/" +  str(l3[i][0]) +  "/" +  str(5) + ","
        else :
            result += str(l3[i][1]) +  "/" +  str(l3[i][0]) +  "/" +  str(6) + ","
        i += 1

    # json.dump(result)
    return '{}'.format(result)

if __name__ == '__main__':
    app.run(debug = True)