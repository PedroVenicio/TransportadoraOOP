from flask import render_template, request
from models.adimin import Adimin
from database.db import db

def adimin_controller():
        if request.method == 'POST':
            try:
                data = request.get_json()
                print(data)
                adimin = Adimin(data['nome'], data['login'], data['senha'])
                db.session.add(adimin)
                db.session.commit()
                return 'Adimin cadastrada com sucesso', 200
            except Exception as e:
                return 'O Adimin não foi cadastrado Error: {}'.format(str(e)), 405
            
        elif request.method == 'GET':
            try:
                data = Adimin.query.all()
                teste = {'admins': [adimin.to_dict() for adimin in data]}
                return teste

            except Exception as e:
                return 'Não foi possível buscar adimins. Error: {}'.format(str(e)), 405

        elif request.method == 'PUT':
            try:
                data = request.get_json()
                put_adimin_id = data['codigo']
                put_adimin = Adimin.query.get(put_adimin_id)
                if put_adimin is None:
                    return {'error': 'adimin não encontrado'}, 404
                put_adimin.nome = data.get('nome', put_adimin.nome)
                put_adimin.login = data.get('login', put_adimin.login)
                put_adimin.senha = data.get('senha', put_adimin.senha)
                db.session.commit()
                return 'adimin atualizado com sucesso', 200
            except Exception as e:
                return {'error': 'Erro ao atualizar adimin. Erro{}'.format(e)}, 400
        
        elif request.method == 'DELETE':
            try:
                data = request.get_json()
                delete_adimin_id = data['codigo']
                delete_adimin = Adimin.query.get(delete_adimin_id)
                if delete_adimin is None:
                    return {'error': 'adimin não encontrado'}, 404
                db.session.delete(delete_adimin)
                db.session.commit()
                return 'adimin deletado com sucesso', 200
            except Exception as e:
                return {'error': 'Erro ao atualizar adimin. Erro{}'.format(e)}, 400
                
            