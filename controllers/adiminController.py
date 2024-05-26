from flask import render_template, request
from models.adimin import Adimin
from database.db import db

def adimin_controller():
        if request.method == 'POST':
            try:
                data = request.get_json()
                print(data)
                Adimin = Adimin(data['nome'], data['login'], data['senha'])
                db.session.add(Adimin)
                db.session.commit()
                return 'Adimin cadastrada com sucesso', 200
            except Exception as e:
                return 'O Adimin não foi cadastrado Error: {}'.format(str(e)), 405
            
        elif request.method == 'GET':
            try:
                data = Adimin.query.all()
                return render_template('adimin.html', data={'adimin': [adimin.to_dict() for adimin in data]})

            except Exception as e:
                return 'Não foi possível buscar adimins. Error: {}'.format(str(e)), 405

        elif request.method == 'PUT':
            try:
                data = request.get_json()
                put_adimin_id = data['codigo']
                put_adimin = Adimin.query.get(put_adimin_id)
                if put_adimin is None:
                    return {'error': 'adimin não encontrado'}, 404
                put_adimin.tipo = data.get('tipo', put_adimin.tipo)
                put_adimin.valor = data.get('valor', put_adimin.valor)
                print(put_adimin.tipo, put_adimin.valor)
                db.session.commit()
                return 'adimin atualizado com sucesso', 200
            except Exception as e:
                return {'error': 'Erro ao atualizar adimin. Erro{}'.format(e)}, 400
        
        elif request.method == 'DELETE':
            try:
                data = request.get_json()
                delete_adimin_id = data['id']
                delete_adimin = Adimin.query.get(delete_adimin_id)
                if delete_adimin is None:
                    return {'error': 'adimin não encontrado'}, 404
                db.session.delete(delete_adimin)
                db.session.commit()
                return 'adimin deletado com sucesso', 200
            except Exception as e:
                return {'error': 'Erro ao atualizar adimin. Erro{}'.format(e)}, 400
                
            