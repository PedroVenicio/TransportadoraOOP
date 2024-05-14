from flask import render_template, request
from models.carga import Carga
from database.db import db

def carga_controller():
        if request.method == 'POST':
            try:
                data = request.get_json()
                print(data)
                user = Carga(data['nome'], data['email'], data['cargo_id'])
                db.session.add(user)
                db.session.commit()
                return 'Carga cadastrada com sucesso', 200
            except Exception as e:
                return 'O Carga não foi cadastrada Error: {}'.format(str(e)), 405
            
        elif request.method == 'GET':
            try:
                data = Carga.query.all()
                return render_template('carga.html', data={'carga': [carga.to_dict() for carga in data]})

            except Exception as e:
                return 'Não foi possível buscar cargas. Error: {}'.format(str(e)), 405

        elif request.method == 'PUT':
            try:
                data = request.get_json()
                put_carga_id = data['codigo']
                put_carga = carga.query.get(put_carga_id)
                if put_carga is None:
                    return {'error': 'carga não encontrado'}, 404
                put_carga.tipo = data.get('tipo', put_carga.tipo)
                put_carga.valor = data.get('valor', put_carga.valor)
                print(put_carga.tipo, put_carga.valor)
                db.session.commit()
                return 'carga atualizado com sucesso', 200
            except Exception as e:
                return {'error': 'Erro ao atualizar carga. Erro{}'.format(e)}, 400
        
        elif request.method == 'DELETE':
            try:
                data = request.get_json()
                delete_carga_id = data['id']
                delete_carga = carga.query.get(delete_carga_id)
                if delete_carga is None:
                    return {'error': 'carga não encontrado'}, 404
                db.session.delete(delete_carga)
                db.session.commit()
                return 'carga deletado com sucesso', 200
            except Exception as e:
                return {'error': 'Erro ao atualizar carga. Erro{}'.format(e)}, 400
                
            