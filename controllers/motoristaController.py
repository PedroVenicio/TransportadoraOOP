from flask import render_template, request
from models.motorista import Motorista
from database.db import db

def motorista_controller():
        if request.method == 'POST':
            try:
                data = request.get_json()
                print(data)
                user = motorista(data['nome'], data['email'], data['cargo_id'])
                db.session.add(user)
                db.session.commit()
                return 'motorista cadastrado com sucesso', 200
            except Exception as e:
                return 'O motorista não foi cadastrado Error: {}'.format(str(e)), 405
            
        elif request.method == 'GET':
            try:
                data = motorista.query.all()
                return render_template('motorista.html', data={'motorista': [motorista.to_dict() for motorista in data]})

            except Exception as e:
                return 'Não foi possível buscar motoristas. Error: {}'.format(str(e)), 405

        elif request.method == 'PUT':
            try:
                data = request.get_json()
                put_motorista_id = data['codigo']
                put_motorista = motorista.query.get(put_motorista_id)
                if put_motorista is None:
                    return {'error': 'motorista não encontrado'}, 404
                put_motorista.tipo = data.get('tipo', put_motorista.tipo)
                put_motorista.valor = data.get('valor', put_motorista.valor)
                print(put_motorista.tipo, put_motorista.valor)
                db.session.commit()
                return 'motorista atualizado com sucesso', 200
            except Exception as e:
                return {'error': 'Erro ao atualizar motorista. Erro{}'.format(e)}, 400
        
        elif request.method == 'DELETE':
            try:
                data = request.get_json()
                delete_motorista_id = data['id']
                delete_motorista = motorista.query.get(delete_motorista_id)
                if delete_motorista is None:
                    return {'error': 'motorista não encontrado'}, 404
                db.session.delete(delete_motorista)
                db.session.commit()
                return 'motorista deletado com sucesso', 200
            except Exception as e:
                return {'error': 'Erro ao atualizar motorista. Erro{}'.format(e)}, 400
                
            